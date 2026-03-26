// src/core/Workflow.ts
import { Step } from "../steps/Step.js";
import { Logger } from "../utils/Logger.js";

export class Workflow {
  private steps: Step[] = [];

  addStep(step: Step): void {
    this.steps.push(step);
  }

  async run(input: string): Promise<string> {
    let result = input;

    for (const step of this.steps) {
      try {
        Logger.log(`Executing step: ${step.constructor.name}`);
        result = await step.execute(result);
      } catch (error) {
        Logger.error(`Step failed: ${step.constructor.name}`);
      }
    }

    return result;
  }
}