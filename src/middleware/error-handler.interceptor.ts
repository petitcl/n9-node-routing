import { ExpressErrorMiddlewareInterface, Middleware } from '@flyacts/routing-controllers';
import { Request, Response } from 'express';

@Middleware({ type: "after" })
export class ErrorHandler implements ExpressErrorMiddlewareInterface {

	public error(error: any, request: Request, response: Response): void {
		const status = error.status || error.httpCode || 500;
		let code = 'unspecified-error';
		if (error.name && error.name !== 'Error') {
			code = error.name;
		} else if (error.message) {
			code = error.message;
		}
		const context = error.context || error.errors || {};
		if (status < 500) {
			(global.log || console).warn(error, JSON.stringify(error));
		} else {
			(global.log || console).error(error);
		}

		response.status(status);
		response.json({
			code,
			status,
			context
		});
	}
}
