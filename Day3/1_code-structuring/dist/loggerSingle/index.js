"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = void 0;
const logger_1 = require("./logger");
let logger = null;
function getLogger() {
    if (!logger) {
        logger = new logger_1.Logger();
    }
    return logger;
}
exports.getLogger = getLogger;
//# sourceMappingURL=index.js.map