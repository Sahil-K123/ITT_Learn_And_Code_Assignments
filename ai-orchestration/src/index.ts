import { Workflow } from "./core/Workflow.js";
import { GenerateStep } from "./steps/GenerateStep.js";
import { SummarizeStep } from "./steps/SummarizeStep.js";
import { TranslateStep } from "./steps/TranslateStep.js";

const workflow = new Workflow();

workflow.addStep(new GenerateStep());
workflow.addStep(new SummarizeStep());
workflow.addStep(new TranslateStep());

(async () => {
  const result = await workflow.run("AI Prompt Example");
  console.log("\nFinal Output:", result);
})();