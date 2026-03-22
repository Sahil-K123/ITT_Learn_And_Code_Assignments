import { Vehicle } from "./Vehicle.js";

export class ElectricCar extends Vehicle {
  private _batteryLevel: number = 0;

  get batteryLevel(): number {
    return this._batteryLevel;
  }

  set batteryLevel(value: number) {
    if (value < 0 || value > 100) {
      throw new Error("Invalid battery level");
    }
    this._batteryLevel = value;
  }

  override start(): void {
    if (this.batteryLevel > 0) {
      super.start();
    } else {
      console.log("Cannot start - battery dead!");
    }
  }

  charge(amount: number): void {
    this._batteryLevel += amount;
    console.log(`Charged. Battery level: ${this._batteryLevel}%`);
  }

  displayInfo(): void {
    console.log(
      `Electric Car: ${this.year} ${this.make} ${this.model}, Price: $${this.price}`
    );
  }
}