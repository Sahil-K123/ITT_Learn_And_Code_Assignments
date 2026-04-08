import { RecordData } from "../models/Record";

export interface IExporter {
    export(data: RecordData[], path: string): Promise<void>;
}