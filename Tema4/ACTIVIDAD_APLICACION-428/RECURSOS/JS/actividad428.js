function rellenarMatriz(matriz) {
    let nuevaMatriz = matriz.map(fila => fila.map((val, i) => (fila[i] === val ? val : 0)));
    return nuevaMatriz;
  }
  document.write("Introduce 16 números para la matriz 4x4:");
  let matriz4x4 = [];
  for (let i = 0; i < 4; i++) {
    matriz4x4[i] = [];
    for (let j = 0; j < 4; j++) {
      matriz4x4[i][j] = parseInt(prompt(`Introduce el valor para la posición (${i}, ${j}):`));
    }
  }
  document.write("<p>Matriz original:</p>");
  document.write(JSON.stringify(matriz4x4) + "<br>");
  document.write("<p>Matriz rellenada:</p>");
  document.write(JSON.stringify(rellenarMatriz(matriz4x4)));