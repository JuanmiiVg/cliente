const fechaOperaciones = {
  difFechas: function (fecha1, fecha2) {
    const diffTime = Math.abs(fecha2 - fecha1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  },

  maxFecha: function (fecha1, fecha2) {
    return fecha1 > fecha2 ? fecha1 : fecha2;
  },

  testFecha: function (fechaStr) {
    return !isNaN(Date.parse(fechaStr));
  },

  ayerFecha: function (fecha) {
    const ayer = new Date(fecha);
    ayer.setDate(fecha.getDate() - 1);
    return ayer;
  },

  mañanaFecha: function (fecha) {
    const mañana = new Date(fecha);
    mañana.setDate(fecha.getDate() + 1);
    return mañana;
  },
};

// Ejemplo de uso:
const fecha1 = new Date("2023-10-01");
const fecha2 = new Date("2023-10-15");
console.log(fechaOperaciones.difFechas(fecha1, fecha2)); // Diferencia en días
console.log(fechaOperaciones.maxFecha(fecha1, fecha2)); // Fecha más reciente
console.log(fechaOperaciones.testFecha("2023-10-01")); // true
console.log(fechaOperaciones.ayerFecha(fecha1)); // Día anterior
console.log(fechaOperaciones.mañanaFecha(fecha1)); // Día siguiente
