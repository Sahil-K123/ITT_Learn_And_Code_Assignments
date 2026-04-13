import { ReadableFile } from "./ReadableFile";

export class ReadOnlyFile implements ReadableFile {
    read() {
        console.log("Reading read-only file");
    }
}