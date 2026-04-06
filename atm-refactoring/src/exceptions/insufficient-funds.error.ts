export class InsufficientFundsError extends Error {
  constructor(message: string = "Insufficient account balance") {
    super(message);
    this.name = "InsufficientFundsError";
  }
}
