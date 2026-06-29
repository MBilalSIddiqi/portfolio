# Project Roadmap & TODOs

## 🏗️ Phase 1: Structure (HTML)
- [x] Create `index.html` (Home)
- [x] Create `projects.html`
- [x] Create `certificates.html`
- [x] Create `contact.html`
- [x] Build persistent navigation bar (include active page highlighting)

## 🎨 Phase 2: Styling (CSS)
- [x] Set up CSS variables (Black, Navy Blue, Blue, White)
- [x] Style the Navigation bar
- [x] Style Homepage (Hero, About, Quote, Demos, Side Projects)
- [x] Style Projects Page (Grid + Cards)
- [x] Style Certificates Page (Grid + Cards)
- [x] Style Contact Page (Form + Info Table)
- [x] Make everything fully responsive (Mobile-first)

## ⚡ Phase 3: Interactivity (JavaScript)
- [x] Add active page highlighting to nav
- [x] Add hover effects on buttons and cards
- [x] Build project modal (click card → open summary + image)
- [x] Build certificate modal (click card → open screenshot + summary)
- [x] Add contact form validation (required fields, email format)
- [x] Wire contact form to a real backend (Netlify Forms — AJAX submit, honeypot spam protection)
- [x] Implement smooth scrolling

## 🎬 Sitewide Animations (spec §5.2.7)
- [x] Hero typing animation (4 phrases, type/pause/delete, blinking cursor, reduced-motion fallback)
- [x] Full-page drifting-shapes canvas (z-index -1, pointer-events none, tab-hidden pause, 10 shapes on mobile, reduced-motion skip)

## 🧹 Phase 4: Polish & Content
- [ ] Add Bilal's profile picture to About Me section (still picsum placeholder)
- [x] Move real images into `assets/images/`
- [x] Wire real project images for all 15 projects (no picsum placeholders remain on the Projects page)
- [x] Add modal carousel for multi-image projects (travel: 2 imgs, kids: 3 imgs)
- [ ] Add real certificate screenshots (still picsum)
- [ ] Write actual bio text
- [x] Test all links (LinkedIn, GitHub, Email)

## 🚀 Phase 5: Deployment
- [ ] Run Lighthouse audit (target 90+)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [x] Deploy to Netlify — live at https://mbilalsiddiqi-portfolio.netlify.app/
- [x] Deploy to GitHub Pages — live at https://mbilalsiddiqi.github.io/portfolio/
- [x] Update `README.md` with live link
- [ ] Send portfolio to clients! 🎉

## ✨ Phase 6: UI/UX Global Polish
- [x] 1. Typographic scale & rhythm (spacing/type tokens, tighter heading line-height + letter-spacing, text-wrap balance/pretty)
- [x] 2. Color & depth refinement (hero radial glow, two-tier border system, inner highlight on raised cards)
- [x] 3. Motion & micro-interactions (scroll-reveal via IntersectionObserver, custom easing token, CTA sheen sweep)
- [x] 4. Nav & header polish (hamburger→X animation, scroll-state header shadow, gate mobile dropdown focusability)
- [x] 5. Footer restructure (brand + tagline | quick nav links | social icons)
- [x] 6. Focus & form feel (soft focus ring on inputs instead of hard border jump)

## 🐛 Known Bugs to Fix
- [ ] (Add any issues you find here)
