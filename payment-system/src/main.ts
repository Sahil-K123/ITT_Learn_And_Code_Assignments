import { Wallet } from "./wallet";
import { Customer } from "./customer";
import { Paperboy } from "./paperboy";

const wallet = new Wallet(100);
const customer = new Customer("Hello", "World", wallet);
const paperboy = new Paperboy();

paperboy.collectPayment(customer, 20);
paperboy.collectPayment(customer, 70);