# HANDOFF — fundacion-alba-web

Checklist de cierre antes del deploy al servidor del cliente (Hostinger, SSH).
Archivo de trabajo temporal: al terminar decidimos si se conserva o se borra.

## 1. Datos a pedir al cliente

- [ ] URL real de Instagram (hoy `href="#"` en el footer de `index.html`)
- [ ] URL real de Facebook (ídem)
- [ ] URL real de YouTube (ídem)
- [ ] URL real de TikTok (ídem)
- [ ] Listado de SOMOS ALBA: roles de Gloria, Sergio y Rodo (hoy "[Función pendiente]") — pedírselo a Pablo

## 2. Cierre de la landing (`index.html`)

- [x] Favicon: SVG + ICO + apple-touch-icon generados y linkeados en `index.html` y `convocatoria.html`
- [x] Meta description + Open Graph / Twitter Card en ambas páginas (URLs absolutas al preview; cambiar al dominio final en el deploy)
- [x] Optimizar `assets/images/hero.jpeg` y `enfoque.jpeg` (2,3/2,2 MB → 173/156 KB desktop + variantes mobile 39/37 KB)
- [ ] QA final: links (WhatsApp, Maps, mailto, anclas), responsive, textos

## 3. Decisión pendiente

- [ ] Qué hacer con el link "Colaborá con Alba" del footer: la convocatoria **no** se sube
  al servidor (falta definir la lista de participantes), así que el link quedaría roto.
  Opciones: (a) subir igual `convocatoria.html`, (b) quitar temporalmente el link del footer.

## 4. Deploy (sesión aparte)

- [ ] Credenciales SSH + ruta destino (`public_html`) + dominio + SSL de Hostinger
- [ ] Subir solo `index.html` + `assets/` (sin `convocatoria*.html`, `paleta-exploracion.*`,
      `tmp/`, `antecedentes/`, `node_modules/`, `.git`, `package*.json`)
- [ ] Verificar sitio en dominio final
- [ ] Actualizar `og:url` / `og:image` / `twitter:image` al dominio final (hoy apuntan al preview de Pages)
- [ ] Volver el repo a privado y apagar Pages (preview temporal)
