function calcular_Letra_DNI() {

    const numero_DNI = parseInt(prompt("Ingresa el número del DNI (sin letra):"));

    // Verificamos que el número es válido
    if (isNaN(numero_DNI) || numero_DNI < 10000000 || numero_DNI > 99999999) {
        console.log("Número de DNI no válido. Debe ser un número de 8 dígitos.");
        return;
    }

    // Secuencia de letras correspondientes al resto de la división entre 23
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

    // Calculamos el resto de la división del número del DNI entre 23
    const resto = numero_DNI % 23;

    // Obtenemos la letra correspondiente usando el resto como índice
    const letra_DNI = letras.charAt(resto);

    // Mostramos el número completo del DNI con su letra
    console.log(`El DNI completo es: ${numero_DNI}${letra_DNI}`);
}
// Llamamos a la función
calcular_Letra_DNI();