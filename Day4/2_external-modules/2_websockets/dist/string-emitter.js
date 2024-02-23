"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sEmitter = void 0;
const events_1 = require("events");
// Define the singleton instance type as StringEmitter | null for strict type checking
let instance = null;
class StringEmitter extends events_1.EventEmitter {
    constructor() {
        super();
        if (!instance) {
            instance = this;
            this.run();
        }
        // Ensure the constructor returns the existing instance to maintain singleton behavior
        return instance;
    }
    run() {
        const strArr = ["NodeJS", "ReactJS", "Angular", "ExtJS", "jQuery"];
        setInterval(() => {
            const str = strArr[Math.floor(Math.random() * strArr.length)];
            this.emit("data", str);
        }, 2000);
    }
}
// Export a single instance of StringEmitter
exports.sEmitter = new StringEmitter();
//# sourceMappingURL=string-emitter.js.map