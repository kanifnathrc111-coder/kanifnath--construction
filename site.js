/* KANIFNATH CONSTRUCTION - site behaviour (vanilla JavaScript, no dependencies). */
(() => {
  'use strict';
  const cfg = window.KANIFNATH_CONFIG || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const digits = (v) => (v || '').toString().replace(/\D/g, '');
  const reduceMotion = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- contact configuration ---------- */
  const waNumber = digits(cfg.whatsappNumber);
  const waValid = waNumber.length >= 11 && waNumber.length <= 15; // country code + number
  const phoneRaw = (cfg.phoneE164 || cfg.phoneDisplay || '').trim();
  const phoneTel = phoneRaw.replace(/[^+\d]/g, '');
  const phoneValid = phoneTel.replace(/\D/g, '').length >= 8;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((cfg.email || '').trim());
  const waUrl = (msg) => `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;

  const toast = (message) => {
    let el = $('#site-toast');
    if (!el) { el = document.createElement('div'); el.id = 'site-toast'; el.className = 'toast'; el.setAttribute('role', 'status'); el.setAttribute('aria-live', 'polite'); document.body.appendChild(el); }
    el.textContent = message; el.classList.add('show');
    clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('show'), 5000);
  };

  const unhideWithParent = (el) => { el.hidden = false; const li = el.closest('li[hidden]'); if (li) li.hidden = false; };

  const setupContact = () => {
    if (cfg.whatsappNumber && !waValid) console.warn('KANIFNATH_CONFIG.whatsappNumber looks invalid. Use country code + number, digits only (e.g. 91XXXXXXXXXX).');
    $$('[data-whatsapp-cta]').forEach((a) => {
      if (!waValid) return; // stays hidden - no dead button
      a.href = waUrl(a.dataset.message || 'Hello KANIFNATH CONSTRUCTION, I would like to enquire about your products and services.');
      a.target = '_blank'; a.rel = 'noopener noreferrer'; unhideWithParent(a);
    });
    $$('[data-phone-link]').forEach((a) => {
      if (!phoneValid) return;
      a.href = `tel:${phoneTel}`; a.textContent = cfg.phoneDisplay || phoneRaw; unhideWithParent(a);
    });
    $$('[data-email-link]').forEach((a) => {
      if (!emailValid) return;
      a.href = `mailto:${cfg.email.trim()}`; a.textContent = cfg.email.trim(); unhideWithParent(a);
    });
    if (cfg.baseLocation) {
      $$('[data-base-location]').forEach((el) => { el.textContent = cfg.baseLocation; });
      $$('[data-base-location-wrap]').forEach((el) => { el.hidden = false; });
    }
    if (cfg.businessHours) {
      $$('[data-business-hours]').forEach((el) => { el.textContent = cfg.businessHours; });
      $$('[data-hours-wrap]').forEach((el) => { el.hidden = false; });
    }
    if (waValid || phoneValid || emailValid) $$('[data-contact-fallback]').forEach((el) => { el.hidden = true; });
  };

  const setupLogo = () => {
    /* The original logo is shown by default. Set logoPath in config.js to swap in a better file (aspect ratio is kept). */
    if (!cfg.logoPath) return;
    $$('.brand-logo-image').forEach((img) => { img.removeAttribute('width'); img.removeAttribute('height'); img.src = cfg.logoPath; });
  };

  /* ---------- navigation ---------- */
  const setupMenu = () => {
    const toggle = $('#menu-toggle'); const nav = $('#main-nav');
    if (!toggle || !nav) return;
    const closeDropdowns = (except) => $$('.nav-item.open', nav).forEach((i) => { if (i !== except) { i.classList.remove('open'); const b = $('.dd-toggle', i); if (b) b.setAttribute('aria-expanded', 'false'); } });
    const closeMenu = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open menu'); closeDropdowns(); };
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    $$('.dd-toggle', nav).forEach((btn) => btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = btn.closest('.nav-item'); const open = !item.classList.contains('open');
      closeDropdowns(item); item.classList.toggle('open', open); btn.setAttribute('aria-expanded', String(open));
    }));
    $$('a', nav).forEach((a) => a.addEventListener('click', closeMenu));
    document.addEventListener('click', (e) => { if (!nav.contains(e.target) && !toggle.contains(e.target)) { closeDropdowns(); } });
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      const anyOpen = nav.classList.contains('open') || $('.nav-item.open', nav);
      if (anyOpen) { const focusBtn = $('.nav-item.open .dd-toggle', nav); closeMenu(); (focusBtn || toggle).focus(); }
    });
  };

  /* ---------- enquiry forms ---------- */
  const LABELS = { name: 'Name', company: 'Company', phone: 'Phone / WhatsApp', email: 'Email', location: 'City / State', service: 'Product / Service', quantity: 'Quantity / Dimensions', requirement: 'Requirement type', siteLocation: 'Delivery / Site Location', message: 'Details' };
  const buildMessage = (form) => {
    const d = new FormData(form); const lines = ['Hello KANIFNATH CONSTRUCTION, I would like to request a quotation.', ''];
    Object.keys(LABELS).forEach((k) => { const v = (d.get(k) || '').toString().trim(); if (v) lines.push(`${LABELS[k]}: ${v}`); });
    lines.push('', 'Please let me know what further details are required.');
    return lines.join('\n');
  };
  const showError = (field) => {
    field.setAttribute('aria-invalid', 'true');
    const id = `${field.id}-error`; let err = document.getElementById(id);
    if (!err) { err = document.createElement('span'); err.id = id; err.className = 'field-error'; err.setAttribute('role', 'alert'); field.insertAdjacentElement('afterend', err); }
    err.textContent = field.validity.patternMismatch ? (field.title || 'Please check this value.') : field.validationMessage;
    field.setAttribute('aria-describedby', id);
  };
  const setupForms = () => {
    $$('[data-enquiry-form]').forEach((form) => {
      const feedback = $('[data-form-feedback]', form.parentElement);
      $$('input,select,textarea', form).forEach((f) => f.addEventListener('input', () => {
        if (f.getAttribute('aria-invalid') === 'true' && f.checkValidity()) { f.removeAttribute('aria-invalid'); const e = document.getElementById(`${f.id}-error`); if (e) e.remove(); }
      }));
      form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        $$('.field-error', form).forEach((e) => e.remove());
        $$('[aria-invalid]', form).forEach((f) => f.removeAttribute('aria-invalid'));
        const invalid = $$('input,select,textarea', form).filter((f) => !f.checkValidity());
        if (invalid.length) { invalid.forEach(showError); invalid[0].focus(); toast('Please complete the highlighted fields.'); return; }
        if (!feedback) return;
        const message = buildMessage(form);
        const status = $('[data-form-status]', feedback); const preview = $('[data-enquiry-preview]', feedback);
        const waBtn = $('[data-form-whatsapp]', feedback); const mailBtn = $('[data-form-email]', feedback); const copyBtn = $('[data-copy-enquiry]', feedback);
        preview.textContent = message; feedback.classList.add('show'); feedback.classList.remove('error');
        if (waBtn) { waBtn.hidden = !waValid; if (waValid) { waBtn.href = waUrl(message); waBtn.target = '_blank'; waBtn.rel = 'noopener noreferrer'; } }
        if (mailBtn) { mailBtn.hidden = !emailValid; if (emailValid) mailBtn.href = `mailto:${cfg.email.trim()}?subject=${encodeURIComponent('Quotation enquiry')}&body=${encodeURIComponent(message)}`; }
        if (copyBtn) copyBtn.onclick = async () => { try { await navigator.clipboard.writeText(message); toast('Enquiry copied to clipboard.'); } catch (_) { preview.focus(); toast('Select and copy the text shown.'); } };
        let html;
        if (waValid) {
          const w = window.open(waUrl(message), '_blank'); if (w) { try { w.opener = null; } catch (_) { } }
          html = w !== null
            ? '<strong>WhatsApp opened with your enquiry.</strong><p>It is sent only when you press Send in WhatsApp. This website has not sent or saved anything.</p>'
            : '<strong>Your enquiry is ready, but not sent.</strong><p>Your browser blocked the WhatsApp window. Use the button below, or copy the text.</p>';
        } else if (emailValid) {
          html = '<strong>Your enquiry is ready, but not sent.</strong><p>Use "Send by email" to open your email application, or copy the text. This website has not sent or saved anything.</p>';
        } else {
          html = '<strong>Your enquiry is ready, but not sent.</strong><p>Direct contact options are not yet available on this website. Copy the text below and send it to us when contact details are published on the <a href="contact.html">contact page</a>.</p>';
        }
        status.innerHTML = html;
        feedback.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'nearest' });
      });
    });
  };

  /* ---------- gallery ---------- */
  const setupGallery = () => {
    const grid = $('[data-gallery-grid]'); if (!grid) return;
    const filtersEl = $('[data-gallery-filters]'); const countEl = $('[data-gallery-count]');
    const data = window.KANIFNATH_GALLERY;
    if (!data) { grid.textContent = 'The gallery is temporarily unavailable.'; return; }
    const base = '';
    const cats = (data.categories || []).filter((c) => c.enabled !== false);
    const items = (data.items || []).filter((i) => i && i.file && cats.some((c) => c.slug === i.category));
    const catBy = Object.fromEntries(cats.map((c) => [c.slug, c]));
    const showSlots = new URLSearchParams(location.search).has('slots');
    const withItems = new Set(items.map((i) => i.category));
    const filterCats = cats.filter((c) => withItems.has(c.slug) || data.showPlaceholders !== false);
    let current = 'all'; let visible = [];

    const mk = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
    const escapeHtml = (s) => (s || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    const render = () => {
      grid.innerHTML = ''; visible = items.filter((i) => current === 'all' || i.category === current);
      visible.forEach((it, idx) => {
        const b = mk('button', 'g-item'); b.type = 'button'; b.dataset.idx = idx;
        b.setAttribute('aria-label', `Open photograph: ${it.title || catBy[it.category].title}`);
        const w = it.width || 1600; const h = it.height || 1200;
        b.innerHTML = `<span class="g-media"><img src="${base}${encodeURI(it.file)}" alt="${escapeHtml(it.alt || it.title || '')}" width="${w}" height="${h}" loading="${idx < 6 ? 'eager' : 'lazy'}" decoding="async"></span><span class="g-cap"><strong>${escapeHtml(it.title || catBy[it.category].title)}</strong><small>${escapeHtml(catBy[it.category].title)}</small></span>`;
        b.addEventListener('click', () => openLb(idx, b));
        grid.appendChild(b);
      });
      if (data.showPlaceholders !== false) {
        cats.filter((c) => !withItems.has(c.slug) && (current === 'all' || current === c.slug)).forEach((c) => {
          const p = mk('div', 'g-placeholder');
          p.innerHTML = `<span class="g-ph-icon" aria-hidden="true">&#9635;</span><strong>${escapeHtml(c.title)}</strong><small>Project photographs coming soon</small><a href="${c.service}">View ${escapeHtml(c.title)} page</a>${showSlots ? `<code>${c.slug}_description_001.jpg</code>` : ''}`;
          grid.appendChild(p);
        });
      }
      if (!visible.length && data.showPlaceholders === false) {
        const empty = mk('div', 'g-placeholder', '<span class="g-ph-icon" aria-hidden="true">&#9635;</span><strong>Project photographs coming soon</strong><small>Reference images for each type of work are shown below.</small>');
        empty.style.gridColumn = '1 / -1'; empty.style.aspectRatio = 'auto'; grid.appendChild(empty);
      }
      if (countEl) countEl.textContent = visible.length ? `${visible.length} photograph${visible.length === 1 ? '' : 's'}` : '';
    };

    if (filtersEl) {
      const all = mk('button', 'gallery-filter is-active', 'All'); all.type = 'button'; all.dataset.galleryFilter = 'all'; all.setAttribute('aria-pressed', 'true');
      filtersEl.appendChild(all);
      filterCats.forEach((c) => { const b = mk('button', 'gallery-filter', escapeHtml(c.title)); b.type = 'button'; b.dataset.galleryFilter = c.slug; b.setAttribute('aria-pressed', 'false'); filtersEl.appendChild(b); });
      filtersEl.addEventListener('click', (e) => {
        const b = e.target.closest('[data-gallery-filter]'); if (!b) return;
        current = b.dataset.galleryFilter;
        $$('[data-gallery-filter]', filtersEl).forEach((x) => { const on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', String(on)); });
        if (history.replaceState) history.replaceState(null, '', current === 'all' ? location.pathname + location.search : `#${current}`);
        render();
      });
      const hash = decodeURIComponent(location.hash.slice(1));
      const start = $$('[data-gallery-filter]', filtersEl).find((x) => x.dataset.galleryFilter === hash);
      if (start) { start.click(); } else { render(); }
    } else { render(); }

    /* lightbox */
    let lb, lbImg, lbCap, lbIdx = 0, lastFocus = null, touchX = null;
    const buildLb = () => {
      lb = mk('div', 'lightbox'); lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Photograph viewer'); lb.setAttribute('aria-hidden', 'true');
      lb.innerHTML = '<button type="button" class="lb-btn lb-close" aria-label="Close viewer">&times;</button><button type="button" class="lb-btn lb-prev" aria-label="Previous photograph">&#8249;</button><figure class="lb-figure"><img alt=""><figcaption class="lb-caption"></figcaption></figure><button type="button" class="lb-btn lb-next" aria-label="Next photograph">&#8250;</button>';
      document.body.appendChild(lb); lbImg = $('img', lb); lbCap = $('figcaption', lb);
      $('.lb-close', lb).addEventListener('click', closeLb);
      $('.lb-prev', lb).addEventListener('click', () => go(-1));
      $('.lb-next', lb).addEventListener('click', () => go(1));
      lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
      lb.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
      lb.addEventListener('touchend', (e) => { if (touchX === null) return; const dx = e.changedTouches[0].clientX - touchX; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); touchX = null; }, { passive: true });
      document.addEventListener('keydown', (e) => {
        if (!lb.classList.contains('open')) return;
        if (e.key === 'Escape') { e.preventDefault(); closeLb(); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
        else if (e.key === 'Tab') { const f = $$('button:not([hidden])', lb).concat($$('a', lb)); if (!f.length) return; const first = f[0], last = f[f.length - 1]; if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); } }
      });
    };
    const show = (i) => {
      const it = visible[i]; if (!it) return; lbIdx = i;
      lbImg.src = base + encodeURI(it.file); lbImg.alt = it.alt || it.title || '';
      const c = catBy[it.category];
      lbCap.innerHTML = `${escapeHtml(it.title || c.title)}${it.caption ? `<small>${escapeHtml(it.caption)}</small>` : ''}<small>${i + 1} / ${visible.length} &middot; ${escapeHtml(c.title)}</small><a class="lb-link" href="${c.service}">Related page: ${escapeHtml(c.title)}</a>`;
      const multi = visible.length > 1; $('.lb-prev', lb).hidden = !multi; $('.lb-next', lb).hidden = !multi;
      [i - 1, i + 1].forEach((n) => { if (visible[n]) { const pre = new Image(); pre.src = base + encodeURI(visible[n].file); } });
    };
    const go = (d) => { if (visible.length < 2) return; show((lbIdx + d + visible.length) % visible.length); };
    function openLb(i, trigger) { if (!lb) buildLb(); lastFocus = trigger || document.activeElement; show(i); lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); document.body.classList.add('lb-open'); $('.lb-close', lb).focus(); }
    function closeLb() { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); document.body.classList.remove('lb-open'); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
  };

  const setupYear = () => { $$('[data-current-year]').forEach((el) => { el.textContent = new Date().getFullYear(); }); };

  document.addEventListener('DOMContentLoaded', () => {
    setupContact(); setupLogo(); setupMenu(); setupForms(); setupGallery(); setupYear();
    document.documentElement.classList.add('reveal-ready');
  });
})();
