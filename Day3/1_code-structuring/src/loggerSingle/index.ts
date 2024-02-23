import { Logger } from "./logger";
let logger: Logger | null = null;

export function getLogger() {
    if (!logger) {
        logger = new Logger();
    }
    return logger;
}