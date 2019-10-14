import promiseAllPolyfill from '../promiseAllPolyfill';

describe('promiseAllPolyfill', () => {
    const getPromise = (mark) => new Promise((res) => res(`Resolve_${mark}`));
    const promise1 = getPromise('1');
    const promise2 = getPromise('2');

    test('should return all promises', () => {
        expect(promiseAllPolyfill([promise1, promise2])).resolves.toStrictEqual(['Resolve_1', 'Resolve_2']);
    });

    test('should return error', () => {
        try {
            const rejectedPromise = new Promise((res, rej) => rej('error'));

            promiseAllPolyfill([promise1, promise2, rejectedPromise]);
        } catch (e) {
            expect(e).toEqual('error');
        }
    });

    test('should return empty array if args is empty', () => {
        expect(promiseAllPolyfill()).resolves.toStrictEqual([]);
    });
});
