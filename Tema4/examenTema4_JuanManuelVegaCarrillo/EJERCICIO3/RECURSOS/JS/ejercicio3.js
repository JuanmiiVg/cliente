// Función para calcular el total vendido de un producto específico durante la semana
const calcularTotalVendido = (producto, ventas) => {
    let total = 0;
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i] * producto;
    }
    return total;
};

// Función para calcular los ingresos totales de un producto
const calcularIngresos = (totalVendido, precio) => totalVendido * precio;

// Función anónima autoejecutable para determinar el producto más vendido
(function() {
    // Array de precios de los productos
    const productos = [15, 32, 46];
    // Array bidimensional que representa las ventas diarias de cada producto durante 7 días
    const ventas = [
        [10, 60, 30, 20, 50, 10, 70],
        [20, 10, 60, 50, 25, 70, 90],
        [15, 20, 100, 20, 35, 45, 90]
    ];

    // Inicializamos las variables para rastrear el producto más vendido
    let maxVentas = 0;
    let productoMaxVentas = 0;

    // Iteramos sobre cada producto
    productos.forEach((producto, i) => {
        // Calculamos el total vendido y los ingresos para cada producto
        const totalVendido = calcularTotalVendido(producto, ventas[i]);
        const ingresos = calcularIngresos(totalVendido, producto);
        console.log(`El producto ${i} tiene un total de ${totalVendido} ventas y un total de ${ingresos} ingresos`);

        // Actualizamos el producto más vendido si el actual tiene más ventas que el máximo registrado
        if (totalVendido > maxVentas) {
            maxVentas = totalVendido;
            productoMaxVentas = i;
        }
    });

    // Mostramos el producto más vendido
    console.log(`El producto más vendido es ${productoMaxVentas} con un total de ${maxVentas} ventas`);
})();