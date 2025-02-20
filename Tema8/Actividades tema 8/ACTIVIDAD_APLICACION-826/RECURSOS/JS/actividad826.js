import { geo } from "./geo.js";

const button = document.getElementById("getLocation");
const output = document.getElementById("output");

button.addEventListener("click", async () => {
  try {
    const permiso = await geo.askPermissions();
    console.log(permiso);

    const latitud = await geo.getLatitude();
    const longitud = await geo.getLongitude();
    const altitud = await geo.getAltitude();

    output.innerHTML = `
            <strong>Latitud:</strong> ${latitud} <br>
            <strong>Longitud:</strong> ${longitud} <br>
            <strong>Altitud:</strong> ${altitud}`;
  } catch (error) {
    output.textContent = "Error: " + error;
    console.error(error);
  }
});
