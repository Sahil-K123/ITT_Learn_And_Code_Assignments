import { EarningStrategy } from "./EarningStrategy.js";

export class BrandDeal implements EarningStrategy {
  constructor(
    private baseAmount: number,
    private regionMultiplier: number
  ) {}

  calculate(): number {
    return this.baseAmount * this.regionMultiplier;
  }
}