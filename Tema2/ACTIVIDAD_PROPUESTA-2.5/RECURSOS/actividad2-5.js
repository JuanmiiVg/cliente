let mensaje="Escriba su nombre";
let respuesta=prompt(mensaje);
console.log(`El usuario escribió:${respuesta}`);

let mensaje2 = "¿Estás seguro de querer abandonar el programa?";
let respuesta2 = confirm(mensaje2);
console.log(`Respuesta del cuadro de diálogo: ${respuesta2}`);

const alerta = 1;
alert(`Cerrando programa ${alerta}`);

console.log("%cFIN DEL PROGRAMA","font-weight:bold; color:blue; text-decoration:underline;");