import { ReadableFile } from "./ReadableFile";

export class ReadOnlyFile extends ReadableFile {
    read() {
        console.log("Reading read-only file");
    }
}