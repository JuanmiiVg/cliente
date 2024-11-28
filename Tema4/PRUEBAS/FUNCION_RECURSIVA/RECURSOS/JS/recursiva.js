// Función recursiva para calcular la potencia
function potencia(base, exponente) {
    if (exponente === 0) {
        return 1; // Caso base: cualquier número elevado a 0 es 1
    }
    return base * potencia(base, exponente - 1); // Caso recursivo
}

// Programa principal
function calcularPotencia() {
    const base = parseFloat(prompt("Introduce la base:"));
    
    let exponente;
    do {
        exponente = parseInt(prompt("Introduce un exponente positivo:"), 10);
        if (exponente < 0) {
            alert("El exponente debe ser un número positivo.");
        }
    } while (exponente < 0);
    
    const resultado = potencia(base, exponente);
    alert(`El resultado de ${base} elevado a la ${exponente} es: ${resultado}`);
}

// Ejecutar el programa
calcularPotencia();