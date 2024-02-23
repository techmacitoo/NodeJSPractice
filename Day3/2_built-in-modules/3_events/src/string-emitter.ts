import { EventEmitter } from 'events';

export class StringEmitter extends EventEmitter {
    private stringArray: string[];
    private static instance: StringEmitter;

    private constructor() {
        super();
        this.stringArray = ['NodeJS', 'ReactJS', 'AngularJS', 'VueJS', 'EmberJS'];
        this.run();
    }

    private run() {
        setInterval(() => {
            const str = this.getString();
            this.emit('stringEmitted', str);
        }, 2000);
    }

    public static getInstance() {
        if (!StringEmitter.instance) {
            StringEmitter.instance = new StringEmitter();
        }
        return StringEmitter.instance;
    }

    public pushString(cb: (str: string) => void) {
        setInterval(() => {
            const str = this.getString();
            cb(str);
        }, 2000);
    }

    public getString() {
        let randomString = this.stringArray[Math.floor(Math.random() * this.stringArray.length)];
        return randomString;
    }
}