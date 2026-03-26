import { Step } from "./Step.js";
import { Logger } from "../utils/Logger.js";

export class TranslateStep implements Step {
  async execute(input: string): Promise<string> {
    Logger.log("Translating content...");
    return `Translated: ${input}`;
  }
}