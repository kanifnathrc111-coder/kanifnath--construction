# Gallery Guide — Kanifnath Construction

## Current gallery status
- `projects.html` uses a responsive grid, working category buttons and a native HTML `<dialog>` lightbox.
- Lightbox controls include Close, Previous and Next. Left/Right arrow keys navigate; Escape closes the native dialog; focus returns to the button that opened it.
- Current included visual files are locally-created SVG illustrations. They are **illustrations only**, not photographs of the company's work and not proof that an individual work scope has been completed.
- External image downloads were unavailable in the build environment (network name resolution failed). To avoid unauthorized hotlinks, external image hotlinks have been removed from live page markup/styles. No internet photo is claimed as downloaded or included.

## Add company photographs later
1. Ask the site owner/client for permission to publish the photo and remove visible customer/private information if necessary.
2. Resize/crop the photograph to landscape 3:2 or 5:3 where possible. Aim for about 1200 × 720 pixels, JPEG/WebP and a practical file size (for many gallery photos, around 200–350 KB is a useful target).
3. Save it in `assets/images/` with a descriptive filename, for example `project-gabion-wall-01.jpg`, `pvc-gabion-product-01.jpg`, `riverbank-protection-01.jpg`, `stone-pitching-01.jpg`, `pcc-work-01.jpg`.
4. In `projects.html`, update one gallery card's `<img src>`, `width`, `height` and `alt`; update the heading and caption using only verified facts.
5. Set `data-gallery-card` to one or more supported filter tags: `gabion`, `protection`, `stonework`, `concrete`, `labour`, `project-slot`. If creating a real case study, do not call it a completed company project until the owner verifies the scope and caption.
6. Remove the `Illustration` badge or change it to a truthful tag like `Product photo` / `Project photo` only for the real approved image. Update the lightbox caption and the alt text.
7. Test the image at mobile width and open it with the lightbox. Leave `loading="lazy"` on below-the-fold gallery images and keep explicit width/height to reduce layout shifts.
8. If you replace the `project-photo-slot.svg` card with a photo, also update the photo slot card's `data-gallery-card` category or remove that category if there are no remaining slots.

## Recommended file naming
Use lowercase letters, digits and hyphens. Avoid customer personal names in filenames unless there is a clear, approved business reason. Do not create duplicate-looking gallery entries from a single photo.

## Accessibility and image descriptions
Alt text should describe what is genuinely visible. Do not repeat keywords unnaturally. For example: `Stone-filled double-twisted wire gabion baskets installed along a riverbank` is suitable only if those details are visible and verified in the image. Captions may mention work scope/location only when confirmed and approved for publication.
