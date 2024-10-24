var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Solicitamos al usuario que introduzca el número de DNI y la letra
var numeroDNI = parseInt(prompt("Introduce el número de DNI (8 dígitos):"));
var letraDNI = prompt("Introduce la letra del DNI:").toUpperCase();

// Comprobamos si el número es válido
if (numeroDNI < 0 || numeroDNI > 99999999) {
    console.log("El número proporcionado no es válido.");
} else {
    // Calculamos la letra correspondiente
    var resto = numeroDNI % 23;
    var letraCalculada = letras[resto];

    // Comparamos la letra calculada con la letra indicada por el usuario
    if (letraDNI !== letraCalculada) {
        console.log(`La letra indicada "${letraDNI}" no es correcta. La letra correcta es "${letraCalculada}".`);
    } else {
        console.log(`El número y la letra del DNI son correctos.`);
    }
}