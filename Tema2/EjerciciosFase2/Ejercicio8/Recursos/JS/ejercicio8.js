let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let numeroIngresado = Number(prompt("Ingrese un número entre 1 y 10:"));

if (numeroIngresado === numeroAleatorio) {
    alert("Buen trabajo");
} else {
    alert("No coincide");
}