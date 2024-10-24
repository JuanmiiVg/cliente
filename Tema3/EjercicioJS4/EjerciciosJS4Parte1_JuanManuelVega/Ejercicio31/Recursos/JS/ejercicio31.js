function NumeroMaximo(num1, num2, num3) {
    var maximo;

    if (num1 > num2 && num1 > num3) {
        maximo = num1;
    } else if (num2 > num1 && num2 > num3) {
        maximo = num2;
    } else {
        maximo = num3;
    }
    return maximo;
}

console.log(NumeroMaximo(10, 24, 12));