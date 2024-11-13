/*
Ejercicio 2

Utiliza la estructura de map para almacenar información sobre módulos impartidos en segundo de DAW en el IES Mar de Cádiz 
(como mínimo debes incluir 4 módulos). No están permitidas las conversaciones de tipos de mapas a otras estructuras.

Por ejemplo: ("DWEC", "Desarrollo Web en Entorno Cliente")
Aña de la información con posterioridad a la creación de la estrucutra:
a.Muestra cuántos módulos hay almacenados.
b.Muestra el contenido de la estructura.
c.Devuelve las abreviaturas de todos los módulos guardados.
d.Devuelve el nombre completo de todos los módulos.
e.Consulta si está el módulo "DAW".
f.Si está, cambia el nombre completo del módulo añadiendo un 2 al final.
g.Si está, elimínalo y vuelve a mosntrar todos los módulos para comprobar el borrado.

*/

var modulos = new Map();

modulos.set("DWEC", "Desarrollo Web en Entorno Cliente");
modulos.set("DWES", "Desarrollo Web en Entorno Servidor");
modulos.set("DAW", "Desarrollo de Aplicaciones Web");
modulos.set("DIW", "Diseño de Interfaces Web");

console.log("a.Muestra cuántos módulos hay almacenados: " + modulos.size);
console.log("b.Muestra el contenido de la estructura:");
for (var key of modulos.keys()) {
    console.log(key + ": " + modulos.get(key));
}
console.log("c.Devuelve las abreviaturas de todos los módulos guardados:");
for (var key of modulos.keys()) {
    console.log(key);
}
console.log("d.Devuelve el nombre completo de todos los módulos:");
for (var value of modulos.values()) {
    console.log(value);
}
console.log("e.Consulta si está el módulo 'DAW': " + modulos.has("DAW"));
if (modulos.has("DAW")) {
    console.log("f.Si está, cambia el nombre completo del módulo añadiendo un 2 al final:");
    modulos.set("DAW", "Desarrollo de Aplicaciones Web2");
    console.log("g.Si está, elimínalo y vuelve a mostrar todos los módulos para comprobar el borrado:");
    modulos.delete("DAW");
    for (var key of modulos.keys()) {
        console.log(key + ": " + modulos.get(key));
    }
}