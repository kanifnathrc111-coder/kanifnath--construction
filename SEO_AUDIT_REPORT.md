> Note: this audit was written for the previous design. See CHANGELOG.md and TEST_REPORT.md for the 2026-10-19 redesign.

# SEO and quality audit (17 Oct 2026)

Nothing here claims the site is live, indexed or ranking. No search-volume or ranking data was available or invented.

## Problems found in the supplied ZIP, and what was done
| Finding | Action |
|---|---|
| `assets/images/logo.png` referenced on every page but missing (404 on all pages) | Logo is now loaded only when `logoPath` is set in config |
| 19 references to missing `*.jpg` images with SVG "fallback" tricks | Replaced by real local SVG illustrations, labelled "Illustration" |
| Unsplash stock photos in the home and old gallery pages, CSS hero and every `og:image` | Removed; local branded `og-default.png` for sharing |
| Google Fonts `@import` (render-blocking, third-party) | Removed; system font stack |
| Org-only JSON-LD; no Service/FAQ markup | Added BreadcrumbList, Service, FAQPage (matching visible text), WebSite, AboutPage/ContactPage/CollectionPage |
| Generic repeated page text, thin product pages | Rewrote each page with unique content, spec checklists, process, price factors, FAQs, related links |
| No dedicated GI gabion page, civil labour page or gallery | Added `gi-gabion-boxes`, `civil-construction-labour-supply`, `gallery` |
| Home cards: duplicate numbering, "Developer Services" and "Brickwork" without any page or verification | Cleaned; brickwork only mentioned as "on enquiry" |
| WhatsApp/phone/email links = `#` with toasts; "configure" labels visible to visitors | Hidden until configured; central `config.js` |
| Form showed prepared text and auto-opened WhatsApp even when blocked | Honest status wording; inline validation; WhatsApp/email buttons only if configured |
| Duplicate asset folder `assets/img`, duplicate docs | Consolidated |
| Sitemap without lastmod; robots without internal-folder rules | Regenerated; `projects.html` redirect excluded |
| Canonical on redirect page | `projects.html` -> noindex + canonical gallery |

## Current state
- 24 indexable pages, each with unique title, description, canonical, OG/Twitter and one H1.
- One primary intent per page (see `docs/SEO_KEYWORD_MAP.md`). No keyword-only pages created.
- No prices, rates, standards, certifications, years of experience, project counts or "manufacturer" claims anywhere.
- No third-party requests; images lazy-loaded with fixed dimensions; total site about 0.8 MB.

## Risks / things to do next
1. **Thin differentiation:** real photos, real specifications and local detail are the biggest SEO levers. Fill the "To be confirmed" tables.
2. **Gallery is empty until you add photos** - it is indexable but informative (category links). Consider noindex until 10+ photos if you prefer.
3. **Regional blocks** (Maharashtra/Pune) must be confirmed or removed.
4. **Structured data** lacks phone, address and logo until you verify them; add later.
5. Google "FAQ rich results" are limited to certain sites; the FAQs still help users.
6. Page descriptions: home is 173 characters (slightly long).
7. Public `.md` files on GitHub Pages (see DEPLOYMENT_GUIDE).
8. Core Web Vitals / PageSpeed not measured (no internet).
