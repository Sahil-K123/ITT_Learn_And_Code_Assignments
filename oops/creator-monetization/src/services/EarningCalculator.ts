import { Creator } from "../models/Creator.js";

export class EarningCalculator {
  static calculate(creator: Creator): number {
    return creator.calculateTotalEarnings();
  }
}