"use client";

import { AcquisitionIcon, ActivationIcon, ArrowLeft, ArrowRight, LogoSVG, PlusIcon, QuoteIcon, RetentionIcon, TriangleGrid } from "@/constants";
import React, { useState, useId } from "react";
import { ClientFlowProvider, useClientFlow } from "@/components/ClientFlowContext";
import { ClientFlowModal } from "@/components/ClientFlowModal";

/* ============================================
   SVG Components
   ============================================ */

/* ============================================
   Section Components
   ============================================ */

function Navbar() {
  const { openModal } = useClientFlow();
  return (
    <nav className="pd-navbar">
      <div className="pd-nav-inner">
        <div className="pd-logo">
          <LogoSVG size={48} />
          <span className="pd-logo-text">
            <span className="pd-logo-white">Pulse </span>
            <span className="pd-logo-green">Digital</span>
          </span>
        </div>
        <div className="pd-nav-links">
          <a href="#" className="pd-nav-link pd-nav-link--active">Home</a>
          <a href="#" className="pd-nav-link">Systems</a>
          <a href="#" className="pd-nav-link">Experiments</a>
          <a href="#" className="pd-nav-link">Insights</a>
          <a href="#" className="pd-nav-link">About</a>
          <a href="#" className="pd-nav-link">Contact</a>
        </div>
        <button className="pd-btn-outline" onClick={openModal}>Book Call</button>
      </div>
    </nav>
  );
}

function HeroSection() {
  const { openModal } = useClientFlow();
  return (
    <section className="pd-hero pd-section">
      {/* Glow effects */}
      <div
        className="pd-glow-orange"
        style={{ left: "-120px", top: "-80px" }}
      />
      <div
        className="pd-glow-grey"
        style={{ right: "-120px", top: "-40px" }}
      />

      {/* Announcement bar */}
      <p className="pd-announce-bar">Top Brands Trust Our Data Services!</p>

      {/* Triangle decoration */}
      <div style={{ position: "absolute", left: "40px", top: "140px", opacity: 0.8 }}>
        <TriangleGrid />
      </div>

      {/* Heading */}
      <h1 className="pd-hero-heading">
        We build growth systems for software products.
      </h1>

      {/* Subtitle */}
      <p className="pd-hero-sub">
        Pulse Digital helps SaaS startups, mobile apps, and online platforms
        acquire and retain users through product-focused growth systems.
      </p>

      {/* CTA Buttons */}
      <div className="pd-hero-cta">
        <button className="pd-hero-btn-primary" onClick={openModal}>Start Now</button>
        <button className="pd-hero-btn-secondary">Learn More</button>
      </div>

      {/* Hero image */}
      <div className="pd-hero-image">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/64e3947b76e30293aa4f13eb2ada475a9b71ca8d?width=1800"
          alt="Pulse Digital growth platform"
        />
      </div>
    </section>
  );
}

function GrowthSystemsSection() {
  const cards = [
    {
      variant: "left",
      icon: <AcquisitionIcon />,
      title: "Aquisation Systems",
      desc: "We design scalable user acquisition engines aligned with your product experience.",
    },
    {
      variant: "right",
      icon: <ActivationIcon />,
      title: "Activation Design",
      desc: "Turn new users into active users through onboarding and behavioral optimization.",
    },
    {
      variant: "left",
      icon: <RetentionIcon />,
      title: "Retention Engineering",
      desc: "We improve engagement loops that keep users coming back.",
    },
  ];

  return (
    <section style={{ padding: "80px 60px", maxWidth: "1680px", margin: "0 auto" }}>
      <p className="pd-growth-label">Growth Systems</p>
      <p className="pd-growth-subtitle">
        Purchase Accounts Contract + Client Alignment · Powered by Technical Teams &amp; Marketers
      </p>

      {cards.map((card, i) => (
        <div
          key={i}
          className={`pd-growth-card pd-growth-card--${card.variant}`}
        >
          <div className="pd-growth-icon-wrap">{card.icon}</div>
          <div className="pd-growth-content">
            <h3 className="pd-growth-card-title">{card.title}</h3>
            <p className="pd-growth-card-desc">{card.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function WhyPLGSection() {
  return (
    <section className="pd-plg" style={{ maxWidth: "1680px", margin: "0 auto" }}>
      {/* Triangle decoration */}
      <div style={{ position: "absolute", right: "60px", top: "0", opacity: 0.8, display: "none" }}>
        <TriangleGrid />
      </div>

      <div className="pd-plg-left">
        <p className="pd-plg-label">Why Product-Led Growth Wins</p>
        <h2 className="pd-plg-heading">
          Growth is not campaigns. It is systems embedded into the product itself.
        </h2>
        <p className="pd-plg-desc">
          We design measurable mechanisms that scale with your users.
        </p>

        {/* Grid icon */}
        <div style={{ marginBottom: "28px" }}>
          <svg width="56" height="56" viewBox="0 0 71 71" fill="none">
            <g clipPath="url(#gridClip)">
              <path d="M46.641 69.1692H69.1692V46.641H46.641V69.1692Z" stroke="#3AED4C" strokeWidth="3" strokeMiterlimit="10"/>
              <path d="M46.641 46.6347H69.1692V24.1065L46.641 24.1065V46.6347Z" stroke="#3AED4C" strokeWidth="3" strokeMiterlimit="10"/>
              <path d="M24.1065 46.6347H46.6348V24.1065L24.1065 24.1065L24.1065 46.6347Z" stroke="#3AED4C" strokeWidth="3" strokeMiterlimit="10"/>
              <path d="M46.641 24.1164L69.1692 24.1164V1.58818L46.641 1.58818V24.1164Z" stroke="#3AED4C" strokeWidth="3" strokeMiterlimit="10"/>
              <path d="M24.1065 24.1164L46.6348 24.1164V1.58818L24.1065 1.58818L24.1065 24.1164Z" stroke="#3AED4C" strokeWidth="3" strokeMiterlimit="10"/>
              <path d="M1.58824 24.1164L24.1165 24.1164L24.1165 1.58818L1.58824 1.58818L1.58824 24.1164Z" stroke="#3AED4C" strokeWidth="3" strokeMiterlimit="10"/>
            </g>
            <defs>
              <clipPath id="gridClip"><rect width="70.7552" height="70.7552" fill="white"/></clipPath>
            </defs>
          </svg>
        </div>

        <button className="pd-plg-btn">Read a Case</button>
      </div>

      <div className="pd-plg-right">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/fa11178e69323799d48ed97aeb859fc178835e8f?width=885"
          alt="Growth chart"
        />
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: "1",
      title: "Diagnose",
      desc: "We analyze your product, funnel, and user behavior to identify growth constraints.",
    },
    {
      num: "2",
      title: "Design",
      desc: "We build custom growth models aligned with your product mechanics.",
    },
    {
      num: "3",
      title: "Deploy",
      desc: "Experiments are launched, measured, and continuously optimized.",
    },
  ];

  return (
    <section className="pd-hiw" style={{ maxWidth: "1680px", margin: "0 auto" }}>
      <h2 className="pd-section-heading">How It works</h2>
      <div className="pd-hiw-cards">
        {steps.map((step, i) => (
          <div key={i} className="pd-hiw-card" style={{ marginTop: "48px" }}>
            <div className="pd-hiw-num-wrap">
              <span className="pd-hiw-num">{step.num}</span>
            </div>
            <h3 className="pd-hiw-card-title">{step.title}</h3>
            <p className="pd-hiw-card-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "3.2x", label: "Average MRR growth multiplier" },
    { value: "10+", label: "SaaS products scaled" },
    { value: "30K+", label: "Customers acquired for clients" },
  ];

  return (
    <section className="pd-stats-outer" style={{ maxWidth: "1680px", margin: "0 auto" }}>
      <div className="pd-stats-inner">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="pd-stat-value">{stat.value}</div>
            <div className="pd-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoWeHelpSection() {
  const categories = [
    {
      title: "SaaS Products",
      desc: "Improve activation and retention loops.",
    },
    {
      title: "Mobile Apps",
      desc: "Design growth flows inside user journeys.",
    },
    {
      title: "Online Platforms",
      desc: "Scale acquisition without dependency on ads.",
    },
  ];

  return (
    <section
      className="pd-wwh"
      style={{ maxWidth: "1680px", margin: "0 auto", position: "relative" }}
    >
      {/* Green glow */}
      <div
        className="pd-glow-green"
        style={{ left: "0px", top: "100px", position: "absolute" }}
      />

      <div className="pd-wwh-left">
        {/* Green blob shape */}
        <svg width="380" height="324" viewBox="0 0 470 402" fill="none" style={{ width: "100%", height: "auto" }}>
          <g clipPath="url(#blobClip)">
            <path
              d="M198.606 264.658C214.194 310.144 210.258 370.134 198.606 387.783C186.954 405.432 27.5093 403.828 12.1131 387.783C-16.3635 358.107 12.8037 106.243 24.1357 90.1985C44.7582 60.9999 54.1623 60.5857 79.0833 46.082C101.829 32.8442 127.486 24.0781 158.099 12.7917C198.606 -2.14241 435.737 -20.5077 455.686 63.726C466.515 109.447 478.947 214.703 455.686 234.578C441.649 246.573 309.7 234.578 309.7 234.578C309.7 234.578 321.955 151.823 318.517 109.447C309.7 0.794582 158.099 12.7917 158.099 12.7917C127.486 24.0781 101.829 32.8442 79.0833 46.082C79.0833 46.082 55.8645 104.196 61.4367 141.133C72.1898 212.414 175.236 196.464 198.606 264.658Z"
              fill="#3AED4C"
            />
          </g>
          <defs>
            <clipPath id="blobClip">
              <rect width="469.241" height="401.061" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="pd-wwh-right">
        <p className="pd-wwh-label">Simple + Scalable</p>
        <h2 className="pd-wwh-heading">Who We Help</h2>
        {categories.map((cat, i) => (
          <div key={i} className="pd-wwh-card">
            <h3 className="pd-wwh-card-title">{cat.title}</h3>
            <p className="pd-wwh-card-desc">{cat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes Pulse Digital different?",
      a: "We focus on product growth systems, not marketing campaigns.",
    },
    {
      q: "Do you run ads?",
      a: "Only when they support product-driven growth strategies.",
    },
    {
      q: "Who is this for?",
      a: "Early-stage and scaling software products.",
    },
  ];

  return (
    <section
      className="pd-faq"
      style={{ maxWidth: "1680px", margin: "0 auto" }}
    >
      <div className="pd-faq-left">
        <p className="pd-faq-label">Frequently Asked Questions</p>
        <h2 className="pd-faq-heading">Any Questions? Find here.</h2>
        <p className="pd-faq-sub">Boost your Sales and Marketing Efficiency</p>
        <button className="pd-faq-send-btn">Send Message</button>
      </div>

      <div className="pd-faq-right">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="pd-faq-item"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="pd-faq-question-row">
              <span className="pd-faq-question">{faq.q}</span>
              <div className="pd-faq-toggle">
                <PlusIcon />
              </div>
            </div>
            {openIndex === i && (
              <p className="pd-faq-answer">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [activeAvatar, setActiveAvatar] = useState(0);

  const avatars = [
    "https://api.builder.io/api/v1/image/assets/TEMP/ff26f281bbd78affb107f2e72dc925a681475103?width=131",
    "https://api.builder.io/api/v1/image/assets/TEMP/7772ce0154fc626d14958f08ad77c68cbaee940b?width=131",
    "https://api.builder.io/api/v1/image/assets/TEMP/f6abec1efc955b43d65045da1cc3f193d4f6bcca?width=237",
    "https://api.builder.io/api/v1/image/assets/TEMP/1b1ced802636d3d2c7d54c9fcd1c61236e9a72b5?width=131",
    "https://api.builder.io/api/v1/image/assets/TEMP/54fbfe70b31af14cc277b6f101fad19ff8c3777b?width=131",
  ];

  return (
    <section
      className="pd-testimonials"
      style={{ maxWidth: "1680px", margin: "0 auto" }}
    >
      <h2 className="pd-section-heading">What our client&apos;s say</h2>

      <div className="pd-quote-icon">
        <QuoteIcon />
      </div>

      <p className="pd-testimonial-text">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim.
      </p>

      <p className="pd-testimonial-name">Adrian Smith</p>

      <div className="pd-avatar-row">
        <button
          className="pd-avatar-btn"
          onClick={() => setActiveAvatar((prev) => (prev - 1 + avatars.length) % avatars.length)}
          aria-label="Previous"
        >
          <ArrowLeft />
        </button>

        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Client avatar"
            className={`pd-avatar ${i === activeAvatar ? "pd-avatar--active" : ""}`}
            onClick={() => setActiveAvatar(i)}
            style={{ cursor: "pointer" }}
          />
        ))}

        <button
          className="pd-avatar-btn"
          onClick={() => setActiveAvatar((prev) => (prev + 1) % avatars.length)}
          aria-label="Next"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}

function CTASection() {
  const { openModal } = useClientFlow();
  return (
    <section className="pd-cta" style={{ maxWidth: "1680px", margin: "0 auto" }}>
      {/* Green glow blobs */}
      <div
        className="pd-glow-green"
        style={{ left: "-60px", bottom: "0px", position: "absolute", opacity: 0.6 }}
      />
      <div
        className="pd-glow-green"
        style={{ right: "-60px", bottom: "0px", position: "absolute", opacity: 0.6 }}
      />

      <h2 className="pd-cta-heading">Get in touch</h2>
      <p className="pd-cta-sub-label">Ready to scale your product?</p>
      <p className="pd-cta-desc">
        Book a focused 30 minute growth call.
        <br />
        No fluff, no sales pitch
        <br />
        Just a direct conversation about
        <br />
        your goals and how we can help.
      </p>

      <div className="pd-cta-buttons">
        <button className="pd-cta-btn-primary" onClick={openModal}>Book A Call</button>
        <button className="pd-cta-btn-secondary">Contact Us</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pd-footer">
      <div className="pd-footer-inner">
        {/* Brand */}
        <div className="pd-footer-brand">
          <div className="pd-footer-logo">
            <LogoSVG size={44} />
            <span className="pd-logo-text">
              <span className="pd-logo-white">Pulse </span>
              <span className="pd-logo-green">Digital</span>
            </span>
          </div>
          <p className="pd-footer-tagline">Growth is engineered, not guessed.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="pd-footer-col-title">Quick links</h4>
          <ul className="pd-footer-links">
            {["Home", "Pricing", "About us", "Service", "Blog"].map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="pd-footer-newsletter">
          <h4 className="pd-footer-col-title">Quick links</h4>
          <p className="pd-footer-newsletter-label">Join over 68,000 people getting our emails</p>
          <div className="pd-footer-email-row">
            <input
              type="email"
              className="pd-footer-email-input"
              placeholder="Enter Email"
            />
            <button className="pd-footer-subscribe-btn">Subscribe</button>
          </div>
          <p className="pd-footer-disclaimer">We only send interesting and relevant emails.</p>
        </div>
      </div>

      <p className="pd-footer-copyright">
        © Copyright 2026 Zendro - All Rights Reserved
      </p>
    </footer>
  );
}

/* ============================================
   Page
   ============================================ */

export default function Home() {
  return (
    <ClientFlowProvider>
      <main className="pd-page">
        <Navbar />
        <HeroSection />
        <GrowthSystemsSection />
        <WhyPLGSection />
        <HowItWorksSection />
        <StatsSection />
        <WhoWeHelpSection />
        <FAQSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
      <ClientFlowModal />
    </ClientFlowProvider>
  );
}
