function encontrarElMaximo(array) {
    var maximo = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i];
        }
    }
    
    return maximo;
}

var numeros = [25, 48, 3, 77, 12];
console.log(encontrarElMaximo(numeros));