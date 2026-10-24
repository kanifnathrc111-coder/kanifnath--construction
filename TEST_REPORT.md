# Test report - 24 Oct 2026 (run in headless Chromium via Playwright, local server)

## PASSED (actually run)
- Static: all local href/src/CSS url() targets exist; no missing anchors; no duplicate IDs; every `<img>` has alt, width, height; exactly one H1 per page; canonical = production domain + file; unique titles (<=75 chars); descriptions 60-175 chars; JSON-LD parses on every page; sitemap lists exactly the 25 indexable pages and no noindex page.
- Browser: 25 pages x 8 widths (320, 390, 768, 1024, 1120, 1280, 1366, 1600) = 200 loads: **0 console errors/warnings, 0 failed requests, 0 horizontal overflow, header never wraps**.
- Behaviour: empty quote form shows field errors and no success message; both tel: links and WhatsApp link built from `config.js`; honeypot present and blocks submission; mocked form endpoint: HTTP 200 -> "has been sent", HTTP 500 -> "could not be sent"; no endpoint -> "not sent" wording; mobile menu and submenu open; `?service=` preselect works (UCR, Mattress); Projects page shows the honest empty state.
- `node --check` on site.js, config.js, gallery-manifest.js.

## NOT verified
Real phones; Safari/Firefox; Lighthouse/Core Web Vitals scores (tool not available here - run PageSpeed Insights after deploy); Google Rich Results test; real WhatsApp/e-mail opening (the sandbox blocks wa.me); delivery through a real form service (only mocked); the live domain/GitHub Pages after deploy; first-hand check of the long-form text on every page after the new styling (spot-checked visually: home, projects, gabion boxes, UCR, quote, contact, gallery).
