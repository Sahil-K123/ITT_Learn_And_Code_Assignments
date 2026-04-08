import { RecordData } from "../../core/models/Record";

export class Validator {
    validate(records: RecordData[]): { valid: RecordData[], errors: string[] } {
        const valid: RecordData[] = [];
        const errors: string[] = [];

        records.forEach(r => {
            if (!r.id || !r.name || isNaN(r.value)) {
                errors.push(`Invalid record: ${JSON.stringify(r)}`);
            } else {
                valid.push(r);
            }
        });

        return { valid, errors };
    }
}