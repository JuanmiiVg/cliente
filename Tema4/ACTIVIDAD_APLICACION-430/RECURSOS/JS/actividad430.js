function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

const numeroUsuario = parseInt(prompt("Introduce un número: "), 10);
console.log(`El número ${numeroUsuario} es ${esPrimo(numeroUsuario) ? 'primo' : 'no primo'}.`);