const vehiculo = {
  marca: "Toyota",
  modelo: "Corolla",
  numeroBastidor: "1234XYZ5678",
  cilindrada: "1800cc",
  numeroPuertas: 4,
  color: "Rojo",
  propietario: {
    nombre: "Juan",
    apellidos: "Pérez Gómez",
    direccion: "Calle Falsa 123, Madrid",
    telefono: "600123456",
    email: "juan.perez@example.com",
  },
};

document.getElementById("guardar").addEventListener("click", () => {
  sessionStorage.setItem("vehiculo", JSON.stringify(vehiculo));
  alert("Vehículo almacenado en sessionStorage.");
});

document.getElementById("mostrar").addEventListener("click", () => {
  const data = sessionStorage.getItem("vehiculo");
  if (data) {
    const vehiculo = JSON.parse(data);
    document.getElementById("info").innerHTML = `
          <h2>Datos del Vehículo</h2>
          <p><strong>Marca:</strong> ${vehiculo.marca}</p>
          <p><strong>Modelo:</strong> ${vehiculo.modelo}</p>
          <p><strong>Número de Bastidor:</strong> ${vehiculo.numeroBastidor}</p>
          <p><strong>Cilindrada:</strong> ${vehiculo.cilindrada}</p>
          <p><strong>Número de Puertas:</strong> ${vehiculo.numeroPuertas}</p>
          <p><strong>Color:</strong> ${vehiculo.color}</p>
          <h2>Datos del Propietario</h2>
          <p><strong>Nombre:</strong> ${vehiculo.propietario.nombre}</p>
          <p><strong>Apellidos:</strong> ${vehiculo.propietario.apellidos}</p>
          <p><strong>Dirección:</strong> ${vehiculo.propietario.direccion}</p>
          <p><strong>Teléfono:</strong> ${vehiculo.propietario.telefono}</p>
          <p><strong>Email:</strong> ${vehiculo.propietario.email}</p>
      `;
  } else {
    alert("No hay datos almacenados.");
  }
});

document.getElementById("borrar").addEventListener("click", () => {
  sessionStorage.removeItem("vehiculo");
  document.getElementById("info").innerHTML = "";
  alert("Datos eliminados.");
});
