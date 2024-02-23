import { EventEmitter } from 'events';

// Define the singleton instance type as StringEmitter | null for strict type checking
let instance: StringEmitter | null = null;

class StringEmitter extends EventEmitter {
    constructor() {
        super();
        if (!instance) {
            instance = this;
            this.run();
        }
        // Ensure the constructor returns the existing instance to maintain singleton behavior
        return instance;
    }

    run(): void {
        const strArr = ["NodeJS", "ReactJS", "Angular", "ExtJS", "jQuery"];
        setInterval(() => {
            const str = strArr[Math.floor(Math.random() * strArr.length)];
            this.emit("data", str);
        }, 2000);
    }
}

// Export a single instance of StringEmitter
export const sEmitter = new StringEmitter();
