"use client";

import { type Testimonial } from "./data";

interface TestimonialRailProps {
  testimonials: readonly Testimonial[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function TestimonialRail({
  testimonials,
  activeIndex,
  onSelect,
}: TestimonialRailProps) {
  return (
    <ol className="wsec-rail" role="list" aria-label="Testimonials">
      {testimonials.map((t, i) => (
        <li
          key={i}
          className={`wsec-row${activeIndex === i ? " is-active" : ""}`}
          style={{ ["--i" as string]: i }}
          tabIndex={0}
          role="button"
          aria-pressed={activeIndex === i}
          onMouseEnter={() => onSelect(i)}
          onClick={() => onSelect(i)}
          onFocus={() => onSelect(i)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelect(i);
            } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
              e.preventDefault();
              const next = document.querySelector(
                `.wsec-row[data-i="${i + 1}"]`
              ) as HTMLElement;
              next?.focus();
            } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
              e.preventDefault();
              const prev = document.querySelector(
                `.wsec-row[data-i="${i - 1}"]`
              ) as HTMLElement;
              prev?.focus();
            }
          }}
          data-i={i}
        >
          <span className="wsec-idx">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="wsec-info">
            <span className="wsec-name">{t.author.name}</span>
            <span className="wsec-role">{t.author.role}</span>
            <span className="wsec-tag">
              {t.author.tag.split("·").map((part, j) => (
                <span key={j}>
                  {j > 0 && <span className="dot">·</span>}
                  {part.trim()}
                </span>
              ))}
            </span>
          </div>
          <span className="wsec-mark" aria-hidden="true" />
        </li>
      ))}
    </ol>
  );
}
