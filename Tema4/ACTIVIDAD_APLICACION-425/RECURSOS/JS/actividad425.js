const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const dni = parseInt(prompt("Introduce tu DNI sin la letra:"));

const letra = letras[dni % 23];

console.log(`Tu letra del DNI es: ${letra}`);