import { Wallet } from "./wallet";

export class Customer {
    private firstName: string;
    private lastName: string;
    private wallet: Wallet;

    constructor(firstName: string, lastName: string, wallet: Wallet) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.wallet = wallet;
    }

    pay(amount: number): boolean {
        if (this.wallet.hasEnough(amount)) {
            this.wallet.deduct(amount);
            return true;
        }
        return false;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}