export const sendNotification = (title, body) => {
  if (Notification.permission === "granted") {
    new Notification(title, { body, icon: "/public/logo/logo.png" });
  }
};

export const requestNotificationPermission = () => {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
};
