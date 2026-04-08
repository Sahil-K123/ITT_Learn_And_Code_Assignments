import { RecordData } from "../../core/models/Record";

export class Transformer {
    transform(records: RecordData[]): RecordData[] {
        return records.map(r => ({
            ...r,
            name: r.name.toUpperCase(),
            doubledValue: r.value * 2,
            squaredValue: r.value * r.value
        }));
    }
}