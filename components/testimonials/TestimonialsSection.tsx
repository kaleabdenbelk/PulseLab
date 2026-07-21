"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { testimonials } from "./data";
import TestimonialRail from "./TestimonialRail";
import { EYEBROWS } from "../constants";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const userInteracted = useRef(false);
  const rotateTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const stopRotation = useCallback(() => {
    if (rotateTimer.current) {
      clearInterval(rotateTimer.current);
      rotateTimer.current = null;
    }
    userInteracted.current = true;
  }, []);

  const handleSelect = useCallback(
    (index: number) => {
      stopRotation();
      setActiveIndex(index);
    },
    [stopRotation]
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setIsRevealed(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setIsRevealed(true);
            if (!userInteracted.current && !rotateTimer.current) {
              setTimeout(() => {
                if (userInteracted.current) return;
                rotateTimer.current = setInterval(() => {
                  if (userInteracted.current) return;
                  setActiveIndex((prev) => (prev + 1) % testimonials.length);
                }, 5200);
              }, 2000);
            }
            io.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );
    io.observe(section);

    return () => {
      io.disconnect();
      if (rotateTimer.current) clearInterval(rotateTimer.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`rsec wsec${isRevealed ? " is-revealed" : ""}`}
      id="words"
      data-key="words"
    >
      <div className="eyebrow in">
        <span className="num">{EYEBROWS.testimonials.num}</span> {EYEBROWS.testimonials.label} <span className="ind" />
        <span className="end">{EYEBROWS.testimonials.end}</span>
      </div>

      <div className="wsec-grid">
        <div className="wsec-main">
          <span className="wsec-qmark" aria-hidden="true">&ldquo;</span>

          <div className="wsec-quotes">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className={`wsec-q${activeIndex === i ? " is-active" : ""}`}
                dangerouslySetInnerHTML={{ __html: t.quote }}
              />
            ))}
          </div>
        </div>

        <div className="wsec-bottom">
          <div className="wsec-authors">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`wsec-auth${activeIndex === i ? " is-active" : ""}`}
              >
                <div
                  className={`wsec-ava${t.author.photo ? "" : " wsec-ava--mono"}`}
                  aria-hidden="true"
                  style={t.author.photo ? { backgroundImage: `url('${t.author.photo}')` } : undefined}
                >
                  {!t.author.photo && t.author.initials}
                </div>
                <div className="wsec-aMeta">
                  <div className="wsec-aName">
                    <a
                      href={t.author.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.author.name}
                    </a>
                    <a
                      className="wsec-verif"
                      href={t.author.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on TikTok"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="14" height="14">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
                      </svg>
                    </a>
                  </div>
                  <div className="wsec-aRole">{t.author.role}</div>
                  <div className="wsec-aTag">
                    {t.author.tag.split("·").map((part, j) => (
                      <span key={j}>
                        {j > 0 && <span className="dot">·</span>}
                        {part.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <TestimonialRail
            testimonials={testimonials}
            activeIndex={activeIndex}
            onSelect={handleSelect}
          /> */}
        </div>
      </div>
    </section>
  );
}
