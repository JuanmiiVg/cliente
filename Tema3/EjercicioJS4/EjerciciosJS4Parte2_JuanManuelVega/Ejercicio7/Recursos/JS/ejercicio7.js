var cadena = prompt("Introduce una cadena de texto:");

// Eliminamos espacios y convertimos la cadena a minúsculas
var cadenaSinEspacios = cadena.replace(/\s+/g, '').toLowerCase();

// Invertimos la cadena
var cadenaInvertida = '';
for (let i = cadenaSinEspacios.length - 1; i >= 0; i--) {
    cadenaInvertida += cadenaSinEspacios[i];
}

// Determinamos si es un palíndromo
if (cadenaSinEspacios === cadenaInvertida) {
    console.log(`La cadena "${cadena}" es un palíndromo.`);
} else {
    console.log(`La cadena "${cadena}" no es un palíndromo.`);
}