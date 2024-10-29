var matriz = [[1,2,3], [4,5,6], [7,8,9]];

var traspuesta = [];
for (var i = 0; i < matriz[0].length; i++) {
    traspuesta[i] = [];
    for (var j = 0; j < matriz.length; j++) {
        traspuesta[i][j] = matriz[j][i];
    }
}

console.log(traspuesta);