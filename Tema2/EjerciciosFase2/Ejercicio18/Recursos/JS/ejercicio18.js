const num1 = parseInt(prompt("Ingresa el primer número:"));
const num2 = parseInt(prompt("Ingresa el segundo número:"));

function esCincuenta(a, b) {
    if (a === 50 || b === 50 || (a + b) === 50) {
        return true;
    } else {
        return false;
    }
}

console.log("El resultado es:", esCincuenta(num1, num2));