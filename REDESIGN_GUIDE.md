# Premium UI, logo and photo replacement guide

## Brand
The shared UI layer is `assets/css/premium-ui.css`, loaded after `assets/css/style.css`. Main colours: deep navy `#071b32`, royal blue `#1c5a9f`, construction gold `#e8ad2e`, cool grey and white. The top nav, page headers, product cards, service cards, CTA band and quick quote panel share this system.

## Replace the temporary mark
Add the official transparent PNG logo at `assets/images/logo.png`. The header and footer include a hidden optional image and a styled `KC` text fallback. The JS shows the provided logo only if the image loads; the temporary KC mark is not represented as the official logo.

## Replace photos
Use optimized photos inside `assets/images/`. Suggested files: `gabion-boxes.jpg`, `pvc-coated-gabion-boxes.jpg`, `gabion-mattress.jpg`, `gabion-wall-construction.jpg`, `gabion-retaining-wall.jpg`, `stone-pitching.jpg`, `slope-protection.jpg`, `ucr-stone-wall.jpg`, `soling-work.jpg`, `pcc-work.jpg`, `trimix-flooring.jpg`, `machinery-site.jpg`, `material-supply.jpg` and `project-01.jpg`.

Replace the relevant `img src` in the HTML with the local path and revise alt text. `data-fallback` points to a local SVG so the page still renders if a photo file is missing. Hero artwork includes a temporary illustrative image and may layer an external stock reference online. Stock images are not company projects; the UI labels product/gallery illustrations accordingly.

## Main homepage
- `index.html`: hero, CTAs, quick quotation form, key capability links, product section, service sections and gallery CTA.
- `assets/js/site.js`: menu, logo fallback, image fallback, gallery filters, dynamic contact links and honest message/WhatsApp enquiry handling.
- `assets/js/config.js`: central public contact settings; never put private keys in this file.
