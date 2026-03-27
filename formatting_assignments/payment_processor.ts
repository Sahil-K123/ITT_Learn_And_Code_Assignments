export class PaymentProcessor {
    private static readonly MIN_AMOUNT = 0.01;
    private static readonly MAX_RETRIES = 2;
    private static readonly PAYMENT_SUCCESS = "Payment successful";
    private static readonly PAYMENT_FAILED = "Payment failed";

    private logger: Logger;
    private notifier: NotificationService;
    private history: Map<string, PaymentRecord>;

    constructor(logger: Logger, notifier: NotificationService) {
        this.logger = logger;
        this.notifier = notifier;
        this.history = new Map<string, PaymentRecord>();
    }

    public process(request: PaymentRequest): PaymentResult {
        this.validate(request);
        let attempt = 0;

        while (attempt < PaymentProcessor.MAX_RETRIES) {
            try {
                this.execute(request);
                this.record(request);
                this.notifySuccess(request);

                return new PaymentResult(
                    true,
                    PaymentProcessor.PAYMENT_SUCCESS,
                    this.generateId()
                );
            } catch (error) {
                attempt++;
                this.logger.log(`Retry attempt: ${attempt}`);
            }
        }

        return new PaymentResult(
            false,
            PaymentProcessor.PAYMENT_FAILED,
            null
        );
    }

    private validate(request: PaymentRequest): void {
        if (!request.customerId || request.customerId.trim() === "") {
            throw new Error("Customer ID required");
        }

        if (request.amount == null || request.amount < PaymentProcessor.MIN_AMOUNT) {
            throw new Error("Invalid amount");
        }
    }

    private execute(request: PaymentRequest): void {
        this.logger.log(`Executing payment of ${request.amount}`);

        if (request.amount > 5000) {
            throw new PaymentException("Limit exceeded");
        }
    }

    private record(request: PaymentRequest): void {
        this.history.set(
            this.generateId(),
            new PaymentRecord(request.customerId, request.amount, new Date())
        );
    }

    private notifySuccess(request: PaymentRequest): void {
        this.notifier.send(
            request.customerId,
            `Payment of ${request.amount} processed`
        );
    }

    private generateId(): string {
        return `TXN-${Date.now()}`;
    }
}
