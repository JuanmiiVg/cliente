// Error en tiempo de desarrollo (falta un paréntesis de cierre)
/*
function errorSintaxis {
    console.log("Esto tiene un error de sintaxis");
}
*/

// Error en tiempo de ejecución
function errorEjecucion() {
  let obj = null;
  console.log(obj.propiedad);
}
