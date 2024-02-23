"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLogger = void 0;
class FileLogger {
    constructor() { }
    static create() {
        return new FileLogger();
    }
    log(message) {
        console.log(`${message}, logged in File`);
    }
}
exports.FileLogger = FileLogger;
//# sourceMappingURL=file-logger.js.map