import { DeviceRecord, DeviceStatus, NetworkStatus } from "../models/device-record.model";
import { DeviceLockedError } from "../exceptions/device-locked.error";
import { InsufficientFundsError } from "../exceptions/insufficient-funds.error";
import { NetworkConnectionError } from "../exceptions/network-connection.error";

export class ATMService {

  public withdrawAmount(accountId: string, amount: number): void {
    const deviceRecord = this.fetchDeviceRecord();

    this.validateDeviceIsActive(deviceRecord);
    this.validateNetworkIsAvailable(deviceRecord);
    this.validateSufficientBalance(accountId, amount);

    this.performCashDispense(amount);
  }

  private validateDeviceIsActive(deviceRecord: DeviceRecord): void {
    if (deviceRecord.deviceStatus === DeviceStatus.SUSPENDED) {
      throw new DeviceLockedError();
    }
  }

  private validateNetworkIsAvailable(deviceRecord: DeviceRecord): void {
    if (deviceRecord.networkStatus !== NetworkStatus.CONNECTED) {
      throw new NetworkConnectionError();
    }
  }

  private validateSufficientBalance(accountId: string, amount: number): void {
    const currentBalance = this.fetchAccountBalance(accountId);

    if (currentBalance < amount) {
      throw new InsufficientFundsError();
    }
  }

  private fetchDeviceRecord(): DeviceRecord {
    return new DeviceRecord(DeviceStatus.ACTIVE, NetworkStatus.CONNECTED);
  }

  private fetchAccountBalance(accountId: string): number {
    return 5000; 
  }

  private performCashDispense(amount: number): void {
    console.log(`Successfully dispensed ₹${amount}`);
  }
}