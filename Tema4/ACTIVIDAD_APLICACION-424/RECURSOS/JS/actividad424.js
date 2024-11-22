function mostrarTabla(numero) {
    document.write("<h2>Tabla de multiplicar del "+numero+"</h2>");
    for (var i = 1; i <= 10; i++) {
        document.write(numero+" x "+i+" = "+(numero*i)+"<br>");
    }
}
var numero = parseInt(prompt("Introduce un número:"));
mostrarTabla(numero);