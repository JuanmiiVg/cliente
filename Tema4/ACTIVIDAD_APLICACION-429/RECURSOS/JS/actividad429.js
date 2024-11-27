function numerosTerminadosEnCero(array) {
    // Ordenar el array colocando primero los números que terminan en 0
    return array.sort((a, b) => {
      if (a % 10 === 0 && b % 10 !== 0) return -1; // Si 'a' termina en 0, va primero
      if (a % 10 !== 0 && b % 10 === 0) return 1;  // Si 'b' termina en 0, va primero
      return 0; // Si ambos o ninguno termina en 0, no cambiar
    });
  }
  
  // Crear un array con 10 números aleatorios entre 1 y 100
  let array = [];
  for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  
  document.write("<p>Array original: " + array.join(", ") + "</p>");
  
  // Ordenar y mostrar el array
  let arrayOrdenado = numerosTerminadosEnCero(array);
  document.write("<p>Array ordenado (números terminados en 0 primero): " + arrayOrdenado.join(", ") + "</p>");