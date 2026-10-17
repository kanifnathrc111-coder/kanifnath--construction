# KANIFNATH CONSTRUCTION — Website Setup (मराठी)

## 1. Laptop वर website उघडा
1. ZIP डाउनलोड करून Extract करा.
2. Extract झालेला `kanifnath-construction-site` folder VS Code मध्ये Open Folder करा.
3. `index.html` वर right-click करून **Open with Live Server** निवडा.
4. Gallery आणि hero मध्ये local SVG illustrations आहेत. या illustrative visuals आहेत, company project photographs नाहीत; तुमचे real photos add करण्यासाठी `docs/GALLERY_README.md` पहा.

## 2. Phone आणि WhatsApp सेट करा
`assets/js/config.js` उघडा आणि खालील fields मध्ये खरे business details टाका:
- `whatsappNumber`: country code सहित digits-only, उदा. `91` + तुमचा actual WhatsApp नंबर. उदाहरणातील नंबर copy करू नका.
- `phoneDisplay`: ग्राहकांना दिसणारा business phone.
- `phoneE164`: `+91...` स्वरूपातील phone number.
- `email`: खरा public enquiry email.
- `baseLocation`: actual operating base; confirm नसेल तर रिकामे ठेवा.

आत्ता हे fields रिकामे आहेत. त्यामुळे website खोटे “message sent” दाखवत नाही. Form message तयार करते; WhatsApp number configured असेल तर WhatsApp उघडते आणि ग्राहक स्वतः message send करतो. Website submissions database मध्ये save करत नाही.

## 3. Official logo add करा
तुमचा खरा transparent PNG logo `assets/images/logo.png` येथे ठेवा. Website तो load झाला तर placeholder च्या जागी logo दाखवेल. Logo नसेल तर `KC` temporary mark दिसेल; तो official logo नाही.

## 4. खरे photos add करा
तुमचे स्वतःचे photos `assets/images/` मध्ये ठेवा. Suggested filenames:
`gabion-boxes.jpg`, `gabion-mattress.jpg`, `gabion-wall-construction.jpg`, `stone-pitching.jpg`, `ucr-stone-wall.jpg`, `soling-work.jpg`, `pcc-work.jpg`, `trimix-flooring.jpg`, `machinery-site.jpg`, `project-01.jpg`.

Photo change करण्यासाठी संबंधित HTML मध्ये `src="assets/images/filename.jpg"` बदला. Alt text ही त्या खऱ्या photo प्रमाणे बदला. Project gallery मध्ये फक्त खरे काम, accurate details आणि permission असलेले client/site details प्रकाशित करा.

## 5. GitHub Pages वर publish करा
1. GitHub repository तयार करा किंवा existing repository उघडा.
2. `kanifnath-construction-site/` मधील सर्व contents repository root मध्ये upload करा (`index.html`, `assets/`, `sitemap.xml`, `robots.txt`, `.nojekyll` इ.).
3. Repository → **Settings → Pages** मध्ये publishing branch/folder निवडा.
4. GitHub build success झाल्यावर published URL उघडून mobile navigation, pages, images आणि forms manually तपासा.

## 6. Custom domain आणि HTTPS
`kanifnathconstruction.com` तुमच्या control मध्ये आहे याची आधी खात्री करा. मग GitHub Pages मधील Custom domain setting वापरा आणि GitHub ने दिलेले exact DNS records domain provider मध्ये टाका. DNS values अंदाजाने टाकू नका. DNS resolve झाल्यावर HTTPS उघडते का ते तपासा आणि GitHub मध्ये **Enforce HTTPS** उपलब्ध झाल्यावर enable करा. हे या ZIP मधून automatically झालेले नाही.

## 7. Google Search Console
1. Search Console मध्ये `kanifnathconstruction.com` ची Domain property add करा.
2. Google ने दिलेला DNS TXT verification record registrar मध्ये add करा.
3. Verify झाल्यावर Sitemaps मध्ये `https://kanifnathconstruction.com/sitemap.xml` submit करा.
4. URL Inspection मधून homepage, gabion product page, labour page आणि quote page तपासा.
5. Impressions, clicks, queries आणि indexing reports monitor करा. Sitemap submit केल्याने indexing किंवा #1 ranking guarantee होत नाही.

## 8. Publish करण्याआधी
Phone, WhatsApp, email, address/base, actual service area, product specifications, labour responsibilities, pricing terms, logo/photos confirm करा. Google Business Profile फक्त accurate details आणि Google eligibility rules नुसार सेट करा. सर्व manual tasks साठी `MISSING_BUSINESS_DETAILS.md`, `DEPLOYMENT_GUIDE.md` आणि `GOOGLE_SEARCH_CONSOLE_GUIDE.md` वाचा.


## 9. Gallery आणि photos कसे बदलायचे
- `docs/GALLERY_README.md` मध्ये gallery साठी सविस्तर मराठी/इंग्रजी मिश्र सूचना आहेत.
- `projects.html` मध्ये सध्या local SVG illustrations आहेत. या कंपनीच्या actual कामाचे photos नाहीत.
- खरे photos `assets/images/` मध्ये ठेवा; नंतर संबंधित `<img src>`, `alt`, heading आणि caption बदला.
- Gallery मध्ये filter buttons आणि image मोठे पाहण्यासाठी lightbox आहे. Keyboard मधील Left/Right arrows ने पुढील/मागील visual आणि Escape ने बंद करता येते.
- `IMAGE_SOURCES_AND_LICENCES.md` मध्ये image source/licence notes आहेत. Internet-hosted photo files download करता न आल्यामुळे या build मध्ये तृतीय-पक्ष photo hotlinks वापरलेले नाहीत.
