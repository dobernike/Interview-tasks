import fibonacci from '../fibonacci';

describe('fibonacci', () => {
    test('should return next number fibonacci equal 2', () => {
        expect(fibonacci(2)).toEqual(2);
    });

    test('should return next number fibonacci equal 3', () => {
        expect(fibonacci(3)).toEqual(3);
    });

    test('should return next number fibonacci equal 8', () => {
        expect(fibonacci(5)).toEqual(8);
    });
});
