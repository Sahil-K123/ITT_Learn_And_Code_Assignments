import { EarningStrategy } from "./EarningStrategy.js";

export class LiveGift implements EarningStrategy {
  constructor(private giftPoints: number) {}

  calculate(): number {
    return this.giftPoints * 0.1;
  }
}