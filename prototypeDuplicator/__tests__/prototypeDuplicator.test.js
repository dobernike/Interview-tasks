import '../prototypeDuplicator';

test('should array have method duplicator', () => {
    const array = [1, 2, 3];
    
    expect(array.duplicator()).toEqual([1, 2, 3, 1, 2, 3]);
});
