function validarURL() {
  const url = prompt("Introduce la URL:");
  const isValid =
    url.startsWith("https://") && url.endsWith(".es") && !url.includes("ñ");
  alert("La URL es " + (isValid ? "válida" : "inválida"));
}
