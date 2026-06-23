# Project: Portfolio Website – Mohammad Bilal Siddiqui

## 1. Project Overview
This portfolio website will serve as a modern, sleek, and visually catchy webpage to showcase the skills and projects of Mohammad Bilal Siddiqui. Its primary purpose is to attract potential clients and establish a strong professional brand.
## 1.1 About the Person (Mohammad Bilal Siddiqui)

Mohammad Bilal Siddiqui is a 17-year-old, self-taught Python developer and aspiring full-stack creator based in Pakistan. Currently in 11th grade, Bilal has dedicated himself to mastering programming through self-study and completing multiple online courses—proving that formal experience isn't required to deliver real value.

**His Competitive Edge: Context Engineering, Not Just Prompt Engineering.**
While many developers rely on basic AI prompting, Bilal leverages advanced **Context Engineering**—using powerful CLI tools like **Claude CLI**, **Antigravity CLI**, and **Qwen CLI**—to architect, code, and deploy fully functional, visually appealing websites at lightning speed. This modern workflow allows him to bypass traditional bottlenecks, focus on clean UI/UX, and deliver complete projects in a fraction of the time it takes traditional developers.

**What Bilal Offers Clients (His Value Proposition):**
- ⚡ **Blazing Fast Delivery:** Websites built and deployed quickly without sacrificing quality.
- 💰 **Affordable Rates:** Budget-friendly pricing tailored specifically for Pakistani businesses and startups.
- 🎨 **Excellent UI/UX Sense:** He ensures every site looks modern, sleek, and premium.
- 📞 **24/7 Availability:** Always reachable for updates, fixes, or a quick client consultation.
- 🛠️ **No-Tech Maintenance:** As Bilal puts it, *"I build websites that my clients don't need to be tech-savvy to manage."*

**Current Work & Real-World Proof:**
Despite having 0 years of formal agency experience, Bilal is already actively building **two live websites**—one for his uncle and one for his aunt. This proves he can handle real client requirements, communicate effectively, and deliver working products.

**The Driving Mission:**
At just 17, Bilal is still learning and growing every day. His ultimate goal is to use his context engineering superpower to afford his own personal expenses while simultaneously helping Pakistani business owners—who either have outdated sites or no online presence at all—establish a premium digital footprint.

**Beyond the Code:**
When he's not building websites, Bilal is deepening his Python knowledge, sipping on his favorite coffee, or getting lost in detective novels and sci-fi adventures—always solving puzzles, whether in code or in books.

## 2. Goals
### 2.1 Goal 1: Premium Branding & Interactivity
Build a modern, premium-looking dynamic website that serves as a portfolio for Pakistani developer Mohammad Bilal Siddiqui. The portfolio must consist of 4 pages: Home (landing page), Projects, Certificates, and Contact. The website must be highly interactive to engage visitors.

### 2.2 Goal 2: Lead Conversion (CTAs)
Convert passive visitors into active leads by strategically placing clear "Hire Me" / "Contact" CTAs throughout the site. Reduce friction so that recruiters or clients can contact Bilal within 2 clicks from any page.

## 3. Scope
### 3.1 In-Scope (What to build)
- Home Page
- Projects Page
- Certificates Page
- Contact Page

### 3.2 Out-of-Scope (Features we are skipping)
- Blog functionality
- User login system
- Backend database
- E-commerce functionality

## 4. Target Audience
This website is aimed at two types of clients:
1. **Business owners** who have a website but it is outdated and needs a modern overhaul.
2. **Entrepreneurs/Startups** who do not have a website yet and have little to no knowledge of how web development works.

## 5. Functional Requirements (aka "The Features")

### 5.1 Navigation
- A persistent, working navigation bar with links to all 4 pages.
- Active page highlighting (to show the user which page they are currently on).
- Hover highlighting effects on menu items (cursor hovers, color changes).

### 5.2 Homepage

#### 5.2.1 Hero Section
- **Layout:** Text on the right side.
- **Main Headline:** "Building Websites tailored for your needs" — written in **bold and italic** (choose a modern, premium font).
- **Sub-headline (Introduction):** "Context AI Web Developer" — written in a smaller, normal (non-bold, non-italic) font.
- **Two Buttons (side-by-side):**
  1. **"Get in Touch"** — Background: Dark Navy Blue, Text: White.
  2. **"See my work"** — Background: White, Text: Black.
- **Statistics (Stats):**
  1. 12+ Example Websites
  2. 2 Websites under construction

#### 5.2.2 About Me / Introduction
- Scrolling down, this section features a side-by-side layout.
- **Left side:** A profile picture of Bilal.
- **Right side:** A short bio.
- **Heading:** "About Me" (H1 or H2).
- **Text:** The bio written in a smaller, normal-weight font.

#### 5.2.3 Quote Section
- A motivational or brand quote displayed in white text on a solid black background.

#### 5.2.4 Demo Websites (Showcase)
- A showcase section featuring demo websites Bilal has built.
- **Layout:** One large card/icon on the left, with two smaller cards stacked or placed next to it on the right (each being roughly half the length of the big one).

#### 5.2.5 Side Projects
- A grid of 6 project cards.
- **Styling:** Black background, white font.
- **Placeholder Text:** For now, use "Side Project 1", "Side Project 2", ... through "Side Project 6".
- **CTA Button (centered below the grid):** A rounded square button with a small GitHub icon placed before the text. The text should read "Explore my other repos". The button must be centered on the page.

#### 5.2.6 Pricing Section
- **Heading:** "Transparent Pricing" (H2, centered, bold).
- **Sub-heading:** "High-quality digital solutions tailored to your budget. No hidden fees." (centered, normal weight, muted/light color).
- **Layout:** Three pricing cards displayed side-by-side in a row, centered on the page.
- **Background:** Dark navy (e.g., `#0d1117` or `#0f172a`) to distinguish this section from the rest of the page.
- **Card Styling:** Rounded corners, subtle border (e.g., `1px solid rgba(255,255,255,0.1)`), dark card background (slightly lighter than section background).

**The three pricing tiers are:**

| Tier | Price | Features | Button Label |
|:---|:---|:---|:---|
| STARTER | $40 | 2 Professional Pages, Mobile Responsive, Basic SEO Setup, 3-Day Delivery | "Choose Starter" |
| POPULAR *(highlighted)* | $50 | 3 Professional Pages, Mobile Responsive, Advanced SEO Setup, Social Media Links, 3-Day Delivery | "Choose Popular" |
| BUSINESS | $60 | 4+ Professional Pages, Mobile Responsive, E-commerce Ready, Custom Animations, Priority Support | "Choose Business" |

**Visual Emphasis on the "Popular" card:**
- The **POPULAR** card must be visually elevated above the other two (e.g., slightly taller, a glowing blue border, or a blue outline).
- A **"MOST POPULAR"** badge/pill must appear above the Popular card, centered on its top edge, with a blue background and white text.
- The "Choose Popular" button must be **fully filled blue** (e.g., `#2a6fdb`), while "Choose Starter" and "Choose Business" buttons use an **outlined style** (transparent background, blue/white border, white text).

**Feature List Styling:**
- Each feature within a card is preceded by a **green checkmark icon** (✓).
- Features are listed vertically within each card.

**Card Button Interaction:**
- All three "Choose [Tier]" buttons should link to the Contact page (or scroll to the contact form) so potential clients can immediately reach out.

**Responsiveness:**
- On mobile, the three cards stack vertically (single column).
- On tablet, cards may display as 1 or 2 per row depending on available width.

### 5.3 Projects Page
- Displays all projects in a single-page grid layout.
- **Grid:** Maximum of 3 columns. Rows will increase automatically depending on the number of projects.
- **Cards:** Each project is displayed in a card.
- **Interaction:** Clicking on a card should open a modal or detail view displaying a brief summary of the project with a picture on top.

### 5.4 Certificates Page
- **Page Heading:** The H1 heading for this page will be "Website Demos" (or "Certificates & Credentials").
- **Grid:** Maximum of 3 columns, using cards for each certificate.
- **Card Information (Mandatory):**
  1. Course Name
  2. Issuer (e.g., Google, Coursera)
  3. Date of completion
- **Interaction:** Clicking on a certificate card should open a modal/detail view showing a screenshot of the certificate along with a brief summary.

### 5.5 Contact Page
- **Heading:** "Let's Talk" (H1).
- **Description (sub-text):** "I'm always looking for conversations with people building websites for people."
- **Layout:** A two-column layout.
  - **Left Column:** A contact form (Name, Email, Message, Submit button).
  - **Right Column:** A simple information table (1 column, 4 rows) containing:
    1. **Email:** bilalseo009@gmail.com
    2. **LinkedIn:** Muhammad Bilal (Clicking on "Muhammad Bilal" should open: https://www.linkedin.com/in/muhammad-bilal-siddiqui-11299229a/)
    3. **GitHub:** MBilalSIddiqi (Clicking should open: https://github.com/MBilalSIddiqi)
    4. **Location:** Planet Earth

## 6. Design & Branding (UI/UX)
- **Color Palette:**
  - **Background:** Black (e.g., `#0a0a0a` or `#000000`)
  - **Section Accent (Pricing):** Dark Navy (e.g., `#0d1117` or `#0f172a`)
  - **Headings:** Navy Blue (e.g., `#1a2a4a`)
  - **Sub-headings & Accents:** Blue (e.g., `#2a6fdb`)
  - **Body Text:** White (e.g., `#ffffff` or `#e0e0e0` for softer readability)
  - **Pricing Feature Checkmarks:** Green (e.g., `#22c55e`)
- **Typography:** Modern sans-serif font (e.g., Inter, Poppins, or DM Sans). Ensure a clear visual hierarchy between headings and body text.
- **Imagery:** High-quality, optimized images (profile photo, project screenshots, certificate screenshots).

## 7. Technical Stack
- **Markup:** HTML5 (Semantic HTML)
- **Styling:** CSS3 (Custom properties/variables for theming)
- **Interactivity:** Vanilla JavaScript (ES6+)
- **Version Control:** Git & GitHub
- **Hosting:** (To be decided – e.g., Netlify, Vercel, or GitHub Pages)

## 8. Non-Functional Requirements (Quality Standards)
- **Performance:** Achieve a 90+ score on Google Lighthouse (Performance, Accessibility, Best Practices, SEO).
- **Responsiveness:** Fully responsive and optimized for Mobile, Tablet, and Desktop views.
- **Cross-Browser Compatibility:** Must work flawlessly on Chrome, Firefox, Safari, and Edge.
- **Accessibility:** Use semantic HTML, proper ARIA labels, and ensure keyboard navigation is possible.
- **SEO:** Proper Meta tags, Open Graph tags, and structured data (JSON-LD) for better social sharing and search visibility.

## 9. Timeline & Milestones (Suggested)
| Phase | Tasks | Estimated Time |
| :--- | :--- | :--- |
| 1 | Structure HTML, set up CSS variables, initialize Git | 1 day |
| 2 | Build Homepage (Hero, About, Quote, Demos, Projects, Pricing) | 2–3 days |
| 3 | Build Projects & Certificates pages + modals | 2 days |
| 4 | Build Contact page + form validation | 1 day |
| 5 | Polish interactivity, animations, and responsiveness | 2 days |
| 6 | SEO, performance optimizations, testing, and deployment | 1 day |
| **Total** | | **~10 days** |

## 10. Success Criteria (Definition of "Done")
- [ ] All 4 pages (Home, Projects, Certificates, Contact) render correctly without 404 errors.
- [ ] Navigation highlights the active page and responds to hovers.
- [ ] The "Get in Touch" and "See my work" buttons function correctly.
- [ ] Clicking on a project card opens a modal with a summary and image.
- [ ] Clicking on a certificate card opens a modal with a screenshot and summary.
- [ ] The contact form has basic validation (e.g., email format, required fields).
- [ ] The LinkedIn and GitHub links in the contact table open in a new tab.
- [ ] The website passes the Lighthouse score target (90+) on desktop.
- [ ] The website looks flawless on mobile, tablet, and desktop screen sizes.
- [ ] The Pricing section renders correctly with all 3 tiers, the "MOST POPULAR" badge on the Popular card, green checkmarks on all features, and correct button styles (filled vs. outlined).
- [ ] Pricing card buttons navigate to the Contact page / scroll to the contact form.
- [ ] Pricing cards stack vertically on mobile.

## 11. Open Questions / Assumptions (To be confirmed)
- [ ] **Profile Picture:** Is the profile picture for the "About Me" section ready? (If not, use a placeholder).
- [ ] **Project Content:** Are the project descriptions, screenshots, and demo links ready for the Projects page?
- [ ] **Certificate Images:** Are the certificate screenshots/PDFs ready to be uploaded?
- [ ] **Layout Clarification (About Me):** You mentioned "picture on the right and bio on the right". I assumed **Picture on the Left, Bio on the Right**. Please confirm or correct this.
- [ ] **Form Submission:** Should the contact form just simulate a submission (frontend only), or do we need to integrate a backend/Formspree API to actually send emails?
- [ ] **Certificates Heading:** You mentioned the H1 heading should be "Website Demos". Do you want that exactly, or should it be "Certificates" or "Credentials"?
- [ ] **Pricing CTA:** Should clicking a pricing button scroll to the Contact form on the same page, or navigate to the Contact page entirely?
- [ ] **Pricing Currency:** Prices are shown in USD ($). Should a PKR equivalent also be displayed (e.g., "~PKR 11,000") for Pakistani clients?
