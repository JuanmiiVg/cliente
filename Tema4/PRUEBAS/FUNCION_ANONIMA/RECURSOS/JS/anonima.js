const invertida = function(cadena) {
    return cadena.split("").reverse().join("");
};

// Ejemplo de uso:
const texto = "Hola Mundo";
console.log(invertida(texto)); // Salida: "odnuM aloH"