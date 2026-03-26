export class Context {
  constructor(
    public retryCount: number = 0,
    public condition: boolean = true
  ) {}
}