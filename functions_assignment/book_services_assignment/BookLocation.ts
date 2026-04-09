export class BookLocation {
    constructor(
        private shelfNumber: number,
        private roomNumber: number
    ) {}

    getLocation(): string {
        return `Shelf ${this.shelfNumber}, Room ${this.roomNumber}`;
    }
}