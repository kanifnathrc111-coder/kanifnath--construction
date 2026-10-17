# Website source QA report

## Tests run and results

- **HTML inventory:** 23 HTML documents found, including the dedicated 404 page.
- **Page metadata:** 23 unique titles, 23 unique descriptions, 23 unique canonical values in the source. The public sitemap contains 22 indexable canonical URLs; `404.html` is excluded.
- **Navigation and local links:** 0 missing local page links or same-page fragment targets found by the source checker.
- **Static asset references:** 0 unresolved required local scripts, stylesheets or icon assets; 0 missing local image references without a valid fallback. The optional `assets/images/logo.png` path is intentionally not provided until the official logo is supplied and is handled by the existing JavaScript placeholder fallback.
- **Image accessibility:** 0 `<img>` tags without `alt` text found.
- **Forms:** 0 missing label associations found for visible controls. The homepage quick quote and full quote form use the existing static message preparation behaviour.
- **Structured data:** 0 JSON-LD parsing errors.
- **HTML identifiers:** 0 duplicate IDs found.
- **CSS:** `assets/css/premium-ui.css` parsed with `tinycss2`; 0 CSS parser errors. Responsive CSS and reduced-motion rules are present.
- **JavaScript:** `node --check assets/js/site.js` passed; `node --check assets/js/config.js` passed.
- **Sitemap:** XML parses and the 22 listed URLs match the 22 public pages with canonical URLs (excluding `404.html`). `robots.txt` contains a sitemap reference.
- **Archive:** ZIP integrity was checked with `unzip -t` after packaging.

## Limitations / not tested

- Attempted browser automation was blocked by an administrator policy when navigating to the local website; a separate headless Chromium screenshot also did not complete. Therefore, rendered browser screenshots, interactive click-through tests and visual checks at 320px, 375px, 414px, 768px, 1024px, 1440px and 1920px are **not claimed as passed**. Please review in VS Code Live Server and on a phone before launch.
- No live DNS/HTTPS/redirect checks, production HTTP status checks, Google Search Console checks, Google Business Profile checks, Lighthouse score or Core Web Vitals measurements were performed.
- Remote stock photography and web fonts need internet access and were not verified for availability; local SVG illustrations are provided as image fallbacks.
- The WhatsApp and phone/email actions remain inactive until real public business details are configured in `assets/js/config.js`.
- Form submissions are not stored on a server. Without a configured WhatsApp number, the form prepares a message for copying and explicitly reports that it has not been sent or saved.
