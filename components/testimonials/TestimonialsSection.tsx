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
                <div className="wsec-ava wsec-ava--mono" aria-hidden="true">
                  {t.author.initials}
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
                      aria-label="Verified on TikTok"
                    >
                      <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path
                          d="M2 6.5L4.7 9.2L10 3.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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
