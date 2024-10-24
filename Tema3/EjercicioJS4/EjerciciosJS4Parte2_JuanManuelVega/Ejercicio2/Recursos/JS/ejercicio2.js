var n = parseInt(prompt("Introduce un número entero para calcular su factorial:"));

// Inicializamos la variable para el factorial
var factorial = 1;

// Verificamos si el número es negativo
if (n < 0) {
    console.log("El factorial no está definido para números negativos.");
} else {
    
    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    console.log("El factorial de " + n + " es: " + factorial);
}