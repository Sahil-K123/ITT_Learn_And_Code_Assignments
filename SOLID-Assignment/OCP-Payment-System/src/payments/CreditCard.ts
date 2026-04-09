import { PaymentMethod } from "./PaymentMethod";

export class CreditCard implements PaymentMethod {
    pay(amount: number) {
        console.log(`Paid ₹${amount} via Credit Card`);
    }
}