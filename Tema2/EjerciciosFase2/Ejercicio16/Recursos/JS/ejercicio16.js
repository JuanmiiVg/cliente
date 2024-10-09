const num1 = parseInt(prompt("Ingresa el primer número:"));
const num2 = parseInt(prompt("Ingresa el segundo número:"));

function suma_triple(a, b) {
    const suma = a + b;

    if (a === b) {
        return suma * 3;
    } else {
        return suma;
    }
}

console.log("El resultado es:", suma_triple(num1, num2));