function esBisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        return true;
    }
    return false;
}
const anioUsuario = Number(prompt("Ingrese un año:"));
console.log("El año ingresado es bisiesto:", esBisiesto(anioUsuario));