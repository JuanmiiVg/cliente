const num = Number(prompt("Introduce un número"));
const resultado = esPar(num);
console.log(`El número ${num} ${resultado ? "es" : "no es"} par`);

function esPar(num) {
    // Caso base: si el número es igual a 0, es par
    if (num === 0) {
        return true;
    }
    // Caso base: si el número es igual a 1, es impar
    if (num === 1) {
        return false;
    }
    // Caso recursivo: restar 2 y llamar a la función nuevamente
    return esPar(num - 2);
}