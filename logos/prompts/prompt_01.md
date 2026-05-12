## Coder Agent Prompt — Cleany Vollreinigung Website

---

```
You are building a professional B2B dry-cleaning business website for **Cleany Vollreinigung**, a Berlin-based textile-care company. The site replaces an existing temporary landing page. The finished product must be ready for deployment to the existing host as static HTML/CSS/JS (no framework required, but a clean component structure is fine). German is the primary language.

---

## BRAND & CONTENT

Business name: Cleany Vollreinigung
Slogan: Schnell. Sauber. Zuverlässig.
Address: Wilmersdorfer Str. 22, 10585 Berlin
Email: info@cleany-vollreinigung.de
Focus: B2B textile care for companies in Berlin (medical practices, event venues, restaurants, pharmacies, cosmetics/spa, dental offices)

Logo assets are in the `/logos/` folder of the project directory. Inspect that folder and use all available logo variants (SVG preferred, PNG fallback). Use the primary logo in the navbar and footer. There may also be a wordmark or icon-only version — use them appropriately in different contexts.

---

## SITE STRUCTURE

Build the following pages, all navigable from a sticky top navbar:

### 1. `index.html` — Home (single-page scroll or separate sections)

Sections in order:

**Hero**
- Full-width section with logo, headline "Professionelle Textilpflege für Unternehmen in Berlin", sub-headline "Schnell. Sauber. Zuverlässig."
- Two CTAs: primary "Angebot anfragen" (scrolls to contact form), secondary "Unsere Leistungen" (scrolls to services)
- Subtle background: either a high-quality royalty-free textile/fabric texture (use an SVG pattern or CSS background), or a clean gradient

**Branchen-Banner (Industries served)**
Horizontal scrolling chips or icon-grid showing the 6 industries:
Medizin & Gesundheit, Eventlocations, Gastronomie, Apotheken, Kosmetik & Spa, Zahnarztpraxen
Each with a matching icon (use inline SVG or an icon font like Phosphor or Tabler Icons via CDN).

**Leistungen (Services Overview)**
Card grid — 6 service cards, each with icon, title, and 1-sentence description:
1. Chemische Reinigung & Nassreinigung
2. Hemden- & Bügelservice
3. Teppich- & Gardinenreinigung
4. Leder- & Daunenreinigung
5. Fleckenentfernung & Imprägnierung
6. Abhol- & Express-Service
Link to full `/leistungen.html` at the bottom.

**Servicekonzept (How it works)**
Three-column layout:
- Individuelle Abholung & Lieferung (feste Abholtage, flexible Zusatzabholungen, Express-Service)
- Transparente Preise (Fixpreise & Mengenrabatte, klare Abrechnung, keine versteckten Kosten)
- Zuverlässigkeit (pünktliche Lieferung, sorgfältige Behandlung, persönlicher Ansprechpartner)

**Warum Cleany? (USP section)**
Six checkmark bullets in a 2-column or horizontal layout:
Spezialisierung auf B2B / Erfahrung mit medizinischen Einrichtungen / Nachhaltige Reinigungsverfahren / Schnelle Reaktionszeiten / Professionelles Auftreten / Maßgeschneiderte Lösungen

**Referenzkunden (Reference clients)**
Tasteful grid of client categories and names. Do NOT display full client addresses publicly — show only name + district/area. Group by category (Eventlocations, Medizinische Einrichtungen, Apotheken & Beauty). Add a sentence: "Diese Kunden betreuen wir seit mehreren Jahren."

**Kontakt-Kurzleiste**
Compact CTA strip: address, email link, "Angebot anfragen" button linking to `/kontakt.html`.

**Footer**
Logo, address, email, navigation links (Home, Leistungen, Über uns, Kontakt, Impressum), copyright "© 2026 Cleany Vollreinigung".

---

### 2. `leistungen.html` — Services (full detail page)

List all 6 services with:
- Icon + heading
- 2-3 sentences of description
- Bullet list of sub-items (e.g. for Abholservice: feste Abholtage, Express-Service, individuelle Frequenz)
CTA at bottom linking to `/kontakt.html`.

---

### 3. `ueber-uns.html` — About

- Brief company history paragraph ("Seit mehreren Jahren betreuen wir Unternehmen in Berlin…")
- Mission statement emphasizing B2B focus and sustainability
- Values section (icons + short text): Qualität, Nachhaltigkeit, Zuverlässigkeit, Partnerschaft
- Photo placeholder (use a styled `<div>` with a background pattern if no image is available yet)
- Team/contact intro paragraph
CTA to `/kontakt.html`.

---

### 4. `kontakt.html` — Contact + Offer Request

Include:
- **Contact form** with fields: Firmenname*, Ansprechpartner*, E-Mail*, Telefon, Branche (dropdown: Medizin, Eventlocation, Gastronomie, Apotheke, Kosmetik/Spa, Zahnarzt, Sonstiges), Gewünschte Abhäufigkeit (dropdown: 1x/Woche, 2x/Woche, 3x/Woche, Flexibel), Nachricht (textarea), Submit button "Angebot anfragen"
- On submit: show a friendly inline success message (no backend required — use `mailto:` action or simply a JS-handled form that shows a confirmation div)
- **Address block**: Wilmersdorfer Str. 22, 10585 Berlin — with a Google Maps embed (use the iframe embed for this address)
- **Direct contact**: email `info@cleany-vollreinigung.de` as a `mailto:` link

---

### 5. `impressum.html` — Legal notice

Use the Impressum content from the existing page exactly as provided (personal details like full address, VAT ID, owner name to be filled in by the client — use `[PLACEHOLDER]` tokens). Include all legal sections: Haftung für Inhalte, Haftung für Links, Urheberrecht, Streitschlichtung.

---

## DESIGN DIRECTION

**Aesthetic**: Clean, professional, German B2B service company — refined and trustworthy, not flashy. Think premium laundry/hospitality. Avoid cheap or generic templates.

**Color palette**:
- Primary: a deep navy or slate blue (e.g. `#1B3A5C`) — conveys trust, cleanliness
- Accent: a crisp teal or aqua (e.g. `#1D9E75`) — freshness, eco-consciousness
- Neutral backgrounds: off-white `#F8F7F4` and light gray `#EEECEA`
- Text: near-black `#1A1A1A`, muted `#5F5E5A`
- White `#FFFFFF` for cards

**Typography**:
- Load from Google Fonts: `Playfair Display` (headings, display text) + `Source Sans 3` (body, UI)
- Headings: Playfair Display, medium weight, sentence case
- Body: Source Sans 3, 400 weight, 16-18px, line-height 1.7

**Layout**:
- Max content width: 1100px, centered with auto margins
- Generous section padding: 80px vertical on desktop, 48px on mobile
- Card grid: 3 columns desktop, 2 tablet, 1 mobile (CSS Grid with auto-fit)
- Sticky navbar with logo left, nav links right, mobile hamburger menu

**Components**:
- Navbar: sticky, white background, 1px bottom border, logo + nav links + CTA button
- Cards: white, 1px border (`#E0DDD8`), 12px border-radius, 24px padding, subtle hover lift (`box-shadow` transition)
- Buttons: Primary = teal fill, white text, 8px radius; Secondary = outlined, teal border + text
- Section headings: centered for hero sections, left-aligned for detail sections
- Icons: use Tabler Icons (load via CDN: `https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css`)

**Animations**:
- Fade-in on scroll using Intersection Observer (pure JS, no library required)
- Button hover: slight background darken + translateY(-1px)
- Card hover: box-shadow lift
- Keep animations subtle — this is a professional B2B site

---

## TECHNICAL REQUIREMENTS

**File structure**:
```
/
├── index.html
├── leistungen.html
├── ueber-uns.html
├── kontakt.html
├── impressum.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── logos/
    └── (existing logo files — do not modify)
```

**No build step required** — pure HTML/CSS/JS, deployable as static files.

**SEO basics**:
- `<meta charset="UTF-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1.0">` on every page
- Unique `<title>` per page: e.g. "Cleany Vollreinigung – Professionelle Textilpflege Berlin"
- Meta description per page (2-3 sentences relevant to that page's content)
- `lang="de"` on `<html>` tag
- Semantic HTML: use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<address>`
- All images must have descriptive `alt` attributes

**Accessibility**:
- ARIA labels on icon-only buttons and the hamburger menu
- Keyboard-navigable mobile menu
- Sufficient color contrast (WCAG AA minimum)
- Focus-visible styles on interactive elements

**Mobile-first responsive**:
- Breakpoints: 480px (mobile), 768px (tablet), 1100px (desktop)
- The hamburger nav menu should slide in from the top or side on mobile
- Cards and grids should collapse gracefully

**Performance**:
- Minimize inline styles — use the external CSS file
- Lazy-load the Google Maps iframe (`loading="lazy"`)
- Defer non-critical JS

**Contact form**:
Use `<form action="mailto:info@cleany-vollreinigung.de" method="POST" enctype="text/plain">` as a fallback, but also add a JS `submit` event listener that intercepts, validates required fields, shows inline error messages, and — on success — hides the form and shows a `<div class="success-message">` with a thank-you text ("Vielen Dank! Wir melden uns so schnell wie möglich."). Do not require a backend.

---

## CONTENT PLACEHOLDERS

Use `[INHABER_NAME]`, `[TELEFON]`, `[UST_ID]` as placeholders in the Impressum for sensitive info the client will fill in.

---

## DELIVERABLES

Return all HTML, CSS, and JS files. Start with `index.html`, then `css/style.css`, then `js/main.js`, then the remaining HTML pages. Add a brief comment at the top of each file naming it. Do not use any paid or licensed assets — only free Google Fonts and CDN-hosted open-source icon fonts.
```

---

**A few things to note before handing this to your coder:**

The `logos.docx` file you mentioned — if it contains the actual logo images/vectors, you'll want to extract them first (open the Word doc, copy/export any embedded images as PNG or SVG) and put them in the `/logos/` folder. The prompt already tells the agent to look there.

