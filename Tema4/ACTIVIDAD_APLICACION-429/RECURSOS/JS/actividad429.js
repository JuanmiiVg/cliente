function rellenarYOrdenarNumerosAleatorios(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 100) + 1;
    }
    array.sort((a, b) => {
        if (a % 10 === 0 && b % 10 !== 0) return -1;
        if (a % 10 !== 0 && b % 10 === 0) return 1;
        return 0;
    });
    return array;
}
