"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringEmitter = void 0;
const events_1 = require("events");
class StringEmitter extends events_1.EventEmitter {
    constructor() {
        super();
        this.stringArray = ['NodeJS', 'ReactJS', 'AngularJS', 'VueJS', 'EmberJS'];
        this.run();
    }
    run() {
        setInterval(() => {
            const str = this.getString();
            this.emit('stringEmitted', str);
        }, 2000);
    }
    static getInstance() {
        if (!StringEmitter.instance) {
            StringEmitter.instance = new StringEmitter();
        }
        return StringEmitter.instance;
    }
    pushString(cb) {
        setInterval(() => {
            const str = this.getString();
            cb(str);
        }, 2000);
    }
    getString() {
        let randomString = this.stringArray[Math.floor(Math.random() * this.stringArray.length)];
        return randomString;
    }
}
exports.StringEmitter = StringEmitter;
//# sourceMappingURL=string-emitter.js.map