import { Car } from "./models/Car";
import { Motorcycle } from "./models/MotorCycle";
import { ElectricCar } from "./models/ElectricCar";
import { VehicleManager } from "./services/VehicleManager";

console.log("=== Vehicle Management System ===");

const car = new Car("Honda", "Accord", 2023);
car.price = 28000;
car.fuelLevel = 100;

const bike = new Motorcycle("Harley-Davidson", "Street 750", 2022, false);
bike.price = 7500;
bike.fuelLevel = 80;

const ev = new ElectricCar("Tesla", "Model 3", 2023);
ev.price = 42000;
ev.batteryLevel = 100;

car.start();
car.displayInfo();

bike.start();
bike.displayInfo();

ev.start();
ev.displayInfo();


const manager = new VehicleManager();
manager.addVehicle(car);
manager.addVehicle(bike);
manager.addVehicle(ev);

manager.displayAll();
console.log(`Total Value: $${manager.totalValue()}`);

console.log("\nStarting all vehicles:");
manager.startAll();


try {
  car.price = -1000;
} catch {
  console.log("Invalid price prevented!");
}