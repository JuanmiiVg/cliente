function calculadora() {
    // Solicitamos al usuario el primer número
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    
    // Solicitamos al usuario el símbolo de la operación
    const operador = prompt("Ingresa el operador (+, -, *, /, **, %):");
    
    // Solicitamos al usuario el segundo número
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    
    let resultado;

    // Realizamos la operación según el operador ingresado
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                console.log("Error: No se puede dividir entre cero.");
                return;
            }
            break;
        case '**':
            resultado = num1 ** num2;
            break;
        case '%':
            resultado = num1 % num2;
            break;
        default:
            console.log("Operador no válido. Usa uno de los siguientes: +, -, *, /, **, %");
            return;
    }

    console.log(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);
}
// Llamamos la función de la calculadora
calculadora();