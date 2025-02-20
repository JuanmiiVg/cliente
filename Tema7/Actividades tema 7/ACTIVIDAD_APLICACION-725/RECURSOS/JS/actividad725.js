document.addEventListener("DOMContentLoaded", () => {
  const boxGreen = document.getElementById("box-green");
  const boxRed = document.getElementById("box-red");
  const winnerMessage = document.getElementById("winner-message");
  let greenWidth = 10;
  let redWidth = 10;
  const maxWidth = 500;

  function checkWinner() {
    if (greenWidth >= maxWidth) {
      document.removeEventListener("keydown", keyPressHandler);
      winnerMessage.innerText = "GANA VERDE";
      boxGreen.style.width = maxWidth + "px";
      boxRed.style.width = redWidth + "px";
    } else if (redWidth >= maxWidth) {
      document.removeEventListener("keydown", keyPressHandler);
      winnerMessage.innerText = "GANA ROJO";
      boxRed.style.width = maxWidth + "px";
      boxGreen.style.width = greenWidth + "px";
    }
  }

  function keyPressHandler(event) {
    console.log("Tecla presionada:", event.key);
    if (event.key.toLowerCase() === "a") {
      greenWidth += 5;
      boxGreen.style.width = greenWidth + "px";
    } else if (event.key.toLowerCase() === "n") {
      redWidth += 5;
      boxRed.style.width = redWidth + "px";
    }
    checkWinner();
  }

  document.addEventListener("keydown", keyPressHandler);
});
