import { IMessageSender } from "./i-message-sender";

export class SMS implements IMessageSender {
    send(message: string) {
        console.log("SMS Sent - ", message);
    }
}