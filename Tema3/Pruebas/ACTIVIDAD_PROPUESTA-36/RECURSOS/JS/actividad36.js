let arrayBool = [true, false, true, false, true, false, true, false, true, false];

let posiciones = arrayBool.map((element, index) => element ? index : null).filter(element => element !== null);

console.log(posiciones); // [0, 2, 4, 6, 8]