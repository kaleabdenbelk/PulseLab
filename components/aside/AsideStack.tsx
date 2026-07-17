"use client";

import { useEffect, useState } from "react";
import { asideSections, type AsideKey } from "./data";
import AsideSection from "./AsideSection";

export default function AsideStack() {
  const [activeKey, setActiveKey] = useState<AsideKey>("works");
  const [progresses, setProgresses] = useState<Record<string, number>>({});

  useEffect(() => {
    const sectionEls = asideSections
      .map((s) => ({ key: s.key, el: document.getElementById(s.key) }))
      .filter((x) => x.el) as { key: AsideKey; el: HTMLElement }[];

    if (!sectionEls.length) return;

    function update() {
      const mid = window.innerHeight * 0.42;
      let best = sectionEls[0].key;
      let bestDist = Infinity;

      for (const { key, el } of sectionEls) {
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom > mid) {
          best = key;
          break;
        }
        const d = Math.abs(r.top - mid);
        if (r.top < mid && d < bestDist) {
          bestDist = d;
          best = key;
        }
      }

      setActiveKey(best);

      const newProgresses: Record<string, number> = {};
      for (const { key, el } of sectionEls) {
        const r = el.getBoundingClientRect();
        const total = r.height + window.innerHeight * 0.6;
        const seen = Math.max(0, Math.min(total, window.innerHeight * 0.5 - r.top));
        newProgresses[key] = Math.max(0, Math.min(1, seen / total));
      }
      setProgresses(newProgresses);
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="aside-stack">
      {asideSections.map((sec) => (
        <AsideSection
          key={sec.key}
          id={sec.key}
          num={sec.num}
          ofTotal={sec.ofTotal}
          label={sec.label}
          heading={sec.heading}
          desc={sec.desc}
          progressLabel={sec.progressLabel}
          progressRange={[...sec.progressRange]}
          isActive={activeKey === sec.key}
          progress={progresses[sec.key] ?? 0}
        />
      ))}
    </div>
  );
}
