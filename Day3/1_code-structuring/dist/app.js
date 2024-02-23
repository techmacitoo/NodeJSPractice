"use strict";
// console.log("Hello from Node Application..");
Object.defineProperty(exports, "__esModule", { value: true });
const loggerFactoryWithSRP_1 = require("./loggerFactoryWithSRP");
// Import module for side effect (run the global code in the module), without importing any of its exports
// Node way of importing modules
// require('./logger');
// TypeScript way of importing modules
// import './logger';
// Import module for its exports
// const logger1 = require('./logger');
// const logger2 = require('./logger');
// console.log(logger1 === logger2);
// import * as logger1 from './logger';
// import * as logger2 from './logger';
// console.log(logger1 === logger2);
// --------------------------------------------- Module Resolution ---------------------------------------------
// const logger1 = require('./logger');
// import * as logger1 from './logger';
// // import * as logger1 from './logger/my-logger';
// console.log(logger1);
// -----------------
// import { getLogger } from './loggerSingle';
// const l1 = getLogger();
// const l2 = getLogger();
// console.log(l1 === l2);
// l1.log('Hello from Node Application..');
// l2.log('Hello from Node Application..');
// ------------------ Singleton
// import { logger } from './loggerS';
// logger.log('Hello from Node Application..');
// import { Logger } from './loggerS';
// const l1 = Logger.getInstance();
// const l2 = Logger.getInstance();
// console.log(l1 === l2);
// l1.log('Hello from Node Application..');
// l2.log('Hello from Node Application..');
// // ------------------ Factory
// import { DBLogger } from "./loggerFactory/db-logger";
// import { FileLogger } from "./loggerFactory/file-logger";
// const dbLogger = DBLogger.create();
// const fileLogger = FileLogger.create();
// dbLogger.log('Hello from Node Application');
// fileLogger.log('Hello from Node Application');
// const l1 = DBLogger.create();
// const l2 = DBLogger.create();
// console.log(l1 === l2);
// ------------------ Factory with SRP
function clientCode(creator) {
    creator.logMessage('Hello from Node Application');
}
clientCode(new loggerFactoryWithSRP_1.DBLoggerCreator());
clientCode(new loggerFactoryWithSRP_1.FileLoggerCreator());
//# sourceMappingURL=app.js.map