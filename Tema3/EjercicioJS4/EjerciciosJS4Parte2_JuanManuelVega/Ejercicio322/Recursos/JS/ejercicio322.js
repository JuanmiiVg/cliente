const arrayNumeros = [12, 15, 20, 30, 45, 60, 75, 90, 120, 150];

for (let i = 0; i < arrayNumeros.length; i++) {
    const numero = arrayNumeros[i];
    if (numero % 3 === 0) {
        console.log(`El número ${numero} es múltiplo de 3`);
    }
}