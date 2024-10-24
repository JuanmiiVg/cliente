function analizarCadena(cadena) {
    
    if (cadena.length === 0) {
        console.log("La cadena está vacía.");
        return;
    }

    if (cadena === cadena.toUpperCase()) {
        console.log("La cadena está formada solo por mayúsculas.");
    } 
    else if (cadena === cadena.toLowerCase()) {
        console.log("La cadena está formada solo por minúsculas.");
    } 
    else {
        console.log("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
    }
}

analizarCadena("HOLA SOY JUANMNAUEL VEGA HOLA");
analizarCadena("hola soy juanma vega holaa");
analizarCadena("Hola Soy JuanManuel Vega hOoOlAaAa");
analizarCadena("");