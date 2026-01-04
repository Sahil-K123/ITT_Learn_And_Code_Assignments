import { askQuestion } from "./utils/input.js";
import { TumblrService } from "./services/TumblrService.js";

(async () => {
  console.log("--------------------------------------------------");

  const blogName = await askQuestion("Enter the Tumblr blog name: ");
  const rangeInput = await askQuestion("Enter the range (start-end): ");

  const rangeParts = rangeInput.split("-");

  // Validate range format
  if (rangeParts.length !== 2) {
    console.log("Invalid range format. Use start-end format");
    return;
  }

  const start = Number(rangeParts[0]);
  const end = Number(rangeParts[1]);

  // Validate numeric values
  if (isNaN(start) || isNaN(end) || start < 1 || end < start) {
    console.log("Invalid range values.");
    return;
  }

  const service = new TumblrService();
  await service.processBlog(blogName.trim(), start, end);
})();
