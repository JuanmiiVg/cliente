function validaHora(hora) {
  const [horas, minutos] = hora.split(":");
  const horaValida =
    parseInt(horas) >= 0 &&
    parseInt(horas) < 24 &&
    parseInt(minutos) >= 0 &&
    parseInt(minutos) < 60;
  console.log(horaValida);
}
