const textoOriginal = prompt("Ingresa el texto original:");
const textoInsertar = prompt("Ingresa la cadena que deseas insertar:");
const posicion = parseInt(prompt("Ingresa la posición en la que deseas insertar (por defecto es 1):")) || 1;

function insert(cadena, insertar, posicion = 1) {

    if (insertar) {

        posicion = Math.max(0, Math.min(posicion, cadena.length));
        //Utilizo slice() para insertar la nueva cadena en la posición especificada.
        return cadena.slice(0, posicion) + insertar + cadena.slice(posicion);
    } else {
        return cadena;
    }
}

console.log("Resultado:", insert(textoOriginal, textoInsertar, posicion));