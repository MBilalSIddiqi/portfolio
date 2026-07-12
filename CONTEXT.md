# Project Context — What Has Been Built

This document records the *current state* of the portfolio website for
**Mohammad Bilal Siddiqui**. It is the source of truth for what exists today.
For original requirements see `PROMPT.md` / `spec.md`; for the roadmap see `TODO.md`.

> **Status:** Phases 1–6 complete (structure, styling, interactivity, real assets, deployment,
> UI/UX polish). All 15 projects, both certificates, and the hero/OG image now use **real images**
> — no picsum placeholders remain. A cross-persona UX audit (July 12, 2026) drove a round of fixes:
> real content replaced all placeholders, the certificates page was renamed to "Certifications",
> the tagline became "Fast, affordable websites", a WCAG `--link` contrast token was added, and the
> modal gained a focus trap. Remaining: Lighthouse/cross-browser testing and a couple of small
> audit items (see §10).

> **Live URLs:**
> - **Netlify (primary):** https://mbilalsiddiqi-portfolio.netlify.app/ — auto-deploys on push to `main`.
> - **GitHub Pages (mirror):** https://mbilalsiddiqi.github.io/portfolio/ — rebuilds on push.

---

## 1. Tech Stack

- **HTML5** — semantic markup, no templating frameworks.
- **CSS3** — hand-written (no Bootstrap/Tailwind); custom properties, Grid, Flexbox, `clamp()`
  fluid sizing, media queries.
- **Vanilla JavaScript (ES6+)** — single IIFE module, no libraries.
- **Google Fonts** — Inter (400/500/600/800).
- **Font Awesome 6.5.1** — via CDN, for GitHub/LinkedIn/UI icons.
- **Logo/favicon** — `assets/logo.svg` (the "Terminal" logo), SVG favicon on every page + footer mark.
- **Images** — real project mockups + profile/cert images in `assets/images/`, compressed via the
  TinyPNG/Tinify API (PNG → JPEG; ~17 MB → ~2.3 MB, 86% smaller). No picsum placeholders remain.

No build step, no dependencies — open the HTML files in a browser (or a static server) to run.

---

## 2. File Structure

```
portfolio_web3/
├── index.html          # Home page
├── projects.html       # Projects page (JS-populated grid + modals)
├── certificates.html   # Certifications page (JS-populated grid + modals)
├── contact.html        # Contact page (validated form + info table)
├── css/style.css       # All global styles
├── js/script.js        # All global interactivity + data arrays
├── assets/
│   ├── images/         # Real project mockups, profile photo, cert scans (+ mimo-certificates/ source PDFs)
│   └── logo.svg        # Site logo / SVG favicon
├── netlify.toml        # Netlify config (static root publish, no build step)
├── robots.txt          # SEO — allows crawlers, points to sitemap
├── sitemap.xml         # SEO — lists the 4 pages
├── .gitignore          # Excludes junk, .netlify/, local tooling, secrets, Zone.Identifier files
├── CLAUDE.md           # Claude Code guidance (esp. never commit secrets/API keys)
├── README.md · PROMPT.md · spec.md · TODO.md · CONTEXT.md   # Docs
└── file system.txt     # Intended file-tree reference
```

> Locally-present but **gitignored** (not part of the site): `assets/logos/` + `logo-preview.html`
> (logo concept candidates), `.agents/`, `skills-lock.json`, `.netlify/`, `details.txt`, and all
> `*:Zone.Identifier` files. `improvements.md` (the security + UX audit) is untracked.

### `assets/images/` contents
Real, compressed JPEGs for all 15 projects (most filenames match each project's `seed`, some
spelling variants referenced explicitly via each project's `images:` array):
`archieve_web1` (ARCHIVE.01), `bahurrus_web1` (Bauhaus), `bakery_web1`, `botanical_web1` (AURELIA
Botanicals), `ethernal_web1` (Ethereal Events), `gaming-mockup`, `health_web1`, `industrial_web1`,
`jewelry_web1`, `lawyer_web1`, `neural_link1` (NEURAL_LINK), `tech_web1`, `urban_web1`, plus
multi-image sets `kids_web1-1/2/3` (3) and `travel_web1-1/2` (2).

Plus real profile/credential images:
- `mypic1by1new.png` — About-section profile photo (1254×1254).
- `bilal-hero.jpg` — hero art + Open Graph share image (900×900).
- `mimo-python.jpg`, `mimo-python-ai.jpg` — the two real Mimo certificate scans.
- `mimo-certificates/` — the source PDFs (`mimo-certificates-125.pdf` = Python,
  `mimo-certificates-226.pdf` = Python AI Development) the cert JPEGs were rendered from.

> Unused display images (`bilal-about.jpg`, `mypicfull.png`, `mypictrustshot.png`) were **deleted**
> — nothing references them.

---

## 3. Design System (`css/style.css`)

### Color tokens (`:root`)
| Variable | Value | Use |
|----------|-------|-----|
| `--bg` | `#0a0a0a` | Page background (black) |
| `--bg-alt` | `#111418` | Raised surfaces / cards |
| `--navy` | `#1a2a4a` | Headings token |
| `--blue` | `#2a6fdb` | Accents, buttons |
| `--blue-dark` | `#1f57ad` | Button hover |
| `--link` | `#5b9bf5` | **Lighter blue for text links — meets WCAG 4.5:1 on dark bg** |
| `--text` / `--text-soft` / `--muted` | `#ffffff` / `#e0e0e0` / `#9aa3b2` | Text tiers |
| `--border` | `#232a36` | Hairline borders |
| `--navy-deep` | `#0d1117` | Pricing section band |
| `--green` | `#22c55e` | Pricing checkmarks, discount accents |

Other tokens: radii, max width (`--max: 1180px`), fluid `--gap`, shadow, transition.

### Phase 6 polish tokens
`--ease` (springy `cubic-bezier(0.22,1,0.36,1)`), `--transition` (`0.25s var(--ease)`),
`--border-hover` (`#3a4660`), `--edge-light` (inner top highlight on raised cards),
`--space-1…6` spacing scale, `--fs-sm/base/lg` type scale.

### Notable styling decisions
- **Section titles render white with a blue accent word** (e.g. "About <span>Me</span>"). Pure navy
  on black fails contrast, so `--navy` stays a token while headings stay readable.
- **Text links use the lighter `--link` token** (`a`, `.section__lead a`, `.card__meta`,
  `.card__hint`, `.section__kicker`, `.info-row__label`) so accent text clears WCAG 1.4.3 contrast.
- **Mobile-first** — base = mobile; breakpoints ~600 / ~760 (nav) / ~820 / ~900–920px enhance up.
- **Reduced-motion** — animations/transitions disabled under `prefers-reduced-motion: reduce`.
- Button variants: `.btn--navy`, `.btn--white`, `.btn--blue`, `.btn--ghost`, `.btn--github`.
- `.section__kicker` — uppercase, letter-spaced blue eyebrow (used under the Projects H1).
- Phase 6 polish (§11): tighter heading rhythm + `text-wrap` balance, fixed hero radial glow,
  `--edge-light` on raised cards, scroll-reveal, CTA sheen sweep, hamburger→X + scroll-state header,
  soft form focus rings.

---

## 4. Shared Components

### Navigation (JS-injected)
- Defined once in `js/script.js` (`NAV_LINKS`), injected into `<header id="site-header">` on every
  page — single source of truth. Sticky, blurred header, brand "Bilal.dev", links: Home, Projects,
  Certificates, Contact.
- `setActiveNav()` adds `.active` (underline) + `aria-current="page"` to the current page's link.
- **Mobile hamburger** toggles the nav list under 760px; closes on link tap; animates into an X.
- *Requires JavaScript to render.*

### Footer (JS-injected)
- Defined once (`buildFooter()`), injected into `<footer id="site-footer">`, reuses `NAV_LINKS`.
- 3-part layout (3-col ≥760px, stacked mobile): **brand + tagline**, **quick nav**, **social icons**
  (circular 42px GitHub / LinkedIn / Email buttons). A `.footer__bottom` bar carries the copyright.
- *Also requires JavaScript to render (intentional DRY trade-off — one definition, not four copies).*

### Modal system (reusable + focus-trapped)
- `openModal(html)` / `closeModal()` — one modal element created on demand and reused.
- Closes via **X button**, **click-outside**, and **Escape**.
- Accessible: `role="dialog"`, `aria-modal`, `aria-labelledby` wired to the modal heading; focus
  moves to close button on open and returns to the trigger on close; **Tab is trapped** within the
  panel (cycles first↔last focusable); background page regions get `inert` + `aria-hidden`; body
  scroll locked while open.

---

## 5. Pages

### `index.html` (Home)
- **Hero** — split grid: real `bilal-hero.jpg` (left desktop) + text (right). Headline "Building
  Websites **tailored** for your needs"; static sub-headline **"Fast, affordable websites"**. Two
  buttons: **Get in Touch** (navy), **See my work** (white). Stats: **15+ Example Websites**,
  **2 Websites under construction**.
- **About Me** — split: bio LEFT, profile photo (`mypic1by1new.png`) RIGHT (stacks on mobile).
  Bio: 17yo self-taught Python dev, Context Engineering, value-prop checklist.
- **Quote band** — *"I build websites that my clients don't need to be tech-savvy to manage."*
- **Demo showcase** — 1 large + 2 smaller cards (Grid) using real project images, linking to projects.
- **Pricing** — dark-navy band, three tiers (Starter / Popular / Business), middle highlighted with
  a "Most Popular" badge. Green-checkmark features; CTA links to `contact.html?plan=<Tier>` (prefills
  the message). **Early-bird 50% off** shows struck-through original + "50% OFF" pill. A **USD/PKR
  toggle** (`#currency-toggle`) switches every price (~280 PKR/USD, via `data-usd`/`data-pkr`).
- **Side Projects** — grid (1→2→3 cols) of **4 real beginner Python projects** from the
  `Beginner-Projects` GitHub repo: **Weather Checker** (OpenWeatherMap API), **Pokémon Stats
  Fetcher** (PokéAPI), **Login System**, **Mini Ludo Game** — each an icon card linking to its
  source file. Centered **GitHub CTA** → https://github.com/MBilalSIddiqi (new tab).

### `projects.html`
- H1 "My **Projects**" + a "Demo Websites" **kicker** (`.section__kicker`). Empty `#projects-grid`
  populated by JS from the `PROJECTS` array (15 real demo sites, each with a live GitHub Pages link).
- Each card (image + tag + title + description) opens a **modal** with the larger image, full detail,
  and a "Visit live site" button.
- **Images:** all 15 use real mockups (via each project's `images: [...]` array). The picsum fallback
  in `renderProjects()` remains only as an untriggered safety net.
- **Carousel:** projects with >1 image (travel = 2, kids = 3) render a prev/next + dots carousel in
  the modal (wrapping index); single-image projects show a plain `<img>`.

### `certificates.html`
- Title / OG title / H1 all say **"Certifications"** (`Certi<span>fications</span>`).
- Empty `#certs-grid` populated by JS from the `CERTIFICATES` array — **2 real Mimo certificates**:
  **Python** (Mimo, June 2026) and **Python AI Development** (Mimo, July 2026).
- Each card shows Title, Issuer, Date and opens a **modal** with the real certificate scan
  (`assets/images/mimo-python.jpg` / `mimo-python-ai.jpg`) + a summary.

### `contact.html`
- H1 "Let's **Talk**" + lead intro.
- Two-column layout:
  - **Left — contact form**: Name, Email, Message, Send. Wired to **Netlify Forms**
    (`data-netlify="true"`, hidden `form-name`, `bot-field` honeypot). After inline validation, JS
    AJAX-POSTs to Netlify (stays on-page) and shows success/fallback. *(Submissions captured only on
    the Netlify host, not the GitHub Pages mirror.)* A `?plan=<Starter|Popular|Business>` query param
    prefills the message.
  - **Right — info table**: Email (bilalseo009@gmail.com), LinkedIn, GitHub (MBilalSIddiqi), and
    Location (**"Planet Earth"** — still a placeholder; see §10).

---

## 6. JavaScript Behavior (`js/script.js`)

Single IIFE, wired on `DOMContentLoaded`. Each feature guards on element existence so the one shared
script is safe on every page.

| Function | Responsibility |
|----------|----------------|
| `buildNav()` | Inject shared nav; wire mobile toggle + hamburger→X + `.is-scrolled` shadow |
| `buildFooter()` | Inject shared 3-part footer, reusing `NAV_LINKS` |
| `setActiveNav()` | `.active` / `aria-current` on the current page's link |
| `initScrollReveal()` | IntersectionObserver reveal (`.reveal`→`.is-visible`); instant-show fallback |
| `initHeroTyping()` | *(present)* hero sub-headline helper; hero currently shows a static tagline |
| `initShapesCanvas()` | Fixed full-page `<canvas>` of drifting outline shapes; pauses on tab-hidden; skipped under reduced-motion |
| `ensureModal()` / `openModal()` / `closeModal()` | Reusable focus-trapped modal (X / outside / Esc, `inert`, `aria-labelledby`) |
| `renderProjects()` | Build project cards from `PROJECTS`; modal + carousel when >1 image |
| `buildCarousel()` / `wireCarousel()` | Build + wire the multi-image modal carousel |
| `renderCertificates()` | Build certificate cards from `CERTIFICATES` |
| `renderSideProjects()` | Build the 4 side-project cards from `SIDE_PROJECTS` |
| `initContactForm()` | Validate Name/Email/Message; AJAX-POST to Netlify Forms; prefill from `?plan=` |
| `initPricingToggle()` | Toggle every `[data-usd][data-pkr]` price USD↔PKR; update `aria-pressed` |

- **Data arrays** hold all card content — easy to edit/extend: `PROJECTS` (15), `CERTIFICATES` (2),
  `SIDE_PROJECTS` (4). Matched projects carry an `images: ["assets/images/..."]` array; unmatched
  fall back to picsum (none currently do).
- **Form validation + submission**: blocks on empty fields / invalid email
  (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), shows inline `.form-error` messages. On success, AJAX-POSTs
  url-encoded data to Netlify Forms (`fetch("/")`), resets, and confirms; on failed POST (e.g. the
  GitHub Pages mirror) shows a fallback pointing to the email. Send button disabled while sending.
- **Smooth scrolling** via CSS `scroll-behavior: smooth`.

---

## 7. Accessibility & SEO

- Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), skip-to-content link.
- ARIA: nav `aria-label`, modal `role="dialog"`/`aria-modal`/`aria-labelledby` + focus trap + `inert`
  background, form errors `role="alert"`, status `aria-live="polite"`, `:focus-visible` outlines.
- **Lighter `--link` token** clears WCAG 1.4.3 contrast for all accent text links.
- Per-page `<title>`, meta description, Open Graph tags (real `bilal-hero.jpg` share image).
- `loading="lazy"` on below-the-fold images; explicit width/height on the profile image.
- **Inline links underlined** (`.section__lead a`, `.info-table a`) so they don't rely on color alone
  (WCAG 1.4.1). Nav links, buttons, footer icons stay underline-free (already visually distinct).
- **SEO files:** `robots.txt` (allows crawlers, points to the sitemap) and `sitemap.xml` (the 4 pages).

### Performance
- **Images compressed** via TinyPNG/Tinify (~17 MB → ~2.3 MB, 86% smaller); PNG → JPEG. Main
  Lighthouse-performance lever for this image-heavy site.
- **No dead CSS/JS** per audit — all class selectors, keyframes, and JS functions referenced.
  CSS ~27 KB (6.3 KB gz); JS ~32 KB (10 KB gz).

---

## 8. How to Run

```bash
cd /home/bilal/all_web/portfolio_web3
python3 -m http.server 8000
# open http://localhost:8000
```

---

## 9. Deployment

Live on **two** hosts, both auto-updating from `MBilalSIddiqi/portfolio` (`main` branch):

- **Netlify (primary)** — https://mbilalsiddiqi-portfolio.netlify.app/
  - Site `mbilalsiddiqi-portfolio`, team "Muhammad Bilal's Inc" (`bilalseo009`, Free plan).
  - **Continuous deployment** via the Netlify GitHub App: push to `main` → production deploy;
    PRs → deploy-preview URLs; branch deploys at `<branch>--mbilalsiddiqi-portfolio.netlify.app`.
  - `netlify.toml`: `publish = "."`, no build command (static).
  - Admin: https://app.netlify.com/projects/mbilalsiddiqi-portfolio
- **GitHub Pages (mirror)** — https://mbilalsiddiqi.github.io/portfolio/ — served from `main` root.

A single `git push origin main` updates both live sites.

---

## 10. Not Yet Done (see `TODO.md` / `improvements.md`)

- **Two open UX-audit items:** the form-error `alert()` (`js/script.js:628`) is still present
  (redundant with the inline `role="alert"` errors), and the contact **Location still reads
  "Planet Earth"** (should be a real city/country).
- **Testing:** Lighthouse audit (target 90+) and cross-browser testing not yet run.
- **Security headers** (`netlify.toml`): CSP + security headers + CDN SRI from `improvements.md` not
  yet added.
- **Email notifications for the form:** submissions collect in the Netlify Forms dashboard; still to
  add an email notification under Forms → Form notifications.

---

## 11. Phase 6 — UI/UX Global Polish

A site-wide visual pass (layout/content unchanged). All six items shipped; each respects
`prefers-reduced-motion`.

1. **Typographic scale & rhythm** — spacing + type-scale tokens; h1/h2/h3 tightened
   (`line-height: 1.15`, negative `letter-spacing`) with `text-wrap: balance`; `.section__lead`
   gets `text-wrap: pretty`.
2. **Color & depth** — fixed hero **radial glow** on `<body>`; two-tier borders
   (`--border` → `--border-hover`); inner top highlight (`--edge-light`) on raised cards.
3. **Motion & micro-interactions** — scroll-reveal via `IntersectionObserver` (`initScrollReveal()`,
   fade + rise 24px, then unobserve); springy `--ease`; **CTA sheen sweep** on
   `.btn--blue`/`.btn--github` via `::after`.
4. **Nav & header polish** — hamburger animates into an **X** (`aria-expanded`); header gains
   `.is-scrolled` shadow past `scrollY > 8`; mobile dropdown gated with `visibility: hidden;
   pointer-events: none` until `.open` so links aren't focusable while closed.
5. **Footer restructure** — JS-injected 3-part footer (`buildFooter()`): brand + tagline · quick nav
   · circular social icons + copyright bar. See §4.
6. **Focus & form feel** — inputs/textareas get a soft focus ring
   (`box-shadow: 0 0 0 3px rgba(42,111,219,0.15)` + blue border) instead of a hard border jump, plus
   a `--border-hover` hover state.
