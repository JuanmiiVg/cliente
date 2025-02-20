// ErrorFatal
/*
function errorFatal {
    console.log("Este es un error de sintaxis");
}
*/

// Aviso
function generarAviso() {
  console.warn(
    "Este es un aviso: una variable no está definida correctamente."
  );
}

// Excepción
function generarExcepcion() {
  try {
    let numero = null;
    console.log(numero.toUpperCase());
  } catch (error) {
    console.error("Se ha capturado una excepción:", error.message);
  }
}
