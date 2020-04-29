setTimeout(() => console.log(1), 0);

const p = Promise.resolve()
    .then(() => console.log(2))
    .finally(() => console.log(3));

console.log(4);

p.then(() => console.log(5));

const p2 = new Promise((resolve) => {
    console.log(6);
    resolve();
}).then(() => console.log(7));

// answer

// 4, 6, 2, 7, 3, 5, 1

// finally = then in this case
