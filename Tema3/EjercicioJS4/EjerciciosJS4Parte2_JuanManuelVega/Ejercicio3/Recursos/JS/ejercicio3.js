let arrayConDuplicados = [1000, 2000, 3000, 1000, 4000, 5000, 6000, 2000, 7000, 8000, 4000];
let arraySinDuplicados = [];

for (let i = 0; i < arrayConDuplicados.length; i++) {
    let elementoActual = arrayConDuplicados[i];

    // Comprobamos si el elemento ya está en el array sin duplicados
    let encontrado = false;
    for (let j = 0; j < arraySinDuplicados.length; j++) {
        if (arraySinDuplicados[j] === elementoActual) {
            encontrado = true;
            break;
        }
    }

    // Si no lo encontramos, lo añadimos al array sin duplicados
    if (!encontrado) {
        arraySinDuplicados.push(elementoActual);
    }
}

console.log("Array sin duplicados:", arraySinDuplicados);