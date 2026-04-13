import { Order } from "./models/Order";
import { OrderService } from "./services/OrderService";
import { OrderRepository } from "./repository/OrderRepository";
import { InvoiceService } from "./services/InvoiceService";

const order = new Order(1, 1000, "test@mail.com");

const service = new OrderService(
    new OrderRepository(),
    new InvoiceService()
);

service.process(order);