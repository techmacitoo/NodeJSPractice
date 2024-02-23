"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBLogger = void 0;
class DBLogger {
    constructor() { }
    static create() {
        return new DBLogger();
    }
    log(message) {
        console.log(`${message}, logged in Database`);
    }
}
exports.DBLogger = DBLogger;
// Breaks SRP
// Combining the creation logic directly inside the class simplifies the structure, it does blend the responsibilities of the class.
//# sourceMappingURL=db-logger.js.map