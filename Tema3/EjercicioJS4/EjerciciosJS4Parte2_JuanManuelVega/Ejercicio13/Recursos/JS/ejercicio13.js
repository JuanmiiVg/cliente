// Creamos un mapa para almacenar códigos postales y localidades de Andalucía
const codigosPostales = new Map([
    ['41001', 'Sevilla'],
    ['29001', 'Málaga'],
    ['14001', 'Córdoba'],
    ['18001', 'Granada'],
    ['11001', 'Cádiz'],
    ['21001', 'Huelva']
]);

let opcion;
do {
    // Mostramos el menú
    opcion = prompt(`Seleccione una opción:
    1. Consultar un código postal
    2. Borrar un código postal
    3. Listar todos los códigos postales
    4. Modificar un código postal
    5. Salir`);

    switch (opcion) {
        case '1':
            const consultarCodigo = prompt("Ingrese el código postal a consultar:");
            if (codigosPostales.has(consultarCodigo)) {
                alert(`El código postal ${consultarCodigo} corresponde a: ${codigosPostales.get(consultarCodigo)}`);
            } else {
                alert(`El código postal ${consultarCodigo} no está registrado.`);
            }
            break;

        case '2':
            const borrarCodigo = prompt("Ingrese el código postal a borrar:");
            if (codigosPostales.delete(borrarCodigo)) {
                alert(`El código postal ${borrarCodigo} ha sido borrado.`);
            } else {
                alert(`El código postal ${borrarCodigo} no está registrado.`);
            }
            break;

        case '3':
            let listado = 'Códigos Postales de Andalucía:\n';
            for (let [codigo, localidad] of codigosPostales) {
                listado += `${codigo}: ${localidad}\n`;
            }
            alert(listado);
            break;

        case '4':
            const modificarCodigo = prompt("Ingrese el código postal a modificar:");
            if (codigosPostales.has(modificarCodigo)) {
                const nuevaLocalidad = prompt("Ingrese la nueva localidad:");
                codigosPostales.set(modificarCodigo, nuevaLocalidad);
                alert(`El código postal ${modificarCodigo} ha sido actualizado a: ${nuevaLocalidad}`);
            } else {
                alert(`El código postal ${modificarCodigo} no está registrado.`);
            }
            break;

        case '5':
            alert("Saliendo del programa.");
            break;

        default:
            alert("Opción no válida, por favor intente nuevamente.");
            break;
    }
} while (opcion !== '5');