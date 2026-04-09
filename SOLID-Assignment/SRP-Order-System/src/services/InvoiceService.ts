import { Order } from "../models/Order";

export class InvoiceService {
    generate(order: Order): string {
        return `Invoice: Order ${order.id} - ₹${order.amount}`;
    }
}