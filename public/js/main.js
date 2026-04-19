/* ============================================================
   DEVFORGE – main.js
   Shared across: index, about, services, portfolio, contact
   ============================================================ */

// ── MOBILE DRAWER ──────────────────────────────────────────
window.toggleDrawer = function () {
  var drawer  = document.getElementById('mobDrawer');
  var overlay = document.getElementById('mobOverlay');
  var btn     = document.getElementById('hamburger');
  if (!drawer || !overlay || !btn) return;
  var isOpen = drawer.classList.contains('open');
  if (isOpen) {
    window.closeDrawer();
  } else {
    drawer.classList.add('open');
    overlay.classList.add('open');
    btn.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeDrawer = function () {
  var drawer  = document.getElementById('mobDrawer');
  var overlay = document.getElementById('mobOverlay');
  var btn     = document.getElementById('hamburger');
  if (!drawer) return;
  drawer.classList.remove('open');
  overlay.classList.remove('open');
  if (btn) btn.classList.remove('open');
  document.body.style.overflow = '';
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') window.closeDrawer();
});

// ── SCROLL REVEAL ───────────────────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── CARD STAGGER DELAYS (index) ─────────────────────────────
document.querySelectorAll('.pc, .sc, .tc').forEach((c, i) => {
  c.style.transitionDelay = `${(i % 3) * 0.08}s`;
});

// ── PORTFOLIO FILTER (index + portfolio page) ───────────────
window.filterPort = function (cat, btn) {
  document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const grid = document.getElementById('pg');
  const cards = Array.from(document.querySelectorAll('.pc'));
  let visible = 0;

  // Step 1: Record starting positions (before reorder)
  const startRects = new Map();
  cards.forEach(card => startRects.set(card, card.getBoundingClientRect()));

  // Step 2: Split into matched and unmatched
  const matched = [];
  const unmatched = [];
  cards.forEach(card => {
    const match = cat === 'all' || card.dataset.cat === cat;
    if (match) { matched.push(card); visible++; }
    else { unmatched.push(card); }
  });

  // Step 3: Re-append matched first, then unmatched (instant DOM reorder)
  [...matched, ...unmatched].forEach(card => grid.appendChild(card));

  // Step 4: Record end positions and FLIP
  cards.forEach(card => {
    const start = startRects.get(card);
    const end = card.getBoundingClientRect();
    const dx = start.left - end.left;
    const dy = start.top - end.top;

    // Snap back to start position instantly
    card.style.transition = 'none';
    card.style.transform = `translate(${dx}px, ${dy}px)`;
    card.style.opacity = card.style.opacity || '1';
  });

  // Step 5: Animate to final position
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      matched.forEach(card => {
        card.style.transition = 'transform .45s cubic-bezier(.4,0,.2,1), opacity .35s ease';
        card.style.transform = '';
        card.style.opacity = '1';
        card.style.pointerEvents = 'auto';
      });
      unmatched.forEach(card => {
        card.style.transition = 'transform .45s cubic-bezier(.4,0,.2,1), opacity .35s ease';
        card.style.transform = '';
        card.style.opacity = '0.15';
        card.style.pointerEvents = 'none';
      });
    });
  });

  // Portfolio page: update count + empty state
  const countEl = document.getElementById('countNum');
  const emptyEl = document.getElementById('emptyState');
  if (countEl) countEl.textContent = visible;
  if (emptyEl) emptyEl.style.display = visible === 0 ? 'block' : 'none';
};

// ── FAQ ACCORDION (services page) ──────────────────────────
window.toggleFaq = function (el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
};

// ── CONTACT FORM (contact page) ─────────────────────────────
window.submitForm = function () {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';
};

// ── EMAIL QUICK-CONTACT (index page) ───────────────────────
window.handleContact = function () {
  const input = document.getElementById('emailInput');
  const msg   = document.getElementById('successMsg');
  if (input && msg && input.value && input.value.includes('@')) {
    msg.style.display = 'block';
    input.value = '';
  }
};

// ── NAV SCROLL HIGHLIGHT (index page) ───────────────────────
(function () {
  const navLinks = document.querySelectorAll('nav ul li a');
  if (!navLinks.length) return;
  window.addEventListener('scroll', () => {
    let cur = '';
    document.querySelectorAll('[id]').forEach(s => {
      if (window.scrollY >= s.offsetTop - 140) cur = s.id;
    });
    navLinks.forEach(a => {
      const active = a.getAttribute('href') === `#${cur}`;
      a.style.fontWeight = active ? '700' : '500';
      a.style.color = active ? '#000' : '';
    });
  });
})();
