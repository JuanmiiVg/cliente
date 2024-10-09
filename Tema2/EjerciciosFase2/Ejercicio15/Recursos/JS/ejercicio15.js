const numero = parseInt(prompt("Ingresa un número:"));

function diferencia_13(num) {
    const diferencia = Math.abs(num - 13);
    
    if (num > 13) {
        return diferencia * 2;
    } else {
        return diferencia;
    }
}

console.log("La diferencia es:", diferencia_13(numero));