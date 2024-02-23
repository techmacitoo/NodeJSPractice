import { ILogger } from "./i-logger";

export class FileLogger implements ILogger {
    private constructor() { }

    static create(): ILogger {
        return new FileLogger();
    }

    log(message: string): void {
        console.log(`${message}, logged in File`);
    }
}