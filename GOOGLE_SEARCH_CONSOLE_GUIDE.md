# Google Search Console guide

Do these steps **after** the site is live on https://kanifnathconstruction.com/ with HTTPS. Nothing here has been done yet, and
no indexing or ranking is guaranteed or implied.

1. Go to https://search.google.com/search-console and sign in with the Google account you will keep long-term.
2. **Add property -> Domain** and enter `kanifnathconstruction.com`. (Domain property covers http/https/www.)
3. Verify using the **DNS TXT record** Google shows: add it at your domain registrar's DNS panel, wait a few minutes, press Verify.
   (Alternative: URL-prefix property `https://kanifnathconstruction.com/` and the HTML-tag method - paste the meta tag into the `<head>` of `index.html`.)
4. **Sitemaps** (left menu) -> enter `sitemap.xml` -> Submit. Status should become "Success"; it lists 24 pages.
5. **URL Inspection**: paste `https://kanifnathconstruction.com/` -> *Test live URL* -> *Request indexing*. Repeat for the main product and service pages. Do not spam requests.
6. Check **Pages** (Indexing) report after a few days. "Discovered / Crawled - not indexed" is common for new sites; keep improving content and add real photos and case details.
7. Check **Experience -> Core Web Vitals** and **Mobile usability** after data appears (needs real traffic).
8. After 4-8 weeks open **Performance** to see real search queries and adjust page titles. Do not chase rankings with repeated keywords.
9. Optional: create a **Google Business Profile** if you have a verifiable business address/service area; keep name, phone and website identical to the site.
10. Optional: add Bing Webmaster Tools (import from Search Console).
