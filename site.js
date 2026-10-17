(() => {
  const cfg = window.KANIFNATH_CONFIG || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const toast = (message) => {
    let el = $('#site-toast');
    if (!el) { el = document.createElement('div'); el.id = 'site-toast'; el.className = 'toast'; el.setAttribute('role','status'); el.setAttribute('aria-live','polite'); document.body.appendChild(el); }
    el.textContent = message; el.classList.add('show');
    clearTimeout(el._timer); el._timer = setTimeout(() => el.classList.remove('show'), 5200);
  };
  const digits = (value) => (value || '').toString().replace(/\D/g,'');
  const number = digits(cfg.whatsappNumber || cfg.phoneE164 || '');
  const whatsappUrl = (message) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  const setContactLinks = () => {
    $$('[data-whatsapp-cta]').forEach(link => {
      if (!number) {
        link.addEventListener('click', e => { e.preventDefault(); toast('WhatsApp is not configured yet. Add the verified business number in assets/js/config.js before launch.'); });
      } else {
        link.href = whatsappUrl(link.dataset.message || 'Hello KANIFNATH CONSTRUCTION, I would like to enquire about your gabion products and civil construction services.');
        link.target = '_blank'; link.rel = 'noopener noreferrer';
      }
    });
    $$('[data-phone-link]').forEach(link => {
      const phone = (cfg.phoneE164 || cfg.phoneDisplay || '').trim();
      if (phone) { link.href = `tel:${phone.replace(/[^+\d]/g,'')}`; link.textContent = cfg.phoneDisplay || phone; link.classList.remove('is-unconfigured'); }
      else { link.addEventListener('click', e => { e.preventDefault(); toast('Add the confirmed business phone number in assets/js/config.js to activate calling.'); }); }
    });
    $$('[data-email-link]').forEach(link => {
      if (cfg.email) { link.href = `mailto:${cfg.email}`; link.textContent = cfg.email; }
      else { link.addEventListener('click', e => { e.preventDefault(); toast('Add the public business enquiry email in assets/js/config.js to activate email contact.'); }); }
    });
    $$('[data-base-location]').forEach(el => { if (cfg.baseLocation) el.textContent = cfg.baseLocation; });
  };
  const setupMenu = () => {
    const toggle = $('#menu-toggle'); const nav = $('#main-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
    $$('a', nav).forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.focus(); } });
    const path = location.pathname.split('/').pop() || 'index.html';
    $$('a[href]', nav).forEach(a => { if (a.getAttribute('href') === path) a.setAttribute('aria-current','page'); });
  };
  const createEnquiryMessage = (form) => {
    const data = new FormData(form);
    const lines = [
      'Hello KANIFNATH CONSTRUCTION, I would like to request a quotation.',
      '',
      `Name: ${data.get('name') || '-'}`,
      `Company: ${data.get('company') || '-'}`,
      `Phone / WhatsApp: ${data.get('phone') || '-'}`,
      `Email: ${data.get('email') || '-'}`,
      `City / State: ${data.get('location') || '-'}`,
      `Product / Service: ${data.get('service') || '-'}`,
      `Quantity / Dimensions: ${data.get('quantity') || '-'}`,
      `Requirement: ${data.get('requirement') || '-'}`,
      `Delivery / Site Location: ${data.get('siteLocation') || '-'}`,
      `Message: ${data.get('message') || '-'}`,
      '', 'Please let me know what further details are required.'
    ];
    return lines.join('\n');
  };
  const setupForms = () => {
    $$('[data-enquiry-form]').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const feedback = $('[data-form-feedback]', form.parentElement) || $('[data-form-feedback]');
        if (!form.reportValidity()) return;
        const message = createEnquiryMessage(form);
        const textNode = $('[data-enquiry-preview]', feedback || document);
        if (feedback) { feedback.classList.add('show'); feedback.classList.remove('error'); }
        if (textNode) textNode.textContent = message;
        const copyBtn = $('[data-copy-enquiry]', feedback || document);
        if (copyBtn) copyBtn.onclick = async () => {
          try { await navigator.clipboard.writeText(message); toast('Enquiry copied. Paste it into WhatsApp or email.'); }
          catch (_) { toast('Select and copy the enquiry text shown below.'); }
        };
        // Replace any earlier status on repeat submissions so feedback never stacks or implies storage.
        if (feedback) feedback.querySelectorAll('.form-status-message').forEach(node => node.remove());
        if (number) {
          const opened = window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
          if (feedback) feedback.insertAdjacentHTML('afterbegin', opened
            ? '<div class="form-status-message"><strong>WhatsApp opened with your enquiry.</strong><p>Review the message in WhatsApp and press Send to submit it.</p></div>'
            : '<div class="form-status-message"><strong>Your enquiry is prepared, but the browser blocked the WhatsApp tab.</strong><p>Use the WhatsApp button or copy the message below. It has not been sent or saved by this website.</p></div>');
        } else {
          if (feedback) feedback.insertAdjacentHTML('afterbegin','<div class="form-status-message"><strong>Your enquiry is prepared, but not sent.</strong><p>To send it through WhatsApp, add the verified business number to <code>assets/js/config.js</code>. You can copy the message below in the meantime.</p></div>');
          toast('Your enquiry is ready to copy. It has not been sent or saved.');
        }
        if (feedback) feedback.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'nearest'});
      });
    });
  };
  const setupImageFallbacks = () => {
    $$('img[data-fallback]').forEach(img => {
      const useFallback = () => {
        if (img.dataset.fallback && !img.dataset.usedFallback) {
          img.dataset.usedFallback = '1';
          img.src = img.dataset.fallback;
        }
      };
      img.addEventListener('error', useFallback);
      // Some cached or blocked external images can fail before DOMContentLoaded.
      if (img.complete && img.naturalWidth === 0) useFallback();
    });
  };
  const setupBrandLogo = () => {
    $$('.brand-logo-image').forEach(img => {
      const placeholder = img.previousElementSibling;
      const showLogo = () => { if (img.naturalWidth > 0) { img.hidden = false; if (placeholder) placeholder.hidden = true; } };
      const showPlaceholder = () => { img.hidden = true; if (placeholder) placeholder.hidden = false; };
      img.addEventListener('load', showLogo);
      img.addEventListener('error', showPlaceholder);
      if (img.complete) { if (img.naturalWidth > 0) showLogo(); else showPlaceholder(); }
    });
  };
  const setupGalleryFilters = () => {
    const buttons = $$('[data-gallery-filter]');
    const cards = $$('[data-gallery-card]');
    if (!buttons.length || !cards.length) return;
    buttons.forEach(button => button.addEventListener('click', () => {
      const filter = button.dataset.galleryFilter || 'all';
      buttons.forEach(item => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      cards.forEach(card => { const tags = (card.dataset.galleryCard || '').split(/\s+/).filter(Boolean); card.hidden = filter !== 'all' && !tags.includes(filter); });
      const status = $('#gallery-results');
      if (status) { const count = cards.filter(card => !card.hidden).length; status.textContent = `${count} illustrative ${count === 1 ? 'entry' : 'entries'} visible. No entries are verified company projects.`; }
    }));
  };

  const setupGalleryLightbox = () => {
    const dialog = $('#gallery-lightbox');
    if (!dialog || typeof dialog.showModal !== 'function') return;
    const image = $('[data-lightbox-image]', dialog);
    const title = $('#lightbox-title', dialog);
    const description = $('#lightbox-description', dialog);
    const closeBtn = $('[data-lightbox-close]', dialog);
    const prevBtn = $('[data-lightbox-prev]', dialog);
    const nextBtn = $('[data-lightbox-next]', dialog);
    let currentIndex = 0;
    let currentItems = [];
    const visibleCards = () => $$('.project-card[data-gallery-card]').filter(card => !card.hidden);
    const renderItem = () => {
      const card = currentItems[currentIndex];
      if (!card) return;
      const original = $('img', card);
      const heading = $('h3', card);
      const copy = $('p', card);
      image.src = original ? original.currentSrc || original.src : '';
      image.alt = original ? original.alt : '';
      image.width = 1200; image.height = 720;
      title.textContent = heading ? heading.textContent.trim() : 'Gallery visual';
      description.textContent = copy ? copy.textContent.trim() : '';
      prevBtn.disabled = currentItems.length < 2;
      nextBtn.disabled = currentItems.length < 2;
    };
    const openFrom = button => {
      currentItems = visibleCards();
      currentIndex = Math.max(0, currentItems.indexOf(button.closest('.project-card')));
      renderItem();
      dialog.showModal();
      closeBtn.focus();
    };
    $$('[data-lightbox-open]').forEach(button => button.addEventListener('click', () => openFrom(button)));
    closeBtn.addEventListener('click', () => dialog.close());
    prevBtn.addEventListener('click', () => { if (!currentItems.length) return; currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length; renderItem(); });
    nextBtn.addEventListener('click', () => { if (!currentItems.length) return; currentIndex = (currentIndex + 1) % currentItems.length; renderItem(); });
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('keydown', event => {
      if (!dialog.open) return;
      if (event.key === 'ArrowLeft') { event.preventDefault(); prevBtn.click(); }
      if (event.key === 'ArrowRight') { event.preventDefault(); nextBtn.click(); }
    });
  };
  const setupYear = () => { $$('[data-current-year]').forEach(el => el.textContent = new Date().getFullYear()); };
  document.addEventListener('DOMContentLoaded', () => { setupMenu(); setContactLinks(); setupForms(); setupImageFallbacks(); setupBrandLogo(); setupGalleryFilters(); setupGalleryLightbox(); setupYear(); document.documentElement.classList.add('reveal-ready'); });
})();
