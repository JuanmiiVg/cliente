function agregarFila() {
  // Obtenemos los valores de los inputs
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const correo = document.getElementById("correo").value;

  // Validamos que los campos no estén vacíos
  if (nombre === "" || edad === "" || correo === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Obtenemos el cuerpo de la tabla
  const tbody = document.querySelector("#tabla tbody");

  // Creamos una nueva fila
  const fila = document.createElement("tr");

  // Creamos las celdas con los datos ingresados
  const celdaNombre = document.createElement("td");
  celdaNombre.textContent = nombre;

  const celdaEdad = document.createElement("td");
  celdaEdad.textContent = edad;

  const celdaCorreo = document.createElement("td");
  celdaCorreo.textContent = correo;

  // Agregamos las celdas a la fila
  fila.insertAdjacentElement("beforeend", celdaNombre);
  fila.insertAdjacentElement("beforeend", celdaEdad);
  fila.insertAdjacentElement("beforeend", celdaCorreo);

  // Agregamos la fila al cuerpo de la tabla
  tbody.insertAdjacentElement("beforeend", fila);

  // Limpiamos los campos de entrada
  document.getElementById("nombre").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("correo").value = "";
}
