const matriz = Object.create(Object.prototype, {
  nFilas: { value: 3, writable: true },
  nColumnas: { value: 3, writable: true },
  contenido: { value: [], writable: true },
});

matriz.inicializarMatriz = function (valor) {
  this.contenido = Array.from({ length: this.nFilas }, () =>
    Array(this.nColumnas).fill(valor)
  );
};

matriz.aleatoriaMatriz = function () {
  this.contenido = Array.from({ length: this.nFilas }, () =>
    Array.from(
      { length: this.nColumnas },
      () => Math.floor(Math.random() * 100) + 1
    )
  );
};

matriz.verMatriz = function () {
  console.log(this.contenido);
};

matriz.inicializarMatriz(5);
matriz.verMatriz();
matriz.aleatoriaMatriz();
matriz.verMatriz();
