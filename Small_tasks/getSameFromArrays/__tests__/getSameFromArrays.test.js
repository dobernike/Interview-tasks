import getSameFromArrays from '../getSameFromArrays';

describe('getSameFromArrays', () => {
    test('should return array with same elements', () => {
        expect(getSameFromArrays([1, 2, 3], [3, 4, 5])).toStrictEqual([3]);
    });

    test('should return empty array if haven`t same elements', () => {
        expect(getSameFromArrays([1, 2, 3], [4, 5, 6])).toStrictEqual([]);
    });

    test('should return empty array', () => {
        expect(getSameFromArrays()).toStrictEqual([]);
    });
});
