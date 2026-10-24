/* ==========================================================================
   KANIFNATH CONSTRUCTION - central business configuration
   --------------------------------------------------------------------------
   This is the ONLY place to enter your public contact details.
   Everything on the website (header, footer, contact page, WhatsApp buttons,
   enquiry form) reads these values. Leave a value as "" until it is verified:
   the matching button/link stays hidden and nothing wrong is shown.

   Never put passwords, API secrets or private keys in this file - it is public.
   ========================================================================== */
window.KANIFNATH_CONFIG = {
  businessName: "KANIFNATH CONSTRUCTION",
  website: "https://kanifnathconstruction.com/",

  /* WhatsApp number with country code, digits only, no + or spaces.
     Example format for India: 91XXXXXXXXXX  (91 followed by the 10-digit mobile number) */
  whatsappNumber: "919325503934",          // <-- OWNER TO FILL

  /* Public phone number for the "Call" link. */
  phoneDisplay: "+91 93255 03934",
  phoneE164: "+919325503934",               // e.g. "+91XXXXXXXXXX"     <-- OWNER TO FILL

  /* Public enquiry email address (must be a mailbox you actually monitor). */
  email: "kanifnathr.c111@gmail.com",

  /* Town / city / state shown publicly (optional). Do not enter a private home address. */
  baseLocation: "Kalewadi, Tal. Daund, Dist. Pune - 413801",

  /* Business hours text shown on the contact page (optional). */
  businessHours: "24/7",           // e.g. "Mon-Sat, 9:00 am - 6:00 pm"

  /* The original logo (kanifnath-logo.png) is shown by default. To use a better logo file, put it in this
     same folder and enter its file name here, e.g. "my-new-logo.png". Leave "" to keep the original. */
  /* Official details supplied by the owner (24 Oct 2026). The footer, contact page and structured data in the HTML
     files repeat these as plain text so search engines can read them; if one changes, update it here AND search
     the HTML files for the old value (see DEPLOYMENT_GUIDE.md). */
  address: "Kalewadi, Tal. Daund, Dist. Pune - 413801",
  secondPhoneDisplay: "+91 97637 39384",
  secondPhoneE164: "+919763739384",
  gstin: "27DHBPC7233L1ZB",

  logoPath: "",

  /* ENQUIRY DELIVERY (optional). The site has no server of its own. To have quote-form enquiries delivered straight to
     your e-mail, create a free form at https://formspree.io (or any service that accepts a JSON POST and answers with
     HTTP 200), then paste its endpoint here, e.g. "https://formspree.io/f/xxxxxxxx".
     While this is "" the form only PREPARES the message for WhatsApp / e-mail and says clearly that nothing was sent.
     "Sent" is shown only when the service answers with success. Never put secret keys here - this file is public. */
  formEndpoint: "",

  /* ANALYTICS (optional, privacy-conscious). Leave "" for no analytics. If you add a Google Analytics 4 id such as
     "G-XXXXXXXXXX" the script loads with ad personalisation off and no page content is sent. Add a cookie/privacy
     notice appropriate to your use before turning this on. */
  analyticsId: ""
};
