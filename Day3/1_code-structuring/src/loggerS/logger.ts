// class Logger {
//     log(message: string) {
//         console.log(`${message}, logged using Logger Class Log Method.`);
//     }
// }

// export const logger = new Logger();

export class Logger {
    private static instance: Logger;
    
    private constructor() {
    }

    public static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: string) {
        console.log(`${message}, logged using Logger Class Log Method.`);
    }
}