# HANDOFF — fundacion-alba-web

Checklist de cierre antes del deploy al servidor del cliente (Hostinger, SSH).
Archivo de trabajo temporal: al terminar decidimos si se conserva o se borra.

## 1. Datos a pedir al cliente

- [ ] URL real de Instagram (hoy `href="#"` en el footer de `index.html`)
- [ ] URL real de Facebook (ídem)
- [ ] URL real de YouTube (ídem)
- [ ] URL real de TikTok (ídem)

## 2. Cierre de la landing (`index.html`)

- [ ] Favicon (no existe; candidato: avatar de Alba en `assets/brand/`)
- [ ] Meta description + Open Graph / Twitter Card (el `<head>` hoy solo tiene título)
- [ ] Optimizar `assets/images/hero.jpeg` y `enfoque.jpeg` (~2,2 MB c/u → objetivo <300 KB c/u)
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
- [ ] Volver el repo a privado y apagar Pages (preview temporal)
