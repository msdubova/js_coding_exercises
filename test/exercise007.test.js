import {
    sumDigits,
    getScreentimeAlertList
} from "../challenges/exercise007-optional";

describe('sumDigits', () => {
    test('returns sum of ', () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(12345)).toBe(15);
    })
});

describe("getScreentimeAlertList", () => {
    const u = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
            ]
        },
    ]

    test("should return an array with the username 'beth_1234' when the date is '2019-05-04'", () => {
        const result = getScreentimeAlertList(u, "2019-05-04");
        expect(result).toEqual(["beth_1234"]);
    });

    test("should return an empty array when there are no users or the date is not found", () => {
        const result1 = getScreentimeAlertList([], "2019-06-11");
        const result2 = getScreentimeAlertList(u, "2019-06-12");
        expect(result1).toEqual([]);
        expect(result2).toEqual([]);
    });

    test("should throw an error if the 'users' parameter is undefined", () => {
        expect(() => getScreentimeAlertList(undefined, "2019-06-11")).toThrow("users is required");
    });

    test("should throw an error if the 'date' parameter is undefined", () => {
        expect(() => getScreentimeAlertList(u, undefined)).toThrow("date is required");
    });
});
