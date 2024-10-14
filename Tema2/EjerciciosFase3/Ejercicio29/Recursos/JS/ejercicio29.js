const texto = prompt("Ingresa la cadena de texto:");
const palabraBuscar = prompt("Ingresa la palabra que deseas encontrar:");

function encontrarPalabra(cadena, palabra) {
    // Observamos de que ambas cadenas no sean vacías
    if (!cadena || !palabra) {
        return `'${palabra}' no se encontró en la cadena.`;
    }

    // Convertir ambas cadenas a minúsculas
    cadena = cadena.toLowerCase();
    palabra = palabra.toLowerCase();

    // Contamos cuántas veces aparece la palabra en la cadena
    const longitudPalabra = palabra.length;
    let contador = 0;
    let indice = 0;

    // Recorremos la cadena y contamos las apariciones de la palabra
    while ((indice = cadena.indexOf(palabra, indice)) !== -1) {
        contador++;
        indice += longitudPalabra;
    }

    return `'${palabra}' se encontró ${contador} veces.`;
}

console.log(encontrarPalabra(texto, palabraBuscar));