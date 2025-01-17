/* Diseñar mediantes clases el siguiente problema. En esta ciudad hay Empresarios que almacenan una lista de hoteles y el
código de su empresa (deberás controlar con expresiones regulares que el valor delo codigo es correcto: se compone de 3 letras empezando únicamente la primera por máyuscula, seguido de un guión, seguido de
un número con una longitud de 1 a 5 seguido de un punto , y algún carácter especial como fin; por ejemplo "Cad-75643./").
De las empresas podremos consultar la lista de hoteles y comprobar si contiene uno en particular. */

class Empresa {
  constructor(codigo, hoteles) {
    if (!/^[A-Z][a-z]{2}-\d{1,5}\.\//.test(codigo)) {
      throw new Error("El código de la empresa no es válido");
    }
    this.codigo = codigo;
    this.hoteles = hoteles;
  }
  getHoteles() {
    return this.hoteles;
  }
  tieneHotel(nombre) {
    return this.hoteles.some((hotel) => hotel.getNombre() === nombre);
  }
}

/* De los hoteles sabremos su nombre, ubicacion, el numero de estrellas, el precio de la habitación, el número de habitantes que tiene,
las reservas para una determinada fecha por un cliente, la edad mínima y máxima para poder reservar estas habitaciones. Además
de los métodos get y set de los atributos,). 
*/

class Hotel {
  constructor(
    nombre,
    ubicacion,
    estrellas,
    precio,
    habitaciones,
    edadMin,
    edadMax
  ) {
    this.nombre = nombre;
    this.ubicacion = ubicacion;
    this.estrellas = estrellas;
    this.precio = precio;
    this.habitaciones = habitaciones;
    this.edadMin = edadMin;
    this.edadMax = edadMax;
    this.reservas = {};
  }
  getNombre() {
    return this.nombre;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  getUbicacion() {
    return this.ubicacion;
  }
  setUbicacion(ubicacion) {
    this.ubicacion = ubicacion;
  }
  getEstrellas() {
    return this.estrellas;
  }
  setEstrellas(estrellas) {
    this.estrellas = estrellas;
  }
  getPrecio() {
    return this.precio;
  }
  setPrecio(precio) {
    this.precio = precio;
  }
  getHabitaciones() {
    return this.habitaciones;
  }
  setHabitaciones(habitaciones) {
    this.habitaciones = habitaciones;
  }
  getReservas() {
    return this.reservas;
  }
  setReservas(reservas) {
    this.reservas = reservas;
  }
  getEdadMin() {
    return this.edadMin;
  }
  setEdadMin(edadMin) {
    this.edadMin = edadMin;
  }
  getEdadMax() {
    return this.edadMax;
  }
  setEdadMax(edadMax) {
    this.edadMax = edadMax;
  }

  /* Podrás reservar una Habitación para una fecha, anular una reserva de habitación para una fecha,
     consultar los clientes que tienen una reserva una habitación para una fecha, anular una reserva de habitacion para una fecha, 
     consultar los clientes que tienen reserva para una fecha y conocer las habitaciones disponibles para una fecha */

  reservar(fecha, cliente) {
    if (this.reservas[fecha] === undefined) {
      this.reservas[fecha] = [];
    }
    if (
      this.reservas[fecha].length < this.habitaciones &&
      cliente.getEdad() >= this.edadMin &&
      cliente.getEdad() <= this.edadMax
    ) {
      this.reservas[fecha].push(cliente);
      return true;
    }
    return false;
  }
  anularReserva(fecha, cliente) {
    if (this.reservas[fecha] !== undefined) {
      this.reservas[fecha] = this.reservas[fecha].filter((c) => c !== cliente);
    }
  }
  getHabitacionesLibres(fecha) {
    return (
      this.habitaciones -
      (this.reservas[fecha] !== undefined ? this.reservas[fecha].length : 0)
    );
  }

  /* Obtener el precio final de una reserva que dependera del precio y el numero de estrellas 
     (una estrella le suma al precio un 2%, dos estrellas un 5%,tres estrellas un 7%, 
     cuatro estrellas un 10% y 5 estrellas un 15%  */

  getPrecioReserva() {
    let porcentaje = 0;
    switch (this.estrellas) {
      case 1:
        porcentaje = 0.02;
        break;
      case 2:
        porcentaje = 0.05;
        break;
      case 3:
        porcentaje = 0.07;
        break;
      case 4:
        porcentaje = 0.1;
        break;
      case 5:
        porcentaje = 0.15;
        break;
    }
    return this.precio * (1 + porcentaje);
  }
}

// De cada cliente se debe saber su nombre, apellidos, DNI y edad.

class Cliente {
  constructor(nombre, apellidos, dni, edad) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    this.edad = edad;
  }
  getNombre() {
    return this.nombre;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  getApellidos() {
    return this.apellidos;
  }
  setApellidos(apellidos) {
    this.apellidos = apellidos;
  }
  getDni() {
    return this.dni;
  }
  setDni(dni) {
    this.dni = dni;
  }
  getEdad() {
    return this.edad;
  }
  setEdad(edad) {
    this.edad = edad;
  }
}

/* Para probar el ejercicio crea el empresario "Mario" con el codigo "Cad-75643./" tiene 3 hoteles en la ciudad hotel1, hotel2 y hotel3.
En cada hotel tiene 10 habitaciones, excepto hotel3 que es de 20 habitaciones. Siendo su ubicacion, estrellas y precios valores
que tu decides y comienzan todos sin reservas. Los requisitos para que un cliente pueda gestionar una reserva de una habitacion
en hotel1 es una edad de 18-25(inclusive), para hotel2 es una edad de 26-35(inclusive), para hotel3 es una edad de 36-80(inclusive). */

let mario = new Empresa("Cad-75643./", [
  new Hotel("hotel1", "Calle 1", 3, 50, 10, 18, 25),
  new Hotel("hotel2", "Calle 2", 4, 75, 10, 26, 35),
  new Hotel("hotel3", "Calle 3", 5, 100, 20, 36, 80),
]);

/* Funciones que se deben de realizar:
 - Crear un empresario con la lista de hoteles.
 - Consultar la lista de hoteles para un empresario.
 - Comprobar si el empresario tiene el hotel con nombre "Hotel el puerto".
 - Crear los hoteles requeridos.
 - Dar de alta al cliente.
 - Reservar una habitación.
 - Intentar reservar una habitación para un cliente (cumpliendo la edad) en una fecha.
 - Intentar reservar una habitación para un cliente (sin cumplir la edad) en una fecha.
 - Consultar las habitaciones libres para un hotel en una fecha.
 - Obtener el precio de una reserva.
 - Anular una reserva de un cliente para una fecha.
 - Dar de baja el cliente. */

console.log("Crear un empresario con la lista de hoteles.");
console.log(mario.getHoteles());

console.log("Consultar la lista de hoteles para un empresario.");
console.log(mario.hoteles);

console.log(
  'Comprobar si el empresario tiene el hotel con nombre "Hotel el puerto".'
);
console.log(mario.tieneHotel("Hotel el puerto"));

console.log("Crear los hoteles requeridos.");
console.log(mario.hoteles);

console.log("Dar de alta al cliente.");
let cliente = new Cliente("Juan", "Rodrigo", "16315962F", 23);

console.log("Reservar una habitación.");
mario.hoteles[0].reservar("2022-01-01", cliente);

console.log(
  "Intentar reservar una habitación para un cliente (cumpliendo la edad) en una fecha."
);
console.log(mario.hoteles[0].reservar("2022-01-01", cliente));

console.log(
  "Intentar reservar una habitación para un cliente (sin cumplir la edad) en una fecha."
);
let cliente2 = new Cliente("Juan", "Rodrigo", "16315962F", 15);
console.log(mario.hoteles[0].reservar("2022-01-01", cliente2));

console.log("Consultar las habitaciones libres para un hotel en una fecha.");
console.log(mario.hoteles[0].getHabitacionesLibres("2022-01-01"));

console.log("Obtener el precio de una reserva.");
console.log(mario.hoteles[0].getPrecioReserva());

console.log("Anular una reserva de un cliente para una fecha.");
mario.hoteles[0].anularReserva("2022-01-01", cliente);

console.log("Dar de baja el cliente.");
console.log(mario.hoteles[0].getHabitacionesLibres("2022-01-01"));
