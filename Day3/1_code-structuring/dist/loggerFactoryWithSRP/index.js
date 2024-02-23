"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLoggerCreator = exports.DBLoggerCreator = exports.LoggerCreator = void 0;
const db_logger_1 = require("./db-logger");
const file_logger_1 = require("./file-logger");
class LoggerCreator {
    logMessage(message) {
        const logger = this.createLogger();
        logger.log(message);
    }
}
exports.LoggerCreator = LoggerCreator;
class DBLoggerCreator extends LoggerCreator {
    createLogger() {
        return new db_logger_1.DBLogger();
    }
}
exports.DBLoggerCreator = DBLoggerCreator;
class FileLoggerCreator extends LoggerCreator {
    createLogger() {
        return new file_logger_1.FileLogger();
    }
}
exports.FileLoggerCreator = FileLoggerCreator;
//# sourceMappingURL=index.js.map