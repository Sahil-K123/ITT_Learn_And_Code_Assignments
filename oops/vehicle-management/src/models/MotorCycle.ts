import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle {
  constructor(
    make: string,
    model: string,
    year: number,
    public hasSidecar: boolean
  ) {
    super(make, model, year);
  }

  private _fuelLevel: number = 0;

  get fuelLevel(): number {
    return this._fuelLevel;
  }

  set fuelLevel(value: number) {
    this._fuelLevel = value;
  }

  override start(): void {
    if (this.fuelLevel > 0) {
      super.start();
    } else {
      console.log("Cannot start - no fuel!");
    }
  }

  displayInfo(): void {
    console.log(
      `Motorcycle: ${this.year} ${this.make} ${this.model}, Sidecar: ${this.hasSidecar}, Price: $${this.price}`
    );
  }
}