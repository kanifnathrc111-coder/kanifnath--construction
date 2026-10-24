# Deployment guide (GitHub Pages + kanifnathconstruction.com)

This is a static site: no build step, no server, no database. **Nothing here has been deployed, and the custom domain was not checked.**

## 1. Before publishing
1. Edit `config.js` (see MISSING_BUSINESS_DETAILS.md): at least check the phone/WhatsApp numbers and add an email.
2. Preview locally: run `python3 -m http.server 8000` in the folder and open http://localhost:8000 (or use VS Code "Live Server").
3. Click through the menu, the quote form and the gallery.

## 2. Upload to your EXISTING GitHub repository
1. Unzip `kanifnath-construction-final-bugfixed.zip`. Inside is ONE folder with all website files directly in it (no sub-folders). Upload that folder's **contents** so that `index.html` sits at the top level of the repository, not inside another folder.
2. In the repository choose **Add file -> Upload files**, drag in all the files from the folder (there are no sub-folders; include the hidden `.nojekyll` file if your file manager shows it - it is optional), and **Commit changes**. Use the same file names so the new files replace the old ones.
3. Old files that are no longer used can stay, or be deleted for a tidy repository: `premium-ui.css`, `enhancements.css`, and the old images with spaces in their names (`Gabion svg.png`, `pcc eork.jpg`, ...) and the old `check file/` folder. Keep `icon-5122.png` (your original logo). Delete them only AFTER the new site works. The new site does not use them. Deleting the big old PNG images also makes the repository much lighter.
4. **Settings -> Pages**: Source = *Deploy from a branch*, your branch (usually `main`), folder `/ (root)`.
5. After about a minute the site opens at `https://<username>.github.io/<repository>/`. All links are relative, so this works.

## 3. The custom domain - read carefully
All canonical links, social tags, structured data, `sitemap.xml` and `robots.txt` use **https://kanifnathconstruction.com**. The `CNAME` file contains the same name.

- **If the domain is already connected and working:** nothing to change.
- **If you are still testing on `<username>.github.io/<repository>/` and the domain is NOT connected yet:** do not tell Google about the site yet. Either connect the domain first (below), or in VS Code use Find in Files to replace `https://kanifnathconstruction.com` with `https://<username>.github.io/<repository>` in all `.html` files, `sitemap.xml` and `robots.txt`, and delete the `CNAME` file. Do the reverse replacement when the domain goes live.
- **To connect the domain:** put `kanifnathconstruction.com` in **Settings -> Pages -> Custom domain**; at the registrar add A records for `@` (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 - check GitHub's current docs) and a CNAME for `www` -> `<username>.github.io`; wait for DNS; then tick **Enforce HTTPS**.

## 4. Redirects and 404
GitHub Pages has no server redirects. `projects.html` is a small redirect page to `gallery.html` (`noindex`). `404.html` is shown automatically for unknown addresses.

## 5. After going live - check
- `/robots.txt` and `/sitemap.xml` open.
- View-source on a page: canonical shows the address you intend.
- Phone and WhatsApp links work on a real phone.
- Run PageSpeed Insights on the home page; then follow GOOGLE_SEARCH_CONSOLE_GUIDE.md.

## 6. Updating later
- Colours: top of `style.css` (`:root`).
- Contact details and logo: `config.js`.
- Photos: copy them into this same folder and add one line each in `gallery-manifest.js` (instructions are at the top of that file).
- Structured data: once the phone/email are public you may add `"telephone"` and `"email"` to the Organization block in each page head (search `"@type": "Organization"`). Only with verified details.
- The `.md` documents are public on GitHub Pages. Delete them from the repository if you do not want that.

## Deploying this version (existing GitHub Pages setup)
1. Unzip. The ZIP has no outer folder: `index.html`, `CNAME` and all files are at its root.
2. Back up first: in the repository, create a branch (e.g. `backup-before-oct24`) from main.
3. Copy every file from the ZIP into the repository root, replacing existing files. Keep `CNAME` (it holds `kanifnathconstruction.com`) and `.nojekyll`. Commit and push to `main`; Pages rebuilds in a minute or two.
4. After it is live, check: https://kanifnathconstruction.com/ , /contact.html, /ucr-stone-wall.html, /sitemap.xml, /robots.txt. In Google Search Console, resubmit sitemap.xml.
5. Contact details live in two places: `config.js` (used by buttons and forms) and plain text in the footer, contact page, about page and structured data of the HTML files. If a number or the email changes, change `config.js` and search the HTML files for the old value.
Rollback: revert the commit, or restore the backup branch.

## 24 Oct 2026 addendum
Upload all files at the repository root (same as before; `.nojekyll` and `CNAME` included). New files: `barlow-condensed-700.woff2`, `projects.html`, `AUDIT_SUMMARY.md`. After deploying, open `/projects.html`, `/quote.html` and the home page on a phone, and submit `sitemap.xml` in Search Console. Keep a copy of your previous ZIP as the backup.
