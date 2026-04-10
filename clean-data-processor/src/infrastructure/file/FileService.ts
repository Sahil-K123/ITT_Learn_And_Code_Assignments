import * as fs from "fs/promises";
import { IFileService } from "../../core/interfaces/IFileService";

export class FileService implements IFileService {
    async read(path: string): Promise<string[]> {
        const content = await fs.readFile(path, "utf-8");
        return content.split("\n");
    }

    async write(path: string, data: string[]): Promise<void> {
        await fs.writeFile(path, data.join("\n"));
    }
}