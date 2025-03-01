# Version [1.16.0](https://github.com/neo9/n9-node-routing/compare/1.15.1...1.16.0) (2019-08-29)


### logs

* Remove string duration logs and keep only float once ([c9f342c](https://github.com/neo9/n9-node-routing/commit/c9f342c)) (Benjamin Daniel)



## Version [1.15.1](https://github.com/neo9/n9-node-routing/compare/1.15.0...1.15.1) (2019-08-23)


### httpClient

* Do not stringify error before throwing error ([96dbc94](https://github.com/neo9/n9-node-routing/commit/96dbc94)) (Benjamin Daniel)

### release

* V 1.15.1 ([aaaaa90](https://github.com/neo9/n9-node-routing/commit/aaaaa90)) (Benjamin Daniel)



# Version [1.15.0](https://github.com/neo9/n9-node-routing/compare/1.14.0...1.15.0) (2019-08-21)


### errors

* Stringify default error in logs and use safe stringify ([d68ca5c](https://github.com/neo9/n9-node-routing/commit/d68ca5c)) (Benjamin Daniel)

### httpClient

* Add head http method ([6fb27c5](https://github.com/neo9/n9-node-routing/commit/6fb27c5)) (Benjamin Daniel)
* Add requestStream function ([9aa1447](https://github.com/neo9/n9-node-routing/commit/9aa1447)) (Benjamin Daniel)

### logs

* Add total response time ([101d192](https://github.com/neo9/n9-node-routing/commit/101d192)) (Clement Petit)
* Fix enableLogFormatJSON default behaviour and add tests ([2311958](https://github.com/neo9/n9-node-routing/commit/2311958)) (Clement Petit)

### release

* V 1.15.0 ([f5704a6](https://github.com/neo9/n9-node-routing/commit/f5704a6)) (Benjamin Daniel)

### tests

* Improve tests readability and add one for 403 errors ([4e2276b](https://github.com/neo9/n9-node-routing/commit/4e2276b)) (Benjamin Daniel)



# Version [1.14.0](https://github.com/neo9/n9-node-routing/compare/1.13.1...1.14.0) (2019-07-09)


### release

* V 1.14.0 ([a88704a](https://github.com/neo9/n9-node-routing/commit/a88704a)) (Benjamin Daniel)

### tests

* Add test to validation with schema in pseudo parallel ([c7b48de](https://github.com/neo9/n9-node-routing/commit/c7b48de)) (Benjamin Daniel)
* Improve tests and add one with services ([efcf88e](https://github.com/neo9/n9-node-routing/commit/efcf88e)) (Benjamin Daniel)

### yarn

* Upgrade dependencies and use fork of routing-controller ([78d0344](https://github.com/neo9/n9-node-routing/commit/78d0344)) (Benjamin Daniel)



## Version [1.13.1](https://github.com/neo9/n9-node-routing/compare/1.13.0...1.13.1) (2019-06-24)


### release

* V 1.13.1 ([8cb362f](https://github.com/neo9/n9-node-routing/commit/8cb362f)) (Benjamin Daniel)

### shhutdown

* Fix shutdown and increase default timeout ([c6de0cc](https://github.com/neo9/n9-node-routing/commit/c6de0cc)) (Benjamin Daniel)



# Version [1.13.0](https://github.com/neo9/n9-node-routing/compare/1.12.3...1.13.0) (2019-04-02)


### hooks

* Add shutdown and ping hooks ([7678d0d](https://github.com/neo9/n9-node-routing/commit/7678d0d)) (Benjamin Daniel)

### release

* V 1.13.0 ([e437765](https://github.com/neo9/n9-node-routing/commit/e437765)) (Benjamin Daniel)



## Version [1.12.3](https://github.com/neo9/n9-node-routing/compare/1.12.2...1.12.3) (2019-03-14)


### release

* V 1.12.3 ([c0bdb6d](https://github.com/neo9/n9-node-routing/commit/c0bdb6d)) (Benjamin Daniel)

### yarn

* Upgrade n9-node-utils to 1.8.1 ([73f2c0f](https://github.com/neo9/n9-node-routing/commit/73f2c0f)) (Benjamin Daniel)



## Version [1.12.2](https://github.com/neo9/n9-node-routing/compare/1.12.1...1.12.2) (2019-03-14)


### errors

* Fix errors toJSON function return type ([1193bf4](https://github.com/neo9/n9-node-routing/commit/1193bf4)) (Benjamin Daniel)

### release

* V 1.12.2 ([f901321](https://github.com/neo9/n9-node-routing/commit/f901321)) (Benjamin Daniel)



## Version [1.12.1](https://github.com/neo9/n9-node-routing/compare/1.12.0...1.12.1) (2019-03-14)


### errors

* Add errors toJSON function to keep message property ([20338d2](https://github.com/neo9/n9-node-routing/commit/20338d2)) (Benjamin Daniel)

### release

* V 1.12.1 ([c4f813e](https://github.com/neo9/n9-node-routing/commit/c4f813e)) (Benjamin Daniel)



# Version [1.12.0](https://github.com/neo9/n9-node-routing/compare/1.11.1...1.12.0) (2019-03-14)


### errors

* Upgrade @neo9/n9-node-utils ([268fe00](https://github.com/neo9/n9-node-routing/commit/268fe00)) (Benjamin Daniel)

### ping

* Add log is mongo-db is not reachable ([e025d27](https://github.com/neo9/n9-node-routing/commit/e025d27)) (Benjamin Daniel)

### release

* V 1.12.0 ([c60e24d](https://github.com/neo9/n9-node-routing/commit/c60e24d)) (Benjamin Daniel)

### routes

* Add version route and call next function ([ac0300f](https://github.com/neo9/n9-node-routing/commit/ac0300f)) (Benjamin Daniel)



## Version [1.11.1](https://github.com/neo9/n9-node-routing/compare/1.11.0...1.11.1) (2019-02-22)


### release

* V 1.11.1 ([9924869](https://github.com/neo9/n9-node-routing/commit/9924869)) (Benjamin Daniel)

### shutdown

* Add some time before exit, new option waitDurationBeforeStop ([3939c58](https://github.com/neo9/n9-node-routing/commit/3939c58)) (Benjamin Daniel)



# Version [1.11.0](https://github.com/neo9/n9-node-routing/compare/1.10.2...1.11.0) (2019-02-22)


### fix

* Update morgan version due to security concerns ([e970022](https://github.com/neo9/n9-node-routing/commit/e970022)) (Benjamin Daniel)

### release

* V 1.11.0 ([c86aca8](https://github.com/neo9/n9-node-routing/commit/c86aca8)) (Benjamin Daniel)



## Version [1.10.2](https://github.com/neo9/n9-node-routing/compare/1.10.1...1.10.2) (2018-11-26)


### morgan

* Remove end lines written by morgan ([69d24ae](https://github.com/neo9/n9-node-routing/commit/69d24ae)) (Benjamin Daniel)

### release

* V 1.10.2 ([a6fddc9](https://github.com/neo9/n9-node-routing/commit/a6fddc9)) (Benjamin Daniel)



## Version [1.10.1](https://github.com/neo9/n9-node-routing/compare/1.9.3...1.10.1) (2018-11-23)


### release

* V 1.10.0 ([f24bdad](https://github.com/neo9/n9-node-routing/commit/f24bdad)) (Benjamin Daniel)
* V 1.10.1 ([ee6dd1f](https://github.com/neo9/n9-node-routing/commit/ee6dd1f)) (Benjamin Daniel)



## Version [1.9.3](https://github.com/neo9/n9-node-routing/compare/1.9.2...1.9.3) (2018-11-15)


### release

* V 1.9.3 ([259b6c7](https://github.com/neo9/n9-node-routing/commit/259b6c7)) (Benjamin Daniel)

### shutdown

* Fix graceful shutdown ([853bff8](https://github.com/neo9/n9-node-routing/commit/853bff8)) (Benjamin Daniel)



## Version [1.9.2](https://github.com/neo9/n9-node-routing/compare/1.9.1...1.9.2) (2018-11-15)


### release

* V 1.9.2 ([45957be](https://github.com/neo9/n9-node-routing/commit/45957be)) (Benjamin Daniel)

### shutdown

* Fix graceful shutdown timeout ([3376343](https://github.com/neo9/n9-node-routing/commit/3376343)) (Benjamin Daniel)



## Version [1.9.1](https://github.com/neo9/n9-node-routing/compare/1.8.1...1.9.1) (2018-11-15)


### release

* V 1.9.0 ([442f25f](https://github.com/neo9/n9-node-routing/commit/442f25f)) (Benjamin Daniel)
* V 1.9.1 ([9c4f89c](https://github.com/neo9/n9-node-routing/commit/9c4f89c)) (Benjamin Daniel)

### shutdown

* Add graceful shutdown ([ec24bdf](https://github.com/neo9/n9-node-routing/commit/ec24bdf)) (Benjamin Daniel)
* Add graceful shutdown for nodemon ([f1816d8](https://github.com/neo9/n9-node-routing/commit/f1816d8)) (Benjamin Daniel)



## Version [1.8.1](https://github.com/neo9/n9-node-routing/compare/1.7.1...1.8.1) (2018-11-12)


### release

* V 1.8.0 ([a34696c](https://github.com/neo9/n9-node-routing/commit/a34696c)) (Benjamin Daniel)
* V 1.8.1 ([c69cbf5](https://github.com/neo9/n9-node-routing/commit/c69cbf5)) (Benjamin Daniel)

### yarn

* Fix dependencies class-validator and upgrade for node v10 ([95179fe](https://github.com/neo9/n9-node-routing/commit/95179fe)) (Benjamin Daniel)
* Upgrade class-validator ([b482f52](https://github.com/neo9/n9-node-routing/commit/b482f52)) (Benjamin Daniel)



## Version [1.7.1](https://github.com/neo9/n9-node-routing/compare/1.7.0...1.7.1) (2018-10-24)


### logs

* Fix logs with undefined obj ([59b0c89](https://github.com/neo9/n9-node-routing/commit/59b0c89)) (Benjamin Daniel)

### release

* V 1.7.1 ([9d2e720](https://github.com/neo9/n9-node-routing/commit/9d2e720)) (Benjamin Daniel)



# Version [1.7.0](https://github.com/neo9/n9-node-routing/compare/1.6.6...1.7.0) (2018-09-25)


### ping

* Add check mongodb status on ping ([155af33](https://github.com/neo9/n9-node-routing/commit/155af33)) (Benjamin Daniel)

### release

* V 1.7.0 ([1c8b183](https://github.com/neo9/n9-node-routing/commit/1c8b183)) (Benjamin Daniel)



## Version [1.6.6](https://github.com/neo9/n9-node-routing/compare/1.6.5...1.6.6) (2018-09-21)


### release

* V 1.6.6 ([9a96ebe](https://github.com/neo9/n9-node-routing/commit/9a96ebe)) (Benjamin Daniel)



## Version [1.6.5](https://github.com/neo9/n9-node-routing/compare/1.6.4...1.6.5) (2018-07-13)


### release

* V 1.6.5 ([e96b6d0](https://github.com/neo9/n9-node-routing/commit/e96b6d0)) (Benjamin Daniel)



## Version [1.6.4](https://github.com/neo9/n9-node-routing/compare/1.6.3...1.6.4) (2018-05-31)


### release

* Remove useless tmp file ([f7e1556](https://github.com/neo9/n9-node-routing/commit/f7e1556)) (Benjamin Daniel)
* V 1.6.4 ([aacfbb1](https://github.com/neo9/n9-node-routing/commit/aacfbb1)) (Benjamin Daniel)



## Version [1.6.3](https://github.com/neo9/n9-node-routing/compare/1.6.2...1.6.3) (2018-05-29)


### release

* V 1.6.3 ([33ceed6](https://github.com/neo9/n9-node-routing/commit/33ceed6)) (Benjamin Daniel)

### utils

* Upgrade n9-node-utils ([bf0131f](https://github.com/neo9/n9-node-routing/commit/bf0131f)) (Benjamin Daniel)



## Version [1.6.2](https://github.com/neo9/n9-node-routing/compare/1.6.1...1.6.2) (2018-05-28)


### release

* V 1.6.2 ([128da7f](https://github.com/neo9/n9-node-routing/commit/128da7f)) (Benjamin Daniel)



## Version [1.6.1](https://github.com/neo9/n9-node-routing/compare/1.6.0...1.6.1) (2018-05-24)


### release

* V 1.6.1 ([90cb8a2](https://github.com/neo9/n9-node-routing/commit/90cb8a2)) (Benjamin Daniel)



# Version [1.6.0](https://github.com/neo9/n9-node-routing/compare/1.5.1...1.6.0) (2018-05-24)


### release

* V 1.6.0 ([d125498](https://github.com/neo9/n9-node-routing/commit/d125498)) (Benjamin Daniel)



## Version [1.5.1](https://github.com/neo9/n9-node-routing/compare/1.5.0...1.5.1) (2018-05-23)


### logs

* Fix logs in JSON and update global.log ([22080e2](https://github.com/neo9/n9-node-routing/commit/22080e2)) (Benjamin Daniel)

### release

* V 1.5.1 ([d0c7f60](https://github.com/neo9/n9-node-routing/commit/d0c7f60)) (Benjamin Daniel)



# Version [1.5.0](https://github.com/neo9/n9-node-routing/compare/1.4.0...1.5.0) (2018-05-23)


### logs

* Add logs in JSON in no dev environment ([83544f0](https://github.com/neo9/n9-node-routing/commit/83544f0)) (Benjamin Daniel)

### release

* V 1.5.0 ([4feb5bc](https://github.com/neo9/n9-node-routing/commit/4feb5bc)) (Benjamin Daniel)



# Version [1.4.0](https://github.com/neo9/n9-node-routing/compare/1.3.0...1.4.0) (2018-05-22)


### documentation

* Add jsonUrl config in openapi ([9a262d8](https://github.com/neo9/n9-node-routing/commit/9a262d8)) (Benjamin Daniel)

### release

* V 1.4.0 ([4731604](https://github.com/neo9/n9-node-routing/commit/4731604)) (Benjamin Daniel)



# Version [1.3.0](https://github.com/neo9/n9-node-routing/compare/1.2.0...1.3.0) (2018-05-21)


### versions

* Update to v 1.3.0 ([55fdea2](https://github.com/neo9/n9-node-routing/commit/55fdea2)) (Benjamin Daniel)



# Version [1.2.0](https://github.com/neo9/n9-node-routing/compare/1.1.2...1.2.0) (2018-05-02)


### release

* V 1.2.0 ([a0728df](https://github.com/neo9/n9-node-routing/commit/a0728df)) (Benjamin Daniel)

### yarn

* Upgrade dependencies ([fd88f8b](https://github.com/neo9/n9-node-routing/commit/fd88f8b)) (Benjamin Daniel)



## Version [1.1.2](https://github.com/neo9/n9-node-routing/compare/1.1.1...1.1.2) (2018-04-27)


### documentation

* Add option to disable openapi ([0d98ac4](https://github.com/neo9/n9-node-routing/commit/0d98ac4)) (Benjamin Daniel)

### release

* V 1.1.2 ([2d3a605](https://github.com/neo9/n9-node-routing/commit/2d3a605)) (Benjamin Daniel)



## Version [1.1.1](https://github.com/neo9/n9-node-routing/compare/0.1.1...1.1.1) (2018-04-26)


### release

* V 1.1.1 ([33f8289](https://github.com/neo9/n9-node-routing/commit/33f8289)) (Benjamin Daniel)



## Version [0.1.1](https://github.com/neo9/n9-node-routing/compare/0.1.0...0.1.1) (2018-04-26)


### documentation

* Add openapi and swagger json generation ([55d07da](https://github.com/neo9/n9-node-routing/commit/55d07da)) (Benjamin Daniel)
* Add swagger ui for doc ([690dd7e](https://github.com/neo9/n9-node-routing/commit/690dd7e)) (Benjamin Daniel)

### model

* Add export wrapper model ([58fc0e1](https://github.com/neo9/n9-node-routing/commit/58fc0e1)) (Benjamin Daniel)

### models

* Add export route model ([3bf01d8](https://github.com/neo9/n9-node-routing/commit/3bf01d8)) (Benjamin Daniel)

### name

* Change name to n9-node-routing ([ff787b6](https://github.com/neo9/n9-node-routing/commit/ff787b6)) (Benjamin Daniel)

### release

* V 0.1.1 ([0d5c23f](https://github.com/neo9/n9-node-routing/commit/0d5c23f)) (Benjamin Daniel)



# Version [0.1.0](https://github.com/neo9/n9-node-routing/compare/0.0.8...0.1.0) (2018-04-19)


### conf

* Add log and conf injectors ([4efe481](https://github.com/neo9/n9-node-routing/commit/4efe481)) (Benjamin Daniel)

### doc

* Update README ([67581d9](https://github.com/neo9/n9-node-routing/commit/67581d9)) (Benjamin DANIEL)

### logs

* Add requestId in logs ([58d5df8](https://github.com/neo9/n9-node-routing/commit/58d5df8)) (Benjamin Daniel)

### release

* V 0.1.0 ([6f87753](https://github.com/neo9/n9-node-routing/commit/6f87753)) (Benjamin Daniel)



## Version [0.0.8](https://github.com/neo9/n9-node-routing/compare/0.0.7...0.0.8) (2018-04-13)


### install

* Fix install fail ([08279cd](https://github.com/neo9/n9-node-routing/commit/08279cd)) (Benjamin Daniel)

### release

* V 0.0.8 ([98b62dc](https://github.com/neo9/n9-node-routing/commit/98b62dc)) (Benjamin Daniel)

### versions

* Add push after release ([c2048f9](https://github.com/neo9/n9-node-routing/commit/c2048f9)) (Benjamin Daniel)



## Version [0.0.7](https://github.com/neo9/n9-node-routing/compare/1c1b621...0.0.7) (2018-04-13)


### acl

* Fix acl decorator for controller and add tests ([1c1b621](https://github.com/neo9/n9-node-routing/commit/1c1b621)) (Benjamin Daniel)
* Fix acl decorator for empty routes ([50a85cf](https://github.com/neo9/n9-node-routing/commit/50a85cf)) (Benjamin Daniel)

### options

* Fix options routing-controller merging ([aee7bdf](https://github.com/neo9/n9-node-routing/commit/aee7bdf)) (Benjamin Daniel)

### release

* V 0.0.7 ([30c534c](https://github.com/neo9/n9-node-routing/commit/30c534c)) (Benjamin Daniel)

### version

* Update to v 0.0.6 ([39774db](https://github.com/neo9/n9-node-routing/commit/39774db)) (Benjamin Daniel)

### versions

* Add release command ([f9a2b37](https://github.com/neo9/n9-node-routing/commit/f9a2b37)) (Benjamin Daniel)



