import getBattleship from '../getBattleship';

describe('getBattleship', () => {
    test('should battleships from array', () => {
        const battleshipMap = [0, 0, 1, 1, 0, 1, 0, 0, 0];

        expect(getBattleship(battleshipMap)).toEqual(3);
    });
});
