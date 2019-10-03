import objectFromArgs from '../objectFromArgs';

test('should return object: `{ a: { b: { c: { d: null } } } }` from argument: `a.b.c.d` ', () => {
    expect(typeof objectFromArgs('a.b.c.d')).toBe('object');
    expect(objectFromArgs('a.b.c.d')).toStrictEqual({ a: { b: { c: { d: null } } } });
});
