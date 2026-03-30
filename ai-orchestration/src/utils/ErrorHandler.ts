export class ErrorHandler {
  handle(error: unknown, stepName: string): void {
    console.error(`[ERROR]: Step failed - ${stepName}`, error);
  }
}