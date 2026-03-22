import { EarningStrategy } from "./EarningStrategy.js";

export class AdRevenue implements EarningStrategy {
  constructor(private views: number, private engagementRate: number) {}

  calculate(): number {
    return this.views * 0.05 * this.engagementRate;
  }
}