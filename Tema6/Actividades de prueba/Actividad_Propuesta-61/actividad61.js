// Temporizador para eliminar el primer enlace después de 5 segundos
setTimeout(() => {
  const enlace1 = document.getElementById("enlace1");
  if (enlace1) {
    enlace1.remove();
    console.log("El primer enlace ha sido eliminado.");

    // Temporizador para eliminar el segundo enlace después de 10 segundos
    setTimeout(() => {
      const enlace2 = document.getElementById("enlace2");
      if (enlace2) {
        enlace2.remove();
        console.log("El segundo enlace ha sido eliminado.");
      }
    }, 5000);
  }
}, 5000);
