function validarPrecio(precio) {
  const precioConSeparador = precio.replace(/\./g, ",");
  const partes = precioConSeparador.split(",");
  const esValido =
    partes.length === 2 &&
    partes[0].match(/^\d+$/) &&
    partes[1].match(/^\d{2}$/) &&
    precioConSeparador.endsWith(" ");
  console.log(`El precio "${precio}" es ${esValido ? "válido" : "inválido"}.`);
  return esValido;
}
