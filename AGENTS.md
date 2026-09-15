# AGENTS.md — fundacion-alba-web

Static single-page site. `index.html` + `assets/`. No framework, no bundler, no tests, no CI.

## Build (Tailwind is local, no CDN)

- `assets/css/tailwind.input.css` (CSS-first con `@theme`) is the build source. Deps locales: `tailwindcss` + `@tailwindcss/cli` (v4).
- Regenerate after touching any Tailwind class in `index.html`:
  `npm run build:css`
- `package.json` + `package-lock.json` committed on purpose (`node_modules/` ignored); `npm install` desde cero permite recompilar.
- Verify coverage after rebuild: every `class="..."` token in `index.html` must have a rule in `tailwind.css` (custom classes live in `assets/css/styles.css`, not Tailwind).

## Paths

- `url()` inside `assets/css/*.css` resolves **relative to the CSS file**: use `../images/…`, `../fonts/…` — never `assets/…`.
- `src`/`href` in `index.html` resolve relative to `index.html`: use `assets/…`.

## Dependencies (all self-hosted by design)

- Fonts: `assets/fonts/` (latin subset only: Open Sans variable 400–700, Spectral 600) via `@font-face` in `styles.css`. No Google Fonts links.
- Icons: local SVG in `assets/contact/`, `assets/brand/`, `assets/social/`. No icon fonts.
- Only acceptable external URLs are functional links: `wa.me` and Google Maps. Never re-add render-blocking externals (CDNs, font links, `<style>` blocks in HTML).

## Git (`gk` = git-sidekick, `/usr/local/bin/gk`)

- Branches: `dev` (work) → `main` (published) via `gk merge dev main 2` (strict: guard snapshot + push). Remote `origin` = private GitHub repo.
- `gk close` commits + creates a `work/…` snapshot tag + appends `.git-worklog.md`, leaving it `M` (dirty) for the next session — that is normal, not a problem to fix.
- `gk` has no command to add a remote to an existing repo; use `gh`/git directly for that.
- `antecedentes/` is history material, ignored via `.gitignore` — never `git add` it.
- Never commit, push, merge, or change visibility without an explicit order.

## Gotchas

- `main` only moves via strict merge from `dev`; never commit on `main` directly.
- GitHub Pages does NOT work on this repo (private + Free plan → API `422`). Making it public needs a security review first; author email `jorgehpereyra@gmail.com` is in all commit metadata.
- Contact data in `index.html` (WhatsApp, email, address) is institutional and intentionally public.
