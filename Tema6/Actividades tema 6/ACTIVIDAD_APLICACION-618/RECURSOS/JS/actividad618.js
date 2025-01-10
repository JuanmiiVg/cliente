function agregarFila() {
  // Obtener los valores de los inputs
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const correo = document.getElementById("correo").value;

  // Validar que los campos no estén vacíos
  if (nombre === "" || edad === "" || correo === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Obtener el cuerpo de la tabla
  const tbody = document.querySelector("#tabla tbody");

  // Crear una nueva fila
  const fila = document.createElement("tr");

  // Crear las celdas con los datos ingresados
  const celdaNombre = document.createElement("td");
  celdaNombre.textContent = nombre;

  const celdaEdad = document.createElement("td");
  celdaEdad.textContent = edad;

  const celdaCorreo = document.createElement("td");
  celdaCorreo.textContent = correo;

  // Agregar las celdas a la fila
  fila.appendChild(celdaNombre);
  fila.appendChild(celdaEdad);
  fila.appendChild(celdaCorreo);

  // Agregar la fila al cuerpo de la tabla
  tbody.appendChild(fila);

  // Limpiar los campos de entrada
  document.getElementById("nombre").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("correo").value = "";
}
