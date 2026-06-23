/* =========================================================
   Mohammad Bilal Siddiqui — Portfolio
   Global interactivity (Vanilla ES6+)
   - Shared nav injection + active highlighting
   - Reusable modal system (X / click-outside / Esc)
   - Projects & Certificates card rendering
   - Contact form validation
   ========================================================= */

(function () {
  "use strict";

  /* -----------------------------------------------------
     1. SHARED NAVIGATION
     Injected into <header id="site-header"> on every page.
     ----------------------------------------------------- */
  const NAV_LINKS = [
    { href: "index.html", label: "Home" },
    { href: "projects.html", label: "Projects" },
    { href: "certificates.html", label: "Certificates" },
    { href: "contact.html", label: "Contact" },
  ];

  function buildNav() {
    const header = document.getElementById("site-header");
    if (!header) return;

    const items = NAV_LINKS.map(
      (l) => `<li><a class="nav__link" href="${l.href}">${l.label}</a></li>`
    ).join("");

    header.className = "site-header";
    header.innerHTML = `
      <div class="container">
        <nav class="nav" aria-label="Primary">
          <a class="nav__brand" href="index.html">Bilal<span>.dev</span></a>
          <button class="nav__toggle" aria-label="Toggle navigation" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
          <ul class="nav__list" id="nav-list">${items}</ul>
        </nav>
      </div>`;

    setActiveNav();

    // Mobile toggle
    const toggle = header.querySelector(".nav__toggle");
    const list = header.querySelector("#nav-list");
    toggle.addEventListener("click", () => {
      const open = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Close menu when a link is tapped (mobile)
    list.addEventListener("click", (e) => {
      if (e.target.closest(".nav__link")) {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function setActiveNav() {
    // Current file name; default to index.html for "/" root
    let current = window.location.pathname.split("/").pop();
    if (!current) current = "index.html";

    document.querySelectorAll(".nav__link").forEach((link) => {
      const target = link.getAttribute("href");
      if (target === current) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* -----------------------------------------------------
     2. DATA  (placeholder content — Bilal replaces later)
     ----------------------------------------------------- */
  // Real demo websites — all live on GitHub Pages.
  // Images use picsum placeholders seeded per project; swap for real
  // screenshots later (e.g. assets/images/<seed>.png).
  const PROJECTS = [
    {
      title: "Cozy Crumbs Bakery",
      tag: "Food & Hospitality",
      seed: "bakery_web1",
      images: ["assets/images/bakery_web1.png"],
      live: "https://mbilalsiddiqi.github.io/bakery_web1/",
      desc: "A warm, artisan bakery site — \"baked fresh, every single morning.\"",
      detail:
        "A multi-page site for a fictional artisan bakery with Home, Menu, About, and Contact pages. Warm, inviting design with a shared stylesheet and vanilla JS — a friendly template for any cafe, bakery, or food business.",
    },
    {
      title: "Bauhaus Design Collective",
      tag: "Design & Art",
      seed: "bauhaus_web1",
      live: "https://mbilalsiddiqi.github.io/bauhaus_web1/",
      desc: "A bold Bauhaus-inspired site with geometric shapes and primary colors.",
      detail:
        "A striking Bauhaus-themed site (red/yellow/blue, hard edges, no rounded corners) across Manifesto, Works gallery, and Connection pages. A 12-column grid, thick black borders, and bold uppercase type make it a standout design-studio template.",
    },
    {
      title: "SleekGamer",
      tag: "Gaming",
      seed: "gaming_web1",
      live: "https://mbilalsiddiqi.github.io/gaming_web1/",
      desc: "A dark, neon-purple gaming portfolio with glassmorphism.",
      detail:
        "A four-page gaming/portfolio site with a dark neon-purple aesthetic, glassmorphism cards, and scroll-reveal animations powered by IntersectionObserver. Terminal-style copy and JetBrains Mono give it an immersive cyber feel.",
    },
    {
      title: "PureVitality",
      tag: "Health & Wellness",
      seed: "health_web1",
      images: ["assets/images/health_web1.jpg"],
      live: "https://mbilalsiddiqi.github.io/health_web1/",
      desc: "A green, nature-focused organic health & wellness brand.",
      detail:
        "An organic health & wellness brand site (Home, Philosophy, Wellness Services) with a calm green palette, feature cards, stats badges, and scroll-in animations. Perfect for a wellness, nutrition, or natural-products brand.",
    },
    {
      title: "Ironclad Industrial",
      tag: "Industrial & Corporate",
      seed: "industrial_web1",
      images: ["assets/images/industrial_web1.png"],
      live: "https://mbilalsiddiqi.github.io/industrial_web1/",
      desc: "A brutalist heavy-manufacturing & infrastructure company site.",
      detail:
        "A brutalist industrial brand (safety-orange, charcoal, monospace, hard offset shadows) across Home, Foundation, Output, and Protocol pages — complete with stat boxes, project spec tables, and a leadership section. Bold and unmistakably industrial.",
    },
    {
      title: "AURELIA Fine Jewelry",
      tag: "Luxury & E-commerce",
      seed: "jewelry_web1",
      images: ["assets/images/jewelry_web1.jpg"],
      live: "https://mbilalsiddiqi.github.io/jewelry_web1/",
      desc: "A minimalist luxury jewelry brand with a gold accent.",
      detail:
        "A single-page luxury jewelry site — warm off-white, gold accents, Cormorant Garamond serif headings — with a hero, staggered collection gallery, testimonial, and inquiry form. Scroll-reveal animations add an elegant, high-end feel.",
    },
    {
      title: "KiddoCreative",
      tag: "Kids & Education",
      seed: "kids_web1",
      images: [
        "assets/images/kids_web1-1.jpg",
        "assets/images/kids_web1-2.jpg",
        "assets/images/kids_web1-3.jpg",
      ],
      live: "https://mbilalsiddiqi.github.io/kids_web1/",
      desc: "A bright, playful kids' creative play & workshop business.",
      detail:
        "A cheerful kids' play-factory site (Home, Our Story, Activities, Contact) in coral/teal/yellow with the Poppins font, bouncy button animations, and activity cards with age ranges. A fun, energetic template for any children's brand.",
    },
    {
      title: "Sterling & Associates",
      tag: "Professional Services",
      seed: "lawyer_web1",
      images: ["assets/images/lawyer_web1.jpg"],
      live: "https://mbilalsiddiqi.github.io/lawyer_web1/",
      desc: "A polished corporate law & financial services firm.",
      detail:
        "A four-page corporate law-firm site in deep navy with a sticky shrink-on-scroll header, animated mobile menu, six practice-area cards, leadership section, and a simulated inquiry form. Clean, formal, and conversion-focused.",
    },
    {
      title: "ARCHIVE.01 Studio",
      tag: "Photography & Portfolio",
      seed: "photography_web1",
      live: "https://mbilalsiddiqi.github.io/photography_web1/",
      desc: "A Swiss-style monochrome photography studio portfolio.",
      detail:
        "A minimalist black-and-white photography portfolio in strict Swiss/International Typographic style — 12-column grids, fluid clamp() typography, grayscale-to-color image reveals, and scroll animations across Home, Archive, Studio, and Inquiry pages.",
    },
    {
      title: "NEURAL_LINK",
      tag: "Creative & Experimental",
      seed: "retro_web1",
      live: "https://mbilalsiddiqi.github.io/retro_web1/",
      desc: "A retro-futuristic cyberpunk terminal interface.",
      detail:
        "A cyberpunk \"hacker terminal\" site with neon cyan/pink, scanlines, glitch effects, and a typewriter animation. Pages mimic a system console (Terminal, Operations, Archives, Comms) with live-looking status tiles. A bold, experimental template.",
    },
    {
      title: "AURELIA Botanicals",
      tag: "Beauty & E-commerce",
      seed: "skincare_web1",
      live: "https://mbilalsiddiqi.github.io/skincare_web1/",
      desc: "A nature-luxury organic skincare line & catalog.",
      detail:
        "An elegant organic-skincare brand (botanical green, gold, Playfair Display) with a full-bleed hero, product catalog, ingredient showcase, and consultation form across Ritual, Collection, Roots, and Connect pages. Upscale apothecary feel.",
    },
    {
      title: "TechWeb1",
      tag: "Tech & SaaS",
      seed: "tech_web1",
      images: ["assets/images/tech_web1.jpg"],
      live: "https://mbilalsiddiqi.github.io/tech_web1/",
      desc: "A clean corporate B2B technology / SaaS agency site.",
      detail:
        "A modern SaaS/tech-agency site (navy + bright blue, rounded cards) with Home, About, Services, and Contact pages — including feature cards, a stats grid, a leadership team, and a 3-tier pricing table. A polished, conversion-ready template.",
    },
    {
      title: "Solis Escapes",
      tag: "Travel & Tourism",
      seed: "travel_web1",
      images: [
        "assets/images/travel_web1-1.jpg",
        "assets/images/travel_web1-2.jpg",
      ],
      live: "https://mbilalsiddiqi.github.io/travel_web1/",
      desc: "A bright tropical travel & holiday booking site.",
      detail:
        "A sunny luxury-travel agency site (sunset orange, teal, photographic hero) with destination cards, per-night pricing, perks, and an inquiry form across Home, Destinations, and Contact. Warm, vacation-ready, and fully responsive.",
    },
    {
      title: "URBN_ZN",
      tag: "Fashion & Streetwear",
      seed: "urban_web1",
      live: "https://mbilalsiddiqi.github.io/urban_web1/",
      desc: "A brutalist underground streetwear & zine collective.",
      detail:
        "The most stylistically distinctive of the set — a brutalist streetwear \"zine\" brand in black/white with acid-lime, thick borders, hard offset shadows, and collage layouts. Product drops, a manifesto, and a lookbook make it bold and gritty.",
    },
    {
      title: "Ethereal Events",
      tag: "Events & Weddings",
      seed: "wedding_web1",
      live: "https://mbilalsiddiqi.github.io/wedding_web1/",
      desc: "A soft, pastel wedding & event planning service.",
      detail:
        "A romantic wedding-planning site in soft pastels with Dancing Script headings, a radial-gradient hero, and tiered package cards across Home, Our Story, and Services. Delicate and airy — ideal for any soft-luxury events brand.",
    },
  ];

  const CERTIFICATES = [
    {
      title: "Python for Everybody",
      issuer: "Coursera",
      date: "2025",
      img: "https://picsum.photos/seed/pythoncert/800/600",
      detail:
        "A comprehensive introduction to programming with Python — covering data structures, web APIs, and databases. This specialisation built the strong Python foundation Bilal uses every day.",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2025",
      img: "https://picsum.photos/seed/webcert/800/600",
      detail:
        "A hands-on certification covering HTML5, CSS3, Flexbox, Grid, and accessibility best practices — the backbone of every mobile-first site Bilal delivers.",
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "2025",
      img: "https://picsum.photos/seed/jscert/800/600",
      detail:
        "A deep dive into modern ES6+ JavaScript, algorithmic thinking, and data structures — sharpening the problem-solving skills behind every interactive feature.",
    },
    {
      title: "Git & GitHub Essentials",
      issuer: "Coursera",
      date: "2024",
      img: "https://picsum.photos/seed/gitcert/800/600",
      detail:
        "Version control mastery: branching, merging, pull requests, and collaborative workflows that keep client projects organised and recoverable.",
    },
  ];

  /* -----------------------------------------------------
     3. MODAL SYSTEM (reusable)
     ----------------------------------------------------- */
  let modalEl = null;
  let lastFocused = null;

  function ensureModal() {
    if (modalEl) return modalEl;
    modalEl = document.createElement("div");
    modalEl.className = "modal";
    modalEl.setAttribute("role", "dialog");
    modalEl.setAttribute("aria-modal", "true");
    modalEl.innerHTML = `<div class="modal__panel" role="document"></div>`;
    document.body.appendChild(modalEl);

    // click-outside to close
    modalEl.addEventListener("click", (e) => {
      if (e.target === modalEl) closeModal();
    });
    return modalEl;
  }

  function openModal(contentHTML) {
    const modal = ensureModal();
    const panel = modal.querySelector(".modal__panel");
    panel.innerHTML = `
      <button class="modal__close" aria-label="Close dialog">&times;</button>
      ${contentHTML}`;
    panel
      .querySelector(".modal__close")
      .addEventListener("click", closeModal);

    lastFocused = document.activeElement;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    panel.querySelector(".modal__close").focus();
  }

  function closeModal() {
    if (!modalEl) return;
    modalEl.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  // Esc closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalEl && modalEl.classList.contains("open")) {
      closeModal();
    }
  });

  /* -----------------------------------------------------
     4. CARD RENDERING (Projects + Certificates pages)
     ----------------------------------------------------- */
  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    PROJECTS.forEach((p) => {
      const imgs =
        p.images && p.images.length
          ? p.images
          : [`https://picsum.photos/seed/${p.seed}/800/600`];
      const cover = imgs[0];
      const card = document.createElement("button");
      card.type = "button";
      card.className = "card";
      card.innerHTML = `
        <img class="card__img" src="${cover}" alt="${p.title} preview" loading="lazy">
        <div class="card__body">
          <p class="card__meta">${p.tag}</p>
          <h3 class="card__title">${p.title}</h3>
          <p class="card__desc">${p.desc}</p>
          <span class="card__hint">View details &rarr;</span>
        </div>`;
      card.addEventListener("click", () => {
        const media =
          imgs.length > 1
            ? buildCarousel(imgs, p.title)
            : `<img class="modal__img" src="${cover}" alt="${p.title}">`;
        openModal(`
          ${media}
          <div class="modal__content">
            <p class="card__meta">${p.tag}</p>
            <h2>${p.title}</h2>
            <p>${p.detail}</p>
            <a class="btn btn--blue" href="${p.live}" target="_blank" rel="noopener">
              <i class="fas fa-arrow-up-right-from-square"></i> Visit live site
            </a>
          </div>`);
        if (imgs.length > 1) wireCarousel(imgs);
      });
      grid.appendChild(card);
    });
  }

  /* Carousel markup + wiring for multi-image project modals */
  function buildCarousel(imgs, title) {
    const dots = imgs
      .map(
        (_, i) =>
          `<button class="carousel__dot${i === 0 ? " active" : ""}" data-i="${i}" aria-label="Go to image ${i + 1}"></button>`
      )
      .join("");
    return `
      <div class="carousel" data-count="${imgs.length}">
        <img class="modal__img carousel__img" src="${imgs[0]}" alt="${title} — image 1 of ${imgs.length}">
        <button class="carousel__nav carousel__prev" aria-label="Previous image">&larr;</button>
        <button class="carousel__nav carousel__next" aria-label="Next image">&rarr;</button>
        <div class="carousel__dots">${dots}</div>
      </div>`;
  }

  function wireCarousel(imgs) {
    const root = modalEl && modalEl.querySelector(".carousel");
    if (!root) return;
    const imgEl = root.querySelector(".carousel__img");
    const dotEls = root.querySelectorAll(".carousel__dot");
    let idx = 0;
    const show = (n) => {
      idx = (n + imgs.length) % imgs.length;
      imgEl.src = imgs[idx];
      imgEl.alt = `image ${idx + 1} of ${imgs.length}`;
      dotEls.forEach((d, i) => d.classList.toggle("active", i === idx));
    };
    root.querySelector(".carousel__prev").addEventListener("click", () => show(idx - 1));
    root.querySelector(".carousel__next").addEventListener("click", () => show(idx + 1));
    dotEls.forEach((d) =>
      d.addEventListener("click", () => show(Number(d.dataset.i)))
    );
  }

  function renderCertificates() {
    const grid = document.getElementById("certs-grid");
    if (!grid) return;

    CERTIFICATES.forEach((c) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "card";
      card.innerHTML = `
        <div class="card__body">
          <h3 class="card__title">${c.title}</h3>
          <p class="card__meta">${c.issuer}</p>
          <p class="card__desc">Completed: ${c.date}</p>
          <span class="card__hint">View certificate &rarr;</span>
        </div>`;
      card.addEventListener("click", () =>
        openModal(`
          <img class="modal__img" src="${c.img}" alt="${c.title} certificate">
          <div class="modal__content">
            <h2>${c.title}</h2>
            <p class="card__meta">${c.issuer} &middot; ${c.date}</p>
            <p>${c.detail}</p>
          </div>`)
      );
      grid.appendChild(card);
    });
  }

  /* -----------------------------------------------------
     5. CONTACT FORM VALIDATION
     ----------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const status = form.querySelector(".form-status");

    // Prefill the message when arriving from a pricing button (?plan=Tier)
    const PLAN_LABELS = { starter: "Starter", popular: "Popular", business: "Business" };
    const plan = new URLSearchParams(window.location.search).get("plan");
    const planKey = plan && plan.toLowerCase();
    if (planKey && PLAN_LABELS[planKey]) {
      const message = form.elements["message"];
      if (message && !message.value.trim()) {
        message.value =
          "Hi Bilal, I'm interested in the " + PLAN_LABELS[planKey] +
          " package. Please get in touch about getting started.";
      }
    }

    const setError = (field, msg) => {
      const err = form.querySelector(`[data-error-for="${field}"]`);
      if (err) err.textContent = msg || "";
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;
      if (status) status.textContent = "";

      const name = form.elements["name"];
      const email = form.elements["email"];
      const message = form.elements["message"];

      setError("name", "");
      setError("email", "");
      setError("message", "");

      if (!name.value.trim()) {
        setError("name", "Please enter your name.");
        ok = false;
      }
      if (!email.value.trim()) {
        setError("email", "Please enter your email.");
        ok = false;
      } else if (!emailRe.test(email.value.trim())) {
        setError("email", "Please enter a valid email address.");
        ok = false;
      }
      if (!message.value.trim()) {
        setError("message", "Please enter a message.");
        ok = false;
      }

      if (!ok) {
        alert("Please fix the highlighted fields before submitting.");
        return;
      }

      // Submit to Netlify Forms via AJAX (keeps the user on-page).
      const firstName = name.value.trim().split(" ")[0];
      const submitBtn = form.querySelector('button[type="submit"]');
      const body = new URLSearchParams(new FormData(form)).toString();

      if (submitBtn) submitBtn.disabled = true;
      if (status) status.textContent = "Sending…";

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      })
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          form.reset();
          if (status) {
            status.textContent =
              "✅ Thanks, " + firstName +
              "! Your message has been received. I'll reply within 24 hours.";
          }
        })
        .catch(() => {
          if (status) {
            status.textContent =
              "⚠️ Something went wrong sending your message. Please email me directly at bilalseo009@gmail.com.";
          }
        })
        .finally(() => {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  /* -----------------------------------------------------
     5b. PRICING — currency toggle (USD <-> PKR)
     ----------------------------------------------------- */
  function initPricingToggle() {
    const toggle = document.getElementById("currency-toggle");
    if (!toggle) return;

    // Both discounted (.price-card__amount) and original (.price-card__original)
    // prices carry data-usd / data-pkr, so one selector formats them all.
    const amounts = document.querySelectorAll("[data-usd][data-pkr]");
    const opts = toggle.querySelectorAll(".currency-toggle__opt");

    const render = (cur) => {
      amounts.forEach((el) => {
        if (cur === "PKR") {
          el.textContent = "₨" + Number(el.dataset.pkr).toLocaleString("en-PK");
        } else {
          el.textContent = "$" + el.dataset.usd;
        }
      });
      opts.forEach((o) => o.classList.toggle("active", o.dataset.currency === cur));
      toggle.dataset.currency = cur;
      toggle.setAttribute("aria-pressed", String(cur === "PKR"));
    };

    toggle.addEventListener("click", () => {
      render(toggle.dataset.currency === "USD" ? "PKR" : "USD");
    });
  }

  /* -----------------------------------------------------
     6. INIT
     ----------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    buildNav();
    renderProjects();
    renderCertificates();
    initPricingToggle();
    initContactForm();
  });
})();
