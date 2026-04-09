export class Book {
    private currentPage: number;
    private content: string[];

    constructor(
        private title: string,
        private author: string,
        content: string[]
    ) {
        this.content = content;
        this.currentPage = 0;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    turnPage(): void {
        if (this.currentPage < this.content.length - 1) {
            this.currentPage++;
        }
    }

    getCurrentPage(): string {
        return this.content[this.currentPage];
    }

    getCurrentPageNumber(): number {
        return this.currentPage + 1;
    }
}