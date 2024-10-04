let mensaje="Dame la inicial del día de la semana";
let respuesta=prompt(mensaje);
console.log(`El usuario escribió:${respuesta}`);

switch(respuesta){
    case `L`:
        console.log("Horario de 10:30 a 2:00")
        break;
    case `M`:
        console.log("Horario de 11:30 a 3:00")
        break;
    case `X`:
        console.log("Horario de 8:30 a 12:00")
        break;
    case `J`:
        console.log("Horario de 9:30 a 1:00")
        break;
    case `V`:
        console.log("Horario de 10:30 a 4:00")
        break;
    case `S`:
        console.log("Horario de 9:30 a 3:00")
        break;
    case `D`:
        console.log("Horario de 8:30 a 4:00")
        break;
}
console.log("Gracias por venir");