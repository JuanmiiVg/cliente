const num1 = parseInt(prompt("Ingresa el primer número:"));
const num2 = parseInt(prompt("Ingresa el segundo número:"));

function Rango50a99(a, b) {
    if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
        return true;
    } else {
        return false;
    }
}

console.log("El resultado es:", Rango50a99(num1, num2));