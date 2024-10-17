/*
Actividad propuesta 3.4
Liga local de fútbol
------------------------------------------------
    Datos del equipo:
    -Nombre
    -Puntos
    -Partidos Jugados
    -Partidos Ganados
    -Partidos Empatados
    -Partidos Perdidos  
    -Goles a Favor
    -Goles en Contra
----------------------------------------------
*/
let liga = [
    ["Valencia", 12, [15, 4, 2, 6], [12, 5]],
    ["Barcelona", 15, [2, 5, 3, 2], [17, 8]],
    ["Jaguars", 17, [8, 9, 6, 8], [12, 6]],
    ["Lakers", 11, [9, 4, 1, 3], [11, 5]],
    ["Betis", 13, [11, 4, 5, 6], [18, 7]],
    ["Real Madrid", 17, [14, 2, 3, 7], [15, 3]],
    ["Euskadi", 18, [17, 1, 2, 8], [18, 8]],
    ["Villareal", 19, [13, 7, 7, 3], [13, 9]],
    ["Bulls", 10, [18, 8, 1, 2], [12, 4]],
    ["Raptors", 9, [19, 9, 2, 1], [12, 7]],
];

for (let i = 0; i < liga.length; i++) {
    for (let j = 0; j < liga[i].length; j++) {
        console.log(liga[i][j]);
    }
}

