import { readFileData } from "../services/file.service";

export async function handleFileRead() {
  try {
    const data = await readFileData("test.txt");
    console.log("File content:", data);
  } catch (err: any) {
    console.log("Error handled in controller:", err.message);
  }
}