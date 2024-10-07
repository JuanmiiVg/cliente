function obtenerExtension(archivo) {
    return archivo.split('.').pop();
}

console.log(obtenerExtension("documento.pdf"));