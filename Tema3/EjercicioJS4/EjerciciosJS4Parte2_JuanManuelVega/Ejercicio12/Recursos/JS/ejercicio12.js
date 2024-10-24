function dibujarX() {
    const numeroImpar = parseInt(document.getElementById('numeroImpar').value);
    const patronX = document.getElementById('patronX');

    // Verificamos que el número es impar
    if (numeroImpar % 2 === 0) {
        patronX.textContent = "Por favor, ingresa un número impar.";
        return;
    }

    let resultado = '';

    // Generar el patrón de la X
    for (let i = 0; i < numeroImpar; i++) {
        for (let j = 0; j < numeroImpar; j++) {
            if (j === i || j === (numeroImpar - 1 - i)) {
                resultado += 'X';
            } else {
                resultado += ' ';
            }
        }
        resultado += '\n';
    }

    patronX.textContent = resultado;
}