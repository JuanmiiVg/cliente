const texto = prompt("Ingresa una cadena de texto:");

function mayus_primera_letra(cadena) {
    /*
    split(' ') para dividir la cadena en un array de palabras
    map() para recorrer cada palabra, convierte la primera letra a
    mayúscula con toUpperCase()
    palabra sin cambios con slice(1)
    join(' ') une las palabras nuevamente en una cadena
    */
    return cadena.split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
}

console.log("Cadena con la primera letra de cada palabra en mayúscula:", mayus_primera_letra(texto));