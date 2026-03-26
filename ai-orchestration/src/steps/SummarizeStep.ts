import { Step } from "./Step.js";
import { Logger } from "../utils/Logger.js";

export class SummarizeStep implements Step {
  async execute(input: string): Promise<string> {
    Logger.log("Summarizing content...");
    return `Summary: ${input}`;
  }
}