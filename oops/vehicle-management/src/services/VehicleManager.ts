import { Vehicle } from "../models/Vehicle";

export class VehicleManager {
  private vehicles: Vehicle[] = [];

  addVehicle(vehicle: Vehicle): void {
    this.vehicles.push(vehicle);
    console.log("Vehicle added");
  }

  displayAll(): void {
    console.log("\n=== Vehicles ===");
    this.vehicles.forEach((v) => v.displayInfo());
  }

  totalValue(): number {
    return this.vehicles.reduce((sum, v) => sum + v.price, 0);
  }

  startAll(): void {
    this.vehicles.forEach((v) => v.start());
  }
}