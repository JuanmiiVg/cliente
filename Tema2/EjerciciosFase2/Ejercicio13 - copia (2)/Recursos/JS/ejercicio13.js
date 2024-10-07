let nombreVariable = prompt("Ingrese el nombre de la variable:"),
    valorVariable = prompt(`Ingrese el valor de ${nombreVariable}:`);

window[nombreVariable] = valorVariable;

console.log(`${nombreVariable} = ${window[nombreVariable]}`);
