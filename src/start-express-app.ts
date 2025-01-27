import { Action, RoutingControllersOptions, useContainer, useExpressServer } from '@flyacts/routing-controllers';
import { N9Error } from '@neo9/n9-node-utils';
import { ValidatorOptions } from 'class-validator';
import * as express from 'express';
import { Request, Response } from 'express';
import stringify from 'fast-safe-stringify';
import * as helmet from 'helmet';
import { createServer } from 'http';
import * as morgan from 'morgan';
import { FormatFn, TokenIndexer } from 'morgan';
import { Container } from 'typedi';
import { ErrorHandler } from './middleware/error-handler.interceptor';
import { SessionLoaderInterceptor } from './middleware/session-loader.interceptor';
import { N9NodeRouting } from './models/routing.models';
import { setRequestContext } from './requestid';
import ErrnoException = NodeJS.ErrnoException;

export default async function(options: N9NodeRouting.Options): Promise<N9NodeRouting.ReturnObject> {
	// Setup @flyacts/routing-controllers to use typedi container.
	useContainer(Container);

	// Defaults options for routing-controller
	const defaultRoutingControllerOptions: RoutingControllersOptions = {
		defaults: {
			// with this option, null will return 404 by default
			nullResultCode: 404,
			// with this option, void or Promise<void> will return 204 by default
			undefinedResultCode: 204,
		},
		defaultErrorHandler: false,
		controllers: [options.path + '/**/*.controller.*s'],
	};

	// Configure morgan
	morgan.token('total-response-time', (req: Request, res: Response, digits: number = 3): string => {
		if (!(req as any)._startAt) {
			// missing request start time
			return;
		}

		// // calculate diff
		const reqStartTime = (req as any)._startAt;
		const resEndTime = process.hrtime();
		const ms = (resEndTime[0] - reqStartTime[0]) * 1e3 + (resEndTime[1] - reqStartTime[1]) * 1e-6;

		// return truncated value
		return ms.toFixed(digits);
	});

	// Default options
	options.http = options.http || {};
	options.http.port = options.http.port || process.env.PORT || 5000;

	options.http.logLevel = (typeof options.http.logLevel !== 'undefined' ? options.http.logLevel : (tokens: TokenIndexer, req: Request, res: Response) => {
		const formatLogInJSON: boolean = global.n9NodeRoutingData.formatLogInJSON;

		if (formatLogInJSON) {
			return JSON.stringify({
				'method': tokens.method(req, res),
				'request-id': options.enableRequestId ? `(${req.headers['x-request-id']})` : '',
				'path': tokens.url(req, res),
				'status': tokens.status(req, res),
				'durationMs': Number.parseFloat(tokens['response-time'](req, res)),
				'totalDurationMs': Number.parseFloat(tokens['total-response-time'](req, res)),
				'content-length': tokens.res(req, res, 'content-length'),
			});
		} else {
			return [
				tokens.method(req, res),
				tokens.url(req, res),
				tokens.status(req, res),
				tokens['response-time'](req, res), 'ms - ',
				tokens.res(req, res, 'content-length'),
			].join(' ');
		}
	});
	options.http.routingController = Object.assign({}, defaultRoutingControllerOptions, options.http.routingController);

	options.http.routingController.interceptors = [SessionLoaderInterceptor, ErrorHandler];
	options.http.routingController.authorizationChecker = async (action: Action) => {
		if (!action.request.headers.session) {
			throw new N9Error('session-required', 401);
		}
		try {
			action.request.session = JSON.parse(action.request.headers.session);
		} catch (err) {
			throw new N9Error('session-header-is-invalid', 401);
		}
		if (!action.request.session.userId) {
			throw new N9Error('session-header-has-no-userId', 401);
		}
		return true;
	};
	options.http.routingController.validation = {
		whitelist: true,
		forbidNonWhitelisted: true,
	} as ValidatorOptions;

	// options.log.info(`-- start-express-app.ts options.http --`, JSON.stringify(options.http, null, 2));

	// Listeners
	const analyzeError = (error: ErrnoException) => {
		/* istanbul ignore if */
		if (error.syscall !== 'listen') {
			return error;
		}
		// handle specific listen errors with friendly messages
		switch (error.code) {
			case 'EACCES':
				return new Error(`Port ${options.http.port} requires elevated privileges`);
			case 'EADDRINUSE':
				return new Error(`Port ${options.http.port} is already in use`);
				/* istanbul ignore next */
			default:
				return error;
		}
	};
	const onListening = () => {
		options.log.info('Listening on port ' + options.http.port);
	};

	// Create HTTP server
	let expressApp = express();

	// Middleware
	expressApp.use(setRequestContext);
	expressApp.use(helmet());
	// Logger middleware
	if (options.http.logLevel) {
		expressApp.use(morgan(options.http.logLevel as FormatFn, {
			stream: {
				write: (message) => {
					if (global.n9NodeRoutingData.formatLogInJSON) {
						try {
							const morganDetails = JSON.parse(message);
							options.log.info('api call ' + morganDetails.path, morganDetails);
						} catch (e) {
							message = message && message.replace('\n', '');
							options.log.info(message, { errString: stringify(e) });
						}
					} else {
						message = message && message.replace('\n', '');
						options.log.info(message);
					}
				},
			},
		}));
	}

	const server = createServer(expressApp);

	if (options.http.beforeRoutingControllerLaunchHook) {
		await options.http.beforeRoutingControllerLaunchHook(expressApp, options.log, options);
	}

	expressApp = useExpressServer(expressApp, options.http.routingController);

	if (options.http.afterRoutingControllerLaunchHook) {
		await options.http.afterRoutingControllerLaunchHook(expressApp, options.log, options);
	}

	// Listen method
	const listen = async () => {
		return new Promise((resolve, reject) => {
			server.listen(options.http.port);
			server.on('error', (error: ErrnoException) => {
				reject(analyzeError(error));
			});
			server.on('listening', () => {
				onListening();
				resolve();
			});
		});
	};

	// Make the server listen
	if (!options.http.preventListen) await listen();

	return {
		app: expressApp,
		server,
	};
}
