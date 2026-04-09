import { Customer } from "./customer";

export class Paperboy {
    collectPayment(customer: Customer, amount: number): void {
        if (customer.pay(amount)) {
            console.log("Payment collected successfully");
        } else {
            console.log("Not enough money, will come back later");
        }
    }
}