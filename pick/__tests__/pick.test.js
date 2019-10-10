import pick from '../pick';

describe('pick', () => {
    const obj = {
        1: 'one',
        2: 'two',
        3: 'three',
    };

    test('should return obj with props equal 1, 2, 3', () => {
        const props = ['1', '2', '3'];

        expect(pick(obj, props)).toStrictEqual({ 1: 'one', 2: 'two', 3: 'three' });
    });

    test('should return obj with props equal 1, 3', () => {
        const props = ['1', '5', '3'];

        expect(pick(obj, props)).toStrictEqual({ 1: 'one', 3: 'three' });
    });

    test('should return obj with props equal 1', () => {
        const props = ['4', '1', '5'];

        expect(pick(obj, props)).toStrictEqual({ 1: 'one' });
    });
});
