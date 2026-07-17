"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { sections, type SectionKey } from "./data";
import { useActiveSection } from "./useActiveSection";

const LABEL_PCTS = [0.30, 0.42, 0.52, 0.62, 0.72, 0.78];
const SAG_MAX = 14;
const THREAD_Y_FRAC = 0.62;
const LERP = 0.18;

function pathForHand(handX: number, w: number, threadY: number, firstX: number, lastX: number, endAtHand?: boolean) {
  const sag = SAG_MAX * Math.min(1, Math.max(0, Math.min(handX - firstX, lastX - handX)) / 60);
  const handY = threadY + sag;
  if (endAtHand) {
    return `M ${firstX} ${threadY} C ${firstX + (handX - firstX) * 0.5} ${threadY}, ${firstX + (handX - firstX) * 0.92} ${handY}, ${handX} ${handY}`;
  }
  return `M ${firstX} ${threadY} C ${firstX + (handX - firstX) * 0.5} ${threadY}, ${firstX + (handX - firstX) * 0.92} ${handY}, ${handX} ${handY} C ${handX + (lastX - handX) * 0.08} ${handY}, ${handX + (lastX - handX) * 0.5} ${threadY}, ${lastX} ${threadY}`;
}

export default function ThreadNav() {
  const active = useActiveSection();
  const [isDark, setIsDark] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const wireRef = useRef<SVGPathElement>(null);
  const wireProgRef = useRef<SVGPathElement>(null);
  const pegsRef = useRef<SVGGElement>(null);
  const [dragging, setDragging] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const handFracRef = useRef(0);
  const handFracTargetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [, forceRender] = useState(0);
  const handRef = useRef<HTMLDivElement>(null);

  const renderRef = useRef<() => void>(() => {});
  const anchorsRef = useRef<{ xFrac: number; section: HTMLElement | null }[]>([]);

  // Measure anchors (section positions) — called on scroll and resize
  const buildAnchors = useCallback(() => {
    const vh = window.innerHeight || 1;
    const anchors = sections
      .map((s) => ({
        xFrac: LABEL_PCTS[sections.indexOf(s)],
        section: document.getElementById(s.key),
      }))
      .filter((a) => a.section) as { xFrac: number; section: HTMLElement }[];
    anchorsRef.current = anchors;
    return anchors;
  }, []);

  // Map scroll position to hand X fraction based on actual section positions
  const progressToXFrac = useCallback(() => {
    const y = window.scrollY;
    const vh = window.innerHeight || 1;
    const anchors = buildAnchors();
    if (!anchors.length) return 0;
    const stops = anchors.map((a) => ({
      top: Math.max(0, a.section.getBoundingClientRect().top + window.scrollY - vh * 0.35),
      xFrac: a.xFrac,
    }));
    stops[stops.length - 1].top = Math.max(
      stops[stops.length - 1].top,
      document.documentElement.scrollHeight - window.innerHeight - 1
    );
    if (y <= stops[0].top) return stops[0].xFrac;
    for (let i = 0; i < stops.length - 1; i++) {
      const a = stops[i], b = stops[i + 1];
      if (y >= a.top && y <= b.top) {
        const t = (y - a.top) / Math.max(1, b.top - a.top);
        return a.xFrac + (b.xFrac - a.xFrac) * t;
      }
    }
    return stops[stops.length - 1].xFrac;
  }, [buildAnchors]);

  // Reverse: given X fraction, find scroll position
  const xFracToScroll = useCallback((xFrac: number) => {
    const vh = window.innerHeight || 1;
    const anchors = buildAnchors();
    if (!anchors.length) return 0;
    const stops = anchors.map((a) => ({
      top: Math.max(0, a.section.getBoundingClientRect().top + window.scrollY - vh * 0.35),
      xFrac: a.xFrac,
    }));
    stops[stops.length - 1].top = Math.max(
      stops[stops.length - 1].top,
      document.documentElement.scrollHeight - window.innerHeight - 1
    );
    if (xFrac <= stops[0].xFrac) return stops[0].top;
    for (let i = 0; i < stops.length - 1; i++) {
      const a = stops[i], b = stops[i + 1];
      if (xFrac >= a.xFrac && xFrac <= b.xFrac) {
        const t = (xFrac - a.xFrac) / Math.max(0.0001, b.xFrac - a.xFrac);
        return a.top + (b.top - a.top) * t;
      }
    }
    return stops[stops.length - 1].top;
  }, [buildAnchors]);

  // Show/hide nav based on hero position
  useEffect(() => {
    function update() {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const r = hero.getBoundingClientRect();
      setNavVisible(r.bottom < 0);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Scroll handler — update target, dark mode
  useEffect(() => {
    function onScroll() {
      handFracTargetRef.current = progressToXFrac();
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(tick);
      }
      const hero = document.getElementById("hero");
      if (hero) setIsDark(hero.getBoundingClientRect().bottom > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [progressToXFrac]);

  // Smooth interpolation tick
  const tick = useCallback(() => {
    const diff = handFracTargetRef.current - handFracRef.current;
    if (Math.abs(diff) > 0.0005) {
      handFracRef.current += diff * LERP;
    } else {
      handFracRef.current = handFracTargetRef.current;
    }
    renderRef.current();
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  // Render function — draws wire, pegs, hand
  useEffect(() => {
    const svgEl = svgRef.current;
    const wireEl = wireRef.current;
    const wireProgEl = wireProgRef.current;
    const pegsGroup = pegsRef.current;
    if (!svgEl || !wireEl || !pegsGroup) return;

    const svgNode = svgEl as SVGSVGElement;
    const wireNode = wireEl as SVGPathElement;
    const pegsNode = pegsGroup as SVGGElement;
    const wireProgNode = wireProgEl as SVGPathElement | null;

    renderRef.current = function render() {
      const w = window.innerWidth;
      const h = 130;
      const threadY = Math.round(h * THREAD_Y_FRAC);
      svgNode.setAttribute("viewBox", `0 0 ${w} ${h}`);

      const anchors = buildAnchors();
      if (!anchors.length) return;

      const firstX = anchors[0].xFrac * w;
      const lastX = anchors[anchors.length - 1].xFrac * w;
      const handFrac = handFracRef.current;
      const handX = handFrac * w;
      const sag = SAG_MAX * Math.min(1, Math.max(0, Math.min(handX - firstX, lastX - handX)) / 60);
      const handY = threadY + sag;

      // Wire: full bezier path
      const d = pathForHand(handX, w, threadY, firstX, lastX);
      wireNode.setAttribute("d", d);

      // Progress wire: only up to hand position
      if (wireProgNode) {
        const dProg = pathForHand(handX, w, threadY, firstX, lastX, true);
        wireProgNode.setAttribute("d", dProg);
      }

      // Pegs
      pegsNode.innerHTML = "";
      sections.forEach((sec, i) => {
        const xFrac = LABEL_PCTS[i];
        const exists = !!document.getElementById(sec.key);
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", String(xFrac * w));
        circle.setAttribute("cy", String(threadY));
        circle.setAttribute("r", sec.key === active ? "4" : "3");
        circle.classList.add("peg");
        if (sec.key === active) circle.classList.add("is-active");
        const activeIdx = sections.findIndex((s) => s.key === active);
        if (i < activeIdx) circle.classList.add("is-passed");
        if (!exists) circle.style.opacity = "0.25";
        pegsNode.appendChild(circle);
      });

      // Hand position via direct DOM (no state re-render per frame)
      if (handRef.current) {
        handRef.current.style.left = `${handX}px`;
        handRef.current.style.top = `${handY - 1}px`;
      }
    };

    renderRef.current();
    window.addEventListener("resize", renderRef.current);
    return () => window.removeEventListener("resize", renderRef.current);
  }, [active, buildAnchors]);

  // Drag to scrub
  const handleDrag = useCallback((clientX: number) => {
    const host = hostRef.current;
    if (!host) return;
    const rect = host.getBoundingClientRect();
    const f = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    handFracRef.current = f;
    handFracTargetRef.current = f;
    window.scrollTo({ top: xFracToScroll(f), behavior: "instant" in window ? "instant" : "auto" });
    renderRef.current();
  }, [xFracToScroll]);

  const handlePointerDown = useCallback(() => setDragging(true), []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => handleDrag(e.clientX);
    const onUp = () => {
      setDragging(false);
      // Snap to nearest section
      const anchors = anchorsRef.current;
      if (!anchors.length) return;
      const f = handFracRef.current;
      let nearest = anchors[0], best = Infinity;
      anchors.forEach((a) => {
        const d = Math.abs(a.xFrac - f);
        if (d < best) { best = d; nearest = a; }
      });
      if (!nearest.section) return;
      const vh = window.innerHeight || 1;
      const top = Math.max(0, nearest.section.getBoundingClientRect().top + window.scrollY - vh * 0.35);
      window.scrollTo({ top, behavior: "smooth" });
      handFracTargetRef.current = nearest.xFrac;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging, handleDrag]);

  return (
    <div
      ref={hostRef}
      className={`thread-host${isDark ? " on-dark" : ""}`}
      aria-label="Primary navigation"
    >
      <a className="thread-logo" href="#hero" aria-label="Allgood Studio">
        <img className="tl-light" src="/logo.svg" alt="Allgood Studio" decoding="async" />
        <img className="tl-dark" src="/logo.svg" alt="" aria-hidden="true" decoding="async" />
      </a>

      <div className={`thread-nav-content${navVisible ? " is-visible" : ""}`}>
        <svg ref={svgRef} className="thread-svg" preserveAspectRatio="none">
          <path ref={wireRef} className="wire" d="" />
          <path ref={wireProgRef} className="wire-prog" d="" />
          <g ref={pegsRef} />
        </svg>

        <div className="thread-labels">
          {sections.map((sec, i) => (
            <a
              key={sec.key}
              className={`thread-label${active === sec.key ? " is-active" : ""}`}
              href={sec.href}
              data-target={sec.key}
              style={{ left: `${LABEL_PCTS[i] * 100}%` }}
            >
              <span className="lbl-num">{sec.num}</span>
              {sec.label}
            </a>
          ))}
        </div>

        <div
          ref={handRef}
          className={`thread-hand${dragging ? " is-dragging" : ""}`}
          role="slider"
          aria-label="Drag to scrub through the page"
          tabIndex={0}
          style={{ transform: "translate(-50%, 0)" }}
          onMouseDown={handlePointerDown}
        >
          <span className="pin" />
          <span className="pendant" data-active={active} aria-hidden="true">
            <svg className="pi pi-works" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="3.5" width="7" height="7"/><rect x="13" y="3.5" width="7" height="7"/><rect x="3.5" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/></svg>
            <svg className="pi pi-services" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 3 7.5 12 12l9-4.5L12 3Z"/><path d="M3 12l9 4.5L21 12"/><path d="M3 16.5 12 21l9-4.5"/></svg>
            <svg className="pi pi-process" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1"/><path d="M20.5 4v5h-5"/></svg>
            <svg className="pi pi-why" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.5l1.9 6.2 6.6.2-5.3 4 1.9 6.2L12 15.4l-5.1 3.7 1.9-6.2-5.3-4 6.6-.2L12 2.5z"/></svg>
            <svg className="pi pi-words" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8.5h5v6.5c0 2.2-1.3 3.7-3.5 4.5"/><path d="M14 8.5h5v6.5c0 2.2-1.3 3.7-3.5 4.5"/></svg>
            <svg className="pi pi-contact" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 12 20.5 4.5 15 21l-2.5-7.5L5 11.5z"/><path d="M12.5 13.5 20.5 4.5"/></svg>
          </span>
        </div>
      </div>
    </div>
  );
}
