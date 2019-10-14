function findAnagram(array = []) {
    const alphabetize = (str = '') =>
        str
            .toLowerCase()
            .split('')
            .sort()
            .join('');

    return array
        .sort((a, b) => (a.length <= b.length ? -1 : 1))
        .filter(
            (item, idx, arr) =>
                alphabetize(item) === alphabetize(arr[idx - 1]) || alphabetize(item) === alphabetize(arr[idx + 1])
        )
        .reduce((prev, curr) => {
            const last = [prev.length - 1];

            if (prev[last] && alphabetize(curr) === alphabetize(prev[last][prev[last].length - 1])) {
                prev[last].push(curr);
            } else {
                prev.push([curr]);
            }

            return prev;
        }, []);
}

export default findAnagram;
