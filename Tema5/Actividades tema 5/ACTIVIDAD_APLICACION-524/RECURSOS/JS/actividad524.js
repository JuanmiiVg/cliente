class Pelicula {
  constructor(jsonData) {
    const data = JSON.parse(jsonData);
    this.nombre = data.nombre;
    this.anoEstreno = data.anoEstreno;
    this.duracion = data.duracion;
    this.genero = data.genero;
    this.actores = data.actores;
    this.urlCartel = data.urlCartel;
    this.director = data.director;
  }

  mostrarInformacion() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Año de Estreno: ${this.anoEstreno}`);
    console.log(`Duración: ${this.duracion}`);
    console.log(`Género: ${this.genero}`);
    console.log(`Actores: ${this.actores.join(", ")}`);
    console.log(`URL del Cartel: ${this.urlCartel}`);
    console.log(`Director: ${this.director}`);
  }
}

const peliculaData = JSON.stringify({
  nombre: "El corredor del laberinto",
  anoEstreno: 2014,
  duracion: "113 min",
  genero: "Ciencia ficción, Acción",
  actores: [
    "Dylan O'Brien",
    "Kaya Scodelario",
    "Thomas Brodie-Sangster",
    "Will Poulter",
    "Ki Hong Lee",
    "Patricia Clarkson",
  ],
  urlCartel:
    "https://images.justwatch.com/poster/238849406/s718/el-corredor-del-laberinto.%7Bformat%7D",
  director: "Wes Ball",
});

const pelicula = new Pelicula(peliculaData);
pelicula.mostrarInformacion();
