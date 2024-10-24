let modulos = [
    {
        nombre: "Despliegue",
        duracion: "80 horas",
        numAlumnos: 35
    },
    {
        nombre: "Desarrollo Web",
        duracion: "40 horas",
        numAlumnos: 30
    },
    {
        nombre: "Interfaces",
        duracion: "120 horas",
        numAlumnos: 25
    },
    {
        nombre: "Inglés",
        duracion: "50 horas",
        numAlumnos: 40
    }
];

for (let i = 0; i < modulos.length; i++) {
    console.log(`Módulo: ${modulos[i].nombre}, Duración: ${modulos[i].duracion}, Alumnos matriculados: ${modulos[i].numAlumnos}`);
}