function pow(a, b) {
    let orA = a;
    for (let i = 1; i < b; i++) {
        orA *= a;
    }
    return orA;
}

console.log(pow(2, 4));
console.log(pow(3, 3));
console.log(pow(2, 4) === 16 && pow(3, 3) === 27);
