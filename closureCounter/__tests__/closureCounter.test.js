import closureCounter from '../closureCounter';

describe('closureCounter', () => {
    const counter = closureCounter(0);

    test('should return closure', () => {
        expect(counter).toEqual(expect.any(Function));
    });

    test('should return next count in each call', () => {
        expect(counter()).toEqual(0);
        expect(counter()).toEqual(1);
        expect(counter()).toEqual(2);
    });
});
