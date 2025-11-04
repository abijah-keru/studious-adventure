# Nairobi Date Planner

A fast, mobile‑friendly website for discovering events, adventures, and experiences in Nairobi.

## Features
- Responsive UI optimized for mobile and desktop
- Sticky Explore pills with filters (All, Weekdays, Weekends, Free, Outdoor, Near Me, More)
- Location filters (Within Nairobi / Outside Nairobi)
- Search with food/restaurant handoff and safe return (no stale URL params)
- "Near Me" sorting using Geolocation + Haversine distance (shows km on cards)
- Accessible navigation (keyboard support, focus styles, ARIA for overlays)
- Mobile hamburger menu and improved header
- Activity carousels with keyboard arrow navigation
- Error messaging for external redirects and geolocation
- Lazy‑loaded images with explicit width/height to prevent CLS
- Basic analytics event hooks
- SEO updates: meta descriptions, Open Graph, JSON‑LD, sitemap
- PWA support: installable app with manifest + service worker

## Project structure
```
/
├─ index.html
├─ camping.html
├─ contact.html
├─ styles.css
├─ script.js
├─ manifest.json
├─ service-worker.js
├─ sitemap.xml
├─ images/
└─ icons/            # place PWA icons here (192x192, 512x512)
```

## Getting started (local)
This is a static site. Use any static server to run locally. Examples:

- Python 3
  ```bash
  python -m http.server 8080
  ```
  Visit http://localhost:8080/

- Node (http-server)
  ```bash
  npx http-server -p 8080 -c-1 .
  ```

Service worker requires HTTPs or localhost.

## PWA (Installable App)
- Manifest: `manifest.json` (theme color matches site: `#C1666B`)
- Service worker: `service-worker.js`
- Install button: header button with id `installBtn` appears when install is available

Icons (provide your logo):
- `/icons/icon-192x192.png` (192×192)
- `/icons/icon-512x512.png` (512×512)

### Test PWA
1. Serve over HTTPS or localhost.
2. Open in Chrome (desktop or Android) or iOS Safari (manifest limited support).
3. Look for the install banner or click the “Install App” button.
4. Launch from home screen – it should open standalone with your icon.

## Key configurations

### SEO
- Meta descriptions added to all pages
- Open Graph + Twitter tags in `index.html`
- JSON‑LD: WebSite, Organization, and ItemList placeholder
- Sitemap: `sitemap.xml`
- Canonical links in pages

### Accessibility
- Focus states for all interactive controls
- Skip‑to‑content link
- ARIA on icon‑only buttons and overlays
- Keyboard: carousels scroll with left/right arrows; cards are not whole‑card clickable

### Performance
- Lazy `loading="lazy"` on images
- Explicit `width`/`height` on images to reduce layout shift
- CSS and JS kept lightweight

## Data model (activities)
Activities are defined in `script.js` inside the `activities` array with fields like:
```js
{
  id: 1,
  name: "Jazz After Dark",
  description: "...",
  location: "Karel T Lounge",
  latitude: -1.2286,
  longitude: 36.8049,
  schedule: "Saturdays from 7:00pm",
  category: "Live Music & Performances",
  tags: ["Jazz", "Live Music"],
  timeOfDay: "night",
  image: "images/Jazz-After-Dark.webp",
  alt: "Descriptive alt text",
  website: "https://example.com",
  linkTitle: "Reserve",
  hidden: false
}
```
- Add `latitude`/`longitude` for Near Me to work.
- Provide `alt` text for accessibility.
- Use `hidden: true` to keep an activity out of the UI but retained in the data.

## Filters & Search
- Explore pills are sticky and horizontally scrollable on mobile.
- “Near Me” obtains the user location, caches for ~2 minutes, sorts by distance, and shows km on cards.
- Search ignores single‑letter queries.
- Food/restaurant keywords redirect to The List with a pre‑redirect cleanup to avoid stale `?q` when returning.

## Development notes
- Header uses the site accent `#C1666B` to match button color.
- Carousels: precise step scroll (card width + gap), no half‑cards.
- Description overlays have screen reader‑friendly toggle buttons and ARIA.
- The previous “date planner/share plan” prototype is disabled.

## Deployment
- Any static hosting works (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
- Ensure HTTPS for service worker.
- Place PWA icons under `/icons/` with the exact filenames referenced in `manifest.json`.
- Update canonical URLs and `og:url` to match your domain.

## Troubleshooting
- Near Me not showing km: ensure location permission granted, and activities have valid `latitude`/`longitude`.
- Install button not visible: Chrome only fires `beforeinstallprompt` when PWA criteria are met; serve via HTTPS/localhost.
- Images shifting layout: verify each `<img>` has `width` and `height` attributes.

## License
This project is provided as‑is for your use.

