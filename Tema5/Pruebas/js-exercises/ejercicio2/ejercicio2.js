class Hotel {
  constructor(name, location, stars, price, doubleRooms) {
    this.name = name;
    this.location = location;
    this.stars = stars;
    this.price = price;
    this.doubleRooms = doubleRooms;
    this.reservations = {};
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  get stars() {
    return this._stars;
  }

  set stars(value) {
    this._stars = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  get doubleRooms() {
    return this._doubleRooms;
  }

  set doubleRooms(value) {
    this._doubleRooms = value;
  }

  reserveRoom(date, client) {
    if (!this.reservations[date]) {
      this.reservations[date] = [];
    }
    this.reservations[date].push(client);
  }

  cancelReservation(date, client) {
    if (this.reservations[date]) {
      this.reservations[date] = this.reservations[date].filter(
        (c) => c.dni !== client.dni
      );
    }
  }

  getClientsForDate(date) {
    return this.reservations[date] || [];
  }

  getAvailableRoomsForDate(date) {
    return (
      this.doubleRooms -
      (this.reservations[date] ? this.reservations[date].length : 0)
    );
  }

  getFinalPrice() {
    let multiplier = 1;
    switch (this.stars) {
      case 1:
        multiplier += 0.02;
        break;
      case 2:
        multiplier += 0.05;
        break;
      case 3:
        multiplier += 0.07;
        break;
      case 4:
        multiplier += 0.1;
        break;
      case 5:
        multiplier += 0.15;
        break;
    }
    return this.price * multiplier;
  }
}

class Client {
  constructor(name, surname, dni, age) {
    this.name = name;
    this.surname = surname;
    this.dni = dni;
    this.age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get surname() {
    return this._surname;
  }

  set surname(value) {
    this._surname = value;
  }

  get dni() {
    return this._dni;
  }

  set dni(value) {
    this._dni = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
}

class Businessman {
  constructor(name, code) {
    this.name = name;
    this.code = code;
    this.hotels = [];
    this.validateCode();
  }

  validateCode() {
    const regex = /^[A-Z][a-z]{2}-\d{1,5}[^\w\s]$/;
    if (!regex.test(this.code)) {
      throw new Error("Invalid code format");
    }
  }

  addHotel(hotel) {
    this.hotels.push(hotel);
  }

  getHotels() {
    return this.hotels;
  }

  hasHotel(hotelName) {
    return this.hotels.some((hotel) => hotel.name === hotelName);
  }
}

// Example usage
const hotel1 = new Hotel("Hotel1", "Location1", 3, 100, 10);
const hotel2 = new Hotel("Hotel2", "Location2", 4, 150, 10);
const hotel3 = new Hotel("Hotel3", "Location3", 5, 200, 20);

const mario = new Businessman("Mario", "Cad-75643.");
mario.addHotel(hotel1);
mario.addHotel(hotel2);
mario.addHotel(hotel3);

console.log(mario.getHotels());
console.log(mario.hasHotel("Hotel1"));
