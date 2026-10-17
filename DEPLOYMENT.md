# Deployment Guide

## 1. Confirm the domain

The project is configured for `https://kanifnathconstruction.com/`. Confirm domain ownership and registrar access before changing DNS. This project has not verified purchase, registration or current live status.

## 2. Update the business config

Edit `assets/js/config.js` and add only verified public details:

- `whatsappNumber`: digits only with country code, e.g. `91XXXXXXXXXX` (replace the Xs with the actual number).
- `phoneDisplay`: the public phone formatting shown to visitors.
- `phoneE164`: public phone in international format.
- `email`: public enquiry email.
- `baseLocation`: confirmed operating base / service area description.
- `ga4MeasurementId`: leave blank unless Analytics is configured and the privacy text is reviewed.

Do not add credentials, API secrets or customer data to a frontend JavaScript file.

## 3. Free static hosting (GitHub Pages)

1. Sign in to GitHub and create a repository, e.g. `kanifnath-construction-site`.
2. Upload the full contents of this folder (not the parent folder containing the ZIP).
3. In repository settings, open **Pages** and select deploy from the main branch and root folder.
4. Wait for GitHub to publish the generated site URL.
5. Open the homepage, Quote page and several service pages on mobile and desktop. Check the browser console and network tab for missing files.
6. In GitHub Pages custom-domain settings, add `kanifnathconstruction.com` only after the domain is owned. Apply the DNS records GitHub instructs you to use. Do not copy generic DNS values without confirming the settings provided for your repository.
7. Enable HTTPS in Pages settings after DNS verification is ready.

GitHub Pages may not support custom 404 behavior exactly like every other host; test a made-up URL after deployment.

## 4. Connect the domain and HTTPS

At your registrar, configure the DNS records recommended by the hosting provider for the apex domain and any preferred `www` hostname. Avoid conflicting A, AAAA, CNAME or forwarding records. Once DNS resolves to the host and ownership is verified, enable HTTPS and force HTTPS where supported.

If you choose another host, follow its official custom-domain steps. Static HTML has no required server runtime.

## 5. Search Console

1. Add a Domain property in Google Search Console to cover both apex and subdomains; verify using the DNS TXT record supplied in Search Console.
2. After the site is publicly reachable over HTTPS, inspect the homepage and selected key pages.
3. Submit `https://kanifnathconstruction.com/sitemap.xml` after confirming the configured domain and sitemap locations match the live website.
4. Request indexing for the most important pages once they return a successful response and contain final content.
5. Monitor indexing, impressions, clicks, query/page performance and mobile issues. Indexing and ranking are not guaranteed.

## 6. Google Business Profile

Create or update a profile only using accurate business information and categories that fit the real business. Use the genuine business address if customers are served there and it qualifies; otherwise review Google's service-area business rules. Add real photographs, hours and contact details. Ask real customers for honest reviews without incentives or review gating. Website deployment does not create or verify the profile.

## 7. Analytics

If needed, create a GA4 web data stream and paste the measurement ID into `assets/js/config.js`. Before enabling it, review consent/privacy obligations and update `privacy.html`. Keep names, phone numbers, emails and enquiry text out of analytics events.

## 8. Pre-launch test

Run the included `docs/GOOGLE_LAUNCH_CHECKLIST.md` and `docs/TEST_REPORT.md`. The supplied ZIP has been checked locally at source level; live hosting, domain control, Search Console, Google Business Profile, live browser measurements and actual form delivery remain owner actions.
