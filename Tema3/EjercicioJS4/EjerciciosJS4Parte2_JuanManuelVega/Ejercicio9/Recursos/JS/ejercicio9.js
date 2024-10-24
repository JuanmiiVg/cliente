function lanzarDados() {
    // Generamos dos números aleatorios entre 1 y 6
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;

    // Determinamos el dado más alto y el dado más bajo
    let dadoMasAlto, dadoMasBajo;

    if (dado1 > dado2) {
        dadoMasAlto = dado1;
        dadoMasBajo = dado2;
    } else {
        dadoMasAlto = dado2;
        dadoMasBajo = dado1;
    }

    // Mostrar los resultados en los inputs
    document.getElementById('dadoMasAlto').value = dadoMasAlto;
    document.getElementById('dadoMasBajo').value = dadoMasBajo;
}