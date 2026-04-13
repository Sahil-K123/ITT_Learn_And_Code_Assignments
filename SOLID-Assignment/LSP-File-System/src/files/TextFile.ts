import { ReadableFile } from "./ReadableFile";
import { WritableFile } from "./WritableFile";

export class TextFile implements ReadableFile, WritableFile {
    read() {
        console.log("Reading text file");
    }

    write() {
        console.log("Writing text file");
    }
}