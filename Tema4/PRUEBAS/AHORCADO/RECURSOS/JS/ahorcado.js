// Función para validar y normalizar las palabras ingresadas
function validarYNormalizarPalabras(palabras) {
    return palabras.filter(p => p.length >= 6).map(p => p.toUpperCase());
}

// Función para obtener una palabra aleatoria del array
function obtenerPalabraAleatoria(palabras) {
    const indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}

// Función principal del juego
function jugarAhorcado() {
    // Solicitar palabras al usuario
    let palabras = [];
    while (palabras.length < 8) {
        const palabra = prompt("Ingresa una palabra de al menos 6 caracteres:");
        palabras.push(palabra);
    }

    // Validar y normalizar palabras
    palabras = validarYNormalizarPalabras(palabras);

    // Si no todas las palabras son válidas, volver a pedir
    while (palabras.length < 8) {
        alert("Algunas palabras no son válidas. Vuelve a ingresarlas.");
        palabras = [];
        while (palabras.length < 8) {
            const palabra = prompt("Ingresa una palabra de al menos 6 caracteres:");
            palabras.push(palabra);
        }
        palabras = validarYNormalizarPalabras(palabras);
    }

    // Obtener una palabra aleatoria para el juego
    const palabraSecreta = obtenerPalabraAleatoria(palabras);
    let progreso = palabraSecreta[0]; // Mostrar la primera letra como pista inicial
    let intentos = 0;

    // Ciclo del juego
    while (progreso.length < palabraSecreta.length) {
        const intento = prompt(`Adivina la palabra: ${progreso.padEnd(palabraSecreta.length, "_")}`);
        if (intento.toUpperCase() === palabraSecreta) {
            alert(`¡Felicidades! Adivinaste la palabra: ${palabraSecreta}`);
            return;
        }
        intentos++;
        progreso = palabraSecreta.substring(0, intentos + 1); // Revelar una letra más
    }

    // Si se muestran todas las letras y no adivina
    alert(`¡Perdiste! La palabra era: ${palabraSecreta}`);
}

// Iniciar el juego
jugarAhorcado();