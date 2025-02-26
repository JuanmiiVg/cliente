function hervirAgua() {
  return new Promise((resolve) => {
    console.log("Hirviendo agua...");
    setTimeout(() => {
      console.log("El agua está lista.");
      resolve();
    }, 3000);
  });
}

function molerCafe() {
  return new Promise((resolve) => {
    console.log("Moliendo café...");
    setTimeout(() => {
      console.log("El café está molido.");
      resolve();
    }, 2000);
  });
}

function mezclarIngredientes() {
  return new Promise((resolve) => {
    console.log("Mezclando agua y café...");
    setTimeout(() => {
      console.log("Café servido. ¡A disfrutar!");
      resolve();
    }, 60000);
  });
}

async function prepararCafe() {
  await Promise.all([hervirAgua(), molerCafe()]);
  await mezclarIngredientes();
}
