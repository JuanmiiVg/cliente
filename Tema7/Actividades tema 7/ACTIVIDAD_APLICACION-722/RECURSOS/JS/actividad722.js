document.addEventListener("DOMContentLoaded", () => {
  const parrafo = document.getElementById("parrafo");
  const btnLimpiar = document.getElementById("limpiar");

  // Capturamos pulsaciones de teclado
  document.addEventListener("keydown", (event) => {
    // Ignoramos teclas de control (Shift, Alt, etc.)
    if (event.key.length === 1) {
      parrafo.textContent += event.key;
    }
  });

  // Limpiamos el contenido del párrafo
  btnLimpiar.addEventListener("click", () => {
    parrafo.textContent = "";
  });
});
