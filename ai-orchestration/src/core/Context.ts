export class Context {
  private currentRetryCount: number;
  private shouldExecute: boolean;

  constructor(
    retryCount: number = 0,
    shouldExecute: boolean = true
  ) {
    this.currentRetryCount = retryCount;
    this.shouldExecute = shouldExecute;
  }

  getRetryCount(): number {
    return this.currentRetryCount;
  }

  incrementRetry(): void {
    this.currentRetryCount++;
  }

  canExecute(): boolean {
    return this.shouldExecute;
  }

  setExecution(flag: boolean): void {
    this.shouldExecute = flag;
  }
}