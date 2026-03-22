import { EarningStrategy } from "./EarningStrategy.js";

export class Subscription implements EarningStrategy {
  constructor(private subscribers: number) {}

  calculate(): number {
    return this.subscribers * 2;
  }
}