export function validateInput(input: string): void {
    if (!input || input.trim().length === 0) {
        throw new Error("Invalid input: Location cannot be empty");
    }
}