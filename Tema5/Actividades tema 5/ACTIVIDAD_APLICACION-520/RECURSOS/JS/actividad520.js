class Aula {
  constructor(numAula) {
    this.numAula = numAula;
  }
  mostrarInfo() {
    console.log(`Aula número ${this.numAula}`);
  }
}

class Musica extends Aula {
  constructor(numAula, instrumentos) {
    super(numAula);
    this.instrumentos = instrumentos;
  }
  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Instrumentos: ${this.instrumentos}`);
  }
}

class Tecnologia extends Aula {
  constructor(numAula, software) {
    super(numAula);
    this.software = software;
  }
  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Software: ${this.software}`);
  }
}

const aula1 = new Musica(1, "Piano");
const aula2 = new Tecnologia(2, "Autodesk");
const aula3 = new Aula(3);

const aulas = [aula1, aula2, aula3];

for (const aula of aulas) {
  aula.mostrarInfo();
  console.log("------------------------");
}
