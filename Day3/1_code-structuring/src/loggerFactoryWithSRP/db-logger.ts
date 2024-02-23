import { ILogger } from "./i-logger";

export class DBLogger implements ILogger {
    log(message: string): void {
        console.log(`${message}, logged in Database`);
    }
}