import { ProcessedRecord } from "../../core/models/Record";

export class Parser {

    parse(lines: string[]): ProcessedRecord[] {
    const records: ProcessedRecord[] = [];

    for (const line of lines) {
        if (!line || line.trim() === "") continue;

        const parts = line.split(",");

        const record: ProcessedRecord = {
            id: parts[0]?.trim(),
            name: parts[1]?.trim(),
            value: Number(parts[2]),
            date: parts[3]?.trim()
        };

        records.push(record);
    }

    return records;
}
}