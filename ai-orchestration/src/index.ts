import { Workflow } from "./core/Workflow.js";
import { Logger } from "./utils/Logger.js";
import { ErrorHandler } from "./utils/ErrorHandler.js";
import { GenerateStep } from "./steps/GenerateStep.js";
import { SummarizeStep } from "./steps/SummarizeStep.js";
import { TranslateStep } from "./steps/TranslateStep.js";

const logger = new Logger();
const errorHandler = new ErrorHandler();

const workflow = new Workflow(logger, errorHandler);

workflow.addStep(new GenerateStep(logger));
workflow.addStep(new SummarizeStep(logger));
workflow.addStep(new TranslateStep(logger));

(async () => {
  const result = await workflow.run("AI Prompt Example");
  console.log("\nFinal Output:", result);
})();