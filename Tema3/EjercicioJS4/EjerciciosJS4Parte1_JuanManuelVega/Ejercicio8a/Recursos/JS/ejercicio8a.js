function diferenciaEnDias(fecha1, fecha2) {

    var milisegundosFecha1 = fecha1.getTime();
    var milisegundosFecha2 = fecha2.getTime();
    
    // Calculamos la diferencia en milisegundos
    var diferenciaMilisegundos = Math.abs(milisegundosFecha2 - milisegundosFecha1);
    
    // Convertimos la diferencia de milisegundos a días
    var diferenciaDias = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
    
    return diferenciaDias;
}

var fechaInicio = new Date('2024-06-02');
var fechaFin = new Date('2024-01-12');
console.log(diferenciaEnDias(fechaInicio, fechaFin));