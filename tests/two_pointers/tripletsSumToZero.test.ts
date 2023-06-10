import {searchTriplets, Triplet} from "../../src/two_pointers/tripletsSumToZero";

describe('tripletsSumToZero.ts', () => {
    interface TestCase {
        readonly arr: number[],
        readonly expected: Triplet[],
    };

    const tests: TestCase[] = [
        {
            arr: [-3, 0, 1, 2, -1, 1, -2],
            expected: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]],
        },
        {
            arr: [-5, 2, -1, -2, 3],
            expected: [[-5, 2, 3], [-2, -1, 3]],
        },
    ];

    tests.forEach((test, idx) => {
        it(`testCase: ${idx}`, () => {
            const result = searchTriplets(test.arr);
            expect(result.length).toBe(test.expected.length);
            test.expected.forEach((expectedArr) => {
                expect(result).toContainEqual(expect.arrayContaining(expectedArr));
            });
        });
    });
})