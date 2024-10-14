// Ejemplo de var
console.log("Ejemplo con var:");
var a = 5;

if (true) {
    var a = 10; // Redeclaración de 'a'
    console.log("Dentro del bloque (var):", a); // Salida: 10
}

console.log("Fuera del bloque (var):", a); // Salida: 10 (cambia el valor global)

// Ejemplo de let
console.log("\nEjemplo con let:");
let b = 5;

if (true) {
    let b = 10; // 'b' es diferente en este bloque
    console.log("Dentro del bloque (let):", b); // Salida: 10
}

console.log("Fuera del bloque (let):", b); // Salida: 5 (no cambia el valor global)

// Ejemplo de const
console.log("\nEjemplo con const:");
const c = 15; // Declaración de 'c'

console.log("Valor de c:", c); // Salida: 15
// c = 20; // Esto generaría un error, no se puede reasignar 'const'

// Puedes modificar propiedades de un objeto declarado como const
const objeto = { valor: 5 };
objeto.valor = 10; // Esto es válido
console.log("Valor modificado de objeto:", objeto.valor); // Salida: 10

// Intentar redeclarar const en el mismo ámbito generará un error
// const c = 20; (Esto generaría un error)

// Resumen final
console.log("\nResumen:");
console.log("Var: se puede redeclarar y su ámbito es de función.");
console.log("Let: no se puede redeclarar en el mismo ámbito y su ámbito es de bloque.");
console.log("Const: no se puede redeclarar ni reasignar, y su ámbito también es de bloque.");