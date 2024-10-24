let arrayConDuplicados = [1000, 2000, 3000, 1000, 4000, 5000, 6000, 2000, 7000, 8000, 4000];

let conjuntoSinDuplicados = new Set(arrayConDuplicados);

let arraySinDuplicados = [...conjuntoSinDuplicados];

console.log("Array sin duplicados:", arraySinDuplicados);