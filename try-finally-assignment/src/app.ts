import { handleFileRead } from "./controllers/file.controller";

async function main() {
  console.log("App started...\n");

  await handleFileRead();
}

main();