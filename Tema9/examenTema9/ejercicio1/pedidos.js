const productos = [
  { nombre: "Laptop", precio: 1000, stock: 5 },
  { nombre: "Mouse", precio: 20, stock: 10 },
  { nombre: "Teclado", precio: 50, stock: 3 },
];

/**
 * @param {string} nombreProducto
 * @param {number} cantidad
 * @returns {string}
 * @throws {Error}
 */
function realizarPedido(nombreProducto, cantidad) {
  const producto = productos.find((p) => p.nombre === nombreProducto);

  if (!producto) {
    throw new Error(`El producto "${nombreProducto}" no existe.`);
  }

  if (producto.stock < cantidad) {
    throw new Error(
      `Stock insuficiente para "${nombreProducto}". Disponible: ${producto.stock}`
    );
  }

  producto.stock -= cantidad;
  return `Pedido realizado: ${cantidad} x ${nombreProducto}. Stock restante: ${producto.stock}`;
}

export { realizarPedido };
