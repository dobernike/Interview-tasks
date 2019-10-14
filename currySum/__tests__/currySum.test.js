import currySum from '../currySum';

describe('curry', () => {
    test('should return sum equal 11', () => {
        expect(currySum(1)(2)(3) + 5).toEqual(11);
    });

    test('should return sum equal 11', () => {
        expect(currySum(1)(2)(3)() + 5).toEqual(11);
    });

    test('should return primitive is sum equal 6', () => {
        expect(+currySum(1)(2)(3)).toEqual(6);
    });

    test('should return sum equal 6', () => {
        expect(currySum(1)(2)(3)()).toEqual(6);
    });

    test('should return sum equal 5', () => {
        expect(currySum(1)(2, 2)()).toEqual(5);
    });

    test('should return sum equal 6', () => {
        expect(currySum(1, 5)()).toEqual(6);
    });

    test('sould return zero', () => {
        expect(currySum()()).toEqual(0);
    });

    test('sould return function', () => {
        expect(currySum()).toEqual(expect.any(Function));
    });
});
