import { Step } from "./Step.js";
import { Logger } from "../utils/Logger.js";

export class GenerateStep implements Step {

  constructor(
    private logger: Logger){}

  async execute(input: string): Promise<string> {
    this.logger.log("Generating content...");
    return `Generated: ${input}`;
  }
}