import { DivisorUtil } from "../utils/divisor.util";

export class DivisorService {

    countValidNumbers(k: number): number {
        if (k <= 2) return 0;

        let count = 0;

        for (let n = 2; n < k; n++) {
            const d1 = DivisorUtil.countDivisors(n);
            const d2 = DivisorUtil.countDivisors(n + 1);

            if (d1 === d2) {
                count++;
            }
        }

        return count;
    }
}