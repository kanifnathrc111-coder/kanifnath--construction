/* KANIFNATH CONSTRUCTION - gallery manifest.
   HOW TO ADD YOUR OWN PHOTOGRAPHS (everything lives in this one folder):
   1. Put the photo file in the website folder, e.g. stone-pitching_canal-bank_001.jpg (lowercase, hyphens, no spaces,
      about 1600 x 1200 px and under 400 KB).
   2. Add one line inside items: [ ... ] below, for example:
        { file: "stone-pitching_canal-bank_001.jpg", category: "stone-pitching", title: "Stone pitching, canal bank",
          alt: "Stone pitching laid on a canal bank", caption: "", width: 1600, height: 1200 },
      'category' must be one of the slugs listed under categories below.
   3. Upload the photo and this file to GitHub.
   Only add photographs you own that show your own work. Never add stock or AI pictures here. */
window.KANIFNATH_GALLERY = {
  /* Set to true to show a neutral 'photos coming soon' card for every enabled category that has no photograph yet (default false: one friendly notice is shown until photos are added). */
  showPlaceholders: false,
  /* Set enabled:true/false to show or hide a category. */
  categories: [
    {
        "slug": "gabion-box-products",
        "title": "Gabion Box Products",
        "service": "gabion-boxes.html",
        "enabled": true
    },
    {
        "slug": "gi-gabion-boxes",
        "title": "GI Gabion Boxes",
        "service": "gi-gabion-boxes.html",
        "enabled": true
    },
    {
        "slug": "pvc-coated-gabion-boxes",
        "title": "PVC-Coated Gabion Boxes",
        "service": "pvc-coated-gabion-boxes.html",
        "enabled": true
    },
    {
        "slug": "gabion-mattress",
        "title": "Gabion Mattress",
        "service": "gabion-mattress.html",
        "enabled": true
    },
    {
        "slug": "gabion-wall-construction",
        "title": "Gabion Wall Construction",
        "service": "gabion-wall-construction.html",
        "enabled": true
    },
    {
        "slug": "riverbank-protection",
        "title": "Riverbank Protection",
        "service": "slope-protection.html",
        "enabled": true
    },
    {
        "slug": "slope-protection",
        "title": "Slope Protection",
        "service": "slope-protection.html",
        "enabled": true
    },
    {
        "slug": "stone-pitching",
        "title": "Stone Pitching",
        "service": "stone-pitching.html",
        "enabled": true
    },
    {
        "slug": "ucr-stone-wall",
        "title": "UCR Stone Wall",
        "service": "ucr-stone-wall.html",
        "enabled": true
    },
    {
        "slug": "soling-work",
        "title": "Soling Work",
        "service": "soling-work.html",
        "enabled": true
    },
    {
        "slug": "pcc-work",
        "title": "PCC Work",
        "service": "pcc-work.html",
        "enabled": true
    },
    {
        "slug": "trimix-flooring",
        "title": "Trimix Flooring",
        "service": "trimix-flooring.html",
        "enabled": true
    },
    {
        "slug": "brickwork-plaster",
        "title": "Brickwork and Plaster",
        "service": "services.html",
        "enabled": false
    },
    {
        "slug": "labour-supply-installation",
        "title": "Labour Supply and Installation",
        "service": "gabion-labour-supplier.html",
        "enabled": true
    },
    {
        "slug": "construction-materials",
        "title": "Construction Materials",
        "service": "bulk-orders.html",
        "enabled": false
    }
],
  /* ITEMS-START */
  items: []
  /* ITEMS-END */
};
