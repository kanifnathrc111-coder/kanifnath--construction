# Missing business details - owner must supply

Nothing below was invented. Where a value is missing, the website hides the related button or shows a yellow "To be confirmed" badge (`data-owner-fill` in the HTML, so you can search for it).

## A. Contact details (edit only `config.js`, in the website root)
| Field | Current value | Notes |
|---|---|---|
| `whatsappNumber` | filled (919325503934) | Please confirm this is the number customers should use |
| `phoneDisplay`, `phoneE164` | filled (+91 9325503934) | Shown in the top bar, footer and contact page |
| `email` | **empty** | Add a mailbox you actually monitor; the email links and "Send by email" button then appear |
| `baseLocation` | "Pune, Maharashtra" | Confirm you want this shown publicly |
| `businessHours` | "24/7" | Confirm. "24/7" is shown on the contact page as written |
| `logoPath` | empty | e.g. `logo-new.png` after you copy a better logo file into the folder; empty = the original logo `kanifnath-logo.png` is used |

When the phone/email are confirmed public, you may add `telephone` / `email` to the Organization structured data in each page head (see DEPLOYMENT_GUIDE.md). This was NOT done automatically.

## B. Logo
The website now uses your original logo (`kanifnath-logo.png`, the artwork of `icon-5122.png` with only its empty margins trimmed). It is only 512 px wide, so it is sharp at the sizes used but will look soft if shown larger. Please supply, if you have it: the original high-resolution file or an SVG (at least 1000 px wide). Also confirm the spelling: the logo says "KANIFNATH CONSTRUCTIONS" (with an S) while the website text says "KANIFNATH CONSTRUCTION".

## C. Images - please check rights and origin
- The `*.webp` pictures were made from the pictures already on your site. Several are poster/infographic style illustrations and others look like photographs from other sources (for example the gabion wall, slope, UCR, soling, PCC and trimix pictures). I could not verify who owns them or their licence. Please confirm you have the right to use each one, or replace them with your own photographs.
- None of them are shown as Kanifnath Construction projects; they are labelled "Illustration" or "Reference image".
- Add your own project photographs to the main folder and list them in `gallery-manifest.js` (instructions at the top of the file). They then appear in "Project photographs" on the gallery page.
- Optional: replace `og-default.jpg` (the social-share picture made for this site) with your own 1200 x 630 image.

## D. Business facts to confirm (pages never state these until you do)
1. Your role per product: supplier/trader, manufacturer, or both? (No page says "manufacturer".)
2. Loose gabion mesh supply: yes or no.
3. Specifications you can actually supply - fill the "Our confirmed offering" column (currently "To be confirmed") in the tables on `gabion-boxes`, `gi-gabion-boxes`, `pvc-coated-gabion-boxes`, `gabion-mattress`, `gabion-sizes`: unit dimensions, mesh type and opening, wire diameters, zinc coating standard, PVC thickness/colour, diaphragms, packing.
4. Standards, test certificates, data sheets you can legitimately provide.
5. Minimum order quantity, delivery time, payment terms, quotation validity, GST treatment (no prices are published).
6. Service area: confirm Pune / Maharashtra / other states. The homepage and contact page contain a "project locations" block (marked `SERVICE-AREA BLOCK` in `index.html`); edit or delete it if wrong.
7. Labour supply details: trades, crew sizes, supervision, tools, accommodation/transport, safety practice.
8. Years in business, number of projects, client names, registrations (GST, MSME), insurance, certificates: none are claimed. Add only with documents.
9. Founding year, legal name and registered address for the About page and structured data.
10. "Projects" page: there is no list of real projects. `projects.html` redirects to the gallery. When you have real projects, tell me and a proper Projects page can be built.

## E. Accounts and access
Domain registrar login (DNS), GitHub account/repository name, Google account for Search Console, Google Business Profile eligibility (needs a verifiable address or service-area setup).

## Update 24 Oct 2026
Now supplied and entered: address, two mobile numbers, email, GSTIN (GSTIN not independently verified by this project).
Still needed: which of the two numbers is on WhatsApp (the WhatsApp button still uses 9325503934); confirm "24/7" business hours; whether the address may be shown publicly as a business premises (needed for Google Business Profile); everything in sections C and D above (real photos, manufacturer/supplier role, specifications, service area, standards, MOQ/delivery terms, founding year).

## Owner actions after the 24 Oct 2026 redesign
1. **Real photographs** of your gabion, UCR wall and labour work: add them via `gallery-manifest.js`; they appear on Projects and Gallery automatically. This is the single biggest credibility upgrade.
2. **Form delivery**: create a free Formspree (or similar) form and put its URL in `formEndpoint` in `config.js`; test one enquiry. Until then the form only prepares a WhatsApp/e-mail message.
3. Confirm which number is on WhatsApp (currently 9325503934) and whether the address may be shown as business premises (needed for Google Business Profile).
4. Provide a corrected logo (singular CONSTRUCTION, >=1000 px or SVG).
5. Confirm image rights for the illustrations, or replace them.
6. Fill the "Our confirmed offering" specification tables and confirm manufacturer/supplier role, service area, MOQ/delivery terms (section D above).
7. Optional: GA4 id in `analyticsId` (add a privacy notice first).
