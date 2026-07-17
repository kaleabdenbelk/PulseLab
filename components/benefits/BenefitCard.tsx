"use client";

import { useEffect, useRef } from "react";

interface BenefitCardProps {
  id: string;
  title: string;
  desc: string;
  image: string;
  index: number;
}

export default function BenefitCard({
  id,
  title,
  desc,
  image,
  index,
}: BenefitCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      card.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(card);

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="ben-card"
      style={{ ["--i" as string]: index }}
    >
      <figure className="ben-fig">
        <img
          src={image}
          alt=""
          width="800"
          height="450"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      </figure>
      <span className="ben-num">{id}</span>
      <h3 className="ben-title">{title}</h3>
      <p className="ben-desc">{desc}</p>
    </div>
  );
}
