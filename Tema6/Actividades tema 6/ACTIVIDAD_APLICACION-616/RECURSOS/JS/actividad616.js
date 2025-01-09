document.addEventListener("DOMContentLoaded", function () {
  let parrafo = document.getElementById("párrafo");
  let estilo = prompt("Introduce el estilo CSS para el párrafo:");
  parrafo.style.cssText = estilo;
});
