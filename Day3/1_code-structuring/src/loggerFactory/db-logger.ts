import { ILogger } from "./i-logger";

export class DBLogger implements ILogger {
    private constructor() { }

    static create(): ILogger {
        return new DBLogger();
    }

    log(message: string): void {
        console.log(`${message}, logged in Database`);
    }
}

// Breaks SRP
// Combining the creation logic directly inside the class simplifies the structure, it does blend the responsibilities of the class.