# SEO and Website Audit Report — Final Optimisation Pass

## Scope
Audited the existing 23-page static project and performed source-level corrections. The production domain `https://kanifnathconstruction.com/` is the intended canonical domain; its live DNS/HTTPS status was not checked.

## Changes implemented
- Removed external Unsplash image hotlinks from page images and hero CSS. Replaced them with locally bundled vector illustrations and generated a local Open Graph share cover (`assets/images/og-cover.png`).
- Added dedicated locally-created gallery illustrations for gabion wall, mesh, PVC-coated gabion concept, mattress, riverbank protection, stone pitching, UCR stone wall, soling, PCC, Trimix, labour/installation and a project-photo placeholder.
- Rebuilt `projects.html` as a responsive illustration gallery with multi-tag categories, truthful illustration labels, related service links, lazy loading, explicit image dimensions, and a native accessible lightbox with close/previous/next buttons, Left/Right keyboard navigation and Escape handling.
- Expanded product specification tables for gabion boxes, PVC-coated gabion boxes, gabion mattress and gabion dimensions. The website distinguishes generic mesh construction from variant-specific openings/wire diameters/coatings, and avoids advertising unconfirmed values as standard specs.
- Updated `MISSING_BUSINESS_DETAILS.md` with every specification and company detail that must be confirmed before publishing.
- Expanded `docs/SEO_KEYWORD_MAP.md` to assign page URL, search intent, primary/secondary targets, suggested title/description, H1, internal links and conversion goal.
- Updated the Marathi setup guide, deployment guide, Google Search Console guide, image licensing notes, and gallery README.
- Preserved the static HTML/CSS/Vanilla JS architecture and honest WhatsApp-based enquiry behaviour; no database-success claims or credentials were added.

## Specification handling
Only general mesh construction is described as a product type where applicable: mechanically woven, double-twisted hexagonal wire mesh. Mesh opening, wire diameters (including the 4.00 mm reference), binding/lacing wire (including the 2.20 mm reference), coating, exact dimensions and stone gradation remain variant/project-specific. They are not published as universal specifications.

## Image source and licence status
Image search located potential Wikimedia Commons source pages, including a CC0 gabion wall image and a CC BY 2.0 example. Actual image-binary download failed due to network name-resolution restrictions in the build environment. Therefore those external photos are not bundled or hotlinked. All current gallery visuals are locally-authored SVG illustrations marked as illustrative.

## SEO notes
- `docs/SEO_KEYWORD_MAP.md` contains target themes, not measured search volume or current rankings.
- No manufacturer claim, reviews, project statistics, certifications, price list, physical address, or nationwide service guarantee was added.
- Regional keyword themes are conditional on the owner's confirmation of service availability in those regions.
- Sitemap excludes `404.html` and covers public indexable HTML pages only.

## Remaining before launch
- Confirm all missing business details and product variant mappings.
- Add the official logo and approved actual product/site photos.
- Configure verified phone, WhatsApp and email.
- Verify domain/DNS/HTTPS redirects and deploy the files.
- Complete Search Console verification and submit the sitemap.
- Manually review browser/mobile rendering and interactions after deployment.
