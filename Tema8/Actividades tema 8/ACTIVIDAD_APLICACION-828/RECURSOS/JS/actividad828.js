function dibujarLogotipo() {
  const canvas = document.getElementById("canvas");
  if (!canvas.getContext) return;
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(0, 600);
  ctx.lineTo(200, 600);
  ctx.lineTo(300, 350);
  ctx.lineTo(400, 600);
  ctx.lineTo(600, 600);
  ctx.lineTo(475, 350);
  ctx.lineTo(300, 350);
  ctx.lineTo(400, 150);
  ctx.lineTo(300, 0);
  ctx.lineTo(200, 150);
  ctx.lineTo(300, 350);
  ctx.lineTo(150, 350);
  ctx.lineTo(0, 600);
  ctx.strokeStyle = "red";
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
}

dibujarLogotipo();
