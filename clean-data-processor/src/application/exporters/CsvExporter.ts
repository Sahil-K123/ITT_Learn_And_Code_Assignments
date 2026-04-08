import { IExporter } from "../../core/interfaces/IExporter";
import { RecordData } from "../../core/models/Record";
import * as fs from "fs/promises";

export class CsvExporter implements IExporter {
    async export(data: RecordData[], path: string): Promise<void> {
        const lines = ["ID,NAME,VALUE"];
        data.forEach(r => {
            lines.push(`${r.id},${r.name},${r.value}`);
        });

        await fs.writeFile(path, lines.join("\n"));
    }
}