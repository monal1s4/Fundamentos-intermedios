function sigma(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}
console.log(sigma(3));
console.log(sigma(5));