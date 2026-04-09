import { ReadableFile } from "./ReadableFile";

export class TextFile extends ReadableFile {
    read() {
        console.log("Reading text file");
    }

    write() {
        console.log("Writing text file");
    }
}