// Función para validar y normalizar las palabras ingresadas por el usuario
function validarYNormalizarPalabras(palabras) {
    return palabras.filter(p => p.length >= 6).map(p => p.toUpperCase());
}

// Función para obtener una palabra aleatoria del array
function obtenerPalabraAleatoria(palabras) {
    const indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}

// Función principal del juego
function juego() {
    // Solicitamos las palabras del usuario
    let palabras = [];
    while (palabras.length < 8) {
        const palabra = prompt("Ingresa una palabra de al menos 6 carácteres:");
        palabras.push(palabra);
    }

    // Validamos y normalizamos las palabras ingresadas por el usuario
    palabras = validarYNormalizarPalabras(palabras);

    // Si no todas las palabras son válidas, volvemos a pedir las palabras
    while (palabras.length < 8) {
        alert("Algunas palabras no son válidas. Vuelve a ingresarlas.");
        palabras = [];
        while (palabras.length < 8) {
            const palabra = prompt("Ingresa una palabra de al menos 6 carácteres:");
            palabras.push(palabra);
        }
        palabras = validarYNormalizarPalabras(palabras);
    }

    // Obtenemos una palabra aleatoria introducia por el usuario para el juego
    const palabraSecreta = obtenerPalabraAleatoria(palabras);
    // Mostramos la primera letra como pista inicial
    let progreso = palabraSecreta[0]; 
    let intentos = 0;

    // Aquí empieza el Ciclo del juego
    while (progreso.length < palabraSecreta.length) {
        const intento = prompt(`Adivina la palabra: ${progreso} ${"_".repeat(palabraSecreta.length - progreso.length)}`);
        if (intento.toUpperCase() === palabraSecreta) {
            alert(`¡Felicidades! Adivinaste la palabra: ${palabraSecreta}`);
            return;
        }
        intentos++;
        progreso = palabraSecreta.substring(0, intentos + 1); // Revelamos una letra más si falla
    }

    // Si llega al final del bucle sin salir implica que muestran todas las letras y no adivina
    alert(`¡Perdiste! La palabra era: ${palabraSecreta}`);
}

// Iniciamos el juego
juego();
