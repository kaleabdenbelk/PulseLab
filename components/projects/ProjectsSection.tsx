"use client";

import { useEffect, useRef } from "react";
import Eyebrow from "../Eyebrow";
import ProjectCard from "./ProjectCard";
import { projects } from "./data";
import { EYEBROWS } from "../constants";

export default function ProjectsSection({ onOpenCase }: { onOpenCase?: (slug: string) => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cardEls = cards.querySelectorAll(".ws-card");

    // IntersectionObserver to toggle .is-in for panel content reveal
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cardEls.forEach((card) => io.observe(card));

    if (reduce) return;

    // GSAP image scale on scroll — lazy loaded
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        cardEls.forEach((card) => {
          const img = card.querySelector(".ws-stage img");
          if (!img) return;
          gsap.to(img, {
            scale: 1.06,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        });
      });
    });

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <section className="rsec rsec--works" id="works" ref={sectionRef}>
      <Eyebrow number={EYEBROWS.works.num}>{EYEBROWS.works.label}</Eyebrow>

      <div className="works-stack" ref={cardsRef}>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            total={projects.length}
            onOpenCase={onOpenCase}
          />
        ))}
      </div>
    </section>
  );
}
