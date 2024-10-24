const arrayElementos = [undefined, 0, "texto", NaN, 42, "", false, null, 9.5, -10];
const resultado = [];

for (let i = 0; i < arrayElementos.length; i++) {
    const elemento = arrayElementos[i];
    // Verificamos si el elemento es válido y no debe ser filtrado
    if (elemento !== null && elemento !== 0 && elemento !== '' && elemento !== false && elemento !== undefined && !isNaN(elemento)) 
        {
        resultado.push(elemento);
    }
}

console.log(resultado);