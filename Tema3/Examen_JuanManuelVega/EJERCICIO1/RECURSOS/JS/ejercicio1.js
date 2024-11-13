/*
Ejercicio 1

Escribe en JavaScript un programa que pida un número por teclado y con él construir en una página html el siguiente patron usando bucles.

Por ejemplo si introducimos 5 se debe pintar:

*****
 ****
  ***
   **
    *

*/

var numero = prompt("Introduce un número: ");
var patron = "";

for (var i = 0; i < numero; i++) {
    for (var j = 0; j < numero - i; j++) {
        patron += "*";
    }
    patron += "<br>";
}

document.write(patron);