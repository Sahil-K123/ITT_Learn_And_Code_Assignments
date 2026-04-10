import { ProcessedRecord } from "../../core/models/Record";

export class Validator {
    validate(records: ProcessedRecord[]): { valid: ProcessedRecord[]; errors: string[] } {
        const valid: ProcessedRecord[] = [];
        const errors: string[] = [];

        records.forEach((record, index) => {
            const recordErrors: string[] = [];

            if (!record.id || record.id.trim() === "") {
                recordErrors.push("Missing id");
            }

            if (!record.name || record.name.trim() === "") {
                recordErrors.push("Missing name");
            }

            if (record.value === undefined || isNaN(record.value)) {
                recordErrors.push("Invalid value");
            }

            if (recordErrors.length > 0) {
                errors.push(`Record ${index + 1}: ${recordErrors.join(", ")}`);
            } else {
                valid.push(record);
            }
        });

        return { valid, errors };
    }
}