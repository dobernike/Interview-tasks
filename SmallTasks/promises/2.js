setTimeout(() => console.log(1), 0);

const p = Promise.resolve()
    .then(() => {
        console.log(2.1);
        return new Promise((resolve) => {
            console.log(2.2);
            setTimeout(() => {
                console.log(2.3);
                resolve();
            }, 0);
        });
    })
    .finally(() => console.log(3));

console.log(4);

p.then(() => console.log(5));

const p2 = new Promise((resolve) => {
    console.log(6);
    resolve();
})
    .then(() => console.log(7))
    .then(() => console.log(8));

// answer

// 4, 6, 2.1, 2.2, 7, 8, 1, 2.3, 3, 5
