var arrayNumeros = [];

for (var i = 0; i < 10; i++) {
    arrayNumeros[i] = Math.floor(Math.random() * (100 / 5 + 1)) * 5;
}

while (arrayNumeros[0] < 50) {
    arrayNumeros.splice(0, 1);
    arrayNumeros.unshift(Math.floor(Math.random() * (100 / 5 + 1)) * 5);
}

while (arrayNumeros[arrayNumeros.length - 1] > 50) {
    arrayNumeros.splice(arrayNumeros.length - 1, 1);
    arrayNumeros.push(Math.floor(Math.random() * (100 / 5 + 1)) * 5);
}

console.log(arrayNumeros);