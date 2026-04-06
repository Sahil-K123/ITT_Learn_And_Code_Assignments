export class DeviceLockedError extends Error {
  constructor(message: string = "ATM device is locked") {
    super(message);
    this.name = "DeviceLockedError";
  }
}
