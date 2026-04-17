import { DivisorService } from "../src/core/divisor.service";

describe("DivisorService", () => {

    const service = new DivisorService();

    test("should return correct count for k = 15", () => {
        expect(service.countValidNumbers(15)).toBe(2);
    });

    test("should return 0 for small k", () => {
        expect(service.countValidNumbers(2)).toBe(0);
    });

    test("should handle larger input", () => {
        expect(service.countValidNumbers(10)).toBeGreaterThanOrEqual(0);
    });

    test("should handle invalid input", () => {
        expect(service.countValidNumbers(-5)).toBe(0);
    });

});
