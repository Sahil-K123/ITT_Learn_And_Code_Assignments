export class NetworkConnectionError extends Error {
  constructor(message: string = "Network connection unavailable") {
    super(message);
    this.name = "NetworkConnectionError";
  }
}
