# Project Context — What Has Been Built

This document records everything currently implemented in the portfolio website for
**Mohammad Bilal Siddiqui**. It is the source of truth for the *current state* of the codebase.
For the original requirements, see `PROMPT.md` and `spec.md`; for the roadmap, see `TODO.md`.

> **Status:** Phases 1–3 complete (structure, styling, interactivity). Phase 4 partially done —
> real project images wired in for 8 of 15 projects (`assets/images/`); the other 7 projects, all
> certificates, and the profile photo still use picsum placeholders. Phase 5 deployment **done** —
> the site is **live** on Netlify (primary, with GitHub continuous deployment) and GitHub Pages
> (mirror). The contact form is wired to **Netlify Forms** (real backend). Remaining: remaining real
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
- **Images** — real project mockups in `assets/images/` (8 projects); picsum.photos placeholders
  (`https://picsum.photos/seed/{seed}/...`) still used for the other 7 projects, certificates, and
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
│   └── images/         # Real project mockups (11 files for 8 projects)
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
> `assets/pdfs/` from `file system.txt` is **not yet created**. Certificates, the profile photo, and
> 7 projects still use picsum.photos placeholders. Untracked local tooling (`.agents/`,
> `skills-lock.json`, `.netlify/`) is gitignored and not part of the site.

### `assets/images/` contents
Real mockups for 8 of 15 projects (filenames match each project's `seed`):
`bakery_web1.png`, `health_web1.jpg`, `industrial_web1.png`, `jewelry_web1.jpg`, `lawyer_web1.jpg`,
`tech_web1.jpg`, plus multi-image sets `kids_web1-1/2/3.jpg` (3) and `travel_web1-1/2.jpg` (2).

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

Other tokens: radii, max content width (`--max: 1180px`), fluid `--gap`, shadow, transition.

### Notable styling decisions
- **Section titles render in white with a blue accent word** (e.g. "About <span>Me</span>"),
  not pure navy. Pure navy on a black background fails contrast, so navy is kept as a token while
  headings stay readable/accessible. The `--navy` color is still used per spec intent.
- **Mobile-first** — base styles target mobile; breakpoints at ~600px, ~760px (nav), ~820px,
  ~900–920px progressively enhance to tablet/desktop layouts.
- **Reduced-motion** support — animations/transitions disabled under
  `prefers-reduced-motion: reduce`.
- Reusable button variants: `.btn--navy`, `.btn--white`, `.btn--blue`, `.btn--ghost`, `.btn--github`.

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

### Footer
- Static footer on every page with copyright + Get-in-touch / GitHub links.

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
  "Building Websites **tailored** for your needs" (bold + italic, accent word in blue),
  sub-headline "Context AI Web Developer". Two buttons: **Get in Touch** (navy) and
  **See my work** (white). Stats: **12+ Example Websites**, **2 Websites under construction**.
- **About Me** — split layout. **Paragraph/bio on the LEFT, profile photo on the RIGHT** (desktop;
  stacks on mobile). Bio written from `spec.md` (17yo self-taught Python dev, Context Engineering,
  value-prop checklist).
- **Quote band** — full-width black section: *"I build websites that my clients don't need to be
  tech-savvy to manage."*
- **Demo showcase** — 1 large card + 2 stacked smaller cards (CSS Grid), linking to projects.
- **Side Projects** — 6-card grid (1 col mobile → 2 tablet → 3 desktop), each with a Font Awesome
  icon, "Side Project 1–6". Centered rounded **GitHub CTA**: `<i class="fab fa-github"></i> Explore
  my other repos` → https://github.com/MBilalSIddiqi (new tab).

### `projects.html`
- H1 "My **Projects**". Empty `#projects-grid` populated by JS from the `PROJECTS` array
  (15 real demo sites, each with a live GitHub Pages link — e.g. Cozy Crumbs Bakery, SleekGamer,
  AURELIA Fine Jewelry, Sterling & Associates, Solis Escapes, KiddoCreative).
- Each card (image + tag + title + description) opens a **modal** with the larger image, full
  detail text, and a "Visit live site" button.
- **Images:** 8 projects use real mockups from `assets/images/` (referenced via an optional
  `images: [...]` array on the project object); the other 7 fall back to picsum placeholders.
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
| `buildNav()` | Inject shared nav into `#site-header`, wire mobile toggle |
| `setActiveNav()` | Add `.active` / `aria-current` to the current page's link |
| `ensureModal()` / `openModal()` / `closeModal()` | Reusable modal with X / outside-click / Esc |
| `renderProjects()` | Build project cards from `PROJECTS`, wire modal on click; uses `images[]` (real) with picsum fallback, renders carousel when >1 image |
| `buildCarousel()` / `wireCarousel()` | Build + wire the multi-image modal carousel (prev/next/dots, wrapping index) |
| `renderCertificates()` | Build certificate cards from `CERTIFICATES`, wire modal on click |
| `initContactForm()` | Validate Name/Email/Message (required + email regex), per-field errors; on success AJAX-POST to Netlify Forms with inline success/fallback message + disabled-while-sending button |

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

- **Remaining real assets:** profile photo, certificate screenshots, and real images for the 7
  unmatched projects (bauhaus, gaming, photography, retro, skincare, urban, wedding) — still
  picsum.photos placeholders. (8 projects already use real mockups in `assets/images/`.)
- **Testing:** Lighthouse audit (target 90+) and cross-browser testing not yet run.
  *(Deployment itself is done — see §9.)*
- **Repo files:** `assets/pdfs/` from `file system.txt` does not exist yet.
- **Email notifications for the form:** the contact form now posts to **Netlify Forms** (submissions
  collect in the Netlify dashboard → Forms tab). Still to do: add an email notification under
  Forms → Form notifications so submissions land in an inbox automatically.
