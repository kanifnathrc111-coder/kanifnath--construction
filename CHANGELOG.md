# Changelog

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
