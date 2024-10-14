// Contraseña correcta que se debe adivinar
const contraseniaCorrecta = "Pinguinos777";
let contraseniaUsuario;

// El bucle, se ejecuta al menos una vez para solicitar la contraseña
do {
    contraseniaUsuario = prompt("Introduce la contraseña:");

    // Si la contraseña es incorrecta, vuelve a solicitarla
    if (contraseniaUsuario !== contraseniaCorrecta) {
        console.log("Contraseña incorrecta, intenta nuevamente.");
    }

} while (contraseniaUsuario !== contraseniaCorrecta);

// Si la contraseña es correcta, mostramos un mensaje de éxito
console.log("¡Contraseña correcta! Has accedido al sistema.");