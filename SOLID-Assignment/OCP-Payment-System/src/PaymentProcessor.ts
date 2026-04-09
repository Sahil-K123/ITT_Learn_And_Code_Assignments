import { PaymentMethod } from "./payments/PaymentMethod";

export class PaymentProcessor {
    process(payment: PaymentMethod, amount: number) {
        payment.pay(amount);
    }
}