function fibonacciTresAnteriores(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacciTresAnteriores(n - 1) + fibonacciTresAnteriores(n - 2) + fibonacciTresAnteriores(n - 3);
}

for (let i = 0; i < 10; i++) {
    console.log(fibonacciTresAnteriores(i));
}