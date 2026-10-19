# KANIFNATH CONSTRUCTION - website

Static HTML5 / CSS3 / vanilla JavaScript website for gabion product supply, gabion labour supply and civil construction enquiries.
No build step, no framework, no backend. Works on GitHub Pages (branch `main`, folder `/ (root)`).
Domain in the files: https://kanifnathconstruction.com/ (**not verified live** - see DEPLOYMENT_GUIDE.md).

## ONE folder, no sub-folders
Every file sits directly in this folder:
- `index.html` and the other `*.html` pages (24 indexable pages + `404.html` + `projects.html`, a redirect to the gallery)
- `style.css` - the ONE stylesheet; brand colours are the variables at the top (`:root`)
- `site.js` - menu, forms, gallery and photo viewer
- `config.js` - **the one place for phone / WhatsApp / email / location / logo path**
- `gallery-manifest.js` - list of your own project photographs (instructions inside the file)
- `kanifnath-logo.png` - your ORIGINAL logo (only the empty white margins were trimmed; artwork untouched)
- `icon-5122.png` - the untouched original logo file, kept for reference
- `favicon.png` - browser-tab icon, taken from the emblem of your original logo
- `*.webp` - optimised website pictures; `og-default.jpg` - social-share picture
- `inter-latin-wght-normal.woff2` - self-hosted Inter font (no Google Fonts request)
- `robots.txt`, `sitemap.xml`, `CNAME`, `.nojekyll`
- `*.md` documents

## Preview locally
`python3 -m http.server 8000` in this folder, then open http://localhost:8000

## Read next
README-MARATHI.md, MISSING_BUSINESS_DETAILS.md, DEPLOYMENT_GUIDE.md, TEST_REPORT.md, CHANGELOG.md,
GOOGLE_SEARCH_CONSOLE_GUIDE.md, SEO_AUDIT_REPORT.md, SEO_KEYWORD_MAP.md

## Enquiry forms
They do not store or send data. They prepare a message that the visitor sends via WhatsApp / email (only shown when configured) or copies.
