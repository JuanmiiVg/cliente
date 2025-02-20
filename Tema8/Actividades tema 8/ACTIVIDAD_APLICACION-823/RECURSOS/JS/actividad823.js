function generarError() {
  let tipoError = document.getElementById("errorTipo").value;

  try {
    switch (tipoError) {
      case "1":
        throw new Error("Este es un error genérico.");
      case "2":
        throw new TypeError("Este es un error de tipo.");
      case "3":
        throw new ReferenceError("Este es un error de referencia.");
      case "4":
        throw new SyntaxError("Este es un error de sintaxis.");
      case "5":
        throw new RangeError("Este es un error de rango.");
      case "6":
        throw new EvalError("Este es un error de evaluación.");
      case "7":
        throw new URIError("Este es un error de URI.");
      default:
        console.log("No se ha seleccionado un error válido.");
    }
  } catch (error) {
    console.error(`Se ha capturado un error: ${error.name} - ${error.message}`);
  }
}
