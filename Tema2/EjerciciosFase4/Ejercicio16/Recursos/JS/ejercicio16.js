// Inicializamos una variable
let a = 5;

console.log("Valor inicial de a:", a); // Muestra: 5

// Ejemplo de a++ (Post-incremento)
// Primero devuelve el valor actual de 'a', luego incrementa
console.log("\nEjemplo de a++:");
console.log("Valor de a antes de a++:", a++); // Muestra: 5 (se devuelve el valor original antes de incrementar)
console.log("Valor de a después de a++:", a); // Muestra: 6 (el valor ya está incrementado)

// Ejemplo de ++a (Pre-incremento)
// Primero incrementa 'a', luego devuelve el valor
console.log("\nEjemplo de ++a:");
console.log("Valor de a antes de ++a:", ++a); // Muestra: 7 (primero incrementa, luego devuelve el valor incrementado)
console.log("Valor de a después de ++a:", a); // Muestra: 7 (el valor sigue siendo el incrementado)

// Ejemplo de a-- (Post-decremento)
// Primero devuelve el valor actual de 'a', luego decrementa
console.log("\nEjemplo de a--:");
console.log("Valor de a antes de a--:", a--); // Muestra: 7 (se devuelve el valor original antes de decrementar)
console.log("Valor de a después de a--:", a); // Muestra: 6 (el valor ya está decrementado)

// Ejemplo de --a (Pre-decremento)
// Primero decrementa 'a', luego devuelve el valor
console.log("\nEjemplo de --a:");
console.log("Valor de a antes de --a:", --a); // Muestra: 5 (primero decrementa, luego devuelve el valor decrementado)
console.log("Valor de a después de --a:", a); // Muestra: 5 (el valor sigue siendo el decrementado)

// Resumen final:
console.log("\nResumen de operadores:");
console.log("a++: devuelve el valor y luego lo incrementa.");
console.log("++a: incrementa el valor y luego lo devuelve.");
console.log("a--: devuelve el valor y luego lo decrementa.");
console.log("--a: decrementa el valor y luego lo devuelve.");