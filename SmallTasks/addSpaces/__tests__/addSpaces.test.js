import addSpaces from '../addSpaces';

describe('addSpaces', () => {
    test('should return string equal `h e l l o  w o r l d`', () => {
        expect(addSpaces('hello world')).toEqual('h e l l o  w o r l d');
    });

    test('should return string equal `g o o d b y e  m y  f r i e n d`', () => {
        expect(addSpaces('goodbye my friend')).toEqual('g o o d b y e  m y  f r i e n d');
    });
});
