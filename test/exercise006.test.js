import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} from "../challenges/exercise006";

describe("sumMultiples", () => {
    test('returns sum of ', () => {
        expect(sumMultiples([4, 8])).toBe(0);
        expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(23);
    });

    test(('returns sum of two 5multiples'), () => {
        expect(sumMultiples([5, 10])).toBe(15);
    });
    test(('returns sum of two 3multiples'), () => {
        expect(sumMultiples([3, 12])).toBe(15);
    });
    test(('returs sum 0 and number'), () => {
        expect(sumMultiples([0, 8])).toBe(0);
    });
    test(('returns sum of numbers with 3&5multiple number'), () => {
        expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 15])).toBe(38);
    })
});

describe("isValidDna", () => {
    test('returns true or false', () => {
        expect(isValidDNA('c')).toBe(true);
        expect(isValidDNA('g')).toBe(true);
        expect(isValidDNA('t')).toBe(true);
        expect(isValidDNA('a')).toBe(true);
        expect(isValidDNA('qwerty')).toBe(false);
        expect(isValidDNA('cgta')).toBe(true);
        expect(isValidDNA('b')).toBe(false);
    });

    test(('check capitilized characters'), () => {
        expect(isValidDNA('C')).toBe(true);
        expect(isValidDNA('Qwerty')).toBe(false);
        expect(isValidDNA('CgTA')).toBe(true);
        expect(isValidDNA('B')).toBe(false);
    });

    test(('check numbers and other symbols'), () => {
        expect(isValidDNA('C!')).toBe(false);
        expect(isValidDNA('Qwerty!')).toBe(false);
        expect(isValidDNA('CgTA!')).toBe(false);
        expect(isValidDNA('B c')).toBe(false);
    })
});

describe("getComplementaryDNA", () => {
    test(('returns message if string is not valid DNA'), () => {
        expect(getComplementaryDNA('q')).toBe('String is not DNA');
    });

    test(('returns converted string if its valid'), () => {
        expect(getComplementaryDNA('A')).toBe('T');
        expect(getComplementaryDNA('T')).toBe('A');
        expect(getComplementaryDNA('C')).toBe('G');
        expect(getComplementaryDNA('G')).toBe('C');
    });

    test(('returns converted string if its valid and not registr-sensitive'), () => {
        expect(getComplementaryDNA('a')).toBe('T');
        expect(getComplementaryDNA('t')).toBe('A');
        expect(getComplementaryDNA('c')).toBe('G');
        expect(getComplementaryDNA('g')).toBe('C');
    })
});

describe("isItPrime", () => {
    test(('n = 0 returns message'), () => {
        expect(isItPrime(0)).toBe(false);
    });
    test(('n = 1 returns message'), () => {
        expect(isItPrime(1)).toBe(false);
    });

    test(('n is non prime number'), () => {
        expect(isItPrime(4)).toBe(false);
    });

    test(('n is  prime number'), () => {
        expect(isItPrime(3)).toBe(true);
    });
});

describe('createMatrix', () => {
    test(('returns array filled by filler'), () => {
        expect(createMatrix(3, 'X')).toEqual([
            ['X', 'X', 'X'],
            ['X', 'X', 'X'],
            ['X', 'X', 'X']])
    });
});

describe('areWeCovered', () => {
    test('should return true if there are at least 3 staff members scheduled for the given day', () => {
        const staff = [
            { name: 'John', rota: ['Monday', 'Tuesday', 'Friday'] },
            { name: 'Jane', rota: ['Monday', 'Wednesday', 'Friday'] },
            { name: 'Mike', rota: ['Monday', 'Friday'] },
            { name: 'Sarah', rota: ['Monday', 'Thursday', 'Saturday'] }
        ];
        expect(areWeCovered(staff, 'Monday')).toBe(true);
    });

    test('should return false if there are less than 3 staff members scheduled for the given day', () => {
        const staff = [
            { name: 'John', rota: ['Monday', 'Tuesday', 'Friday'] },
            { name: 'Jane', rota: ['Monday', 'Wednesday', 'Friday'] }
        ];
        expect(areWeCovered(staff, 'Thursday')).toBe(false);
    });
});