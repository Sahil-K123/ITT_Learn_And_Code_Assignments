import { Book } from "./Book";
import { BookLocation } from "./BookLocation";
import { BookRepository } from "./BookRepository";
import { PlainTextPrinter } from "./PlainTextPrinter";
import { HtmlPrinter } from "./HtmlPrinter";

const pages = [
    "Page 1: Introduction",
    "Page 2: Chapter 1",
    "Page 3: Chapter 2"
];

const book = new Book("Clean Code", "Robert C. Martin", pages);

console.log(book.getCurrentPage());
book.turnPage();
console.log(book.getCurrentPage());

const location = new BookLocation(5, 2);
console.log(location.getLocation());

const repo = new BookRepository();
repo.save(book);

const textPrinter = new PlainTextPrinter();
textPrinter.printPage(book.getCurrentPage());

const htmlPrinter = new HtmlPrinter();
htmlPrinter.printPage(book.getCurrentPage());