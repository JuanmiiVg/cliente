class Club {
  constructor(anioFundacion, numSocios, nombreEstadio, ciudad, palmares) {
    this.anioFundacion = anioFundacion || 1900;
    this.numSocios = numSocios || 0;
    this.nombreEstadio = nombreEstadio || "";
    this.ciudad = ciudad || "";
    this.palmares = palmares || [];
  }

  verClub() {
    console.log(`Año de fundación: ${this.anioFundacion}`);
    console.log(`Número de socios: ${this.numSocios}`);
    console.log(`Nombre del estadio: ${this.nombreEstadio}`);
    console.log(`Ciudad: ${this.ciudad}`);
    console.log("Palmarés:");
    for (let titulo of this.palmares) {
      console.log(`- ${titulo.nombre} (${titulo.anio})`);
    }
  }
}

let club1 = new Club();
club1.verClub();
club1.numSocios = 100;
club1.verClub();

let club2 = new Club(1960);
club2.verClub();
club2.nombreEstadio = "Estadio Sánchez Pizjuan";
club2.verClub();

let club3 = new Club(1950, 500);
club3.verClub();
club3.ciudad = "Madrid";
club3.verClub();

let club4 = new Club(1940, 200, "Estadio Metropolitano");
club4.verClub();
club4.palmares.push({ nombre: "Copa del Rey", anio: 1945 });
club4.verClub();

let club5 = new Club(1930, 300, "Estadio Bernabéu", "Madrid");
club5.verClub();
club5.palmares.push({ nombre: "Liga de Campeones", anio: 1956 });
club5.verClub();

let club6 = new Club(1920, 400, "Estadio Wanda Metropolitano", "Madrid", [
  { nombre: "Copa del Rey", anio: 1925 },
]);
club6.verClub();
club6.palmares.push({ nombre: "Liga de Campeones", anio: 1960 });
club6.verClub();
