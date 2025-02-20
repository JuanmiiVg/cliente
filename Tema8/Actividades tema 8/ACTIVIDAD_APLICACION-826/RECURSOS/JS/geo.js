export const geo = {
  async askPermissions() {
    if (!navigator.geolocation) {
      throw new Error(
        "La geolocalización no es compatible con este navegador."
      );
    }
    return new Promise((resolve, reject) => {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            resolve("Permiso concedido.");
          } else if (permissionStatus.state === "prompt") {
            resolve("Permiso pendiente de solicitud.");
          } else {
            reject("Permiso denegado.");
          }
        })
        .catch((err) => reject("Error al verificar permisos: " + err));
    });
  },

  getPosition() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("La geolocalización no está disponible.");
      }

      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position.coords),
        (error) => reject("Error al obtener la ubicación: " + error.message)
      );
    });
  },

  async getLongitude() {
    const coords = await this.getPosition();
    return coords.longitude;
  },
  async getLatitude() {
    const coords = await this.getPosition();
    return coords.latitude;
  },

  async getAltitude() {
    const coords = await this.getPosition();
    return coords.altitude ?? "No disponible";
  },
};
