const validarLetrasEnCastellano = (input) => {
  const letras = "abcdefghijklmnopqrstuvwxyzáéíóúñ";
  input = input.toLowerCase();

  for (let char of input) {
    if (!letras.includes(char)) {
      return false;
    }
  }
  return true;
};

console.log(validarLetrasEnCastellano("hóla")); // true
console.log(validarLetrasEnCastellano("años")); // true
