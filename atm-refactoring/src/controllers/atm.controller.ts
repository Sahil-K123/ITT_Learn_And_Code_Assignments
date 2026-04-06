import { ATMService } from "../services/atm.service";
import { DeviceLockedError } from "../exceptions/device-locked.error";
import { InsufficientFundsError } from "../exceptions/insufficient-funds.error";
import { NetworkConnectionError } from "../exceptions/network-connection.error";
import { Logger } from "../utils/logger";

export class ATMController {
  private atmService: ATMService;

  constructor() {
    this.atmService = new ATMService();
  }

  public handleWithdrawRequest(accountId: string, amount: number): void {
    try {
      this.atmService.withdrawAmount(accountId, amount);
      Logger.info("Transaction completed successfully");
    } catch (error: unknown) {
      this.processErrorResponse(error);
    }
  }

  private processErrorResponse(error: unknown): void {
    if (error instanceof DeviceLockedError) {
      Logger.error("ATM is currently unavailable.");
    } else if (error instanceof NetworkConnectionError) {
      Logger.error("Network issue. Please try again.");
    } else if (error instanceof InsufficientFundsError) {
      Logger.error("Insufficient balance in your account.");
    } else {
      Logger.error("An unexpected error occurred.");
    }
  }
}
