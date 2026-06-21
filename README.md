# Mohammad Bilal Siddiqui — Portfolio Website

A modern, fully responsive portfolio for **Mohammad Bilal Siddiqui**, a 17-year-old self-taught
Python developer and *Context AI Web Developer* from Pakistan. Built to attract clients with fast,
affordable, premium-looking websites.

Built with **vanilla HTML5, CSS3, and JavaScript** — no frameworks, no build step, no dependencies.

> 🔗 **Live site:** https://mbilalsiddiqi.github.io/portfolio/

---

## ✨ Features

- **4 pages** — Home, Projects, Certificates, Contact.
- **Persistent navigation** — JS-injected, with active-page highlighting and a mobile hamburger menu.
- **Interactive modals** — click any project or certificate card to open a detail popup
  (close via ✕, click-outside, or `Esc`).
- **Contact form validation** — required fields + email-format check, inline errors, simulated submit.
- **Fully responsive** — mobile-first, fluid layouts from phone → tablet → desktop.
- **Accessible** — semantic HTML, ARIA labels, keyboard-friendly, skip-to-content link,
  reduced-motion support.
- **SEO-ready** — per-page titles, meta descriptions, and Open Graph tags.

---

## 🎨 Design

| Role | Color |
|------|-------|
| Background | `#0a0a0a` (black) |
| Headings (token) | `#1a2a4a` (navy) |
| Accents / buttons / links | `#2a6fdb` (blue) |
| Body text | `#ffffff` / `#e0e0e0` |

- **Font:** [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- **Icons:** [Font Awesome 6](https://fontawesome.com/) (CDN)

---

## 📁 Project Structure

```
portflio_web3/
├── index.html          # Home (hero, about, quote, demos, side projects)
├── projects.html       # Projects grid + modals
├── certificates.html   # Certificates grid + modals (H1: "Website Demos")
├── contact.html        # Contact form + info table
├── css/
│   └── style.css       # All global styles
├── js/
│   └── script.js       # Nav injection, modals, card rendering, form validation
├── PROMPT.md           # Original build prompt
├── spec.md             # Detailed product spec
├── CONTEXT.md          # Documentation of what's been built
├── TODO.md             # Roadmap / checklist
└── README.md           # This file
```

---

## 🚀 Getting Started

No installation needed. Clone or download, then serve the folder with any static server:

```bash
# Python 3
python3 -m http.server 8000

# or Node
npx serve .
```

Then open **http://localhost:8000** in your browser.

> You can also open `index.html` directly, but a local server is recommended so the JS-injected
> navigation and relative paths behave exactly as in production.

---

## 🛠️ Customizing Content

Most content lives in clearly marked places:

- **Projects** — edit the `PROJECTS` array in [`js/script.js`](js/script.js).
- **Certificates** — edit the `CERTIFICATES` array in [`js/script.js`](js/script.js).
- **Bio / hero / contact details** — edit the relevant HTML files directly.
- **Images** — currently use [picsum.photos](https://picsum.photos) placeholders; replace the
  `src` URLs with real images (e.g. an `assets/images/` folder).
- **Colors** — change the CSS variables in `:root` at the top of [`css/style.css`](css/style.css).

---

## 📬 Contact

- **Email:** [bilalseo009@gmail.com](mailto:bilalseo009@gmail.com)
- **LinkedIn:** [Muhammad Bilal](https://www.linkedin.com/in/muhammad-bilal-siddiqui-11299229a/)
- **GitHub:** [MBilalSIddiqi](https://github.com/MBilalSIddiqi)

---

## 📈 Status

- ✅ Structure, styling, and interactivity complete.
- ⏳ Pending: real images/content, Lighthouse audit, cross-browser testing, and deployment.

See [`TODO.md`](TODO.md) for the full roadmap and [`CONTEXT.md`](CONTEXT.md) for detailed
implementation notes.

---

© 2026 Mohammad Bilal Siddiqui.
