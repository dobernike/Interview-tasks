# Runtime Complexity

Describes the performance of an algorithm

How much more processing power/time is required to run you algorithm if we double the inputs?

## Constant Time

`1` -> No matter how many elements we`re working with, the algorithm/operation/whatever will always take the same amount of time

## Logarithmic Time

`log(n)` -> You have this if doubling the number of elements you are iterating over doesnt double the amount of work. Always assume that searching operations are`log(n)`

## Linear Time

`n` -> Iterating through all elements in a collection of data. if you see a for loop spanning from '0' to 'array.length', you probably have `'n'`, or linear runtime;

## Quasilinear Time

`n*log(n)` -> You have this if doubling the number of elements you are iterationg over doesnt double the amount of work. Always assume that any sorting operation is`n*log(n)`

## Quadratic Time

`n^2` -> Every element in a collection has to be compared to every other element. 'The handshake problem'

## Exponential Time

`2^n` -> If you add a 'single' element to a collection, the processing power required doubles

## Exaples:

### String reverse

```js
function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}
```

abc -> cba

abcdefghijklmnopqrstuvwxyz -> zyxwvutsrqponmlkjihgfedcba

`Each additional character = 1 step through 1 loop`

`This would be 'N', or 'linear' runtime`

### Steps Algorithm

```js
function steps1(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }

        console.log(stair);
    }
}
```

`As 'n' increased by one, we had to do way, way more stuff, or (n*n) things total`

`this would be n^2, or quadratic runtime`
