"use strict";
// class Logger {
//     log(message: string) {
//         console.log(`${message}, logged using Logger Class Log Method.`);
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
// export const logger = new Logger();
class Logger {
    constructor() {
    }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(`${message}, logged using Logger Class Log Method.`);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map