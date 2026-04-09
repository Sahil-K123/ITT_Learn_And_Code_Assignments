import * as fs from "fs";
import { Book } from "./Book";

export class BookRepository {

    save(book: Book): void {
        const data = {
            title: book.getTitle(),
            author: book.getAuthor(),
            currentPage: book.getCurrentPage()
        };

        const fileName = `./documents/${book.getTitle()}-${book.getAuthor()}.json`;

        fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
    }
}