# BUG AUDIT REPORT — KANIFNATH CONSTRUCTION

Audit date: 19 October 2026  
Scope: supplied `fulll workeble.zip`, extracted static website project. This report distinguishes verified static findings from behaviour that could not be verified in a browser.

## Findings and changes

1. **Logo visually over-emphasised in the header/footer** — reduced the original logo's rendered height from 58px to 48px on desktop, 38px on screens up to 640px, and 32px at 360px and below. Footer logo height is 44px. Added a max-width constraint and retained `object-fit: contain`, so the original image is not stretched or replaced.
2. **Company-name spelling in logo artwork differs from the requested public business name** — preserved the original logo image exactly and added a separate visible `KANIFNATH / CONSTRUCTION` wordmark beside each logo instance. This keeps the required singular company name readable without editing the artwork.
3. **Brand/navigation layout needed a smaller-screen guard** — made the brand group shrinkable and adjusted wordmark spacing/type size for mobile breakpoints.
4. **Documentation referenced an older ZIP name** — updated the deployment guide to use `kanifnath-construction-final-bugfixed.zip`.

## Static checks performed

- Extracted the supplied ZIP and enumerated the project files.
- Checked all 26 HTML files for local href/src references: no missing local targets found.
- Checked same-page and local HTML fragment links: no missing anchors found.
- Checked duplicate IDs: none found.
- Checked images for missing `alt` attributes: none found.
- Checked page titles: all 26 HTML files have titles.
- Checked meta descriptions: 25 pages have descriptions; `projects.html` is a deliberate noindex redirect to `gallery.html`.
- Checked CSS `url(...)` asset references: no missing local CSS assets found.
- Parsed `sitemap.xml` as XML; all 24 listed URLs map to files in the project.
- Ran `node --check` on `site.js`, `config.js`, and `gallery-manifest.js`: all passed.

## Not verified

- Live site, GitHub Pages deployment, live canonical-domain behaviour, external service availability, real phone/email delivery, and real device rendering.
- Browser-based visual/interaction testing could not run: the headless browser navigation to the local HTTP test server was blocked by the execution environment (`ERR_BLOCKED_BY_ADMINISTRATOR`). This is an environment limitation, not evidence that the website itself fails.
- CSS visual quality and touch behaviour should still be checked on a real browser/phone before publishing.


## Follow-up branding correction — 19 October 2026
- Issue: existing logo artwork said “KANIFNATH CONSTRUCTIONS” (plural), while the supplied quotation uses “KANIFNATH CONSTRUCTION” (singular).
- Fix: created a horizontal wordmark using the original KT monogram crop, exact singular business name, and the quotation tagline. Updated page logo dimensions and removed duplicate adjacent wordmark text.
- Limitation: visual comparison was based on the supplied one-page quotation rendering; browser rendering across all viewport widths still requires live-browser verification.
