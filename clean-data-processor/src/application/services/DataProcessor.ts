import { IFileService } from "../../core/interfaces/IFileService";
import { ILogger } from "../../core/interfaces/ILogger";
import { Parser } from "./Parser";
import { Validator } from "../validators/Validator";
import { Transformer } from "../transformers/Transformer";
import { IExporter } from "../../core/interfaces/IExporter";

export class DataProcessor {
    constructor(
        private fileService: IFileService,
        private logger: ILogger,
        private parser: Parser,
        private validator: Validator,
        private transformer: Transformer
    ) {}

    async process(input: string, output: string, exporter: IExporter) {
        this.logger.log("Processing started");

        const lines = await this.fileService.read(input);

        let records = this.parser.parse(lines);

        const { valid, errors } = this.validator.validate(records);

        errors.forEach(e => this.logger.log(e));

        records = this.transformer.transform(valid);

        await exporter.export(records, output);

        this.logger.log(`Processed ${records.length} records`);
        await this.logger.save();
    }
}