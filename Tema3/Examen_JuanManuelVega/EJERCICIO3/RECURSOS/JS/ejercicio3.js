/*
Actividad 3

Solicitar con 6 elementos, dos valores booleanos, dos valores numéricos y dos cadenas de caracteres. Realizar un script que devuelva en la propia página web
la siguiente información:

- Si alguno de los elementos es igual a nulo deberemos pedir al usuario que vuelva a introducir todos los valores nuevamente.
-Determinar el resultado de dos operaciones lógicas realizadas con los elementos booleanos.
-Determinar el resultado de dos operaciones ariméticas realizadas con los elements númericos.
Crear un nuevo array que ordene los valores de forma que estén primero los dos booleanos, a continuación las dos cadenas y finalmente los dos números 
cada par de ellos ordenados de mayor a menor, y muéstralo por pantalla.

Por ejemplo, a partir de los elementos introducidos se crea el siguiente array:
    valores = [true, null, false, "hola", "adiós",2];
Los valores no son váliidos vuelve a introducirlos:
    valores = [true, 5, false, "hola", "adiós",2];
Debería pintar en la página HTM:
-La cadena mayor es adiós.
-La operación and es false y la operación or es true.
-La suma de los dos números es 7 y la resta es 3.
-valores_ordenados = [true, false, "adiós", "hola", 5, 2];
*/

var booleanos = [];
var numeros = [];
var cadenas = [];
var valores;

/*
 Pide al usuario que introduzca los valores y los almacena en los arrays correspondientes.
 Si alguno de los valores es nulo, vuelve a pedirlos.
*/

do {
    booleanos[0] = confirm("Introduce un valor booleano");
    booleanos[1] = confirm("Introduce otro valor booleano");
    numeros[0] = Number(prompt("Introduce un valor numérico"));
    numeros[1] = Number(prompt("Introduce otro valor numérico"));
    cadenas[0] = prompt("Introduce una cadena de caracteres");
    cadenas[1] = prompt("Introduce otra cadena de caracteres");

    valores = booleanos.concat(numeros, cadenas);
    if (valores.includes(null) || valores.includes("")) {
        alert("Algunos valores son nulos. Por favor, introduce todos los valores nuevamente.");
    }
} while (valores.includes(null) || valores.includes(""));

/*
 Calcula las operaciones lógicas y ariméticas.
*/

var and = booleanos[0] && booleanos[1];
var or = booleanos[0] || booleanos[1];
var suma = numeros[0] + numeros[1];
var resta = numeros[0] - numeros[1];

/*
 Encuentra la cadena mayor.
*/

var maxCadena = cadenas[0] > cadenas[1] ? cadenas[0] : cadenas[1];
var valores_ordenados = booleanos.sort((a, b) => b - a).concat(cadenas.sort((a, b) => b.localeCompare(a)), numeros.sort((a, b) => b - a));

/*
 Sacamos por pantalla
*/

document.write("-La cadena mayor es " + maxCadena + ".<br/>");
document.write("-La operación and es " + and + " y la operación or es " + or + ".<br/>");
document.write("-La suma de los dos números es " + suma + " y la resta es " + resta + ".<br/>");
document.write("-valores_ordenados = " + valores_ordenados + ";<br/>");