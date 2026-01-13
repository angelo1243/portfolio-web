// Mostra l'ora corrente nella dashboard dimostrativa
const now = new Date();
const currentTime = now.toLocaleTimeString();
const showCurrentTime = document.getElementById("current-time");
showCurrentTime.textContent = currentTime;

// Mostra l'anno corrente nel footer
const footerYear = document.getElementById("year");
footerYear.textContent = now.getFullYear();