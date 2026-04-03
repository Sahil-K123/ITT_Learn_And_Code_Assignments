export enum DeviceStatus {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED"
}

export enum NetworkStatus {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED"
}

export class DeviceRecord {
  constructor(
    public deviceStatus: DeviceStatus,
    public networkStatus: NetworkStatus
  ) {}
}