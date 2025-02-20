function pruebaReturn() {
  try {
    throw new Error("Se ha producido un error.");
    return "Valor desde TRY";
  } catch (error) {
    console.log("Catch ejecutado:", error.message);
    return "Valor desde CATCH";
  } finally {
    console.log("Finally ejecutado.");
    return "Valor desde FINALLY";
  }
}

function ejecutarPrueba() {
  let resultado = pruebaReturn();
  console.log("Resultado devuelto:", resultado);
}
