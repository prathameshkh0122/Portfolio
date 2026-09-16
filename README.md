# Portfolio — Prathamesh Khamkar (v2 — Dark/Purple Theme)

Personal portfolio site built with React + Vite + Tailwind CSS v4.
Redesigned with a dark theme + purple glow accents, inspired by a
reference video, with sections for About, Academics, Career Timeline,
Projects, and Tech Stack.

https://prathameshkh0122.github.io/Portfolio/

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Push this project to your GitHub repo (replacing the old version).
2. In `package.json`, confirm `"homepage"` matches your GitHub Pages URL.
3. In `vite.config.js`, confirm `base` matches your repo name exactly,
   including capitalization (currently `/Portfolio/`).
4. Run:
   ```bash
   npm run build
   npm run deploy
   ```
5. In your repo's Settings → Pages, source branch should be `gh-pages`.

## Structure

- `src/components/Navbar.jsx` — top nav (logo, email, links)
- `src/components/SocialRail.jsx` — floating left-side social icons
- `src/components/Hero.jsx` — intro section with avatar + glow effect
- `src/components/About.jsx` — about me paragraph
- `src/components/Academics.jsx` — skills + SGPA
- `src/components/Timeline.jsx` — career/journey timeline
- `src/components/Projects.jsx` — Nexora, HOSPEX, Audit System
- `src/components/TechStack.jsx` — tech stack icon grid
- `src/components/Footer.jsx` — contact section + social links

Edit content directly in these files. Replace `src/assets/avatar.jpg`
with your own photo any time — same filename, just overwrite it.

## Notes

- The reference video's 3D animated character was intentionally skipped
  (too complex to replicate reliably) — replaced with a photo + glow
  effect instead. Everything else (theme, layout, sections, animations)
  follows the same structure.
