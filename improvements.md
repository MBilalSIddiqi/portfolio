# Security Vulnerability Analysis — `portfolio_web3`

**Date:** July 2, 2026
**Auditor:** Buffy (Codebuff AI)
**Scope:** All source files in `portfolio_web3/` — HTML, JS, CSS, config

---

## Summary

| Severity | Finding | Fix Effort |
|---|---|---|
| 🔴 High | No Content Security Policy (CSP) | Low |
| 🔴 High | Missing security headers | Low |
| 🟡 Medium | No Subresource Integrity (SRI) on CDN resources | Low |
| 🟡 Medium | `innerHTML` pattern (safe today, fragile) | Low |
| 🟡 Medium | Client-side-only form validation | Low |
| 🟢 Low | External images without referrer control | Low |
| 🟢 Low | Script tag without `defer` | Low |

---

## 🔴 HIGH — No Content Security Policy (CSP)

**Impact:** Any injected script (XSS) would execute freely. The browser has no restrictions on which scripts, styles, or frames can load.

**Location:** All HTML files + `netlify.toml`

**Fix:** Add to `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src https://fonts.gstatic.com; img-src 'self' https://picsum.photos https://*.github.io data:; connect-src 'self'; frame-ancestors 'none'"
```

---

## 🔴 HIGH — Missing Security Headers

**Impact:** Site can be framed by any origin (clickjacking), and MIME-type sniffing attacks are possible. No HSTS means the site could be downgraded to HTTP.

**Location:** `netlify.toml` — currently only has `[build]` config.

**Fix:** Add to `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
```

---

## 🟡 MEDIUM — No Subresource Integrity (SRI) on CDN Resources

**Impact:** If `cdnjs.cloudflare.com` were compromised, a tampered Font Awesome stylesheet could inject malicious CSS/JS.

**Location:** All 4 HTML files load Font Awesome without SRI:

```html
<!-- Current (index.html, contact.html, projects.html, certificates.html) -->
<link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      referrerpolicy="no-referrer" />

<!-- Recommended -->
<link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      referrerpolicy="no-referrer"
      integrity="sha512-..."
      crossorigin="anonymous" />
```

**Note:** The existing `referrerpolicy="no-referrer"` is good — it prevents leaking the page URL to the CDN. But SRI is still needed to verify the file hasn't been tampered with.

---

## 🟡 MEDIUM — `innerHTML` Pattern (Safe Today, Fragile)

**Impact:** No XSS risk today since all data is hardcoded in the `PROJECTS`, `CERTIFICATES`, and `NAV_LINKS` constants. However, the pattern is dangerous if ever reused with user-controlled data.

**Location:** `js/script.js` — 6 `innerHTML` assignments:

| Line | Assignment | Data Source |
|------|-----------|-------------|
| 33 | `header.innerHTML` | `NAV_LINKS` (hardcoded) |
| 96 | `footer.innerHTML` | `NAV_LINKS` (hardcoded) |
| 335 | `modalEl.innerHTML` | Static HTML |
| 348 | `panel.innerHTML` | `contentHTML` parameter |
| 393 | `card.innerHTML` | `PROJECTS` (hardcoded) |
| 466 | `card.innerHTML` | `CERTIFICATES` (hardcoded) |

The `openModal(contentHTML)` function accepts raw HTML strings — a dangerous API if ever called with user input. Consider adding a code comment or refactoring to use `textContent` where possible.

---

## 🟡 MEDIUM — Client-Side-Only Form Validation

**Impact:** Trivially bypassed with a script that POSTs directly to the Netlify endpoint. No server-side enforcement beyond Netlify's default.

**Location:** `js/script.js` (`initContactForm`) + `contact.html`

- Validation is JS-only — all checks can be bypassed
- Netlify honeypot (`bot-field`) provides basic spam protection, but no CAPTCHA
- A simple `fetch("/", { method: "POST", body: "..." })` bypasses all JS validation
- Netlify Forms has built-in spam filtering, but for higher volume, consider adding a CAPTCHA

---

## 🟢 LOW — External Images Without Referrer Control

**Impact:** `picsum.photos` could theoretically serve different content based on the Referer header. Not a real risk for this use case.

**Location:** `js/script.js` (PROJECTS/CERTIFICATES data), `index.html` (OG image, about photo)

```html
<!-- No referrerpolicy on img tags -->
<img src="https://picsum.photos/seed/bilal/400/400" ... />
```

---

## 🟢 LOW — Script Tag Without `defer`

**Impact:** Minor — scripts block HTML parsing. Since the scripts are at the bottom of `<body>`, this is low risk, but `defer` would be better practice for future-proofing.

**Location:** All HTML files:

```html
<!-- Current -->
<script src="js/script.js"></script>

<!-- Recommended -->
<script src="js/script.js" defer></script>
```

---

## ✅ What's Done Well

| Area | Status |
|---|---|
| No `eval()` / `Function()` | ✅ Clean — no dynamic code execution |
| No secrets in code | ✅ `.gitignore` properly excludes secrets |
| `rel="noopener"` on external links | ✅ All `target="_blank"` links have it |
| Strict mode | ✅ `"use strict"` in the IIFE |
| Passive scroll listeners | ✅ `{ passive: true }` on scroll |
| ARIA attributes | ✅ `aria-label`, `aria-modal`, `aria-hidden`, `aria-expanded` all used |
| Form `novalidate` with custom validation | ✅ Proper error display with `role="alert"` |
| `prefers-reduced-motion` | ✅ Animations respect user preference |
| `referrerpolicy="no-referrer"` on CDN links | ✅ Prevents URL leakage to third parties |
| No `http://` in production code | ✅ All links use HTTPS |
| No cookies / localStorage / sessionStorage | ✅ No client-side data persistence |

---

## Recommended Fix Order

1. **Add security headers to `netlify.toml`** — biggest impact, zero code changes
2. **Add CSP header** — prevents XSS exploitation
3. **Add SRI hashes to CDN links** — prevents CDN compromise
4. **Add `defer` to script tags** — minor performance/security improvement
5. **Document `innerHTML` usage** — add code comments warning against user-controlled data
6. **Consider CAPTCHA for contact form** — only if spam becomes an issue

---
---

# Customer-Persona UX Audit — `portfolio_web3`

**Date:** July 12, 2026
**Method:** 6 subagents each role-playing a distinct real-world visitor, reacting to the live site content + code
**Personas:** Tech Recruiter · Non-technical SMB Owner (bakery) · Senior Engineer/Peer · Web3 Founder · Gen-Z Mobile User · Low-Vision / Accessibility User

---

## Headline

All 6 personas independently **praised the underlying engineering** (single-source nav/footer injection, data-driven cards, accessible-ish modal, `prefers-reduced-motion` handling, Netlify AJAX form + honeypot) — and all 6 were **let down by placeholder content and unfinished details.** The code says "competent developer"; the content says "shipped before filling it in." Closing that gap is the whole job.

---

## 🔴 REMOVE — unanimous / near-unanimous

| Item | Location | Flagged by | Why |
|---|---|---|---|
| **"Side Project 1–6" placeholder grid** — 6 identical cards, same sentence repeated 6× | `index.html:196-232` | **All 6** | Called "the single most credibility-destroying thing on the page." Pure Lorem-ipsum filler; source comment even admits it (`js/script.js:122`). |
| **"Location: Planet Earth"** | `contact.html:81` | 5 | Reads unserious; also loses the *local* SMB customer who needs to know your region/timezone. Use real city/country (About says Pakistan). |
| **Placeholder `og:image`** (`picsum.photos/seed/bilal/...`) | `index.html:14` | Recruiter, Engineer, Gen-Z | Every LinkedIn/Slack share previews a random stock photo. |
| **Placeholder certificate images** (`picsum.photos/...`) | `js/script.js:293-317` | Recruiter, Engineer, Web3, Gen-Z, A11y | Clicking a cert shows a random stock photo *as if it were the credential* — "reads as fabrication." |
| **`alert()` on form error** | `js/script.js:544` | Engineer, A11y | Jarring, yanks focus unpredictably; redundant with the inline `role="alert"` error spans. |

---

## 🟠 UPDATE — high consensus

1. **Certificates page identity crisis** *(all 6)* — nav link says "Certificates" but `<title>` and `<h1>` say **"Website Demos"** (`certificates.html:6,27`), OG title too. Half-renamed / broken. Make nav + title + h1 + content agree on one name.
2. **Hero shows stock photos instead of real work** — `index.html:104,108,112` load picsum for ARCHIVE.01 / SleekGamer / AURELIA, though real compressed screenshots for those exact projects already exist in `assets/images/`. Reuse them.
3. **"Context AI Web Developer" tagline** *(recruiter, bakery, engineer, web3)* — the make-or-break first label under the name, and it loses everyone: recruiter reads "AI-generated fluff," bakery owner thought she was "hiring a chatbot." The typed subtitle ("Fast delivery. Affordable rates.") is clear — make that the default identity statement.
4. **Inflated meta** — `projects.html:7` promises "dashboards"; the `PROJECTS` array has none. Trim to what exists.
5. **Contact copy aimed at devs, not clients** — "conversations with people building websites for people" (`contact.html:28`) speaks to peers; reword toward the paying customer.

---

## 🟡 IMPROVE — by theme

**Honesty / positioning**
- **Label the 15 projects as self-built demos** (recruiter + engineer) — they're all "a fictional bakery" etc. Fine as demos, but state it up front and feature the 2–3 strongest instead of 15 near-identical templates.
- **Add "View code" repo links per project** (engineer) — the site *is* a work sample; only `live` links exist today.
- **`portfolio_web3` is a bait-and-switch** (Web3 founder, blunt) — *zero* occurrences of Web3/blockchain/wallet/contract/Solidity anywhere on the site. Either drop the "web3" label, or ship one real wallet-connect + verified-testnet-contract demo.

**Accessibility (WCAG)**
- **Accent blue fails contrast** — `--blue: #2a6fdb` on `#0a0a0a` ≈ 4.1:1, on cards `#111418` ≈ 3.9:1 (below 4.5:1, WCAG 1.4.3). Affects all links, `.card__meta`, `.card__hint`, `.section__kicker`, `.info-row__label`. Add a lighter `--link` token (~`#5b9bf5`).
- **Modal has no focus trap** (`js/script.js:345`) — Tab escapes behind the dialog (2.4.3); no `aria-labelledby`; background not `inert`.
- **Broken heading order** — `<h1>` → injected `<h3>` with no `<h2>`, and the `<h3>` lives *inside* a `<button>`, flattening its heading semantics (1.3.1).
- **Form a11y wiring** — fields lack `aria-invalid` / `aria-describedby` / `required`.
- ✅ Focus indicator (`:focus-visible`, `css:105`) is already good — keep it.

**Mobile / touch targets** (all under the 44–48px minimum)
- Hamburger `.nav__toggle` ~28px; currency pills ~34px; carousel dots 9.6px; modal close 38px.
- `background-attachment: fixed` (`style.css:60`) janks on Android scroll — drop it (canvas already provides depth).
- Full Font Awesome CDN for ~8 icons is render-blocking on mobile data — inline SVGs or subset.
- Canvas shape colors (`#6366f1` indigo) clash with brand blue (`#2a6fdb`).

**Plain-language rewording (for non-technical clients)**
- Bury jargon in cert descriptions ("APIs", "ES6+", "data structures").
- "Basic/Advanced SEO Setup" → "Helps people find you on Google"; "E-commerce Ready" → "Sell products online".
- "No-tech maintenance" is the **strongest SMB selling point** — reword to "Easy to update yourself — no tech skills needed" and make it bigger.

---

## Verdicts at a glance

| Persona | Verdict |
|---|---|
| Tech Recruiter | Not as-is — reads like a budget freelance sales page, not a hireable engineer's portfolio. |
| Bakery Owner | Cautiously yes — but almost left at "Context AI Web Developer" and "Planet Earth." |
| Senior Engineer | Would interview for junior front-end *on the code* — not on the padded, stock-photo'd projects. |
| Web3 Founder | No — zero blockchain evidence under a "web3" banner. |
| Gen-Z Mobile | Solid CSS craft, but bounces at the Side Projects placeholders. |
| A11y User | Almost — needs lighter link blue, bigger labels, modal focus trap. |

---

## Top 5 highest-leverage fixes (most cross-persona impact)

1. **Delete or fill the "Side Project 1–6" grid** — #1 credibility killer, flagged by all 6.
2. **Replace all placeholder images** — real cert scans, real OG image, real hero screenshots (already on disk).
3. **Fix the "Certificates" vs "Website Demos" naming** across nav/title/h1.
4. **Rewrite the "Context AI Web Developer" tagline** into a plain identity statement.
5. **Fix accent-blue contrast + add modal focus trap** for WCAG compliance.
