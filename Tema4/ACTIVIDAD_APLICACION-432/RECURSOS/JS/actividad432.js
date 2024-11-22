const colores = [
    { nombre: "Naranja", rgb: "#F39C12" },
    { nombre: "Lima", rgb: "#COF312" },
    { nombre: "Turquesa", rgb: "#12F3E5" },
    { nombre: "Rosa", rgb: "#F312AF" },
    { nombre: "Rojo", rgb: "#F31212" }
];

document.write("<ul>");
colores.forEach(color => {
    document.write(`<li>${color.nombre}: ${color.rgb}</li>`);
});
document.write("</ul>");
