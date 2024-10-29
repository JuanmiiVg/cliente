function copiaArray(array) {
    var copia = [];
    for (var i = 0; i < array.length; i++) {
        copia[i] = array[i];
    }
    return copia;
}

var array = [40, 50, 60, 70, 80];
var copia = copiaArray(array);

console.log("Array original:", array);
console.log("Copia del array:", copia);