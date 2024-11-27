function tienenMismasLetras(palabra1, palabra2) {
    const ordenarLetras = (palabra) => palabra.split('').sort().join('');
    return ordenarLetras(palabra1) === ordenarLetras(palabra2);
}
const palabra1 = prompt('Introduce la primera palabra:');
const palabra2 = prompt('Introduce la segunda palabra:');
const resultado = tienenMismasLetras(palabra1, palabra2);
console.log(`Las palabras '${palabra1}' y '${palabra2}' ${resultado ? '' : 'no'} tienen las mismas letras`);