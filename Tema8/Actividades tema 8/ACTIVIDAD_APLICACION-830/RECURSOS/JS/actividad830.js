let notificationInterval;

function askPermission() {
  if (Notification.permission === "default") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        startNotifications();
      } else {
        console.log("Permiso de notificaciones denegado.");
      }
    });
  } else if (Notification.permission === "granted") {
    startNotifications();
  }
}

function startNotifications() {
  notificationInterval = setInterval(() => {
    showNotification();
  }, 30000);
}

function showNotification() {
  const options = {
    body: "Haz clic aquí para visitar el enlace.",
    icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
    requireInteraction: false,
  };

  let notification = new Notification("¡Visita este enlace!", options);

  setTimeout(() => {
    notification.close();
  }, 5000);

  notification.onclick = () => {
    window.open("https://randomsitesontheweb.com/", "_blank");
    clearInterval(notificationInterval);
  };
}

document.addEventListener("DOMContentLoaded", askPermission);
