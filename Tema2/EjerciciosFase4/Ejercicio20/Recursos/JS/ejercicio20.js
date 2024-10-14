function mostrar_Menu() {
    console.log("Menú:");
    console.log("a) Área del triángulo (b * h / 2)");
    console.log("b) Área del rectángulo (b * h)");
    console.log("c) Área del círculo (π * r^2)");
    console.log("d) Salir");
}

function calcular_Area_Triangulo() {
    const base = parseFloat(prompt("Introduce la base del triángulo:"));
    const altura = parseFloat(prompt("Introduce la altura del triángulo:"));
    const area = (base * altura) / 2;
    console.log(`El área del triángulo es: ${area}`);
}

function calcular_Area_Rectangulo() {
    const base = parseFloat(prompt("Introduce la base del rectángulo:"));
    const altura = parseFloat(prompt("Introduce la altura del rectángulo:"));
    const area = base * altura;
    console.log(`El área del rectángulo es: ${area}`);
}

function calcular_Area_Circulo() {
    const radio = parseFloat(prompt("Introduce el radio del círculo:"));
    const area = Math.PI * Math.pow(radio, 2);
    console.log(`El área del círculo es: ${area}`);
}

let opcion;

do {
    mostrar_Menu();
    opcion = prompt("Elige una opción (a, b, c, d):");

    switch (opcion) {
        case 'a':
            calcular_Area_Triangulo();
            break;
        case 'b':
            calcular_Area_Rectangulo();
            break;
        case 'c':
            calcular_Area_Circulo();
            break;
        case 'd':
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción no válida, por favor intenta de nuevo.");
    }
} while (opcion !== 'd');