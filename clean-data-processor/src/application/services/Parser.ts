import { RecordData } from "../../core/models/Record";

export class Parser {

    parse(lines: string[]): RecordData[] {
        const records: RecordData[] = [];

        for (const line of lines) {
            if (!line || line.trim() === "") continue;

            const parts = line.split(",");

            const id = parts[0];
            const name = parts[1];
            const valueStr = parts[2];

            if (id === undefined || name === undefined || valueStr === undefined) {
                throw new Error(`Invalid line: ${line}`);
            }

            const value = Number(valueStr);

            if (isNaN(value)) {
                throw new Error(`Invalid number in line: ${line}`);
            }

            const record: RecordData = {
                id: id.trim(),
                name: name.trim(),
                value: value
            };

            const date = parts[3];
            if (date !== undefined && date.trim() !== "") {
                record.date = date.trim();
            }

            records.push(record);
        }

        return records;
    }
}