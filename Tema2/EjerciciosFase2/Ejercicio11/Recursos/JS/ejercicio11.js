//c = temperatura en Celsius y f = temperatura enFahrenheit

let temperaturaC = Number(prompt("Ingrese la temperatura en Celsius:"));
let temperaturaF = Number(prompt("Ingrese la temperatura en Fahrenheit:"));

function convertirCaF(c) {
    return (c * 9 / 5) + 32;
}

function convertirFaC(f) {
    return (f - 32) * 5 / 9;
}

console.log(`${temperaturaC}  C es ${convertirCaF(temperaturaC)}  F`);

console.log(`${temperaturaF}  F es ${convertirFaC(temperaturaF)}  C`);
