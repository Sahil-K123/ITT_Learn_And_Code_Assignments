import { Notification } from "../interfaces/Notification";

export class EmailService implements Notification {
    send(message: string) {
        console.log("Email:", message);
    }
}