const objectCreatePolyfill = require('../objectCreatePolyfill');

test('should return Object with proto Object', () => {
    const proto = Object.prototype;
    const newObject = objectCreatePolyfill(proto);

    expect(Object.getPrototypeOf(newObject)).toEqual(proto);
});
