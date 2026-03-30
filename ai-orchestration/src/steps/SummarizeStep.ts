import { Step } from "./Step.js";
import { Logger } from "../utils/Logger.js";

export class SummarizeStep implements Step {

  constructor(private logger: Logger){}

  async execute(input: string): Promise<string> {
    this.logger.log("Summarizing content...");
    return `Summary: ${input}`;
  }
}