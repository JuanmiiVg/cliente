document.getElementById("agregar").addEventListener("click", () => {
  const lista = document.getElementById("ingredientes");
  let ingrediente;

  // Bucle para pedir ingredientes al usuario
  do {
    ingrediente = prompt(
      "Introduce un ingrediente (o pulsa Cancelar para finalizar):"
    );
    if (ingrediente !== null && ingrediente.trim() !== "") {
      lista.insertAdjacentHTML("beforeend", `<li>${ingrediente}</li>`);
    }
  } while (ingrediente !== null);
});
