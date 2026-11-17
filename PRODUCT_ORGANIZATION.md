# Product organization

This project uses the same clear product-area approach used for Streamlane, adapted to a personal digital practice.

## Public product areas

1. **Entry** — the hero states the audience, outcome, and one next action.
2. **Capabilities** — visitors can understand the three kinds of work available.
3. **Engagements** — the same capabilities are shaped into three understandable ways to work together.
4. **Process** — the working model is explained in three steps: Clarify, Shape, Ship.
5. **Outcomes** — the page names the useful artifacts and decisions the team can leave with.
6. **Fit** — visitors can self-qualify before starting a conversation.
7. **Notes and FAQ** — a lightweight editorial voice and practical answers reduce uncertainty.
8. **Contact** — a short, qualified inquiry flow turns interest into a conversation.
9. **Trust** — semantic HTML, keyboard access, reduced-motion support, metadata, and a clear footer keep the public surface dependable.

## Local ownership

| Product area | Local source |
| --- | --- |
| Entry, capabilities, engagements, process, outcomes, fit, notes, FAQ, contact | `dist/index.html` |
| Visual system and responsive behavior | `dist/styles.css` |
| Reveal motion, clock, and form states | `dist/script.js` |
| Product decisions | `PRODUCT.md` |
| Design decisions | `DESIGN.md` |
| Local runtime | `server.js` and `start-local.cmd` |

## Extension map

If the product grows beyond the one-page site, add pages in this order:

- `notes/` for authored resources
- `work/` for verified case studies
- `contact/` for a connected inquiry workflow
- `about/` for background and operating principles

Keep the public navigation focused on the areas visitors use to understand the work and decide whether to start a conversation.
