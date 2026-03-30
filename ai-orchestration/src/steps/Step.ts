export interface Step {
  execute(input: string): Promise<string>;

  retryCount?: number;
  fallbackStep?: Step;
  continueOnFailure?: boolean;
}