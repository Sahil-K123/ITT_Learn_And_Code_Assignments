import { FileService } from "./infrastructure/file/FileService";
import { Logger } from "./infrastructure/logger/Logger";
import { Parser } from "./application/services/Parser";
import { Validator } from "./application/validators/Validator";
import { Transformer } from "./application/transformers/Transformer";
import { DataProcessor } from "./application/services/DataProcessor";
import { JsonExporter } from "./application/exporters/JsonExporter";

(async () => {
    const processor = new DataProcessor(
        new FileService(),
        new Logger(),
        new Parser(),
        new Validator(),
        new Transformer()
    );

    await processor.process("input.csv", "output.json", new JsonExporter());
})();