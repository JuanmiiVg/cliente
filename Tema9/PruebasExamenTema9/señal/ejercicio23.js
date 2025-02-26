const parkingCanvas = document.getElementById("parkingSign");
const parkingCtx = parkingCanvas.getContext("2d");

function drawParkingSign() {
  // Dibujo del cuadrado azul
  parkingCtx.fillStyle = "blue";
  parkingCtx.fillRect(25, 25, 250, 250);

  // Dibujo de la "P" blanca
  parkingCtx.font = "bold 180px Arial";
  parkingCtx.fillStyle = "white";
  parkingCtx.textAlign = "center";
  parkingCtx.fillText("⛐", 150, 210);
}

drawParkingSign();
