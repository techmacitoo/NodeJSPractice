import { ILogger } from "./i-logger";

export class FileLogger implements ILogger {
    log(message: string): void {
        console.log(`${message}, logged in File`);
    }
}