/* ── PULSE DIGITAL — MAIN JS v2 ── */

// ── THEME TOGGLE ──────────────────────────
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('pd-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('pd-theme', next);
});

// ── NAVBAR SCROLL ─────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ── HAMBURGER MENU ────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── SCROLL REVEAL ─────────────────────────
const revealEls = document.querySelectorAll(
  '.service-card, .process-step, .metric-card, .testimonial-card, .contact-method, .trust-logo, .section-header'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// Stagger delays
document.querySelectorAll('.service-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.05}s`;
});
document.querySelectorAll('.trust-logo').forEach((logo, i) => {
  logo.style.transitionDelay = `${i * 0.07}s`;
});

// ── COUNTER ANIMATION ─────────────────────
const metricCards = document.querySelectorAll('.metric-card');

function animateValue(el, target, suffix, isFloat) {
  const dur = 1800;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = eased * target;
    el.textContent = (isFloat ? val.toFixed(1) : Math.floor(val)) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const vEl = entry.target.querySelector('.metric-value');
    const text = vEl.textContent.trim();
    if (text.startsWith('3.2')) animateValue(vEl, 3.2, 'x', true);
    else if (text.startsWith('10')) animateValue(vEl, 10, '+', false);
    else if (text.startsWith('30')) {
      const dur = 1800, start = performance.now();
      const s = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        vEl.textContent = Math.floor(e * 30) + 'K+';
        if (p < 1) requestAnimationFrame(s);
      };
      requestAnimationFrame(s);
    }
    counterObserver.unobserve(entry.target);
  });
}, { threshold: 0.5 });

metricCards.forEach(c => counterObserver.observe(c));

// ── TILT EFFECT ───────────────────────────
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `translateY(-4px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ── CURSOR GLOW ───────────────────────────
const glow = document.createElement('div');
glow.style.cssText = `
  position:fixed;pointer-events:none;z-index:9999;
  width:320px;height:320px;border-radius:50%;
  background:radial-gradient(circle,rgba(34,197,94,0.05) 0%,transparent 70%);
  transform:translate(-50%,-50%);
  transition:left 0.2s ease,top 0.2s ease;
  will-change:left,top;
`;
document.body.appendChild(glow);
document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
}, { passive: true });

// ═══════════════════════════════════════════
// BOOKING MODAL
// ═══════════════════════════════════════════
const modal = document.getElementById('booking-modal');
const modalClose = document.getElementById('modal-close');
const nextBtn = document.getElementById('next-step');
const prevBtn = document.getElementById('prev-step');
const bookingForm = document.getElementById('booking-form');
const page1 = document.getElementById('form-page-1');
const page2 = document.getElementById('form-page-2');
const successPage = document.getElementById('form-success');
const stepInd1 = document.getElementById('step-ind-1');
const stepInd2 = document.getElementById('step-ind-2');
const stepLine = document.querySelector('.modal-step-line');
const closeSuccess = document.getElementById('close-success');

// Set min date to today
const dateField = document.getElementById('field-date');
const today = new Date().toISOString().split('T')[0];
if (dateField) dateField.setAttribute('min', today);

function openModal() {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  // reset to page 1
  showPage(1);
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function showPage(num) {
  page1.classList.remove('active');
  page2.classList.remove('active');
  successPage.classList.remove('active');

  stepInd1.classList.remove('active', 'completed');
  stepInd2.classList.remove('active', 'completed');
  stepLine.classList.remove('step-line-filled');

  if (num === 1) {
    page1.classList.add('active');
    stepInd1.classList.add('active');
  } else if (num === 2) {
    page2.classList.add('active');
    stepInd1.classList.add('completed');
    stepInd2.classList.add('active');
    stepLine.classList.add('step-line-filled');
    // Update step dot to checkmark
    stepInd1.querySelector('.step-dot').textContent = '✓';
  } else if (num === 3) {
    successPage.classList.add('active');
  }
}

// Open modal triggers
document.querySelectorAll('.open-booking').forEach(btn => {
  btn.addEventListener('click', openModal);
});

// Close
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
if (closeSuccess) closeSuccess.addEventListener('click', closeModal);

// Page 1 validation
function validatePage1() {
  const name = document.getElementById('field-name').value.trim();
  const email = document.getElementById('field-email').value.trim();
  const date = document.getElementById('field-date').value;
  const time = document.getElementById('field-time').value;

  if (!name) { shake('field-name'); return false; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { shake('field-email'); return false; }
  if (!date) { shake('field-date'); return false; }
  if (!time) { shake('field-time'); return false; }
  return true;
}

// Page 2 validation
function validatePage2() {
  const company = document.getElementById('field-company').value.trim();
  const building = document.getElementById('field-building').value.trim();
  const helpChecked = document.querySelectorAll('#help-options input:checked').length > 0;
  const stage = document.getElementById('field-stage').value;
  const challenge = document.getElementById('field-challenge').value.trim();

  if (!company) { shake('field-company'); return false; }
  if (!building) { shake('field-building'); return false; }
  if (!helpChecked) { shakeGroup('help-options'); return false; }
  if (!stage) { shake('field-stage'); return false; }
  if (!challenge) { shake('field-challenge'); return false; }
  return true;
}

function shake(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.borderColor = '#ef4444';
  el.style.animation = 'none';
  el.classList.add('shake');
  setTimeout(() => {
    el.classList.remove('shake');
    el.style.borderColor = '';
  }, 600);
  el.focus();
}

function shakeGroup(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('shake-group');
  setTimeout(() => el.classList.remove('shake-group'), 600);
}

// Next step
nextBtn.addEventListener('click', () => {
  if (validatePage1()) {
    showPage(2);
    modal.querySelector('.modal-box').scrollTop = 0;
  }
});

// Prev step
prevBtn.addEventListener('click', () => {
  stepInd1.querySelector('.step-dot').textContent = '1';
  showPage(1);
  modal.querySelector('.modal-box').scrollTop = 0;
});

// Submit
bookingForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validatePage2()) return;

  const submitBtn = document.getElementById('submit-booking');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting…';

  // Collect all form data
  const helpValues = Array.from(
    document.querySelectorAll('#help-options input:checked')
  ).map(el => el.value).join(', ');

  const payload = {
    name:      document.getElementById('field-name').value.trim(),
    email:     document.getElementById('field-email').value.trim(),
    phone:     document.getElementById('field-phone').value.trim(),
    date:      document.getElementById('field-date').value,
    time:      document.getElementById('field-time').value,
    company:   document.getElementById('field-company').value.trim(),
    building:  document.getElementById('field-building').value.trim(),
    help:      helpValues,
    website:   document.getElementById('field-website').value.trim(),
    stage:     document.getElementById('field-stage').value,
    challenge: document.getElementById('field-challenge').value.trim(),
    budget:    document.getElementById('field-budget').value,
    heard:     document.getElementById('field-heard').value,
  };

  try {
    const res = await fetch('/api/book-call', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error('Server error');

    showPage(3);
    modal.querySelector('.modal-box').scrollTop = 0;
    bookingForm.reset();
  } catch (err) {
    console.error('Booking failed:', err);
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Request';
    // Show a friendly inline error
    let errMsg = document.getElementById('booking-error');
    if (!errMsg) {
      errMsg = document.createElement('p');
      errMsg.id = 'booking-error';
      errMsg.style.cssText = 'color:#ef4444;font-size:0.875rem;margin-top:0.5rem;text-align:center;';
      submitBtn.parentElement.appendChild(errMsg);
    }
    errMsg.textContent = 'Something went wrong. Please try again or contact us directly.';
    setTimeout(() => { if (errMsg) errMsg.textContent = ''; }, 5000);
  }
});

// Shake animation via CSS
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
@keyframes shakeAnim {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}
.shake { animation: shakeAnim 0.5s ease !important; }
.shake-group { animation: shakeAnim 0.5s ease !important; outline: 2px solid #ef4444; border-radius: 8px; }
`;
document.head.appendChild(shakeStyle);
