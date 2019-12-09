/* eslint-disable prefer-rest-params */
function currySum() {
    let numbers = arguments;

    const getSum = (innerNumbers = []) =>
        innerNumbers.length ? currySumInner : numbers.reduce((prev, curr) => prev + curr, 0);

    function currySumInner() {
        numbers = [...numbers, ...arguments];
        return getSum(arguments);
    }

    currySumInner.valueOf = () => getSum();

    return currySumInner;
}

export default currySum;
