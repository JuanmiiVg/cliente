const texto = prompt("Ingresa la cadena de texto:");
const subcadena = prompt("Ingresa la subcadena que deseas contar:");

function contarSubcadena(cadena, subcadena) {
    // Observamos de que ambas cadenas no sean vacías
    if (!cadena || !subcadena) {
        return 0;
    }

    let contador = 0;
    let indice = 0;

    // Convertimos ambas cadenas a minúsculas
    cadena = cadena.toLowerCase();
    subcadena = subcadena.toLowerCase();

    // Buscamos la subcadena en la cadena principal
    while ((indice = cadena.indexOf(subcadena, indice)) !== -1) {
        contador++;
        indice += subcadena.length;
    }
    return contador;
}

console.log(`La subcadena "${subcadena}" aparece ${contarSubcadena(texto, subcadena)} veces en la cadena.`);