class Telefono {
  constructor(numero) {
    this.numero = numero;
  }
  llamar(numero) {
    console.log(`Llamando al ${numero} desde el ${this.numero}`);
  }
}

class Fijo extends Telefono {
  constructor(numero) {
    super(numero);
  }
  llamar(numero) {
    console.log(`Llamando al ${numero} desde la línea fija ${this.numero}`);
  }
}

class Movil extends Telefono {
  constructor(numero) {
    super(numero);
  }
  llamar(numero) {
    console.log(`Llamando al ${numero} desde el móvil ${this.numero}`);
  }
}

const fijo = new Fijo("759361937");
const movil = new Movil("035127394");

fijo.llamar("555-7593");
movil.llamar("555-3453");
