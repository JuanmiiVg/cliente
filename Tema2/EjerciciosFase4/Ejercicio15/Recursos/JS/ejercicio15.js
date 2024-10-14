const numeroUsuario = parseInt(prompt("Ingresa un número para calcular su factorial:"));

function calcularFactorial(numero) {
    // Si el número es 0 o 1, su factorial es 1
    if (numero === 0 || numero === 1) {
        return 1;
    }

    // Inicializamos el resultado en 1
    let resultado = 1;

    // Calculamos el factorial
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    
    return resultado;
}

// Verificamos que el número sea válido (entero y no negativo)
if (isNaN(numeroUsuario) || numeroUsuario < 0) {
    console.log("Por favor, ingresa un número entero no negativo.");
} else {
    // Calculamos
    const factorial = calcularFactorial(numeroUsuario);
    console.log(`El factorial de ${numeroUsuario} es: ${factorial}`);
}