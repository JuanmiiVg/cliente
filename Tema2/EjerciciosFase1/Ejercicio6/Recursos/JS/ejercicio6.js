let nota1 = parseInt(prompt("Ingrese primer nota:",""));
let nota2 = parseInt(prompt("Ingrese segunda nota:",""));
let nota3 = parseInt(prompt("Ingrese tercer nota:",""));
let suma = nota1 + nota2 + nota3;
let promedio = suma/3;

if (promedio >= 7) {
    document.write("Promocionado<br>");
}

let clave1 = prompt("Ingrese una clave:","");
let clave2 = prompt("Ingrese nuevamente la clave:","");
if (clave1 == clave2) {
    document.write("Claves iguales<br>");
} else {
    document.write("Claves diferentes<br>");
}