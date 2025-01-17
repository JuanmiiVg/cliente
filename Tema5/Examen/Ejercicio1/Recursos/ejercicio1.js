/* Crea una clase base llamada MaterialBiblioteca con las siguientes propiedades
   (id, título, autor; siendo id privado y único) y métodos: */
class MaterialBiblioteca {
  static id = 0;
  static generarIdUnico() {
    return Date.now() + Math.floor(Math.random() * 1000);
  }
  #id;
  constructor(titulo, autor) {
    this.#id = MaterialBiblioteca.generarIdUnico();
    this.titulo = titulo;
    this.autor = autor;
  }
  getId() {
    return this.#id;
  }
  info() {
    return `MaterialBiblioteca: ${this.titulo} de ${this.autor} con id ${
      this.#id
    }`;
  }
}
/* Crea dos clases que hereden de MaterialBiblioteca :
   Libro que tendrá una propiedad adicional numeroPaginas y 
   sobreescriba el método info() con esta información. */
class Libro extends MaterialBiblioteca {
  constructor(titulo, autor, numeroPaginas) {
    super(titulo, autor);
    this.numeroPaginas = numeroPaginas;
  }
  info() {
    return super.info() + ` y tiene ${this.numeroPaginas} paginas`;
  }
}
/* Y revista que tendrá la propiedad adicional de edicion , 
   sobreescribiendo también el método info() para incluirla. */
class Revista extends MaterialBiblioteca {
  constructor(titulo, autor, edicion) {
    super(titulo, autor);
    this.edicion = edicion;
  }
  info() {
    return super.info() + ` y es la edicion ${this.edicion}`;
  }
}
/* Crea una clase Usuario con las siguientes propiedades (nombre , materialPrestado) y métodos:
 - constructor(nombre) : inicializa las propiedades.
 - prestarMaterial(material) : agrega un material a la lista si no supera el límite de 3 materiales prestados.
 - desolverMaterial(id) : elimina un material de la lista por su ID.
 - listarMateriales() : muestra en consola los materiales prestados. */
class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
    this.materialPrestado = [];
  }
  prestarMaterial(material) {
    if (this.materialPrestado.length < 3) {
      this.materialPrestado.push(material);
      console.log(`El usuario ${this.nombre} ha prestado ${material.info()}`);
    } else {
      console.log("No se puede prestar mas de 3 materiales");
    }
  }
  desolverMaterial(id) {
    const index = this.materialPrestado.findIndex(
      (material) => material.getId() === id
    );
    if (index !== -1) {
      this.materialPrestado.splice(index, 1);
      console.log(
        `El usuario ${this.nombre} ha devuelto el material con id ${id}`
      );
    } else {
      console.log("No se puede devolver un material que no se ha prestado");
    }
  }
  listarMateriales() {
    console.log(
      `El usuario ${this.nombre} tiene los siguientes materiales prestados:`
    );
    this.materialPrestado.forEach((material) => console.log(material.info()));
  }
}
/* Crea objetos de las clases anteriores e implementa el flujo básico de este problema
 - Crea varios materiales (libros y revistas).
 - Crea un usuario y permite prestar y devolver materiales.
 - Lista los materiales prestados por el usuario. */
const usuario = new Usuario("Juanmita");
const libro1 = new Libro("Viaje al centro de la Tierra", "Julio Verne", 420);
const libro2 = new Libro(
  "El misterio del tesoro de la isla de los dragones",
  "Geronimo Stilton",
  650
);
const revista1 = new Revista("Gamer World", "Editorial Gamer World", 1);
const revista2 = new Revista("Cientifico", "Editorial Cientifico", 2);

usuario.prestarMaterial(libro1);
usuario.prestarMaterial(libro2);
usuario.prestarMaterial(revista1);
usuario.prestarMaterial(revista2);
usuario.listarMateriales();
usuario.desolverMaterial(libro2.getId());
usuario.listarMateriales();
