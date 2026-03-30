import { Step } from "../steps/Step.js";
import { Logger } from "../utils/Logger.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";

export class Workflow {
  private steps: Step[] = [];

  constructor(
    private logger: Logger,
    private errorHandler: ErrorHandler,
  ) {}

  addStep(step: Step): void {
    this.steps.push(step);
  }

  async run(input: string): Promise<string> {
    let result = input;

    for (const step of this.steps) {
      this.logger.log(`Executing step: ${step.constructor.name}`);

      let attempts = 0;
      const maxRetries = step.retryCount ?? 0;

      while (attempts <= maxRetries) {
        try {
          result = await step.execute(result);
          break;
        } catch (error) {
          attempts++;
          this.errorHandler.handle(error, step.constructor.name);

          if (attempts <= maxRetries) {
            this.logger.log(`Retrying ${step.constructor.name} (${attempts})`);
            continue;
          }

          if (step.fallbackStep) {
            this.logger.log(`Running fallback for ${step.constructor.name}`);
            result = await step.fallbackStep.execute(result);
          }

          if (!step.continueOnFailure) {
            this.logger.error(`Stopping workflow at ${step.constructor.name}`);
            return result;
          }

          break;
        }
      }
    }

    return result;
  }
}
