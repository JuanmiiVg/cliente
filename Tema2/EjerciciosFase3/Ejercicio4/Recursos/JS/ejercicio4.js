const texto = prompt("Ingresa una cadena:");
const numCaracteres = parseInt(prompt("¿Cuántos caracteres deseas extraer?"));

function sacarCaracteres(cadena, cantidad) {

    if (cantidad > cadena.length) {
        return "La cantidad solicitada excede la longitud de la cadena.";
    }
    return cadena.substring(0, cantidad);
}

console.log("Los caracteres extraídos son:", sacarCaracteres(texto, numCaracteres));