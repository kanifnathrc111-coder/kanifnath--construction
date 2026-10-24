# Changelog

## 24 Oct 2026 - Premium redesign (third pass)
- **Design system**: new palette exactly as briefed - Deep Maroon #8B0D0D, White, Charcoal #171717, Light Grey #F4F5F7, Gold #D4A64A - defined once as CSS variables in `style.css`. Self-hosted Barlow Condensed (headings, OFL licence) + Inter (text). Gold is used for rules, buttons on dark areas and highlights, never as small text on white.
- **Header/footer** rebuilt and rolled out to all 26 pages by script: charcoal top bar with BOTH mobile numbers, gold-underlined active page, new "Projects" link, UCR Stone Wall and Gabion Labour Supply promoted in the Services menu; charcoal footer with maroon/gold rules.
- **Homepage** restructured around the four priorities (gabion box supply, gabion wall construction, gabion labour supply, UCR stone wall): new hero headline, four service tiles, a facts strip (address, contact, GSTIN, written quotations - all owner-supplied), a dedicated UCR stone wall section, FAQ block, call buttons. Nothing invented.
- **New Projects page** (`projects.html`, now indexable, in sitemap): six project types, what defines the scope, what to send; shows real photographs automatically from `gallery-manifest.js` once added. No fake projects.
- **Enquiry**: optional `formEndpoint` in `config.js` - when set, the form POSTs and shows "sent" ONLY on HTTP success (error message otherwise); hidden honeypot field against bots; privacy-conscious analytics hooks (`analyticsId`, off by default; click-to-call / WhatsApp / email / enquiry events). Second phone number now driven by `config.js`.
- **Honesty**: the claim-heavy "Labour Supply" poster image was replaced by a claim-free illustration; card images are labelled "Reference image".
- Floating WhatsApp button is now a compact round icon (label on hover) so it no longer covers content.
- Fixed: gallery meta description too long; sitemap now has 25 URLs (Projects added), UCR page priority raised.

## 2026-10-19 - Professional maroon redesign

### Branding - original logo kept
- Your ORIGINAL logo is shown in every header and footer: `kanifnath-logo.png`. It is the same artwork as `icon-5122.png` (the 512 x 512 original); only the empty white margins above and below the artwork were trimmed (pixel-exact, no resizing, no re-drawing), because the original file was about 70% blank space and therefore displayed tiny. The untouched original `icon-5122.png` is also kept in the folder.
- The logo sits on a white rounded plate with a soft shadow and thin border. Its height is set in CSS and its width follows the file's own ratio, so it is never stretched, cropped or distorted (tested: displayed aspect ratio equals the file's ratio). Height: 58 px on desktop, 42 px on phones, 35 px on very small phones.
- The old text wordmark and the block icon from my first version were removed. Nothing new was invented for the logo.
- `favicon.png` is the KF emblem cut from the original logo (so the tab icon is legible); a larger crop of artwork used only for the favicon.
- Replacing the logo later: put the new file in this folder and set `logoPath` in `config.js` (aspect ratio stays correct automatically).
- Missing `og-default` social image created (`og-default.jpg`).

### Design
- Replaced three stacked navy/gold stylesheets (`style.css`, `premium-ui.css`, `enhancements.css`; about 6,100 lines) with ONE `style.css` using CSS variables: maroon `#8F1010`, deep maroon `#700B0B/#4F0707`, tint `#FCEEEE`, page grey `#F7F8FA`, white cards, text `#252B36`, border `#E2E8F0`.
- Self-hosted Inter font. Flat, square-cornered, construction-industry look: full-width hero image, solid deep-maroon page banners, no decorative gradients on cards.
- The ERP screenshot was used for colours only; no dashboard layout, sidebar or widgets were copied.

### Pages
- New header (top info bar with phone from `config.js`, sticky navigation, "Get a Quote" button, working mobile menu with expandable submenus) and footer applied identically to all 25 pages; current page is marked with `aria-current`.
- Homepage rebuilt: hero, quick links, 4 product cards, gabion wall and mattress panels, civil services cards, labour supply, "specification-first" working method (taken from the existing About page), enquiry process, reference-image strip, Pune/Maharashtra enquiry area with the working quick quote form, bulk-order CTA.
- Services page: image cards with consistent ratios.
- Gallery page rebuilt: a "Project photographs" area wired to `gallery-manifest.js` (shows a notice until you add photos) plus the existing 10 work-type cards, clearly labelled as reference images. The visible "Before publishing: add your photos..." owner note was removed from the public page.
- All other pages keep their content and URLs; only the shared layout, images and styling changed.

### Images
- 29 MB of originals reduced to about 3 MB of WebP copies with correct width/height attributes, lazy loading below the fold, descriptive alt text. Clean file names replace names such as `pcc eork.jpg`, `gabiob slop protaction.jpg` (spaces and typos).
- Originals are not included in this ZIP (they remain in your original ZIP). Existing images are labelled "Illustration" or "Reference image" where they are not project photographs.

### Bug fixes
- Stray `<<a` in the header of `gabion-boxes.html`.
- Absolute `/` paths (`/enhancements.css`, `/icon-5122.png`, 404 page links) that break on a GitHub Pages project URL are now relative; `404.html` sets its own base address.
- Gallery files were in a folder named `check file/` while `site.js` looked in `assets/images/gallery/`. Now the manifest is `gallery-manifest.js` in the main folder and photos go in the same folder (see the instructions at the top of that file). The optional helper script and the empty category folders were removed.
- Missing `og-default.png` referenced by every page (and one wrong `./og-default.png`): now `og-default.jpg`.
- Self-link "Contact the Team" button removed from the contact page.
- HTML validation errors fixed (redundant `for`, missing input `type`, headings inside inline elements, misplaced `aria-label`).
- Floating WhatsApp button is icon-only on phones so it no longer covers form fields.
- Sitemap `lastmod` updated.

### Single-folder structure
- All files are directly in one folder: no `assets/`, `images/`, `fonts/`, `tools/` or any other sub-folder. Every image, stylesheet, script, font and favicon reference was rewritten and checked.
- Removed: the unused `premium-ui.css`, `enhancements.css`, `update_gallery_manifest.py`, `captions.csv`, `.gitkeep` files and the gallery README (its instructions are now in `gallery-manifest.js`, README-MARATHI.md and this folder's README.md).

### Not changed
URLs, page text and metadata, structured data, `robots.txt`, `CNAME`, form behaviour (still honest: nothing is sent by the site), `config.js` values.

## 2026-10-19 — Logo sizing and final static audit

- Preserved the original `kanifnath-logo.png` artwork and reduced its displayed size responsively.
- Added the exact visible company name `KANIFNATH CONSTRUCTION` beside the logo without editing the logo image.
- Added a max-width constraint and responsive spacing for narrow screens.
- Added `BUG_AUDIT_REPORT.md` and updated `TEST_REPORT.md` with static checks and browser-test limitations.
- Updated the deployment guide to reference the final ZIP filename.


## 19 October 2026 — Exact company wordmark
- Updated the existing logo artwork presentation to use the exact singular business name “KANIFNATH CONSTRUCTION”.
- Retained the original KT monogram artwork from the existing logo and added the tagline “LABOUR SUPPLIER & DEVELOPERS” in a horizontal wordmark matching the supplied quotation header.
- Removed the duplicated separate company-name text beside the logo and adjusted responsive logo widths for desktop and mobile.

## 24 Oct 2026 - SEO and enquiry-flow update (second pass)
- `ucr-stone-wall.html`: rewritten as a full UCR wall construction page (meaning of UCR, UCR vs coursed vs dry rubble, uses, build process, quality points, quotation checklist, rate factors with no fixed rates, 6 FAQs). New title, description, H1, Service and FAQ schema. URL unchanged.
- `gabion-labour-supplier.html`: keyword-focused title, H1 and description; labour-by-project-size section; supplier-vs-contractor FAQ.
- 14 service/product pages: "Request a Quote" buttons now open `quote.html?service=...` with the matching requirement preselected.
- `site.js`: `setupPrefill()` reads `?service=` and preselects the matching option; unknown values are ignored.
- All pages with Organization schema: added `logo` and `telephone` (number already public in config.js).
- `index.html`: favicon links made relative.
- `sitemap.xml`: lastmod updated for changed pages only.
- Added `SEO_COMPETITOR_AUDIT.md` and `SEO_RESEARCH_AND_GAP_REPORT.md`.

## 24 Oct 2026 - official business details (third pass)
Details supplied by the owner: KANIFNATH CONSTRUCTION, Kalewadi, Tal. Daund, Dist. Pune - 413801; mobiles 9763739384 and 9325503934; email kanifnathr.c111@gmail.com; GSTIN 27DHBPC7233L1ZB. Entered exactly as supplied. GSTIN has NOT been independently verified.
- Modified: `config.js` (email, address, second phone, GSTIN, display format of the first phone; WhatsApp number unchanged), `site.js` (none this pass), `style.css` (footer contact block), `contact.html` (static address, both phones as `tel:` links, email as `mailto:` link, GSTIN), `about.html` (business details), `privacy.html` (contact email), `sitemap.xml` (all lastmod), and all 25 pages with a footer (footer contact block; duplicate script-filled phone/email/base links removed).
- Structured data on every page: Organization is now also typed GeneralContractor, with address, both telephones, email, taxID, logo.
- Added files: none this pass. Removed files: none.
- Not applicable: this project contains no quotation/invoice templates, PDF export, Firebase, ERP pages, manifest or service worker, so nothing there could be updated.
