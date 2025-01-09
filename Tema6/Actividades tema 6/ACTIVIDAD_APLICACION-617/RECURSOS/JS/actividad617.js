document.addEventListener("DOMContentLoaded", function () {
  let lista = document.getElementsByTagName("ol")[0];
  let primerElemento = lista.firstElementChild;
  let ultimoElemento = lista.lastElementChild;
  console.log(primerElemento.textContent);
  console.log(ultimoElemento.textContent);
});
