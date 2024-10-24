function obtenerNombreDelMes(fecha) {
    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return meses[fecha.getMonth()];
}

// Solicitamos al usuario que introduzca una fecha
var entrada = prompt("Introduce una fecha en formato YYYY-MM-DD:");
var fechaUsuario = new Date(entrada);

if (!isNaN(fechaUsuario.getTime())) {
    console.log(obtenerNombreDelMes(fechaUsuario));
} else {
    console.log("Fecha inválida. Asegúrate de usar el formato correcto.");
}