# TEST REPORT — KANIFNATH CONSTRUCTION

Date: 19 October 2026  
Project: static HTML/CSS/JavaScript website

## First testing pass

| Check | Result | Evidence / notes |
|---|---|---|
| Project extraction and file inventory | PASS | 69 files found in the website folder after extracting the supplied ZIP. |
| Local links and asset references across 26 HTML files | PASS | No missing local href/src targets detected by static audit. |
| Local HTML fragment targets | PASS | No missing local anchors detected. |
| Duplicate HTML IDs | PASS | None found. |
| Images missing alt attributes | PASS | None found in the 26 HTML files. |
| Page titles | PASS | All 26 HTML files have a title. |
| Meta descriptions | PASS WITH INTENTIONAL EXCEPTION | 25 pages have descriptions; `projects.html` is a noindex redirect to `gallery.html`. |
| CSS local `url(...)` references | PASS | No missing local CSS assets detected. |
| Sitemap syntax and listed local targets | PASS | XML parses; all 24 listed URLs map to project files. |
| JavaScript syntax (`node --check`) | PASS | `site.js`, `config.js`, `gallery-manifest.js`. |
| Browser page loading, console, responsive overflow, mobile menu and forms | NOT VERIFIED | Headless Chromium navigation to `127.0.0.1` was blocked by the execution environment with `ERR_BLOCKED_BY_ADMINISTRATOR`. No browser pass is claimed. |

## Changes tested statically after implementation

- Logo image source remains `kanifnath-logo.png`; image artwork was not modified.
- Header/footer logo heights now use bounded responsive CSS.
- Exact visible business-name label `KANIFNATH CONSTRUCTION` was added alongside the preserved artwork.
- `style.css` contains no missing local `url(...)` asset references.
- All local links and anchor references were rechecked after edits.

## Second independent final audit

A separate re-read of the final HTML/CSS/JS references was performed after the changes.

| Final audit item | Result |
|---|---|
| Original logo asset still exists and is referenced | PASS |
| Logo size has desktop, mobile and narrow-mobile constraints | PASS (static CSS inspection) |
| Exact business name is present alongside logo instances | PASS (static markup inspection) |
| Local link targets and fragment anchors | PASS |
| Duplicate IDs / missing image alt text | PASS |
| JS syntax | PASS |
| CSS asset paths | PASS |
| Sitemap XML and target files | PASS |
| Browser console, rendered logo dimensions, actual viewport overflow, menu interactions and form behaviour | NOT VERIFIED — browser blocked by environment |
| Live hosting and external contact integrations | NOT VERIFIED |

## Remaining limitations

This is not a guarantee that the website is bug-free. Before publishing, open `index.html` using VS Code Live Server or a local web server and check at 320, 375, 390, 430, 768, 1024 and 1366px widths. Test navigation, phone/WhatsApp links, enquiry forms and gallery behaviour in the browser. Forms that rely on external services should only be described as submitted when the service confirms success.
