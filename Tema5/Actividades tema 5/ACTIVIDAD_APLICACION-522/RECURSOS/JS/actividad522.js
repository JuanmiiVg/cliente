class Coche {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  mostrarInformacion() {
    console.log(
      `Este coche es un ${this.marca} ${this.modelo} del año ${this.año}`
    );
  }
}

const miCoche = new Coche("Seat", "Panda", 2016);
miCoche.mostrarInformacion();
