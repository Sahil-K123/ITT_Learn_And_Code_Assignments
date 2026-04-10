import { IExporter } from "../../core/interfaces/IExporter";
import { RecordData } from "../../core/models/Record";
import * as fs from "fs/promises";

export class JsonExporter implements IExporter {
    async export(data: RecordData[], path: string): Promise<void> {
        await fs.writeFile(path, JSON.stringify(data, null, 2));
    }
}