import { DBLogger } from "./db-logger";
import { FileLogger } from "./file-logger";
import { ILogger } from "./i-logger";

export abstract class LoggerCreator {
    abstract createLogger(): ILogger;

    logMessage(message: string) {
        const logger = this.createLogger();
        logger.log(message);
    }
}

export class DBLoggerCreator extends LoggerCreator {
    createLogger(): ILogger {
        return new DBLogger();
    }
}

export class FileLoggerCreator extends LoggerCreator {
    createLogger(): ILogger {
        return new FileLogger();
    }
}