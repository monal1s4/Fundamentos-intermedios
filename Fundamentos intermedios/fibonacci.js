function fibonacci(index) {
    let fib = [0, 1];

    for (let i = 2; i <= index; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[index];
} console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7)); 