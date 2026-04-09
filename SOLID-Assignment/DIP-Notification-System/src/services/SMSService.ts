import { Notification } from "../interfaces/Notification";

export class SMSService implements Notification {
    send(message: string) {
        console.log("SMS:", message);
    }
}