export interface Step {
  execute(input: string): Promise<string>;
}