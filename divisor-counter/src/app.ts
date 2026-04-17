import { DivisorService } from "./core/divisor.service";

export class App {
    private service = new DivisorService();

    run(input: number[]): void {
        input.forEach(k => {
            const result = this.service.countValidNumbers(k);
            console.log(result);
        });
    }
}
