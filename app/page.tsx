"use client";

import Script from 'next/script';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pulse Digital — We grow products that matter</title>
        <meta name="description" content="Pulse Digital — Trusted growth partner for early-stage founders. We engineer acquisition, optimize conversion, and unlock compounding scale." />
        <link rel="stylesheet" href="/style.css" />
      </Head>

      {/* Embedded HTML structure */}
      <header id="navbar">
        <nav className="nav-inner container">
          <a href="#" className="logo">
            <svg width="32" height="32" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
              <path d="M390 370 C330 310 310 420 370 470 C430 520 500 530 540 490 C600 440 580 340 510 320 C480 310 440 330 390 370Z" fill="#22c55e"/>
              <path d="M540 490 C580 540 630 610 590 670 C560 710 500 700 470 660 C430 610 450 540 510 510 C520 505 530 496 540 490Z" fill="#22c55e"/>
              <path d="M510 320 C570 300 650 320 680 380 C710 440 680 510 630 540 C600 555 570 550 548 535 C580 510 600 470 580 430 C565 400 538 378 510 320Z" fill="#22c55e"/>
            </svg>
            <span className="logo-wordmark">Pulse<span className="logo-accent">Digital</span></span>
          </a>
          <ul className="nav-links" id="nav-links">
            <li><a href="#services">What We Do</a></li>
            <li><a href="#process">How We Work</a></li>
            <li><a href="#impact">Impact</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-actions">
            <button id="theme-toggle" className="theme-toggle" aria-label="Toggle dark/light mode">
              <span className="toggle-icon sun">☀️</span>
              <span className="toggle-icon moon">🌙</span>
            </button>
            <button className="btn btn-primary open-booking" id="nav-book-call">Book a Call</button>
            <button className="hamburger" id="hamburger" aria-label="Open menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-bg-grid"></div>
          <div className="hero-glow"></div>
          <div className="container hero-content">
            <h1 className="hero-headline">
              We grow products<br />
              <span className="headline-solid">that matter.</span>
            </h1>
            <p className="hero-sub">
              Pulse Digital is a trusted growth partner for early-stage founders. We engineer acquisition, optimize conversion, and unlock compounding scale.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary btn-lg open-booking" id="hero-cta-book">Book a Call</button>
              <a href="#impact" className="btn btn-ghost btn-lg" id="hero-cta-work">See Our Work →</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>3.2x</strong>
                <span>Avg. MRR growth</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <strong>10+</strong>
                <span>Products scaled</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <strong>30K+</strong>
                <span>Customers acquired</span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust" id="trust">
          <div className="container">
            <p className="trust-label">Trusted by teams building the future</p>
            <div className="trust-logos">
              <div className="trust-logo">Kora Tech</div>
              <div className="trust-logo">Zendro Holding</div>
              <div className="trust-logo">Habeshlingo</div>
              <div className="trust-logo">Buna Association</div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <div className="section-header">
              <h2>What We Do</h2>
              <p className="section-sub">We don't do everything. We do the things that move numbers — and we do them well.</p>
            </div>
            <div className="services-grid">
              <div className="service-card featured" id="service-growth-engineering">
                <h3>Growth Engineering</h3>
                <p>We build growth loops and automation systems that scale without adding headcount. Structured, repeatable, measurable.</p>
                <span className="service-tag">Core Offer</span>
              </div>
              <div className="service-card" id="service-cro">
                <h3>Conversion Rate Optimization</h3>
                <p>More traffic is worthless if it doesn't convert. We find the leaks and fix them — with data, not assumptions.</p>
              </div>
              <div className="service-card" id="service-analytics">
                <h3>Product Analytics</h3>
                <p>Know exactly how users move through your product. We set up tracking, build dashboards, and surface insights that matter.</p>
              </div>
              <div className="service-card" id="service-seo">
                <h3>SEO and Content Systems</h3>
                <p>Long-term organic growth built on content that ranks and earns trust — not just keyword stuffing.</p>
              </div>
              <div className="service-card" id="service-performance">
                <h3>Performance Marketing</h3>
                <p>Paid acquisition that pays off. We manage budgets tightly, test fast, and scale what works.</p>
              </div>
              <div className="service-card" id="service-tech-seo">
                <h3>Technical SEO</h3>
                <p>Site speed, crawlability, structured data — the foundational work that makes everything else perform better.</p>
              </div>
              <div className="service-card featured" id="service-digital-marketing">
                <h3>Digital Marketing</h3>
                <p>Coordinated campaigns across the right channels. Consistent messaging, clear goals, tracked results.</p>
                <span className="service-tag">Core Offer</span>
              </div>
              <div className="service-card" id="service-social">
                <h3>Social Media Management</h3>
                <p>Presence that builds trust over time. We create content, manage channels, and grow audiences that actually care.</p>
              </div>
              <div className="service-card" id="service-brand">
                <div className="service-icon">✦</div>
                <h3>Brand Creation</h3>
                <p>Identity, voice, positioning — built from scratch or refined. A brand that's hard to ignore is worth building right.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="process" id="process">
          <div className="container">
            <div className="section-header">
              <h2>How We Work</h2>
              <p className="section-sub">Three phases. No bloat. We move fast and stay focused.</p>
            </div>
            <div className="process-steps">
              <div className="process-step" id="step-diagnose">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Diagnose</h3>
                  <p>We start by understanding where your product actually stands — not where you think it does. We audit your funnel, traffic, conversion data, and positioning to find the real opportunities.</p>
                  <ul className="step-list">
                    <li>Funnel and analytics audit</li>
                    <li>Competitor landscape review</li>
                    <li>Growth opportunity mapping</li>
                  </ul>
                </div>
              </div>
              <div className="process-connector"></div>
              <div className="process-step" id="step-build">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Build</h3>
                  <p>We design the systems, campaigns, and infrastructure needed to grow — then execute with speed and precision. No fluff, no filler projects.</p>
                  <ul className="step-list">
                    <li>Growth systems setup</li>
                    <li>Campaign architecture and launch</li>
                    <li>Conversion optimization</li>
                  </ul>
                </div>
              </div>
              <div className="process-connector"></div>
              <div className="process-step" id="step-scale">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>Scale</h3>
                  <p>Once what's working is clear, we double down. We optimize, expand, and compound results over time — keeping your growth on an upward trajectory.</p>
                  <ul className="step-list">
                    <li>Performance tracking and iteration</li>
                    <li>Channel expansion</li>
                    <li>Monthly growth reviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="impact" id="impact">
          <div className="impact-bg"></div>
          <div className="container">
            <div className="section-header">
              <h2>Impact</h2>
              <p className="section-sub">Numbers we're proud of.</p>
            </div>
            <div className="impact-metrics">
              <div className="metric-card" id="metric-mrr">
                <div className="metric-value">3.2x</div>
                <div className="metric-label">Average MRR growth across clients</div>
                <div className="metric-desc">Not projected — actual revenue growth, tracked monthly.</div>
              </div>
              <div className="metric-card" id="metric-products">
                <div className="metric-value">10+</div>
                <div className="metric-label">SaaS products scaled</div>
                <div className="metric-desc">From early traction to meaningful scale, across multiple verticals.</div>
              </div>
              <div className="metric-card" id="metric-customers">
                <div className="metric-value">30K+</div>
                <div className="metric-label">Customers acquired</div>
                <div className="metric-desc">Real users, real accounts — acquired through systems we built.</div>
              </div>
            </div>

            <div className="testimonials" id="testimonials">
              <h3 className="testimonials-heading">What our clients say</h3>
              <div className="testimonials-grid">
                <div className="testimonial-card" id="testimonial-kora">
                  <div className="testimonial-quote">"</div>
                  <p>PulseLab tripled our trial to paid conversion in 6 weeks. They don't just consult — they build.</p>
                  <div className="testimonial-author">
                    <div className="author-avatar" style={{background: "linear-gradient(135deg, #16a34a, #22c55e)"}}>YM</div>
                    <div>
                      <strong>Yoseph Masresha</strong>
                      <span>Founder, Kora Tech</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card" id="testimonial-zendro">
                  <div className="testimonial-quote">"</div>
                  <p>The SEO infrastructure they set up is still compounding 8 months later. ROI is extraordinary.</p>
                  <div className="testimonial-author">
                    <div className="author-avatar" style={{background: "linear-gradient(135deg, #15803d, #4ade80)"}}>EM</div>
                    <div>
                      <strong>Elsabeth M.</strong>
                      <span>CEO, Zendro Holdings</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card" id="testimonial-devtools">
                  <div className="testimonial-quote">"</div>
                  <p>Finally a growth partner that understands product. They think in systems, not campaigns.</p>
                  <div className="testimonial-author">
                    <div className="author-avatar" style={{background: "linear-gradient(135deg, #166534, #86efac)"}}>ND</div>
                    <div>
                      <strong>Nahom D.</strong>
                      <span>Co-Founder, DevTools Startup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section" id="cta">
          <div className="cta-glow"></div>
          <div className="container">
            <div className="cta-inner">
              <h2>Ready to scale<br /><span className="headline-solid">your product?</span></h2>
              <p>If you're building something real and want a team that treats growth like engineering — let's talk. No pitch decks. Just a direct conversation about what's possible.</p>
              <button className="btn btn-primary btn-xl open-booking" id="cta-book-call">Book a Call</button>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <div className="section-header">
              <h2>Let's talk.</h2>
              <p className="section-sub">Pick the channel that works best for you.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-method" id="contact-phone">
                <div className="contact-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="contact-label">Phone</div>
                <a href="tel:0922463636" className="contact-value">0922 463 636</a>
              </div>
              <div className="contact-method" id="contact-telegram">
                <div className="contact-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 7.27l-1.68 7.92c-.125.558-.455.695-.921.432l-2.55-1.879-1.23 1.183c-.136.136-.25.25-.512.25l.182-2.59 4.7-4.248c.204-.182-.044-.283-.317-.101l-5.81 3.66-2.502-.781c-.544-.17-.554-.544.113-.805l9.765-3.765c.453-.164.85.11.762.723z" fill="#22c55e"/></svg>
                </div>
                <div className="contact-label">Telegram</div>
                <a href="https://t.me/pulsedigitals" target="_blank" rel="noopener" className="contact-value">@pulsedigitals</a>
              </div>
              <div className="contact-method" id="contact-email">
                <div className="contact-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="contact-label">Email</div>
                <a href="mailto:support@pulslabs.tech" className="contact-value">support@pulslabs.tech</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#" className="logo">
            <svg width="28" height="28" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
              <path d="M390 370 C330 310 310 420 370 470 C430 520 500 530 540 490 C600 440 580 340 510 320 C480 310 440 330 390 370Z" fill="#22c55e"/>
              <path d="M540 490 C580 540 630 610 590 670 C560 710 500 700 470 660 C430 610 450 540 510 510 C520 505 530 496 540 490Z" fill="#22c55e"/>
              <path d="M510 320 C570 300 650 320 680 380 C710 440 680 510 630 540 C600 555 570 550 548 535 C580 510 600 470 580 430 C565 400 538 378 510 320Z" fill="#22c55e"/>
            </svg>
            <span className="logo-wordmark">Pulse<span className="logo-accent">Digital</span></span>
          </a>
          <p className="footer-copy">© 2026 Zendro. All rights reserved.</p>
          <div className="footer-right">
            <nav className="footer-nav">
              <a href="#services">What We Do</a>
              <a href="#process">How We Work</a>
              <a href="#impact">Impact</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="LinkedIn" id="footer-linkedin">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/></svg>
              </a>
              <a href="https://wa.me/0922463636" className="social-icon" aria-label="WhatsApp" id="footer-whatsapp" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.977-1.41A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-1.36 14.38c-2.81-1.37-4.64-4.17-4.78-4.37-.14-.2-1.14-1.52-1.14-2.9 0-1.38.72-2.06 1-2.35.27-.28.59-.35.79-.35h.56c.18 0 .43.07.67.52.25.47.85 2.07.93 2.22.08.14.13.31.03.5-.1.18-.15.3-.3.47-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.28.14.44.12.61-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.15 1.34-.23.66-1.33 1.26-1.83 1.34-.5.08-1.13.11-1.82-.23z" fill="currentColor"/></svg>
              </a>
              <a href="https://t.me/pulsedigitals" className="social-icon" aria-label="Telegram" id="footer-telegram" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="modal-overlay" id="booking-modal" role="dialog" aria-modal="true" aria-label="Book a Call">
        <div className="modal-box">
          <button className="modal-close" id="modal-close" aria-label="Close">&times;</button>
          <div className="modal-steps">
            <div className="modal-step active" id="step-ind-1">
              <span className="step-dot">1</span>
              <span className="step-name">Your Info</span>
            </div>
            <div className="modal-step-line"></div>
            <div className="modal-step" id="step-ind-2">
              <span className="step-dot">2</span>
              <span className="step-name">Your Product</span>
            </div>
          </div>

          <form id="booking-form" noValidate>
            <div className="form-page active" id="form-page-1">
              <h2 className="modal-title">Book a Call</h2>
              <p className="modal-subtitle">Tell us a bit about yourself and when you'd like to connect.</p>
              <div className="form-group">
                <label htmlFor="field-name">Full Name <span className="required">*</span></label>
                <input type="text" id="field-name" name="name" placeholder="Your full name" required autoComplete="name" />
              </div>
              <div className="form-group">
                <label htmlFor="field-email">Email Address <span className="required">*</span></label>
                <input type="email" id="field-email" name="email" placeholder="you@company.com" required autoComplete="email" />
              </div>
              <div className="form-group">
                <label htmlFor="field-phone">Phone Number <span className="optional">(Optional)</span></label>
                <input type="tel" id="field-phone" name="phone" placeholder="+251 9xx xxx xxx" autoComplete="tel" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="field-date">Preferred Date <span className="required">*</span></label>
                  <input type="date" id="field-date" name="date" required />
                </div>
                <div className="form-group">
                  <label htmlFor="field-time">Preferred Time <span className="required">*</span></label>
                  <select id="field-time" name="time" required defaultValue="">
                    <option value="" disabled>Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-primary btn-full" id="next-step">Continue →</button>
              </div>
            </div>

            <div className="form-page" id="form-page-2">
              <h2 className="modal-title">About Your Product</h2>
              <p className="modal-subtitle">Help us understand your situation before we get on a call.</p>
              <div className="form-group">
                <label htmlFor="field-company">Company Name <span className="required">*</span></label>
                <input type="text" id="field-company" name="company" placeholder="Your company or startup name" required />
              </div>
              <div className="form-group">
                <label htmlFor="field-building">What are you building? <span className="required">*</span></label>
                <input type="text" id="field-building" name="building" placeholder="e.g. B2B SaaS platform, mobile app, marketplace..." required />
              </div>
              <div className="form-group">
                <label>What do you need help with? <span className="required">*</span></label>
                <div className="checkbox-grid" id="help-options">
                  <label className="checkbox-item"><input type="checkbox" name="help" value="growth_engineering" /><span>Growth Engineering</span></label>
                  <label className="checkbox-item"><input type="checkbox" name="help" value="cro" /><span>Conversion Optimization</span></label>
                  <label className="checkbox-item"><input type="checkbox" name="help" value="seo" /><span>SEO and Content</span></label>
                  <label className="checkbox-item"><input type="checkbox" name="help" value="performance" /><span>Performance Marketing</span></label>
                  <label className="checkbox-item"><input type="checkbox" name="help" value="analytics" /><span>Product Analytics</span></label>
                  <label className="checkbox-item"><input type="checkbox" name="help" value="social" /><span>Social Media</span></label>
                  <label className="checkbox-item"><input type="checkbox" name="help" value="brand" /><span>Brand Creation</span></label>
                  <label className="checkbox-item"><input type="checkbox" name="help" value="digital_marketing" /><span>Digital Marketing</span></label>
                  <label className="checkbox-item"><input type="checkbox" name="help" value="strategy" /><span>Growth Strategy</span></label>
                  <label className="checkbox-item"><input type="checkbox" name="help" value="other_help" /><span>Not sure yet</span></label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="field-website">Website or Product Link <span className="optional">(Optional)</span></label>
                <input type="url" id="field-website" name="website" placeholder="https://yourproduct.com" />
              </div>
              <div className="form-group">
                <label htmlFor="field-stage">Current Growth Stage <span className="required">*</span></label>
                <select id="field-stage" name="stage" required defaultValue="">
                  <option value="" disabled>Where are you right now?</option>
                  <option value="idea">Idea / Pre-launch</option>
                  <option value="mvp">MVP launched, zero or low users</option>
                  <option value="early">Early traction (under 1K users)</option>
                  <option value="growing">Growing (1K–10K users)</option>
                  <option value="scaling">Scaling (10K+ users)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="field-challenge">Biggest challenge right now <span className="required">*</span></label>
                <textarea id="field-challenge" name="challenge" rows={3} placeholder="Be specific — what's blocking your growth?" required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="field-budget">Approximate Monthly Budget <span className="optional">(Optional)</span></label>
                <select id="field-budget" name="budget" defaultValue="">
                  <option value="" disabled>Select a range</option>
                  <option value="under500">Under $500</option>
                  <option value="500-1500">$500 – $1,500</option>
                  <option value="1500-5000">$1,500 – $5,000</option>
                  <option value="5000-15000">$5,000 – $15,000</option>
                  <option value="15000+">$15,000+</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="field-heard">How did you hear about us? <span className="optional">(Optional)</span></label>
                <select id="field-heard" name="heard" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option value="referral">Referral</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="twitter">Twitter / X</option>
                  <option value="google">Google Search</option>
                  <option value="telegram">Telegram</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-actions form-actions-split">
                <button type="button" className="btn btn-ghost" id="prev-step">← Back</button>
                <button type="submit" className="btn btn-primary" id="submit-booking">Submit Request</button>
              </div>
            </div>

            <div className="form-page" id="form-success">
              <div className="success-content">
                <div className="success-icon">
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26" cy="26" r="25" stroke="#22c55e" strokeWidth="2"/>
                    <path d="M15 26l8 8 14-16" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2>You're on the list.</h2>
                <p>We'll review your request and reach out within 24 hours to confirm the call. Keep an eye on your inbox.</p>
                <button type="button" className="btn btn-primary" id="close-success">Done</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Script src="/test/main.js" />
    </>
  );
}
