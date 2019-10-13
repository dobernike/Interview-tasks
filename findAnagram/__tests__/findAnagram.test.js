import findAnagram from '../findAnagram';

describe('findAnagram', () => {
    const input = [
        'вертикаль',
        'кильватер',
        'апельсин',
        'спаниель',
        'австралопитек',
        'ватерполистка',
        'кластер',
        'сталкер',
        'стрелка',
    ];

    test('should return array with anagram', () => {
        expect(findAnagram(input)).toStrictEqual([
            ['кластер', 'сталкер', 'стрелка'],
            ['апельсин', 'спаниель'],
            ['вертикаль', 'кильватер'],
            ['австралопитек', 'ватерполистка'],
        ]);
    });

    test('should return empty array if haven`t anagram', () => {
        expect(findAnagram(['персик', 'лифтёр'])).toStrictEqual([]);
        expect(findAnagram(['персик', 'апельсин'])).toStrictEqual([]);
    });

    test('should return empty array without args', () => {
        expect(findAnagram()).toStrictEqual([]);
    });
});
