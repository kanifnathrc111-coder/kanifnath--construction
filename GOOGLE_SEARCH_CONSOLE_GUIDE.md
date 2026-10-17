# Google Search Console Setup Guide

## 1. Add the domain property
1. Open Google Search Console using the account that should own the property.
2. Choose **Domain** property and enter `kanifnathconstruction.com` without `https://` or a path.
3. Copy the DNS TXT value Google gives you. Do not use a value from another site or invent one.
4. In the domain provider's DNS control panel, create the TXT record at the exact host/name Google specifies. Save and allow DNS time to update.
5. Return to Search Console and select Verify. Keep the TXT record in place.

## 2. Submit sitemap
After the site is deployed and the production URL opens over HTTPS, open **Sitemaps** and submit:
`https://kanifnathconstruction.com/sitemap.xml`

The sitemap is generated from the current public, canonical page list. Re-check it after adding, removing or renaming a public HTML page.

## 3. Inspect important pages
Use URL Inspection for:
- `https://kanifnathconstruction.com/`
- `/gabion-boxes.html`
- `/gabion-sizes.html`
- `/gabion-labour-supplier.html`
- `/quote.html`

Use the complete URL when entering an inspection. Request indexing only after a page is deployed, accessible and useful.

## 4. Monitor after launch
Review Pages/Indexing, Sitemaps, Performance, queries, impressions, clicks, average position and country/device breakdown. Use the data to improve pages whose queries match buying intent. Indexing and rankings are not guaranteed by a sitemap submission.

## Current status
This build did not access the owner's Search Console, verify DNS, check live indexing, or submit the sitemap. Those steps require the owner's account and deployed website.
