import { Step } from "./Step.js";
import { Logger } from "../utils/Logger.js";

export class GenerateStep implements Step {
  async execute(input: string): Promise<string> {
    Logger.log("Generating content...");
    return `Generated: ${input}`;
  }
}