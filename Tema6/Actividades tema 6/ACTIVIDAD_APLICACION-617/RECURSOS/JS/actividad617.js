function mostrarNombres() {
  // Obtenemos la lista ordenada
  const lista = document.getElementById("lista-personas");
  // Obtener el primer y último elemento
  const primerNombre = lista.firstElementChild.textContent;
  const ultimoNombre = lista.lastElementChild.textContent;

  // Mostramos los resultados en el párrafo con id "resultado"
  const resultado = document.getElementById("resultado");
  resultado.textContent = `Primer nombre: ${primerNombre}, Último nombre: ${ultimoNombre}`;
}
