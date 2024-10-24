//Matriz de 1 dimensión
function eliminarElementoDeArray(array, elementoAEliminar) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== elementoAEliminar) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

let array1Dimension = [2, 4, 5, 9];
let elementoAEliminar = 5;
let resultado1Dimension = eliminarElementoDeArray(array1Dimension, elementoAEliminar);

console.log("Matriz de 1 dimension, Resultados:", resultado1Dimension); // Imprime [2, 4, 9]


//Matriz de 2 dimensiones
function eliminarElementoDeMatriz(matriz, elementoAEliminar) {
    let resultado = [];
    for (let i = 0; i < matriz.length; i++) {
        let nuevaFila = [];
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] !== elementoAEliminar) {
                nuevaFila.push(matriz[i][j]);
            }
        }
        resultado.push(nuevaFila);
    }
    return resultado;
}

let matrix2Dimensiones = [
    [1, 2, 3],
    [4, 5, 6],
    [5, 7, 8]
];
let elementoAEliminar2 = 5;
let resultado2Dimension = eliminarElementoDeMatriz(matrix2Dimensiones, elementoAEliminar2);

console.log("Matriz de 2 dimensiones, Resultados:", resultado2Dimension);