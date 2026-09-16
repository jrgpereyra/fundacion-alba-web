/* Indicador de sección activa en el menú durante el scroll.
   Sin dependencias. No altera layout, scroll, header ni anchors:
   solo alterna la clase `is-active` (mismo subrayado del hover). */
(function () {
  var links = Array.prototype.slice.call(
    document.querySelectorAll('nav a[href^="#"]')
  );
  if (!links.length || !('IntersectionObserver' in window)) return;

  var byId = {};
  links.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    (byId[id] = byId[id] || []).push(a);
  });

  var sections = Object.keys(byId)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  if (!sections.length) return;

  var active = null;
  function setActive(id) {
    if (active === id) return;
    active = id;
    links.forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
    });
  }

  /* Banda central del viewport: compensa el header fijo y evita
     activaciones múltiples en secciones cortas (móvil). */
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  sections.forEach(function (s) { observer.observe(s); });

  /* Estado inicial: #inicio activo al cargar en la parte superior. */
  if (window.scrollY < 10) setActive('inicio');
})();
