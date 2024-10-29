const mapaGeolocalizacion = new Map();

mapaGeolocalizacion.set("Madrid", {latitud: 40.4167, longitud: -3.7033});
mapaGeolocalizacion.set("Barcelona", {latitud: 41.3851, longitud: 2.1734});
mapaGeolocalizacion.set("Valencia", {latitud: 39.4699, longitud: -0.3763});
mapaGeolocalizacion.set("Sevilla", {latitud: 37.3776, longitud: -5.9963});
mapaGeolocalizacion.set("Zaragoza", {latitud: 41.6488, longitud: -0.8891});

for (let [ciudad, {latitud, longitud}] of mapaGeolocalizacion) {
    console.log(`La ciudad de ${ciudad} tiene una latitud de ${latitud} y una longitud de ${longitud}`);
}