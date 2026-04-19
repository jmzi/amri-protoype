# Amri Digital Marketing – Next.js Port

This is a 1:1 port of the original multi-page HTML / CSS / JS site into a
**Next.js 14 (App Router)** project. All content, images, styles, and
interactions from the original `testing-limits` site are preserved exactly.

The portfolio section is fully data-driven via a single JSON file, and every
page has its own route.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (http://localhost:3000)
npm run dev

# 3. Build for production
npm run build
npm start
```

Requires Node 18.17+ (Next.js 14 minimum).

---

## Folder Structure

```
amri-nextjs/
├── app/
│   ├── layout.jsx          ← root layout (fonts + metadata)
│   ├── page.jsx            ← Home  (/)
│   ├── globals.css         ← full site stylesheet (copied verbatim)
│   ├── about/page.jsx      ← About page (/about)
│   ├── services/page.jsx   ← Services page (/services)
│   ├── portfolio/page.jsx  ← Portfolio page (/portfolio)
│   └── contact/page.jsx    ← Contact page (/contact)
│
├── components/
│   ├── Nav.jsx             ← top nav bar (client)
│   ├── MobileDrawer.jsx    ← mobile hamburger drawer (client)
│   ├── Footer.jsx          ← site footer
│   ├── RevealInit.jsx      ← IntersectionObserver scroll reveal + nav highlight (client)
│   ├── SvgDefs.jsx         ← shared inline-SVG <symbol> defs (star icon)
│   ├── PortfolioCard.jsx   ← single .pc card
│   ├── PortfolioGrid.jsx   ← filter grid + FLIP animation (client)
│   ├── FaqList.jsx         ← accordion-style FAQ (client)
│   ├── ContactForm.jsx     ← contact form + success state (client)
│   └── QuickContact.jsx    ← email quick-contact on home page (client)
│
├── data/
│   └── portfolio.json      ← 12 portfolio items (home grid is filtered via `showOnHome`)
│
├── public/
│   ├── css/styles.css      ← original stylesheet (also available for reference)
│   ├── js/main.js          ← original JS (kept for reference; not loaded)
│   └── images/logo.png     ← logo asset
│
├── next.config.js          ← includes remotePatterns for Cloudinary + Unsplash
├── jsconfig.json           ← "@/*" path alias
└── package.json
```

---

## Original → Next.js File Mapping

| Original file                              | New location                                                   |
|--------------------------------------------|----------------------------------------------------------------|
| `testing-limits/index.html`                | `app/page.jsx`                                                 |
| `testing-limits/about.html`                | `app/about/page.jsx`                                           |
| `testing-limits/services.html`             | `app/services/page.jsx`                                        |
| `testing-limits/portfolio.html`            | `app/portfolio/page.jsx`                                       |
| `testing-limits/contact.html`              | `app/contact/page.jsx`                                         |
| `testing-limits/css/styles.css`            | `app/globals.css` (imported in root layout) + `public/css/styles.css` (archive copy) |
| `testing-limits/js/main.js`                | Split across interactive components — see breakdown below      |
| `testing-limits/images/logo.png`           | `public/images/logo.png` (referenced as `/images/logo.png`)    |
| Portfolio card markup (inline in HTML)     | `data/portfolio.json` + `components/PortfolioCard.jsx`         |

### `main.js` broken down per component

| Original JS function           | React home                                          |
|--------------------------------|-----------------------------------------------------|
| `toggleDrawer()` / `closeDrawer()` | `components/Nav.jsx` + `components/MobileDrawer.jsx` |
| `IntersectionObserver` reveal + stagger delays + nav scroll highlight | `components/RevealInit.jsx`        |
| `filterPort()` (FLIP animation) | `components/PortfolioGrid.jsx`                     |
| `toggleFaq()`                  | `components/FaqList.jsx`                            |
| `submitForm()`                 | `components/ContactForm.jsx`                        |
| `handleContact()`              | `components/QuickContact.jsx`                       |

---

## Dynamic Portfolio

`data/portfolio.json` is the single source of truth for every project tile.
Each item looks like:

```json
{
  "id": "luxehaven",
  "cat": "hotel",
  "img": "https://res.cloudinary.com/.../luxehaven.png",
  "alt": "LuxeHaven Hotel website hero",
  "imgHeight": 220,
  "link": "https://example.com",
  "tags": ["Hotel", "Booking", "Next.js"],
  "title": "LuxeHaven Hotel",
  "desc": "Luxury hotel booking experience with live availability.",
  "year": "2024",
  "hasMeta": true,
  "showOnHome": true
}
```

- The **home page** renders items where `showOnHome === true` (6 items).
- The **/portfolio page** renders *all* items (12).
- Adding or editing a project is just a JSON edit — no component changes
  required.

Categories used by the filter bar: `ecommerce`, `hotel`, `blog`,
`business`, `portfolio`, `elearning`.

---

## How the original interactions were preserved

- **Scroll reveal** — `RevealInit` attaches an `IntersectionObserver` to
  every `.reveal` element on mount, applies staggered `transitionDelay`
  values to `.pc`, `.sc`, `.tc` cards exactly like the original script,
  and re-runs on every route change so newly mounted pages animate in.
- **Portfolio filter** — `PortfolioGrid` reproduces the original
  First-Last-Invert-Play algorithm: it records starting rects, reorders
  matched cards to the front of the DOM via `appendChild`, snaps them
  back with a transform, then transitions them to their new position.
  Unmatched cards fade to 0.15 opacity with `pointerEvents: none`.
- **Mobile drawer** — `Nav` toggles `.drawer.open` and `.hamburger.open`
  via direct DOM class manipulation so the CSS transitions fire
  identically to the original. `MobileDrawer` also closes itself on
  Escape and on route change.
- **FAQ accordion** — `FaqList` holds one `openIndex` in state so only
  one item is open at a time (matches original behaviour).
- **Contact forms** — both the quick-contact (home) and full contact
  form show the same success state the original JS did, without any
  network call.

---

## Styles

The original `styles.css` is imported **as-is** into `app/globals.css` (no
edits), so every class, CSS variable, and media query still resolves.
Google Fonts (Lato + DM Sans) are loaded via `<link>` tags in
`app/layout.jsx`.

---

## External images

External CDN hosts used by the site are whitelisted in `next.config.js`
for potential future use of `next/image`:

```js
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'res.cloudinary.com' },
    { protocol: 'https', hostname: 'images.unsplash.com' },
  ],
},
```

The existing markup uses plain `<img>` tags (same as the original) so no
optimisation pipeline is forced — behaviour is identical.

---

## Notes

- The project uses **JSX** (not TypeScript) to keep the port minimal.
- No state management library, no UI kit, no Tailwind — only vanilla
  React + the original stylesheet, to guarantee visual parity.
- `public/js/main.js` is retained as an archive but is **not** loaded;
  its logic lives in the React components listed above.
