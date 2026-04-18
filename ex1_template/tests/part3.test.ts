import * as R from "../src/lib/result";
import * as F from "../src/part3";

describe("Assignment 1 - Part 3", () => {
    describe("findResult", () => {
        it("returns a Failure when no element was found", () => {
            const my_list: string[] = ["dog", "cat", "rat"]

            expect(F.findResult(x => x.length > 3, my_list)).toSatisfy(R.isFailure);
        });
        it("returns a Failure when no element was found", () => {
            const my_list: string[] = ["dog", "cat", "rat"]

            expect(F.findResult(x => x[0] === "z", my_list)).toSatisfy(R.isFailure);
        });

        it("returns an Ok when an element was found", () => {
            const my_list: string[] = ["raccoon", "ostrich", "slug"]
            expect(F.findResult(x => x.length > 3, my_list)).toSatisfy(R.isOk);
        });
        it("returns an Ok when an element was found", () => {
            const my_list: string[] = ["raccoon", "ostrich", "slug"]
            expect(F.findResult(x => x.length > 3, my_list)).toEqual(R.makeOk("raccoon"));
        });
        it("returns an Ok when an element was found", () => {
            const my_list: string[] = ["raccoon", "ostrich", "slug"]
            expect(F.findResult(x => x[0] === "s", my_list)).toEqual(R.makeOk("slug"));
        });
    });

    describe("returnSquaredIfFoundEven", () => {
        it("returns an Ok of the first even number squared in v2", () => {
            expect(F.returnSquaredIfFoundEven_v2([1, 2, 3])).toEqual(R.makeOk(4));
        });
        it("returns an Ok of the first even number squared in v2", () => {
            expect(F.returnSquaredIfFoundEven_v2([1, 4, 3])).toEqual(R.makeOk(16));
        });
        it("returns an Ok of the first even number squared in v2", () => {
            expect(F.returnSquaredIfFoundEven_v2([32, 64, 128])).toEqual(R.makeOk(1024));
        });

        it("return a Failure if no even numbers are in the array in v2", () => {
            expect(F.returnSquaredIfFoundEven_v2([1, 3, 5])).toSatisfy(R.isFailure);
        });

        it("return a Failure if no even numbers are in the array in v2", () => {
            expect(F.returnSquaredIfFoundEven_v2([])).toSatisfy(R.isFailure);
        });

        it("returns the first even number squared in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 2, 3])).toBe(4);
        });
        it("returns the first even number squared in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 4, 3])).toBe(16);
        });
        it("returns the first even number squared in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([32, 64, 128])).toBe(1024);
        });

        it("returns -1 if no even numbers are in the array in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 3, 5])).toBe(-1);
        });
        it("returns -1 if no even numbers are in the array in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([])).toBe(-1);
        });
    });
});

describe("Assignment 1 - Part 3 - Additional Edge Cases", () => {
    describe("findResult - Extra tests", () => {
        it("returns a Failure explicitly for an empty array", () => {
            expect(F.findResult(x => x > 5, [])).toSatisfy(R.isFailure);
            expect(F.findResult(x => x > 5, [])).toEqual(R.makeFailure("No element found."));
        });

        it("returns the FIRST matching element when there are multiple matches", () => {
            const numbers = [1, 3, 4, 5, 6, 8];
            // 4 is the first even number, it should return 4 and not overwrite it with 6 or 8
            expect(F.findResult(x => x % 2 === 0, numbers)).toEqual(R.makeOk(4));
        });

        it("works correctly with arrays of complex objects", () => {
            interface User { id: number; name: string }
            const users: User[] = [
                { id: 1, name: "Alice" },
                { id: 2, name: "Bob" },
                { id: 3, name: "Charlie" }
            ];
            expect(F.findResult(u => u.name.startsWith("B"), users)).toEqual(R.makeOk({ id: 2, name: "Bob" }));
        });
    });

    describe("returnSquaredIfFoundEven_v2 - Extra tests", () => {
        it("handles negative even numbers correctly", () => {
            // -4 is even, (-4)^2 = 16
            expect(F.returnSquaredIfFoundEven_v2([1, 3, -4, 5])).toEqual(R.makeOk(16));
        });

        it("handles zero correctly (0 is even and 0^2 = 0)", () => {
            expect(F.returnSquaredIfFoundEven_v2([1, 7, 0, 9])).toEqual(R.makeOk(0));
        });
    });

    describe("returnSquaredIfFoundEven_v3 - Extra tests", () => {
        it("handles negative even numbers correctly", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 3, -4, 5])).toBe(16);
        });

        it("handles zero correctly", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 7, 0, 9])).toBe(0);
        });
    });
});