const a = parseFloat(prompt("Ingresa el coeficiente a:"));
const b = parseFloat(prompt("Ingresa el coeficiente b:"));
const c = parseFloat(prompt("Ingresa el coeficiente c:"));

function resolver_Ecuacion_Segundo_Grado(a, b, c) {
    // Calculamos el discriminante
    const discriminante = b * b - 4 * a * c;

    // Verificamos el discriminante (parte de la fórmula cuadrática bajo la raíz cuadrada)

    if (discriminante > 0) {
        // Dos soluciones reales y diferentes
        const solucion1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const solucion2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return `Las soluciones son: x1 = ${solucion1}, x2 = ${solucion2}`;
    } else if (discriminante === 0) {
        // Una solución real doble
        const x = -b / (2 * a);
        return `La solución es: x = ${x}`;
    } else {
        // No hay soluciones reales
        return "No hay soluciones reales (discriminante < 0)";
    }
}

const resultado = resolver_Ecuacion_Segundo_Grado(a, b, c);
console.log(resultado);