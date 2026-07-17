"use client";

import { useEffect, useState } from "react";
import { sections, type SectionKey } from "./data";

export function useActiveSection(): SectionKey {
  const [active, setActive] = useState<SectionKey>("works");

  useEffect(() => {
    const ids = sections.map((s) => s.key);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionKey;
            if (ids.includes(id)) setActive(id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}
