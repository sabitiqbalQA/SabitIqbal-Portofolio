# Sabit Iqbal Maulana — Quality Portfolio · BLUEPRINT EDITION

This is a standalone static personal portfolio (HTML + CSS + JavaScript) that can be hosted on GitHub Pages, Netlify, or any static web server.

## Visual Identity

- Obsidian / Midnight Graphite / Arctic Cyan, no orange or red football-club-like accent palette.
- Premium, engineering-led hero with the Sabit portrait, 8D quality signature, and an interactive visual results story.
- Responsive project cards, clickable recreated process diagrams and gallery lightbox.

## Main files

- `index.html` — all pages/sections on one scrolling website
- `styles.css` — previous functional component foundations (recolored)
- `redesign.css` — the new visual system; loaded AFTER styles.css and overrides its presentation
- `script.js` — bilingual text, gallery, zoom, projects, chart, language/theme toggle and reading progress
- `assets/CV-Sabit-Iqbal-Maulana.pdf` — downloadable public CV
- `assets/sabit-iqbal-portrait.webp` — portrait
- `assets/project-cover-d/*.svg` — public-safe reconstructed 16:9 diagrams (no private production photos)

## Deploy to GitHub Pages

1. Extract the ZIP.
2. Upload **all files and the `assets` folder** to the ROOT of Sabit's repository that serves GitHub Pages, replacing the old files.
3. Make sure both `styles.css` and `redesign.css` were uploaded, as well as `script.js` and `assets`.
4. Commit and push. If the changes don't appear, hard-refresh the page with `Ctrl+F5`.
5. Settings → Pages → Deploy from branch, main branch / root (unless your repository uses a different branch/folder).

## Notes about public safety

This website deliberately uses reconstructed technical diagrams rather than confidential internal presentations. It omits operator photos, detailed internal financial losses, sensitive SRORDs/serial numbers and proprietary corporate forms. You are still responsible for employer approval to publish proprietary project information and results.

## Interactive controls

- `ID / EN` button changes language; a preference is saved locally.
- Moon/Sun button changes theme.
- Case study and diagram thumbnails open a larger viewer.
- Gallery: arrows for next/previous, + and − to zoom (100–300%), Esc to close.
- Project arrow buttons open more project details.
- Header includes a slim scroll progress indicator.

No backend, database, API token or build command required.
