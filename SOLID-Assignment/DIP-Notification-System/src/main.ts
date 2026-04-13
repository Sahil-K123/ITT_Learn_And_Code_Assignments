import { NotificationManager } from "./NotificationManager";
import { EmailService } from "./services/EmailService";
import { SMSService } from "./services/SMSService";

new NotificationManager(new EmailService()).notify("Hello Email");
new NotificationManager(new SMSService()).notify("Hello SMS");