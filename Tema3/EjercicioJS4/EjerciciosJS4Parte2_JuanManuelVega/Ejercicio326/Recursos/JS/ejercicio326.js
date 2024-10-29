function arraysConMismosElementos(array1, array2) {
    if (array1.length !== array2.length) return false;

    let array1Ordenado = array1.slice().sort();
    let array2Ordenado = array2.slice().sort();

    for (let i = 0; i < array1Ordenado.length; i++) {
        if (array1Ordenado[i] !== array2Ordenado[i]) return false;
    }

    return true;
}

// Ejemplo de uso:
let array1 = [10, 20, 30, 40];
let array2 = [40, 30, 20, 10];
console.log(arraysConMismosElementos(array1, array2));