let hoy = new Date();
let navidad = new Date(hoy.getFullYear(), 11, 25);

if (hoy > navidad) {
    navidad.setFullYear(hoy.getFullYear() + 1);
}

//1000 milisegundos , 60 segundos, 60 minutos, 24 horas
let dias = (navidad - hoy) / (1000 * 60 * 60 * 24);

document.write(`Faltan ${Math.floor(dias)} días para la próxima Navidad.`);