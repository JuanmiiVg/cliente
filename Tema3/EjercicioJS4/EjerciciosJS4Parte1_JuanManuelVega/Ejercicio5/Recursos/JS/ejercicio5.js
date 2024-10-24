var planetas = ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Júpiter', 'Saturno'];
var resultado = '';

for (var i = 0; i < planetas.length; i++) {
    resultado += planetas[i];
    if (i < planetas.length - 1) {
        resultado += ' - ';
    }
}

console.log(resultado);