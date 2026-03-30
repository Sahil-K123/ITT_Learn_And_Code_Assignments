import { Step } from "./Step.js";
import { Logger } from "../utils/Logger.js";

export class TranslateStep implements Step {
  
  constructor(private logger: Logger){}   

  async execute(input: string): Promise<string> {
    this.logger.log("Translating content...");
    return `Translated: ${input}`;
  }
}