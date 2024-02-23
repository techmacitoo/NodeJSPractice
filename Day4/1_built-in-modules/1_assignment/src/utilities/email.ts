import { IMessageSender } from "./i-message-sender";

export class Email implements IMessageSender {
    send(message: string) {
        console.log("Email Sent - ", message);
    }
}