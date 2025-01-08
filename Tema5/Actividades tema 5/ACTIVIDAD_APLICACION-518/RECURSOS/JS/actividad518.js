class Coche {
  constructor(marca, modelo) {
    this._marca = marca;
    this._modelo = modelo;
  }

  // Método público para obtener información del coche
  obtenerInfo() {
    return `Coche: ${this._marca} ${this._modelo}`;
  }

  // Método público para cambiar el modelo del coche
  cambiarModelo(nuevoModelo) {
    this._modelo = nuevoModelo;
  }
}

// Creamos una instancia de la clase Coche
const miCoche = new Coche("Toyota", "Corolla");

// Mostramos información del coche
console.log(miCoche.obtenerInfo());

// Cambiamos el modelo del coche
miCoche.cambiarModelo("Camry");

// Mostramos información actualizada del coche
console.log(miCoche.obtenerInfo());
