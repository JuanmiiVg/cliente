function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
const fahrenheit = Number(prompt("Ingrese una cantidad en grados Fahrenheit: "));
console.log(`${fahrenheit} grados Fahrenheit es igual a ${fahrenheitACelsius(fahrenheit)} grados Celsius`);