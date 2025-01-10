// Función para cambiar el color del texto
function cambiarColor() {
  const parrafo = document.getElementById("párrafo");
  parrafo.style.color = parrafo.style.color === "black" ? "blue" : "black";
}

// Función para cambiar el tamaño del texto
function cambiarTamaño() {
  const parrafo = document.getElementById("párrafo");
  const tamañoActual = parseInt(window.getComputedStyle(parrafo).fontSize);
  parrafo.style.fontSize = `${tamañoActual + 2}px`;
}

// Función para cambiar el color de fondo
function cambiarFondo() {
  const parrafo = document.getElementById("párrafo");
  parrafo.style.backgroundColor =
    parrafo.style.backgroundColor === "white" ? "lightgray" : "white";
}
