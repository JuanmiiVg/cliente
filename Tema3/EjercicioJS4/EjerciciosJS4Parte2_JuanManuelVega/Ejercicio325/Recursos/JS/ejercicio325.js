let arrayConElementos = [1000, 2000, 3000, 1000, 4000, 5000, 6000, 2000, 7000, 8000, 4000];
let elementoMasRepetido = 0;
let numeroVecesRepetido = 0;

for (let i = 0; i < arrayConElementos.length; i++) {
    let elementoActual = arrayConElementos[i];
    let numeroC = 0;

    // Contamos cuántas veces aparece el elemento en el array
    for (let j = 0; j < arrayConElementos.length; j++) {
        if (arrayConElementos[j] === elementoActual) {
            numeroC++;
        }
    }

    // Si el elemento aparece más veces que el actual elemento más repetido, lo actualizamos
    if (numeroC > numeroVecesRepetido) {
        elementoMasRepetido = elementoActual;
        numeroVecesRepetido = numeroC;
    }
}

console.log("Elemento más repetido:", elementoMasRepetido);
console.log("Número de veces repetido:", numeroVecesRepetido);