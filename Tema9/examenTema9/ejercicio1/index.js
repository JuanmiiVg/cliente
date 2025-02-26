import { realizarPedido } from "./pedidos.js";

window.hacerPedido = (nombreProducto, cantidad) => {
  try {
    const mensaje = realizarPedido(nombreProducto, cantidad);
    alert(mensaje);
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
};
