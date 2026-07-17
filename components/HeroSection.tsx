"use client";

import { useEffect, useRef, type ReactNode } from "react";
import SpinningBadge from "./SpinningBadge";
import LogoLoop from "./LogoLoop";
import ThreadsCanvas from "./ThreadsCanvas";

/* ── VCR text splitting ─────────────────────────────── */

function VCRChar({ char, index }: { char: string; index: number }) {
  if (char === " ") return <>{char}</>;
  return (
    <span className="vcr">
      <span className="vcr-inner" style={{ "--i": index } as React.CSSProperties}>
        {char}
      </span>
    </span>
  );
}

function splitChars(text: string, counter: { i: number }): ReactNode[] {
  return text.split("").map((ch, idx) => (
    <VCRChar key={idx} char={ch} index={counter.i++} />
  ));
}

function splitWords(text: string, counter: { i: number }): ReactNode[] {
  const parts = text.split(/(\s+)/);
  return parts.map((part, idx) => {
    if (/^\s+$/.test(part)) return <span key={idx}>{part}</span>;
    return (
      <span key={idx} className="vcr">
        <span className="vcr-inner" style={{ "--i": counter.i++ } as React.CSSProperties}>
          {part}
        </span>
      </span>
    );
  });
}

/* ── Hero Section ───────────────────────────────────── */

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const counter = useRef({ i: 0 });

  // Reset counter on each render so indices are always 0-based
  counter.current.i = 0;

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Activate hero (trigger CSS reveal transitions)
    const activateTimer = setTimeout(() => {
      hero.classList.add("in");
      if (!reduce) {
        setTimeout(() => hero.classList.add("vcr-done"), 2600);
      } else {
        hero.classList.add("vcr-done");
      }
    }, 200);

    // GSAP parallax — lazy loaded
    if (!reduce) {
      Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
        ([{ gsap }, { ScrollTrigger }]) => {
          gsap.registerPlugin(ScrollTrigger);
          gsap.to(".hero-h1", {
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          });
          gsap.to(".hero-desc", {
            yPercent: -8,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "30% top",
              end: "80% top",
              scrub: 0.6,
            },
          });
        }
      );
    }

    return () => {
      clearTimeout(activateTimer);
    };
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <SpinningBadge />

      <div className="hero-grid">
        <h1 className="hero-h1">
          <span className="line line-1">
            {splitChars("Good ideas", counter.current)}
          </span>
          <span className="line line-2">
            {splitChars("deserve ", counter.current)}
            <i className="ital">
              {splitChars("careful hands.", counter.current)}
            </i>
          </span>
        </h1>

        <p className="hero-desc">
          We build brand identities, websites, product interfaces, and launch assets with{" "}
          {splitWords("classic design judgment", counter.current)} and modern AI-assisted speed.
        </p>

        <div className="hero-cta-wrap">
          <a className="hero-cta" href="#contact" data-cursor="hand">
            <span>Start a project</span>
            <span className="arrow" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 19L19 5M9 5h10v10" />
              </svg>
            </span>
          </a>
          <span className="hero-cta-meta" aria-label="Reply time">
            <span className="hero-cta-meta__pulse" aria-hidden="true" />
            {splitWords("Replies within 24h", counter.current)}
          </span>
        </div>

        <span className="hero-meta-row">
          {splitWords("Trusted by founders, builders, and small teams", counter.current)}
        </span>

        <LogoLoop />
      </div>

      <ThreadsCanvas />
    </section>
  );
}
