"use client";

import { HERO } from "./constants";
import LogoLoop from "./LogoLoop";

const ICONS = [
  "/icons/round/Frame-1.svg",
  "/icons/round/Frame-6.svg",
  "/icons/round/Frame-4.svg",
  "/icons/round/Frame-7.svg",
  "/icons/round/Frame-8.svg",
  "/icons/round/Frame-10.svg",
  "/icons/round/Frame-11.svg",
  "/icons/round/Frame-12.svg",
  "/icons/round/Frame-13.svg",
  "/icons/round/Frame-14.svg",
  "/icons/round/Frame-15.svg",
  "/icons/round/Frame.svg",
];

export default function ChangeHero() {
  const count = ICONS.length;
  const radiusX = 42;
  const radiusY = 34;

  return (
    <section className="ch-hero" id="hero">
      <div className="ch-hero-inner">
        {/* Dashed ellipse (static) */}
        <svg
          viewBox="0 0 100 100"
          className="ch-hero-svg"
          aria-hidden="true"
        >
          <ellipse
            cx="50"
            cy="50"
            rx={radiusX}
            ry={radiusY}
            fill="none"
            stroke="rgba(3,3,3,0.15)"
            strokeWidth="0.15"
            strokeDasharray="0.6 0.9"
          />
        </svg>

        {/* Orbiting icons */}
        <div className="ch-orbit-ring">
          {ICONS.map((src, i) => {
            const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
            const depth = Math.round((0.85 + 0.35 * ((Math.sin(angle) + 1) / 2)) * 10000) / 10000;
            const isExtra = i % 2 === 1;
            const delay = (i / count) * -60;
            return (
              <div
                key={i}
                className={`ch-orbit-icon ${isExtra ? "ch-orbit-icon-extra" : ""}`}
                style={{
                  offsetPath: "ellipse(42% 34% at 50% 50%)",
                  offsetRotate: "0deg",
                  animationDelay: `${delay}s`,
                }}
              >
                <div className="ch-orbit-icon-inner" style={{ transform: `scale(${depth})` }}>
                  <img src={src} alt="" className="ch-orbit-icon-img" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Radial mask + text */}
        <div className="ch-hero-mask" aria-hidden="true" />

        <div className="ch-hero-content">
          {/* Left: Branding */}
          <div className="ch-hero-col ch-hero-col--left">
            <h1
              className="ch-hero-title ch-hero-rise"
              style={{ animationDelay: "0.3s" }}
            >
              {HERO.titleLeft}
            </h1>
            <p
              className="ch-hero-sub ch-hero-fade"
              style={{ animationDelay: "1.1s" }}
            >
              {HERO.subtitleLeft}
            </p>
          </div>

          {/* Center: & separator */}
          <div className="ch-hero-amp-center">&amp;</div>

          {/* Right: Websites */}
          <div className="ch-hero-col ch-hero-col--right">
            <h1
              className="ch-hero-title ch-hero-rise"
              style={{ animationDelay: "0.6s" }}
            >
              {HERO.titleRight}
            </h1>
            <p
              className="ch-hero-sub ch-hero-fade"
              style={{ animationDelay: "1.3s" }}
            >
              {HERO.subtitleRight}
            </p>
          </div>
        </div>

      </div>

      {/* Below the ellipse */}
      <div className="ch-hero-below">
        <div className="ch-hero-cta-wrap ch-hero-fade" style={{ animationDelay: "1.6s" }}>
          <a className="ch-hero-cta" href="#contact" data-cursor="hand">
            <span>Start a project</span>
            <span className="ch-hero-cta-arrow" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 19L19 5M9 5h10v10" />
              </svg>
            </span>
          </a>
          <span className="ch-hero-cta-meta">
            <span className="ch-hero-cta-meta__pulse" aria-hidden="true" />
            Replies within 24h
          </span>
        </div>

        <span className="ch-hero-meta-row ch-hero-fade" style={{ animationDelay: "1.9s" }}>
          Trusted by founders, builders, and small teams
        </span>

        <LogoLoop />
      </div>
    </section>
  );
}
