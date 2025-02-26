const apiUrl =
  "https://api.tutiempo.net/json/?lan=es&apid=zwDX4azaz4X4Xqs&lid=3768";

async function obtenerDatosTiempo() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data && data.hour_hour) {
      const horas = Object.values(data.hour_hour);
      const tbody = document.querySelector("#weatherTable tbody");
      tbody.innerHTML = "";

      horas.forEach((hora) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
                   <td>${hora.hour_data || "No disponible"}h</td>
                    <td>${hora.temperature}°C</td>
                    <td>${obtenerIconoEstado(hora.text)} ${hora.text}</td>
                    <td>${hora.wind} km/h</td>
                `;
        tbody.appendChild(fila);
      });
    }
  } catch (error) {
    console.error("Error al obtener datos del tiempo:", error);
  }
}

function obtenerIconoEstado(estado) {
  switch (estado.toLowerCase()) {
    case "soleado":
      return "☀️";
    case "despejado":
      return "🌤️";
    case "nublado":
      return "🌥️";
    case "nuboso":
      return "☁️";
    case "lluvia":
    case "chubascos":
      return "🌧️";
    case "tormenta":
      return "⛈️";
    case "nieve":
      return "❄️";
    case "niebla":
      return "🌫️";
  }
}

document.addEventListener("DOMContentLoaded", obtenerDatosTiempo);
