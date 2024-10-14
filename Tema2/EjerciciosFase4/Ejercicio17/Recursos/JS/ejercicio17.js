function convertirTiempoADiasHorasMinutos() {

    const dias = parseInt(prompt("Ingresa la cantidad de días:"));
    
    const horas = parseInt(prompt("Ingresa la cantidad de horas:"));
    
    const minutos = parseInt(prompt("Ingresa la cantidad de minutos:"));
    
    // Verificamos que las entradas son números válidos
    if (isNaN(dias) || isNaN(horas) || isNaN(minutos)) {
        console.log("Por favor, ingresa números válidos.");
        return;
    }

    // Convertimos a segundos
    const segundos = (dias * 24 * 60 * 60) + (horas * 60 * 60) + (minutos * 60);
    
    console.log(`La cantidad total de segundos es: ${segundos}`);
}
// Llamamos a la función
convertirTiempoADiasHorasMinutos();