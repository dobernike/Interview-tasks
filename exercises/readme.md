# Runtime Complexity

Describes the performance of an algorithm

How much more processing power/time is required to run you algorithm if we double the inputs?

## String reverse

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

## Steps Algorithm

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
