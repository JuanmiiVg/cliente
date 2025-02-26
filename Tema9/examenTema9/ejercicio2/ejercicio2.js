const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Fondo blanco
ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(100, 50);
ctx.lineTo(400, 50);
ctx.quadraticCurveTo(450, 50, 450, 100);
ctx.lineTo(450, 400);
ctx.quadraticCurveTo(450, 450, 400, 450);
ctx.lineTo(100, 450);
ctx.quadraticCurveTo(50, 450, 50, 400);
ctx.lineTo(50, 100);
ctx.quadraticCurveTo(50, 50, 100, 50);
ctx.closePath();
ctx.fill();
ctx.stroke();

// Rectángulo azul
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.moveTo(120, 70);
ctx.lineTo(380, 70);
ctx.quadraticCurveTo(430, 70, 430, 120);
ctx.lineTo(430, 380);
ctx.quadraticCurveTo(430, 430, 380, 430);
ctx.lineTo(120, 430);
ctx.quadraticCurveTo(70, 430, 70, 380);
ctx.lineTo(70, 120);
ctx.quadraticCurveTo(70, 70, 120, 70);
ctx.closePath();
ctx.fill();

// Flecha blanca
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(250, 150);
ctx.lineTo(300, 200);
ctx.lineTo(270, 200);
ctx.lineTo(270, 350);
ctx.lineTo(230, 350);
ctx.lineTo(230, 200);
ctx.lineTo(200, 200);
ctx.closePath();
ctx.fill();
