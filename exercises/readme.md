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

## Big 'O' Notation

`O(1)` -> Contant

```js
function exampleConstantFunc(n) {
    return n * n;
}
```

`O(n)` -> Linear

```js
function exampleLinear(n) {
    for (var i = 0; i < n; i++) {
        console.log(i);
    }
}
```

`O(log(n))` -> Logarithmic

```js
function log(n) {
    for (let i = 1; i < n; i *= 2) {
        const result = i;
        console.log(result);
    }
}
```

`O(n^2)` -> Quadratic

```js
for (int i = 0; i < n; i += c) {
    for (int j = 0; j < n; j += c) {
    // some O(1) expressions
    }
}
```

## Identifying Runtime Complexity

iterating with a simple for loop through a single collection? -> Probably `O(n)`

Iterating through half a collection? -> Still `O(n)`. There are no contants in runtime

Iterating through two 'different' collections with separate for loops? -> `O(n + m)`

Two nested for loops iterating over the same collection? -> `O(n^2)`

Two nested for loops iterating over different collections? -> `O(n*m)`

Sorting? -> `O(n*log(n))`

Searching a sorted array -> `O(log(n))`

## Space Complexity is a thing too

how much more memory is required by doubling the problem set?

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

---

## memoization

Store the arguments of each function call along with the result. If the function is called again with the same arguments, return the precomputed result, rather than running the function again

---

## Data Structure

Ways of organizing information with optimal 'runtime complexity' for adding or removing records

Javascript natively implements several dara structures. `You will still be asked about 'inferior' data structures`

Functionality of a JS Array (big, small thing is queue does)

### Queue

Ticketing Counter

Person -> Person -> Person -> Person -> Person

Enqueuing or adding

Dequeuing or removing

FIFO (First In First Out)

```
Queue               Array Equivalent
---------------------------------------
Add to queue        array.unshift();
---------------------------------------
Remove from queue   array.pop();
```

### Stack

add RecordFirst -> remove RecordFirst

FILO (First In Last Out)

methods:

push -> Add a record to the stack

pop -> Remove the 'top' record in the stack

peek -> Return the 'top' record without popping it

### Linked Lists

```
    Head                                           Tail
['Hi' | 0-]->['There' | 0-]->['How`re' | 0-]->['You?' | 0-]-> null

['Hi' | 0-]->   -> node
['There']       -> data
[| 0-]->        -> reference to next node
```

```js
const nodeOne = {
    data: 123,
};

const nodeTwo = {};

nodeOne.next = nodeTwo;
```

```
[123 | 0-]->[456 | 0-]->
 data next   data next
```

### Tree

```
        ---[20]---      <- Node
        |   |    |
       [0] [40] [-15]       |----------|
    ----|----     |         |   data   |
    |   |   |     |         |----------|
  [12] [-2] [1]  [-2]       |children[]|
                            |----------|
                               A node
```

20 is the parent of 0, 40, and -15

12 and -2 are siblings

Iterating through a tree = traversal

There are different orders of traversal

-   Breadth-First Traversal

```
20, 0, 40, -15, 12, -2, 1, -2

Start here ->     ---[20]---
                  |   |    |
Then here ->     [0] [40] [-15]
               ----|----    |
               |   |   |    |
Then here -> [12] [-2] [1] [-2]
```

-   Depth-First Traversal

```
20, 0, 12, -2, 1, 40, -15, -2

        ---[20]---
        |   |    |
       [0] [40] [-15]
    ----|----     |
    |   |   |     |
  [12] [-2] [1]  [-2]
```

### Binary search tree

```
             [10]
        ------ | -----
        |            |
       [0]         [12]
    ----|----    ----|----
    |       |    |       |
  [-1]     [5]  [11]    [20]
                      ----|----
                      |       |
                     [17]    [99]
```

```
            __________________
            | value/data/key |
            |-------|--------|
            | left  | right  |
            |_______|________|

value > left.value      value < right.value

```

how add ? [ add | -20 ];

loop(value) { value > left.value; value < right.value }

### Binary tree

2 child only (not value < or > left|right)

```
             [10]
        ------ | -----
        |            |
       [0]         [12]
    ----|----    ----|----
    |       |    |       |
  [-1]    [999] [11]    [20]
                      ----|----
                      |       |
                     [17]    [99]
```

# How would you design Twitter? or some big tech

## High Level Notes

-   There is no right answer

-   Every interviewer will expect a defferent answer

ask what interviewer want to disqus

-   Focus is usually on the data model

build and storage twit or users + compare with web

-   Dont mention specific technologies

Needs framework for build ui tweets fast and for this i choose framework (angular, react, vue)

-   Draw stuff

draw diagramm

-   Talk

No silence! Ask questions!

## Stratagy

-   Identify Two Core Features

Draw sketch.

Boxes (Trending, user feeds, follower, head)

Tweet

-   Possible Implementation

What does then click on tweet

-   Identify and Address Difficulties

Tweeting:

What does a tweet look like in the DB?

How to make the '#topic' and '@mention' systems?

How to implement retweets?

Feed:

How to show interesting tweets at top of feed?

-   Solutions for scaling

Scalling for Users:

    Caching:

```
    User
      |
    Server  -> Memory Store (memChached or Redis)
      |
    Database
```

    Deployment Options:

```
         User
          |
    Load Balanser
    |     |       |
  Server Server Server
    |      |        |
    _______|_________
           |
           DB

```

# Sorting Algorithm

```
    Name        Worst Case Runtime  Difficulty
 BubbleSort             n^2           easiest
SelectionSort           n^2           easiest
  MergeSort           n*log(n)        medium
```
