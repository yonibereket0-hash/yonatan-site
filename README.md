# Yonatan local site

This folder contains the complete static site and its local preview server.

## Open it on Windows

Double-click `start-local.cmd`, or run:

```powershell
node .\server.js
```

Then open <http://127.0.0.1:4173/> in Chrome.

## Project organization

- `PRODUCT.md` — product brief and boundaries
- `DESIGN.md` — visual and interaction direction
- `PRODUCT_ORGANIZATION.md` — Streamlane-style product map adapted to this site
- `dist/` — browser-ready HTML, CSS, JavaScript, and assets
- `server.js` — dependency-free local preview server
- `.openai/hosting.json` — hosted deployment metadata

The contact form is intentionally frontend-only until a real endpoint is chosen.
