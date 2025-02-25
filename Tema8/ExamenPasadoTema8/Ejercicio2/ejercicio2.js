// Ejercicio 2 [3 puntos]: Señal otros peligros
// Usa la API Canvas para dibujar en tu página web, sobre un lienzo de 500x500px, la señal de tráfico otros peligos:

window.onload = function () {
    let canvas = document.getElementById("lienzo");
    let ctx = canvas.getContext("2d");

    // Dibuja el triángulo de la señal
    ctx.beginPath();
    ctx.moveTo(250, 50);
    ctx.lineTo(450, 400);
    ctx.lineTo(50, 400);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    ctx.stroke();

    // Fondo blanco
    ctx.beginPath();
    ctx.moveTo(250, 80);
    ctx.lineTo(420, 390);
    ctx.lineTo(80, 390);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();

    // Símbolo de advertencia (ejemplo: signo de exclamación)
    ctx.font = "100px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("!", 225, 300);
};
