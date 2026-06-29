# Project Context — What Has Been Built

This document records everything currently implemented in the portfolio website for
**Mohammad Bilal Siddiqui**. It is the source of truth for the *current state* of the codebase.
For the original requirements, see `PROMPT.md` and `spec.md`; for the roadmap, see `TODO.md`.

> **Status:** Phases 1–3 complete (structure, styling, interactivity). Phase 4 nearly done —
> real project images wired in for **all 15 of 15 projects** (`assets/images/`); only the
> certificates and the profile photo still use picsum placeholders. Phase 5 deployment **done** —
> the site is **live** on Netlify (primary, with GitHub continuous deployment) and GitHub Pages
> (mirror). The contact form is wired to **Netlify Forms** (real backend). **Phase 6 (UI/UX global
> polish) done** — typographic scale, depth/glow, scroll-reveal motion, animated nav/header,
> restructured JS-injected footer, and soft form focus rings (see §11). Remaining: remaining real
> assets and Lighthouse/cross-browser testing.

> **Live URLs:**
> - **Netlify (primary):** https://mbilalsiddiqi-portfolio.netlify.app/ — auto-deploys on every push to `main`.
> - **GitHub Pages (mirror):** https://mbilalsiddiqi.github.io/portfolio/ — also rebuilds on push.

---

## 1. Tech Stack

- **HTML5** — semantic markup, no templating frameworks.
- **CSS3** — hand-written, no Bootstrap/Tailwind. Uses CSS custom properties (variables),
  Grid, Flexbox, `clamp()` fluid sizing, and media queries.
- **Vanilla JavaScript (ES6+)** — single IIFE module, no libraries/frameworks.
- **Google Fonts** — Inter (weights 400/500/600/800).
- **Font Awesome 6.5.1** — via CDN, for GitHub/LinkedIn/UI icons.
- **Logo/favicon** — `assets/logo.svg` (the chosen "Terminal" logo) wired as the SVG favicon on
  every page and reused as the footer brand mark.
- **Images** — real project mockups in `assets/images/` (all 15 projects); picsum.photos
  placeholders (`https://picsum.photos/seed/{seed}/...`) still used only for the certificates and
  the profile photo.

No build step, no dependencies — open the HTML files in a browser (or via a static server) to run.

---

## 2. File Structure

```
portflio_web3/
├── index.html          # Home page
├── projects.html       # Projects page (JS-populated grid + modals)
├── certificates.html   # Certificates page — H1 "Website Demos" (JS-populated grid + modals)
├── contact.html        # Contact page (validated form + info table)
├── css/
│   └── style.css       # All global styles
├── js/
│   └── script.js       # All global interactivity
├── assets/
│   ├── images/         # Real project mockups (18 files covering all 15 projects)
│   └── logo.svg        # Site logo / SVG favicon (the chosen "Terminal" logo)
├── netlify.toml        # Netlify config (static root publish, no build step)
├── .gitignore          # Excludes junk, .netlify/, local agent tooling
├── README.md           # Project readme (live links)
├── PROMPT.md           # Original build prompt
├── spec.md             # Detailed product spec
├── TODO.md             # Roadmap / checklist
├── CONTEXT.md          # This file
└── file system.txt     # Intended file tree reference
```

> Note: `assets/images/` exists with real project mockups; `README.md` and `netlify.toml` now exist.
> `assets/pdfs/` from `file system.txt` is **not yet created**. Only the certificates and the profile
> photo still use picsum.photos placeholders. `assets/logo.svg` ships as the favicon; the four
> logo concept candidates (`assets/logos/`) and `logo-preview.html` are kept locally but gitignored.
> Untracked local tooling (`.agents/`, `skills-lock.json`, `.netlify/`) is also gitignored and not
> part of the site.

### `assets/images/` contents
Real mockups for all 15 projects (most filenames match each project's `seed`, with a few
spelling variants referenced explicitly via the `images:` array):
`bakery_web1.png`, `health_web1.jpg`, `industrial_web1.png`, `jewelry_web1.jpg`, `lawyer_web1.jpg`,
`tech_web1.jpg`, `gaming-mockup.jpg`, `bahurrus_web1.png` (Bauhaus), `neural_link1.png` (NEURAL_LINK),
`botanical_web1.png` (AURELIA Botanicals), `urban_web1.png`, `archieve_web1.png` (ARCHIVE.01),
`ethernal_web1.png` (Ethereal Events), plus multi-image sets `kids_web1-1/2/3.jpg` (3) and
`travel_web1-1/2.jpg` (2).

---

## 3. Design System (`css/style.css`)

### Color tokens (`:root`)
| Variable | Value | Use |
|----------|-------|-----|
| `--bg` | `#0a0a0a` | Page background (black) |
| `--bg-alt` | `#111418` | Raised surfaces / cards |
| `--navy` | `#1a2a4a` | Headings token |
| `--blue` | `#2a6fdb` | Accents, buttons, links |
| `--blue-dark` | `#1f57ad` | Button hover |
| `--text` | `#ffffff` | Primary text |
| `--text-soft` | `#e0e0e0` | Body text |
| `--muted` | `#9aa3b2` | Low-emphasis text |
| `--border` | `#232a36` | Hairline borders |
| `--navy-deep` | `#0d1117` | Pricing section band |
| `--green` | `#22c55e` | Pricing feature checkmarks, discount accents |

Other tokens: radii, max content width (`--max: 1180px`), fluid `--gap`, shadow, transition.

### Phase 6 polish tokens (`:root`)
| Variable | Value | Use |
|----------|-------|-----|
| `--ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Springy ease-out for all motion |
| `--transition` | `0.25s var(--ease)` | Shared transition shorthand |
| `--border-hover` | `#3a4660` | Second-tier (hover) border color |
| `--edge-light` | `inset 0 1px 0 rgba(255,255,255,0.04)` | Inner top highlight on raised cards |
| `--space-1`…`--space-6` | `0.25rem`→`2.5rem` | Spacing scale |
| `--fs-sm` / `--fs-base` / `--fs-lg` | `0.9` / `1` / `1.25rem` | Type scale |

### Notable styling decisions
- **Section titles render in white with a blue accent word** (e.g. "About <span>Me</span>"),
  not pure navy. Pure navy on a black background fails contrast, so navy is kept as a token while
  headings stay readable/accessible. The `--navy` color is still used per spec intent.
- **Mobile-first** — base styles target mobile; breakpoints at ~600px, ~760px (nav), ~820px,
  ~900–920px progressively enhance to tablet/desktop layouts.
- **Reduced-motion** support — animations/transitions disabled under
  `prefers-reduced-motion: reduce`.
- Reusable button variants: `.btn--navy`, `.btn--white`, `.btn--blue`, `.btn--ghost`, `.btn--github`.
- **Phase 6 polish (see §11)** added: tighter heading rhythm + `text-wrap` balancing, a fixed hero
  radial glow, `--edge-light` inner highlight on raised cards, scroll-reveal (`.reveal`/`.is-visible`),
  a CTA sheen sweep, hamburger→X + scroll-state header animations, and soft form focus rings.

---

## 4. Shared Components

### Navigation (JS-injected)
- Defined once in `js/script.js` (`NAV_LINKS`) and injected into `<header id="site-header">` on
  every page — single source of truth.
- Sticky, blurred header with brand "Bilal.dev", links: Home, Projects, Certificates, Contact.
- **Active page highlighting** — `setActiveNav()` compares the current filename to each link's
  href and adds `.active` (underline accent) + `aria-current="page"`.
- **Mobile hamburger** — toggle button shows/hides the nav list under 760px; closes on link tap.
- *Requires JavaScript enabled to render the nav.*

### Footer (JS-injected — Phase 6)
- Defined once in `js/script.js` (`buildFooter()`) and injected into `<footer id="site-footer">` on
  every page — single source of truth, reuses the shared `NAV_LINKS` array.
- Three-part layout (3-column left-aligned at ≥760px, stacked on mobile):
  1. **Brand + tagline** — "Bilal.dev" + "Building websites tailored for your needs — so you don't
     have to be tech-savvy to manage them."
  2. **Quick nav** — the same Home / Projects / Certificates / Contact links.
  3. **Social icons** — circular 42px icon buttons (GitHub, LinkedIn, Email) with edge-light +
     translateY(-3px) hover.
- A `.footer__bottom` bar carries the copyright "© 2026 Mohammad Bilal Siddiqui. All rights reserved."
- *Like the nav, the footer now requires JavaScript enabled to render.*

### Modal system (reusable)
- `openModal(html)` / `closeModal()` in `js/script.js`. One modal element is created on demand
  and reused.
- Closes via: **X button**, **click-outside** (overlay click), and **Escape key**.
- Accessible: `role="dialog"`, `aria-modal`, focus moves to close button on open and returns to
  the trigger on close; body scroll locked while open.

---

## 5. Pages

### `index.html` (Home)
- **Hero** — split grid: animated abstract `</>` blob (left at desktop) + text (right). Headline
  "Building Websites **tailored** for your needs" (bold + italic, accent word in blue). The
  sub-headline is a **typing animation** (`initHeroTyping`) that cycles type → pause → delete
  through 4 phrases ("Fast delivery. Affordable rates.", "Clean, modern UI on every project.",
  "Built for Pakistani businesses.", "No-tech maintenance, always.") with a CSS-blinking cursor;
  under reduced-motion it shows the first phrase statically. Two buttons: **Get in Touch** (navy)
  and **See my work** (white). Stats: **15+ Example Websites**, **2 Websites under construction**.
- **About Me** — split layout. **Paragraph/bio on the LEFT, profile photo on the RIGHT** (desktop;
  stacks on mobile). Bio written from `spec.md` (17yo self-taught Python dev, Context Engineering,
  value-prop checklist).
- **Quote band** — full-width black section: *"I build websites that my clients don't need to be
  tech-savvy to manage."*
- **Demo showcase** — 1 large card + 2 stacked smaller cards (CSS Grid), linking to projects.
- **Pricing** — dark-navy band (`--navy-deep`) with three tiers (Starter, Popular, Business),
  the middle one highlighted with a "Most Popular" badge. Each card lists features (green
  checkmarks) and a CTA that links to `contact.html?plan=<Tier>`, which prefills the contact
  message. An **early-bird 50% discount** shows the struck-through original price next to the
  discounted amount and a "50% OFF" pill. A **USD/PKR currency toggle** (`#currency-toggle`)
  switches every price between USD and a hardcoded PKR equivalent (~280 PKR/USD, stored in
  `data-usd`/`data-pkr` attributes).
- **Side Projects** — 6-card grid (1 col mobile → 2 tablet → 3 desktop), each with a Font Awesome
  icon, "Side Project 1–6". Centered rounded **GitHub CTA**: `<i class="fab fa-github"></i> Explore
  my other repos` → https://github.com/MBilalSIddiqi (new tab).

### `projects.html`
- H1 "My **Projects**". Empty `#projects-grid` populated by JS from the `PROJECTS` array
  (15 real demo sites, each with a live GitHub Pages link — e.g. Cozy Crumbs Bakery, SleekGamer,
  AURELIA Fine Jewelry, Sterling & Associates, Solis Escapes, KiddoCreative).
- Each card (image + tag + title + description) opens a **modal** with the larger image, full
  detail text, and a "Visit live site" button.
- **Images:** all 15 projects use real mockups from `assets/images/` (referenced via an
  `images: [...]` array on each project object). The picsum fallback in `renderProjects()` remains
  as a safety net but is no longer triggered by any project.
- **Carousel:** projects with more than one image (travel = 2, kids = 3) render a multi-image
  carousel inside the modal — prev/next arrows + dots, index wraps around. Single-image projects
  show a plain `<img>` (no carousel).

### `certificates.html`
- H1 "Website **Demos**" (per spec — this is the certificates page).
- Empty `#certs-grid` populated by JS from the `CERTIFICATES` array (4 items: Python for Everybody /
  Coursera, Responsive Web Design / freeCodeCamp, JavaScript Algorithms & Data Structures /
  freeCodeCamp, Git & GitHub Essentials / Coursera).
- Each card shows Course Name, Issuer, Date and opens a **modal** with a certificate screenshot
  (placeholder) + course summary.

### `contact.html`
- H1 "Let's **Talk**" + lead "I'm always looking for conversations with people building websites
  for people."
- Two-column layout:
  - **Left — contact form**: Name, Email, Message, Send button. Wired to **Netlify Forms** —
    `data-netlify="true"`, hidden `form-name`, and a `bot-field` honeypot. After inline validation
    passes, JS AJAX-POSTs to Netlify (stays on-page) and shows the success/fallback message.
    *(Submissions are captured only on the Netlify host, not the GitHub Pages mirror.)*
    If the page is opened with a `?plan=<Starter|Popular|Business>` query param (from a pricing
    CTA), JS prefills the message textarea with an enquiry for that package.
  - **Right — info table** (4 rows):
    1. **Email:** bilalseo009@gmail.com (mailto)
    2. **LinkedIn:** Muhammad Bilal → https://www.linkedin.com/in/muhammad-bilal-siddiqui-11299229a/ (new tab)
    3. **GitHub:** MBilalSIddiqi → https://github.com/MBilalSIddiqi (new tab)
    4. **Location:** Planet Earth

---

## 6. JavaScript Behavior (`js/script.js`)

Single IIFE, all wired on `DOMContentLoaded`. Each feature guards on element existence so the one
shared script is safe on every page.

| Function | Responsibility |
|----------|----------------|
| `buildNav()` | Inject shared nav into `#site-header`, wire mobile toggle + hamburger→X + scroll-state `.is-scrolled` shadow |
| `buildFooter()` | Inject shared 3-part footer (brand+tagline / quick nav / social icons) into `#site-footer`, reusing `NAV_LINKS` |
| `setActiveNav()` | Add `.active` / `aria-current` to the current page's link |
| `initScrollReveal()` | IntersectionObserver scroll-reveal — adds `.reveal`→`.is-visible` as elements enter view; instant-show fallback under reduced-motion / no IO support |
| `initHeroTyping()` | Hero sub-headline typing animation — cycles 4 phrases (type/pause/delete) with a CSS-blinking `.type-cursor`; shows the first phrase statically under reduced-motion |
| `initShapesCanvas()` | Injects a fixed full-page `<canvas>` (`z-index: -1`, `pointer-events: none`) of ~22 drifting/rotating outline shapes (10 on <768px); pauses on tab-hidden via Page Visibility API; skipped entirely under reduced-motion |
| `ensureModal()` / `openModal()` / `closeModal()` | Reusable modal with X / outside-click / Esc |
| `renderProjects()` | Build project cards from `PROJECTS`, wire modal on click; uses `images[]` (real) with picsum fallback, renders carousel when >1 image |
| `buildCarousel()` / `wireCarousel()` | Build + wire the multi-image modal carousel (prev/next/dots, wrapping index) |
| `renderCertificates()` | Build certificate cards from `CERTIFICATES`, wire modal on click |
| `initContactForm()` | Validate Name/Email/Message (required + email regex), per-field errors; on success AJAX-POST to Netlify Forms with inline success/fallback message + disabled-while-sending button; prefills message from a `?plan=` query param |
| `initPricingToggle()` | Toggle every `[data-usd][data-pkr]` price between USD and PKR; updates the active state + `aria-pressed` on `#currency-toggle` |

- **Data arrays** `PROJECTS` (15) and `CERTIFICATES` (4) hold all card content — easy to edit/extend.
  Matched projects carry an optional `images: ["assets/images/..."]` array; unmatched ones omit it
  and fall back to `https://picsum.photos/seed/${seed}/800/600`.
- **Form validation + submission**: blocks submit on empty fields or invalid email (regex
  `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), shows inline `.form-error` messages + an `alert`. On success it
  AJAX-POSTs the form data to Netlify Forms (`fetch("/")`, url-encoded), resets the form, and shows
  a friendly confirmation; on a failed POST (e.g. the GitHub Pages mirror, which has no backend) it
  shows a fallback pointing to the email address. The Send button is disabled while sending.
- **Smooth scrolling**: handled via CSS `scroll-behavior: smooth`.

---

## 7. Accessibility & SEO

- Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), skip-to-content link.
- ARIA: nav `aria-label`, modal `role="dialog"`/`aria-modal`, form errors `role="alert"`,
  status `aria-live="polite"`, `:focus-visible` outlines.
- Per-page `<title>`, meta description, and Open Graph tags.
- `loading="lazy"` on below-the-fold images; explicit width/height on the profile image.
- **Inline links are underlined** (`.section__lead a`, `.info-table a`) so they don't rely on color
  alone — satisfies WCAG 1.4.1 ("Links rely on color to be distinguishable"). Nav links, buttons,
  and footer icon buttons stay underline-free since they're already visually distinct.

---

## 8. How to Run

```bash
cd /home/bilal/all_web/portflio_web3
python3 -m http.server 8000
# open http://localhost:8000
```

---

## 9. Deployment

The site is live on **two** hosts, both auto-updating from the GitHub repo
`MBilalSIddiqi/portfolio` (`main` branch):

- **Netlify (primary)** — https://mbilalsiddiqi-portfolio.netlify.app/
  - Site name `mbilalsiddiqi-portfolio`, team "Muhammad Bilal's Inc" (`bilalseo009`, Free plan).
  - **Continuous deployment** via the Netlify GitHub App: push to `main` → production deploy;
    open a PR → unique deploy-preview URL; branch deploys at `<branch>--mbilalsiddiqi-portfolio.netlify.app`.
  - Config in `netlify.toml`: `publish = "."`, no build command (static site).
  - Admin: https://app.netlify.com/projects/mbilalsiddiqi-portfolio
- **GitHub Pages (mirror)** — https://mbilalsiddiqi.github.io/portfolio/
  - Served from `main` branch root; rebuilds automatically on push.

A single `git push origin main` therefore updates both live sites.

---

## 10. Not Yet Done (see `TODO.md`)

- **Remaining real assets:** profile photo and certificate screenshots — still picsum.photos
  placeholders. (All 15 projects now use real mockups in `assets/images/`.)
- **Testing:** Lighthouse audit (target 90+) and cross-browser testing not yet run.
  *(Deployment itself is done — see §9.)*
- **Repo files:** `assets/pdfs/` from `file system.txt` does not exist yet.
- **Email notifications for the form:** the contact form now posts to **Netlify Forms** (submissions
  collect in the Netlify dashboard → Forms tab). Still to do: add an email notification under
  Forms → Form notifications so submissions land in an inbox automatically.

---

## 11. Phase 6 — UI/UX Global Polish

A site-wide pass to lift the visual quality without changing layout/content. All six items shipped;
each respects `prefers-reduced-motion`.

1. **Typographic scale & rhythm** — spacing scale (`--space-1`…`6`) and type scale
   (`--fs-sm/base/lg`) tokens; h1/h2/h3 tightened (`line-height: 1.15`, `letter-spacing: -0.02em`,
   h3 `-0.01em`) with `text-wrap: balance`; `.section__lead` gets `text-wrap: pretty`.
2. **Color & depth refinement** — a fixed hero **radial glow** painted on `<body>`
   (`radial-gradient(900px circle at 50% -5%, rgba(42,111,219,0.1), transparent 60%)`,
   `background-attachment: fixed`); a two-tier border system (`--border` → `--border-hover` on
   hover); and an inner top highlight (`--edge-light`) on raised cards (`.demo-card`, `.price-card`,
   `.sp-card`, `.card`, `.info-table`), which on hover combine `var(--shadow), var(--edge-light)`.
3. **Motion & micro-interactions** — scroll-reveal via `IntersectionObserver`
   (`initScrollReveal()`, threshold `0.12`, `rootMargin: 0px 0px -40px 0px`): elements fade + rise
   24px into place once, then unobserve. A springy `--ease` token drives transitions. A **CTA sheen
   sweep** — a diagonal light gradient slides across `.btn--blue` / `.btn--github` on hover via
   `::after`.
4. **Nav & header polish** — the mobile hamburger animates into an **X** when expanded
   (`aria-expanded="true"`); the header gains a `.is-scrolled` background/shadow once `scrollY > 8`
   (passive scroll listener in `buildNav`); the mobile dropdown is gated with
   `visibility: hidden; pointer-events: none` until `.open`, so its links aren't focusable while
   closed.
5. **Footer restructure** — old static footer replaced by a JS-injected 3-part footer
   (`buildFooter()`): brand + tagline · quick nav · circular social icons, with a copyright bar.
   See §4 → Footer.
6. **Focus & form feel** — form inputs/textareas get a soft focus ring
   (`box-shadow: 0 0 0 3px rgba(42,111,219,0.15)` + blue border) instead of a hard border jump,
   plus a `--border-hover` hover state.

> **Note:** with the footer now JS-injected (joining the nav), **both** the header and footer
> require JavaScript to render. This is an intentional DRY trade-off — one definition instead of
> four copies per region.
