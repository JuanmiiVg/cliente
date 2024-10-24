var elementos = ['piña', 'uva', 'plátano', 'piña', 'uva', 'uva', 'uva'];
var maxFrecuencia = 0;
var elementoMasFrecuente;

// Bucle para contar la frecuencia de cada elemento
for (var i = 0; i < elementos.length; i++) {
    var contador = 1;

    // Comparamos el elemento actual con los siguientes elementos
    for (var j = i + 1; j < elementos.length; j++) {
        if (elementos[i] === elementos[j]) {
            contador++;
        }
    }

    // Actualizamos el elemento más frecuente si el contador es mayor
    if (contador > maxFrecuencia) {
        maxFrecuencia = contador;
        elementoMasFrecuente = elementos[i];
    }
}

console.log(`El elemento más frecuente es: ${elementoMasFrecuente}`);