import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  private _fuelLevel: number = 0;

  get fuelLevel(): number {
    return this._fuelLevel;
  }

  set fuelLevel(value: number) {
    if (value < 0 || value > 100) {
      throw new Error("Invalid fuel level");
    }
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
      `Car: ${this.year} ${this.make} ${this.model}, Price: $${this.price}`
    );
  }
}