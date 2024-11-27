/**
 * Crea un cartón con 8 filas y 4 columnas con 20 números del 1 al 90 distribuidos de forma aleatoria.
 * @return {number[][]} Un cartón con números aleatorios.
 */
function crearCarton() {
    let carton = [];
    for (let i = 0; i < 8; i++) {
        carton.push([]);
        for (let j = 0; j < 4; j++) {
            let numAleatorio = Math.floor(Math.random() * 90) + 1;
            while (carton[i].includes(numAleatorio)) {
                numAleatorio = Math.floor(Math.random() * 90) + 1;
            }
            carton[i].push(numAleatorio);
        }
    }
    return carton;
}

/**
 * Comprueba cuántos números de un cartón están en una lista de números.
 * @param {number[][]} carton El cartón a comprobar.
 * @param {number[]} numeros La lista de números a comprobar.
 * @return {number} El número de aciertos.
 */
function comprobarCarton(carton, numeros) {
    let aciertos = 0;
    for (let i = 0; i < carton.length; i++) {
        for (let j = 0; j < carton[i].length; j++) {
            if (numeros.includes(carton[i][j])) {
                aciertos++;
            }
        }
    }
    return aciertos;
}

/**
 * Comprueba si hay un cartón que haya ganado.
 * @param {number[][][]} cartones El array de cartones.
 * @return {number[]} Un array con dos elementos, el primero es el número 
 * del cartón ganador y el segundo es el array de números que han salido.
 */
function bingo(cartones) {
    let numeros = [];
    let ganador = -1;
    while (ganador === -1) {
        let numAleatorio = Math.floor(Math.random() * 90) + 1;
        while (numeros.includes(numAleatorio)) {
            numAleatorio = Math.floor(Math.random() * 90) + 1;
        }
        numeros.push(numAleatorio);
        for (let i = 0; i < cartones.length; i++) {
            if (comprobarCarton(cartones[i], numeros) === 8) {
                ganador = i;
                break;
            }
        }
    }
    return [ganador, numeros];
}

let cartones = [];
for (let i = 0; i < 5; i++) {
    cartones.push(crearCarton());
}

let resultado = bingo(cartones);
document.write(`El ganador es el cart n n mero ${resultado[0] + 1} con los n meros: ${resultado[1]}`);