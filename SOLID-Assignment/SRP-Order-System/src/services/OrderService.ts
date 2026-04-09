import { Order } from "../models/Order";
import { OrderRepository } from "../repository/OrderRepository";
import { InvoiceService } from "./InvoiceService";

export class OrderService {
    constructor(
        private repo: OrderRepository,
        private invoice: InvoiceService
    ) {}

    process(order: Order) {
        this.repo.save(order);
        console.log(this.invoice.generate(order));
    }
}