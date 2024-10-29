const tablero = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];

function verificarGanador(tablero) {
    for (let i = 0; i < 3; i++) {
        if (tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]) {
            return tablero[i][0];
        }
        if (tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i]) {
            return tablero[0][i];
        }
    }
    if (tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) {
        return tablero[0][0];
    }
    if (tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0]) {
        return tablero[0][2];
    }
    return null;
}

const ganador = verificarGanador(tablero);
if (ganador) {
    console.log(`El ganador es: ${ganador}`);
} else {
    console.log("No hay ganador.");
}