import { EarningStrategy } from "../strategies/EarningStrategy.js";

export class Creator {
  private earnings: EarningStrategy[] = [];

  constructor(private name: string) {}

  addEarningStrategy(strategy: EarningStrategy): void {
    this.earnings.push(strategy);
  }

  calculateTotalEarnings(): number {
    return this.earnings.reduce((total, strategy) => {
      return total + strategy.calculate();
    }, 0);
  }

  display(): void {
    console.log(`Creator: ${this.name}`);
    console.log(`Total Earnings: $${this.calculateTotalEarnings()}`);
  }
}