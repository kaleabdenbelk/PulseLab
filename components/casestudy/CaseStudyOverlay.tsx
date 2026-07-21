"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { CASES, CASE_ORDER, type CaseStudy } from "./data";
import { CASE_STUDY } from "../constants";

interface CaseStudyOverlayProps {
  activeCase: string | null;
  onClose: () => void;
}

export default function CaseStudyOverlay({
  activeCase,
  onClose,
}: CaseStudyOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const cs = activeCase ? CASES[activeCase] : null;

  const close = useCallback(() => {
    onClose();
    if (returnFocusRef.current) {
      try {
        returnFocusRef.current.focus();
      } catch {}
    }
    returnFocusRef.current = null;
  }, [onClose]);

  // Open/close body lock
  useEffect(() => {
    if (activeCase) {
      document.body.classList.add("cs-locked");
      returnFocusRef.current = document.activeElement as HTMLElement;
      const overlay = overlayRef.current;
      if (overlay) {
        overlay.scrollTop = 0;
      }
    } else {
      document.body.classList.remove("cs-locked");
    }
    return () => {
      document.body.classList.remove("cs-locked");
    };
  }, [activeCase]);

  // Escape to close
  useEffect(() => {
    if (!activeCase) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeCase, close]);

  // Scroll progress
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay || !activeCase) return;
    function onScroll() {
      if (!overlay) return;
      const total = overlay.scrollHeight - overlay.clientHeight;
      const pct = Math.max(0, Math.min(1, overlay.scrollTop / Math.max(1, total)));
      const rail = overlay.querySelector(".cs-rail i") as HTMLElement;
      if (rail) rail.style.height = `${pct * 100}%`;
    }
    overlay.addEventListener("scroll", onScroll, { passive: true });
    return () => overlay.removeEventListener("scroll", onScroll);
  }, [activeCase]);

  // Reveal animations
  useEffect(() => {
    if (!activeCase || !overlayRef.current) return;
    const overlay = overlayRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const targets = overlay.querySelectorAll(
      ".cs-sec,.cs-ai,.cs-stats,.cs-testimonial,.cs-related,.cs-showcase"
    );
    if (reduce) {
      targets.forEach((t) => t.classList.add("is-in"));
      return;
    }

    targets.forEach((t) => t.classList.remove("is-in"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { root: overlay, threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    targets.forEach((t) => io.observe(t));

    // Force-show intro
    requestAnimationFrame(() => {
      const intro = overlay.querySelector(".cs-intro");
      if (intro) intro.classList.add("is-in");
    });

    return () => io.disconnect();
  }, [activeCase]);

  if (!cs) return null;

  const slugs = CASE_ORDER;
  const here = slugs.indexOf(cs.slug);
  const related = [1, 2, 3].map((i) => CASES[slugs[(here + i) % slugs.length]]);

  return (
    <div
      ref={overlayRef}
      className={`case-study${activeCase ? " is-open" : ""}`}
      data-case={cs.slug}
      aria-hidden={!activeCase}
    >
      {/* Scroll progress rail */}
      <div className="cs-rail">
        <i />
      </div>

      {/* Sticky top bar */}
      <div className="cs-top">
        <button className="cs-back" type="button" onClick={close}>
          <span className="arr">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </span>
          {CASE_STUDY.backButton}
        </button>
        <div className="cs-title">
          <b>{cs.name}</b> <em>{cs.year}</em>
        </div>
        <div className="cs-index">
          <b>{cs.idx}</b> / {String(slugs.length).padStart(2, "0")}
        </div>
      </div>

      {/* Hero */}
      <div className="cs-hero">
        <Image src={cs.images.hero} width={1672} height={941} unoptimized alt={cs.name} />
        <div className="cs-hero-text">
          <span className="industry-pill">{cs.industry}</span>
          <h2 dangerouslySetInnerHTML={{ __html: cs.nameHtml }} />
          <p className="kicker">{cs.kicker}</p>
        </div>
      </div>

      {/* Meta strip */}
      <div className="cs-meta">
        <div className="col">
          <b>{CASE_STUDY.metaLabels.industry}</b>
          <span>{cs.industry}</span>
        </div>
        <div className="col">
          <b>{CASE_STUDY.metaLabels.services}</b>
          <span>{cs.services}</span>
        </div>
        <div className="col">
          <b>{CASE_STUDY.metaLabels.year}</b>
          <span>{cs.year}</span>
        </div>
        <div className="col">
          <b>{CASE_STUDY.metaLabels.timeline}</b>
          <span>{cs.timeline}</span>
        </div>
        <div className="col">
          <b>{CASE_STUDY.metaLabels.role}</b>
          <span>{cs.role}</span>
        </div>
        <div className="cs-actions">
          {cs.apps ? (
            <>
              {cs.apps.ios && (
                <a className="cs-store" href={cs.apps.ios} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                  <span className="lbl"><small>{CASE_STUDY.storeLabels.downloadOn}</small><b>{CASE_STUDY.storeLabels.appStore}</b></span>
                </a>
              )}
              {cs.apps.android && (
                <a className="cs-store" href={cs.apps.android} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 2.3c-.3.2-.5.6-.5 1.1v17.2c0 .5.2.9.5 1.1l.1.1L13.4 12 3.7 2.2l-.1.1z"/><path d="M17.1 15.3 13.4 12l3.7-3.3 4.4 2.5c.9.5.9 1.6 0 2.1l-4.4 2z" opacity=".85"/></svg>
                  <span className="lbl"><small>{CASE_STUDY.storeLabels.getItOn}</small><b>{CASE_STUDY.storeLabels.googlePlay}</b></span>
                </a>
              )}
            </>
          ) : cs.live && cs.live !== "#" ? (
            <a className="cs-live" href={cs.live} target="_blank" rel="noopener noreferrer">
              <span>{CASE_STUDY.viewSite}</span>
              <span className="arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </a>
          ) : null}
        </div>
      </div>

      {/* Intro */}
      <section className="cs-sec cs-intro">
        <p dangerouslySetInnerHTML={{ __html: cs.intro }} />
      </section>

      {/* Challenge / Solution / Outcome */}
      <section className="cs-sec">
        <div className="cs-eyebrow">
          <span className="num">01</span>
          <span className="line" />
          {CASE_STUDY.sectionTitles.challengeSolutionOutcome}
        </div>
        <div className="cs-cso">
          {[cs.challenge, cs.solution, cs.outcome].map((item, i) => (
            <div key={i} className="card" style={{ ["--i" as string]: i }}>
              <span className="ix">{String(i + 1).padStart(2, "0")}</span>
              <h3 dangerouslySetInnerHTML={{ __html: item.h }} />
              <p>{item.p}</p>
              <div className="stat">
                <b dangerouslySetInnerHTML={{ __html: item.stat }} />
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI section */}
      <section className="cs-ai">
        <div className="cs-eyebrow">
          <span className="num">02</span>
          <span className="line" />
          {CASE_STUDY.sectionTitles.aiProcess}
        </div>
        <h2 dangerouslySetInnerHTML={{ __html: cs.ai.head }} />
        <p className="ai-intro">{cs.ai.intro}</p>
        <div className="ai-grid">
          {cs.ai.cards.map((card, i) => (
            <div key={i} className="ai-card" style={{ ["--i" as string]: i }}>
              <span className="sparkle">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2 13.6 7c.4 1.2 1.2 2 2.4 2.4L21 11c.4.2.4.8 0 1L16 13.6c-1.2.4-2 1.2-2.4 2.4L12 21c-.2.4-.8.4-1 0L9.4 16c-.4-1.2-1.2-2-2.4-2.4L2 12c-.4-.2-.4-.8 0-1L7 9.4c1.2-.4 2-1.2 2.4-2.4L11 2c.2-.4.8-.4 1 0Z" />
                </svg>
              </span>
              <h4>{card.h}</h4>
              <p>{card.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase images */}
      <section className="cs-sec cs-showcase">
        <div className="spread">
          <Image src={cs.images.left} width={836} height={470} unoptimized alt="" />
          <Image src={cs.images.right} width={836} height={470} unoptimized alt="" />
        </div>
        <Image className="full" src={cs.images.wide} width={1672} height={941} unoptimized alt="" />
      </section>

      {/* Stats */}
      <section className="cs-stats">
        {cs.stats.map((s, i) => (
          <div key={i} className="scell" style={{ ["--i" as string]: i }}>
            <b>{s.label}</b>
            <div className="num" dangerouslySetInnerHTML={{ __html: s.num }} />
            <p>{s.p}</p>
          </div>
        ))}
      </section>

      {/* Testimonial */}
      <section className="cs-sec cs-testimonial">
        <blockquote dangerouslySetInnerHTML={{ __html: `\u201C${cs.quote.q}\u201D` }} />
        <div className="qmeta">
          {cs.quote.avatar && (
            <div
              className="avatar"
              style={{ backgroundImage: `url('${cs.quote.avatar}')` }}
            />
          )}
          <div className="who">
            <span dangerouslySetInnerHTML={{ __html: cs.quote.author }} />
            <span>{cs.quote.role}</span>
          </div>
        </div>
      </section>

      {/* Related work */}
      <section className="cs-related">
        <div className="cs-eyebrow">
          <span className="num">03</span>
          <span className="line" />
          {CASE_STUDY.sectionTitles.relatedWork}
        </div>
        <div className="grid">
          {related.map((r, i) => (
            <a key={r.slug} className="rcard" style={{ ["--i" as string]: i }}>
              <div className="thumb">
                <Image
                  src={r.thumb}
                  width={1672}
                  height={941}
                  unoptimized
                  alt={r.name}
                />
                <span className="open-cue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
              <span className="pill">{r.industry}</span>
              <h3 dangerouslySetInnerHTML={{ __html: r.nameHtml }} />
              <p>{r.kicker.length > 110 ? r.kicker.slice(0, 108).trimEnd() + "…" : r.kicker}</p>
              <div className="meta">
                <span>{r.services}</span>
                <em>{r.year}</em>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer hint */}
      <div className="cs-foot">
        <span>{CASE_STUDY.pressEscHint}</span>
        <span>{CASE_STUDY.brandFooter}{cs.year}</span>
      </div>
    </div>
  );
}
