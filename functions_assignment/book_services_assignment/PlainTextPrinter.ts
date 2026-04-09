import { Printer } from "./Printer";

export class PlainTextPrinter implements Printer {

    printPage(page: string): void {
        console.log("----- Plain Text Output -----");
        console.log(page);
    }
}