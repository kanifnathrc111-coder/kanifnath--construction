# Deployment Guide — Kanifnath Construction

## Before publishing
1. Confirm that `kanifnathconstruction.com` is registered and you control its DNS.
2. Set verified details in `assets/js/config.js`: `whatsappNumber`, `phoneDisplay`, `phoneE164`, `email`, and `baseLocation` only when confirmed.
3. Add official logo as `assets/images/logo.png`; add approved photos as documented in `docs/GALLERY_README.md`.
4. Verify every product specification and labour scope in `MISSING_BUSINESS_DETAILS.md`.

## Option A — GitHub Pages (static website)
1. Create/open the GitHub repository for this website.
2. Upload the **contents of** `kanifnath-construction-site/` to the publishing root, including `index.html`, `assets/`, `sitemap.xml`, `robots.txt`, and `.nojekyll`. Do not upload the ZIP as the only site file.
3. In repository Settings → Pages, choose the required source branch and folder. Wait for the GitHub Pages build to finish.
4. Test the GitHub Pages URL before connecting the custom domain.
5. In Settings → Pages → Custom domain, enter `kanifnathconstruction.com` and save. Use the DNS records shown by GitHub's current instructions; do not copy guessed records from this guide.
6. At your domain provider, add the exact A/AAAA or CNAME records required by GitHub Pages for the current configuration. Check that records match the help documentation.
7. After DNS resolves and GitHub verifies the domain, enable **Enforce HTTPS** if the option is available. Confirm both the root domain and `www` host behaviour and choose a single preferred host/redirect strategy supported by the provider.
8. Open several pages on desktop and a phone. Test menu, images, filters/lightbox, quote form and telephone/WhatsApp actions.

## Option B — Existing static hosting
Upload the site folder contents to the configured public document root. Keep `index.html` as the index file, preserve relative assets, configure a real 404 page if supported and enable HTTPS through the provider. Do not publish a second competing copy on a different canonical domain.

## Canonical domain and redirects
Pages are authored with canonical URLs on `https://kanifnathconstruction.com/`. This is the intended production URL only; domain ownership, DNS, TLS, redirects and live HTTP status were not checked by this source build. Configure host redirects at the hosting/domain provider, not by editing each page to point to multiple canonical hosts.

## Enquiry behaviour
The site is static. Until a verified WhatsApp number is added to config, form submissions only prepare a message for copying; they are not stored or delivered to the company. No database/backend is included.
