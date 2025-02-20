document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const startBtn = document.getElementById("startGame");
  const p1Good = document.getElementById("p1Good");
  const p1Bad = document.getElementById("p1Bad");
  const p2Good = document.getElementById("p2Good");
  const p2Bad = document.getElementById("p2Bad");
  let gameStarted = false;

  function createBoard() {
    board.innerHTML = "";
    for (let i = 0; i < 36; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      board.appendChild(cell);
    }
  }

  function placeGhosts(playerClass) {
    let cells = document.querySelectorAll(".cell");
    let positions = new Set();
    while (positions.size < 8) {
      let pos =
        Math.floor(Math.random() * 12) + (playerClass === "player1" ? 0 : 24);
      if (!positions.has(pos)) {
        positions.add(pos);
        let ghost = document.createElement("img");
        ghost.src = "RECURSOS/image/ghost_good.png";
        ghost.classList.add("ghost", playerClass);
        ghost.dataset.type = Math.random() < 0.5 ? "good" : "bad";
        ghost.dataset.index = positions.size;
        cells[pos].appendChild(ghost);
      }
    }
  }

  function checkWin() {
    if (parseInt(p1Bad.textContent) === 0) {
      document.getElementById("winner").textContent =
        "Jugador 2 pierde al comer todos los fantasmas malos del Jugador 1";
      setWinnerCookie("Jugador 2");
      displayWinnerImage("player2");
      return true;
    } else if (parseInt(p2Bad.textContent) === 0) {
      document.getElementById("winner").textContent =
        "Jugador 1 pierde al comer todos los fantasmas malos del Jugador 2";
      setWinnerCookie("Jugador 1");
      displayWinnerImage("player1");
      return true;
    }

    if (parseInt(p1Bad.textContent) === 0 && parseInt(p2Bad.textContent) < 4) {
      document.getElementById("winner").textContent =
        "Jugador 1 gana al eliminar todos los fantasmas buenos del Jugador 2";
      setWinnerCookie("Jugador 2");
      displayWinnerImage("player1");
      return true;
    } else if (
      parseInt(p2Bad.textContent) === 0 &&
      parseInt(p1Bad.textContent) < 4
    ) {
      document.getElementById("winner").textContent =
        "Jugador 2 gana al eliminar todos los fantasmas buenos del Jugador 1";
      setWinnerCookie("Jugador 1");
      displayWinnerImage("player2");
      return true;
    }

    if (parseInt(p1Good.textContent) === 0) {
      document.getElementById("winner").textContent =
        "Jugador 2 gana al comer todos los fantasmas buenos del Jugador 1";
      setWinnerCookie("Jugador 2");
      displayWinnerImage("player2");
      return true;
    } else if (parseInt(p2Good.textContent) === 0) {
      document.getElementById("winner").textContent =
        "Jugador 1 gana al comer todos los fantasmas buenos del Jugador 2";
      setWinnerCookie("Jugador 1");
      displayWinnerImage("player1");
      return true;
    }

    return false;
  }

  function displayWinnerImage(player) {
    const img = document.createElement("img");
    img.src = `RECURSOS/image/gana${player === "player1" ? "1" : "2"}.png`;
    img.alt = `Ganador: ${player === "player1" ? "Jugador 1" : "Jugador 2"}`;
    img.style.width = "200px"; // Ajusta el tamaño según lo desees
    img.style.display = "block"; // Para que se muestre como bloque en la página
    document.body.appendChild(img); // Añade la imagen al final del body o en un contenedor específico
  }

  startBtn.addEventListener("dblclick", () => {
    if (gameStarted) return;
    gameStarted = true;
    createBoard();
    placeGhosts("player1");
    placeGhosts("player2");
  });

  document.addEventListener("keydown", (e) => {
    if (!gameStarted) return;
    let selected = document.querySelector(".selected");
    if (!selected) return;
    let cellIndex = [...board.children].indexOf(selected.parentElement);
    let targetIndex;

    switch (e.key) {
      case "ArrowUp":
        targetIndex = cellIndex - 6;
        break;
      case "ArrowDown":
        targetIndex = cellIndex + 6;
        break;
      case "ArrowLeft":
        targetIndex = cellIndex - 1;
        break;
      case "ArrowRight":
        targetIndex = cellIndex + 1;
        break;
      case "r":
        location.reload();
        return;
      default:
        return;
    }

    if (targetIndex >= 0 && targetIndex < 36) {
      let targetCell = board.children[targetIndex];
      if (
        !targetCell.firstChild ||
        (targetCell.firstChild.classList.contains("ghost") &&
          !targetCell.firstChild.classList.contains(selected.classList[1]))
      ) {
        if (
          targetCell.firstChild &&
          targetCell.firstChild.classList.contains("ghost")
        ) {
          let eatenGhost = targetCell.firstChild;
          if (eatenGhost.dataset.type === "bad") {
            if (eatenGhost.classList.contains("player1")) {
              p1Bad.textContent = parseInt(p1Bad.textContent) - 1;
            } else {
              p2Bad.textContent = parseInt(p2Bad.textContent) - 1;
            }
          } else if (eatenGhost.dataset.type === "good") {
            if (eatenGhost.classList.contains("player1")) {
              p1Good.textContent = parseInt(p1Good.textContent) - 1;
            } else {
              p2Good.textContent = parseInt(p2Good.textContent) - 1;
            }
          }
          eatenGhost.remove();
        }
        targetCell.appendChild(selected);
        if (checkWin()) return;
      }
    }
  });

  board.addEventListener("click", (e) => {
    if (e.target.classList.contains("ghost")) {
      document
        .querySelectorAll(".ghost")
        .forEach((g) => g.classList.remove("selected"));
      e.target.classList.add("selected");
    }
  });

  function setWinnerCookie(winner) {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);
    document.cookie = `winner=${winner}; expires=${expires.toUTCString()}; path=/`;
  }

  createBoard();
});
