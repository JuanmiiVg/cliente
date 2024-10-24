function calcularProducto(matriz) {
    var producto = 1;

    for (var i = 0; i < matriz.length; i++) {
        producto *= matriz[i];
    }
    return producto;
}

var numeros = [5, 10, 2];
console.log(calcularProducto(numeros));