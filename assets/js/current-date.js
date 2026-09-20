/* Fecha de cierre de la convocatoria ("Buenos Aires · Mes de Año").
   Sin dependencias. Solo escribe el mes y año actuales si existe #current-date. */
(function () {
  var el = document.getElementById('current-date');
  if (!el) return;

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  const now = new Date();

  el.textContent =
    `${months[now.getMonth()]} de ${now.getFullYear()}`;
})();
