// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// #1
function reverse(str) {
    return str.split('').reverse().join('');
}

// #2 dont used reverse
function reverse2(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

// #3 another way with reduce
function reverse3(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
