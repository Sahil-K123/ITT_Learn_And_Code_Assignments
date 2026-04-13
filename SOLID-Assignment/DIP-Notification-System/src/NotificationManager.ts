import { Notification } from "./interfaces/Notification";

export class NotificationManager {
    constructor(private service: Notification) {}

    notify(message: string) {
        this.service.send(message);
    }
}