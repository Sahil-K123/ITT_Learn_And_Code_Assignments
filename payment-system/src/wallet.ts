export class Wallet {
    private balance: number;

    constructor(initialAmount: number) {
        this.balance = initialAmount;
    }

    hasEnough(amount: number): boolean {
        return this.balance >= amount;
    }

    deduct(amount: number): void {
        this.balance -= amount;
    }
}