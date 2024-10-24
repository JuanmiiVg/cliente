var n = parseInt(prompt("Introduce el número de elementos de la serie de Fibonacci:"));

// Inicializamos el array de Fibonacci
var fibonacci = [];

// Generamos la serie de Fibonacci
for (var i = 0; i < n; i++) {
    if (i === 0) {
        fibonacci[i] = 0;
    } else if (i === 1) {
        fibonacci[i] = 1;
    } else {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
}

console.log("Serie de Fibonacci:", fibonacci);