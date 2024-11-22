function esMultiploDe10(numero) {
    return numero % 10 === 0;
}
const numero = parseInt(prompt("Ingrese un número:"));
if (numero % 10 === 0) {
    console.log("El número es múltiplo de 10.");
} else {
    console.log("El número no es múltiplo de 10.");
}