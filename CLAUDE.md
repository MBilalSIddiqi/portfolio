# CLAUDE.md — Project guidance for Claude Code

This is a static portfolio website (HTML/CSS/vanilla JS, no build step). For the full
current-state reference see `CONTEXT.md`; for the spec see `spec.md`; for the roadmap see
`TODO.md`.

## Security — secrets must never be committed

- **NEVER commit or push API keys, tokens, or any secret.** This explicitly includes the
  **TinyPNG / Tinify API key** used to compress images. It is session-only and must never
  appear in any tracked file, commit, or push.
- Pass secrets via environment variables at runtime, not via files in the repo.
- Image-compression scripts are throwaway helpers that live in `/tmp` — never add them to
  the repo.
- Before committing, sanity-check the staged diff for leaked secrets.

## Conventions

- No build step / no dependencies — open the HTML files directly or via a static server
  (`python3 -m http.server 8000`).
- The nav and footer are JS-injected from a single source of truth in `js/script.js`
  (`buildNav()` / `buildFooter()`); edit them there, not per-page.
- Project and certificate cards are data-driven from the `PROJECTS` / `CERTIFICATES`
  arrays in `js/script.js`.
- Project images live in `assets/images/` as compressed JPEGs, referenced per project via
  the `images: [...]` array.

## Deployment

`git push origin main` auto-deploys to both Netlify (primary) and GitHub Pages (mirror).
See `CONTEXT.md` §9.
