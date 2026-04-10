import { ILogger } from "../../core/interfaces/ILogger";
import * as fs from "fs/promises";

export class Logger implements ILogger {
    private buffer: string[] = [];

    log(message: string): void {
        const timestamp = new Date().toISOString();
        this.buffer.push(`[${timestamp}] ${message}`);
    }

    async save(): Promise<void> {
        await fs.writeFile("processing.log", this.buffer.join("\n"));
    }
}