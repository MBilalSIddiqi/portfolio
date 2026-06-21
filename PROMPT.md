# CLAUDE CODE PROMPT: BUILD BILAL'S PORTFOLIO

## ROLE & OBJECTIVE
Act as a Senior Full-Stack Developer AI Agent. Your task is to generate a complete, production-ready, fully responsive portfolio website for Mohammad Bilal Siddiqui (a 17-year-old Pakistani developer). 

You must generate ALL code in a single response. Structure the code exactly as outlined below. Write clean, well-commented, semantic code that would pass a Lighthouse audit with 90+ scores.

## TECHNICAL CONSTRAINTS (Non-Negotiable)
- **Languages:** HTML5, CSS3 (No frameworks like Bootstrap/Tailwind), Vanilla JavaScript (ES6+).
- **Fonts:** Use Google Fonts (Inter or Poppins).
- **Icons:** Font Awesome 6 (CDN) for the GitHub icon.
- **Images:** Use placeholder services (e.g., `https://picsum.photos/seed/{seed}/400/300`) for project/certificate images. Bilal will replace these later.
- **Responsiveness:** Must be fully functional on Mobile, Tablet, and Desktop (Mobile-first approach).

## COLOR PALETTE (Strictly Enforce)
- **Background:** `#0a0a0a` (Black)
- **Headings:** `#1a2a4a` (Navy Blue)
- **Sub-headings / Accents / Buttons:** `#2a6fdb` (Bright Blue)
- **Body Text / General Text:** `#ffffff` (White) or `#e0e0e0` for softness.

## FILE STRUCTURE TO GENERATE
Create the following files in the root directory:
1. `index.html` (Home Page)
2. `projects.html` (Projects Page)
3. `certificates.html` (Certificates Page)
4. `contact.html` (Contact Page)
5. `/css/style.css` (Global Styles)
6. `/js/script.js` (Global Interactivity)

*Note: Use a shared navigation bar (include via JS injection or copy-paste across HTML files). Since we are using Vanilla JS, copy the header/nav into each HTML file, but use JS to highlight the active page based on the URL.*

---

## DETAILED PAGE SPECIFICATIONS

### 1. Global Navigation (Appears on ALL pages)
- Fixed/sticky header at the top.
- Links: `Home`, `Projects`, `Certificates`, `Contact`.
- Active link highlighting (e.g., underline or color change).
- Hover effects on links.

---

### 2. HOME PAGE (`index.html`)

#### Section A: Hero
- **Layout:** Split into two halves (Flex/Grid). Left side has an abstract shape or avatar; Right side has the text.
- **Headline (Right side):** "Building Websites tailored for your needs" – Bold & Italicized.
- **Sub-headline:** "Context AI Web Developer" – Smaller, Normal font weight.
- **Two Buttons (side-by-side):**
  1. "Get in Touch" – BG: `#1a2a4a` (Navy), Text: White.
  2. "See my work" – BG: White, Text: Black.
- **Stats (below buttons):**
  - `12+ Example Websites`
  - `2 Websites under construction`

#### Section B: About Me
- Split layout.
- **Left:** Profile picture placeholder (`<img src="https://picsum.photos/seed/bilal/400/400" alt="Bilal">`).
- **Right:** 
  - Heading: "About Me" (H1 or H2, Navy Blue).
  - Paragraph: Write a compelling bio using the context provided earlier (17 years old, self-taught Python dev, Context Engineering, building for uncle/aunt, affordable, 24/7, fast delivery).

#### Section C: Quote
- A full-width black background section with centered white text. Add a meaningful quote about building websites for non-techies.

#### Section D: Demo Websites (Showcase)
- **Layout:** One large card on the left, and two smaller cards stacked on the right (covering half the height).
- Use placeholder images/icons for these.

#### Section E: Side Projects
- **Grid:** 6 cards (2 columns on tablet, 3 on desktop). 
- **Styling:** Black background, white font.
- **Content:** Title them "Side Project 1" through "Side Project 6". Add a generic icon.
- **Centered CTA Button (below grid):**
  - Rounded square button.
  - Inside: `<i class="fab fa-github"></i> Explore my other repos`.
  - Must be perfectly centered on the page.

---

### 3. PROJECTS PAGE (`projects.html`)
- **Heading:** "My Projects" (H1, Navy Blue).
- **Grid:** 3 columns max. 
- **Cards:** Each card must display a placeholder image, a Title, and a short description.
- **Interactivity (Crucial):** Clicking on any card must trigger a **Modal/Popup** that displays:
  - A larger image.
  - A detailed summary of the project.
- *Content:* Generate 6 dummy projects (e.g., "E-commerce App", "Weather Dashboard", "Portfolio Builder", etc.) with filler descriptions.

---

### 4. CERTIFICATES PAGE (`certificates.html`)
- **Heading:** "Website Demos" (H1, Navy Blue). *Note: Even though the heading says Website Demos, this is the Certificates page.*
- **Grid:** 3 columns max.
- **Cards:** Each card must display:
  1. Course Name (e.g., "Python for Everybody")
  2. Issuer (e.g., "Coursera")
  3. Date (e.g., "2025")
- **Interactivity (Crucial):** Clicking on any card must trigger a **Modal/Popup** that displays:
  - A screenshot of the certificate (use placeholder).
  - A brief summary of the course.
- *Content:* Generate 3-4 dummy certificates.

---

### 5. CONTACT PAGE (`contact.html`)
- **Heading:** "Let's Talk" (H1, Navy Blue).
- **Description:** "I'm always looking for conversations with people building websites for people."
- **Layout:** Two columns.
  - **Left:** A contact form (Name, Email, Message, Submit Button). Add basic JS validation (email format, required fields).
  - **Right:** A simple information table (1 column, 4 rows) with the following exact data:
    1. **Email:** bilalseo009@gmail.com
    2. **LinkedIn:** Muhammad Bilal (Hyperlink to: https://www.linkedin.com/in/muhammad-bilal-siddiqui-11299229a/)
    3. **GitHub:** MBilalSIddiqi (Hyperlink to: https://github.com/MBilalSIddiqi)
    4. **Location:** Planet Earth

---

## GLOBAL JAVASCRIPT REQUIREMENTS (`/js/script.js`)
1. **Active Nav Highlighting:** Dynamically add an `active` class to the nav link matching the current page URL.
2. **Modal System:** Build a reusable modal function. When a project or certificate card is clicked, populate the modal with the specific content and display it. Add a "Close" button (X) and click-outside-to-close functionality.
3. **Form Validation:** Prevent submission if fields are empty or email is invalid (alert the user).
4. **Smooth Scroll:** Optional but preferred for internal links.

---

## DELIVERY FORMAT
Please output the code as follows:
1. First, output the entire `/css/style.css`.
2. Then, output `/js/script.js`.
3. Then, output `index.html`.
4. Then, output `projects.html`.
5. Then, output `certificates.html`.
6. Then, output `contact.html`.

For the HTML files, ensure you include the Font Awesome CDN link in the `<head>` and the Google Fonts link. Ensure the CSS and JS file paths are correctly relative (e.g., `href="css/style.css"` and `src="js/script.js"`).

## FINAL CHECKLIST FOR CLAUDE
- [ ] Are the colors exactly Black, Navy, Blue, and White?
- [ ] Does the navigation exist on all pages?
- [ ] Are the 6 side projects visible on the Home page with the GitHub CTA?
- [ ] Do the Project and Certificate cards open modals on click?
- [ ] Is the Contact form present with the LinkedIn/GitHub table on the right?
- [ ] Is the layout mobile-responsive?

Generate the complete codebase now. Start with the CSS file.
