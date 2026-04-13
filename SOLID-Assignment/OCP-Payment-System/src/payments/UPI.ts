import { PaymentMethod } from "./PaymentMethod";

export class UPI implements PaymentMethod {
    pay(amount: number) {
        console.log(`Paid ₹${amount} via UPI`);
    }
}