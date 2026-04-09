import { Order } from "../models/Order";

export class OrderRepository {
    save(order: Order) {
        console.log(`Order ${order.id} saved`);
    }
}