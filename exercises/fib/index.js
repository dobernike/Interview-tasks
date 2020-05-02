// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// #1 loop Linear O(n)
function fib1(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        // const a = result[result.length - 1];
        const a = result[i - 1];
        const b = result[i - 2];

        result.push(a + b);
    }

    return result[n];
}

// #2 recursive Exponential O(2^n)
function fib2(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

/*
for improve this, need use memoization
*/

// #m
function fibM(n) {
    let curr = 0;
    let next = 1;

    for (let i = 0; i < n; i++) {
        const tmp = next;
        next = next + curr;
        curr = tmp;
    }

    return curr;
}

module.exports = fib;
