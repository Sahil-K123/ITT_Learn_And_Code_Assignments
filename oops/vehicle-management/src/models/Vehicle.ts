export abstract class Vehicle {
  private _price: number = 0;
  private _isRunning: boolean = false;

  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0 || value > 1_000_000) {
      throw new Error("Invalid price");
    }
    this._price = value;
  }

  get isRunning(): boolean {
    return this._isRunning;
  }

  protected setRunning(value: boolean) {
    this._isRunning = value;
  }

  start(): void {
    this.setRunning(true);
    console.log(`${this.make} ${this.model} started.`);
  }

  stop(): void {
    this.setRunning(false);
    console.log(`${this.make} ${this.model} stopped.`);
  }

  abstract displayInfo(): void;
}