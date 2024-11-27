function caracteresNoEspanioles(arrayCadenas) {
    return arrayCadenas.filter(cadena => /[^\u00F1\u00D1a-zA-Z]/.test(cadena));
}

console.log(caracteresNoEspanioles(["hola", "c^omida", "mañana", "h^ola", "adios$"]));