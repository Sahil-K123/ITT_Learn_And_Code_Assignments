import { PaymentProcessor } from "./PaymentProcessor";
import { CreditCard } from "./payments/CreditCard";
import { UPI } from "./payments/UPI";

const processor = new PaymentProcessor();

processor.process(new CreditCard(), 500);
processor.process(new UPI(), 300);