const numero = parseInt(prompt("Ingresa un número:"));

function diferencia_19(num) {
    const diferencia = Math.abs(num - 19);
    
    if (num > 19) {
        return diferencia * 3;
    } else {
        return diferencia;
    }
}

console.log("El resultado es:", diferencia_19(numero));