document.getElementById("personalizar").addEventListener("click", () => {
  const caja = document.querySelector(".caja");

  // Preguntamos al usuario los valores
  const ancho = prompt("Introduce el ancho de la caja (en píxeles):", "200");
  const alto = prompt("Introduce el alto de la caja (en píxeles):", "100");
  const colorBorde = prompt("Introduce el color del borde de la caja:", "blue");

  // Validamos y asignamos valores a los atributos data
  if (ancho) caja.setAttribute("data-width", `${ancho}px`);
  if (alto) caja.setAttribute("data-height", `${alto}px`);
  if (colorBorde) caja.setAttribute("data-bordercolor", colorBorde);

  // Recogemos los valores de los atributos data
  const width = caja.getAttribute("data-width");
  const height = caja.getAttribute("data-height");
  const borderColor = caja.getAttribute("data-bordercolor");

  // Aplicamos los estilos a la caja
  caja.style.width = width;
  caja.style.height = height;
  caja.style.border = `2px solid ${borderColor}`;
});
