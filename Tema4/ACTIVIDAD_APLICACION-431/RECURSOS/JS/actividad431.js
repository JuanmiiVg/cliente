function mostrarNumerosProductos(...numeros) {
    let suma = 0;
    let producto = numeros[0] * numeros[numeros.length - 1];
    let division = numeros[1] / numeros[numeros.length - 2];
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    let media = suma / numeros.length;
    console.log(`La suma de los números es ${suma}`);
    console.log(`La media aritmética de los números es ${media}`);
    console.log(`La multiplicación del primero con el último es ${producto}`);
    console.log(`La división del segundo con el penúltimo es ${division}`);
}

mostrarNumerosProductos(7, 6, 2, 11, 56);