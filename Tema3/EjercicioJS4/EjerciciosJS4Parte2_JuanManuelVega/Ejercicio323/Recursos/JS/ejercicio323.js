let arrayConDuplicados = [1000, 2000, 3000, 1000, 4000, 5000, 6000, 2000, 7000, 8000, 4000];

let elementosRepetidos = {};

for (let i = 0; i < arrayConDuplicados.length; i++) {
    let elementoActual = arrayConDuplicados[i];

    // Comprobamos si el elemento ya está en el objeto de elementos repetidos
    if (elementosRepetidos[elementoActual]) {
        elementosRepetidos[elementoActual].push(i);
    } else {
        elementosRepetidos[elementoActual] = [i];
    }
}

console.log(elementosRepetidos);