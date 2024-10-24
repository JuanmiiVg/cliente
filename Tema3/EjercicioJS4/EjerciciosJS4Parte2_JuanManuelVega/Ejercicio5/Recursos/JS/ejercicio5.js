let arrayConElementos = [1000, 2000, 3000, 1000, 4000, 5000, 6000, 2000, 7000, 8000, 4000];
let elementosDuplicados = [];


for (let i = 0; i < arrayConElementos.length; i++) {
    let elementoActual = arrayConElementos[i];
    let numeroC = 0;

    // Contamos cuántas veces aparece el elemento en el array
    for (let j = 0; j < arrayConElementos.length; j++) {
        if (arrayConElementos[j] === elementoActual) {
            numeroC++;
        }
    }

    // Si el elemento aparece más de una vez, lo agregamos a elementosDuplicados
    if (numeroC > 1) {
        // Verificamos si el elemento ya está en el array de duplicados
        let yaAgregado = false;
        for (let k = 0; k < elementosDuplicados.length; k++) {
            if (elementosDuplicados[k] === elementoActual) {
                yaAgregado = true;
                break;
            }
        }

        // Si no ha sido agregado, lo añadimos
        if (!yaAgregado) {
            elementosDuplicados.push(elementoActual);
        }
    }
}

console.log("Elementos duplicados:", elementosDuplicados);