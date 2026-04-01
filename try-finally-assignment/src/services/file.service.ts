import { promises as fs } from "fs";

export async function readFileData(path: string) {
  const file = await fs.open(path, "r");

  try {
    console.log("Reading file...");

    const content = await file.readFile({ encoding: "utf-8" });
    return content;
  } finally {
    console.log("Closing file...");
    await file.close();
  }
}