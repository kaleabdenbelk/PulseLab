"use client";

import { useEffect, useRef, useState } from "react";
import { phases } from "./data";
import ProcessRow from "./ProcessRow";
import { EYEBROWS, PROCESS_END } from "../constants";

export default function ProcessTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const [passedSet, setPassedSet] = useState<Set<number>>(new Set());
  const [currentIdx, setCurrentIdx] = useState(-1);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeline = timelineRef.current;
    const list = listRef.current;
    if (!timeline || !list) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      timeline.style.setProperty("--fill", "1");
      timeline.style.setProperty("--pin-scale", "0");
      setPassedSet(new Set([0, 1, 2, 3]));
      setCurrentIdx(3);
      setIsComplete(true);
      return;
    }

    const rows = [...list.querySelectorAll(".proc-row")] as HTMLElement[];
    let raf = 0;

    function update() {
      raf = 0;
      if (!timeline || !list) return;
      const vh = window.innerHeight;
      const trigger = vh * 0.62;
      const listRect = list.getBoundingClientRect();
      const total = listRect.height;
      if (total <= 0) return;

      const passed = Math.max(0, Math.min(1, (trigger - listRect.top) / total));
      timeline.style.setProperty("--fill", passed.toFixed(4));
      timeline.classList.toggle("has-fill", passed > 0.02 && passed < 0.995);
      timeline.style.setProperty(
        "--pin-scale",
        passed > 0.02 && passed < 0.995 ? "1" : "0"
      );

      const newPassed = new Set<number>();
      let lastIdx = -1;
      rows.forEach((row, i) => {
        const node = row.querySelector(".proc-node");
        if (!node) return;
        const nr = node.getBoundingClientRect();
        const nc = nr.top + nr.height / 2;
        if (nc <= trigger) {
          newPassed.add(i);
          lastIdx = i;
        }
      });

      setPassedSet(newPassed);
      setCurrentIdx(lastIdx < rows.length - 1 ? lastIdx : -1);
      setIsComplete(lastIdx >= rows.length - 1);
    }

    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="rsec" id="process" data-key="process">
      <div className="eyebrow in">
        <span className="num">{EYEBROWS.process.num}</span> {EYEBROWS.process.label} <span className="ind" />
        <span className="end">{EYEBROWS.process.end}</span>
      </div>

      <div
        ref={timelineRef}
        className={`proc-timeline${isComplete ? " is-complete" : ""}`}
      >
        <ol className="proc-list" role="list" ref={listRef}>
          <div className="proc-rail" aria-hidden="true">
            <span className="proc-rail-base" />
            <span className="proc-rail-fill" />
            <span className="proc-rail-pin">
              <img decoding="async" src="https://allgoodstudio.com/assets/hand-lime.png" alt="" />
            </span>
          </div>

          {phases.map((phase, i) => (
            <ProcessRow
              key={phase.step}
              step={phase.step}
              title={phase.title}
              desc={phase.desc}
              week={phase.week}
              deliverables={phase.deliverables}
              isPassed={passedSet.has(i)}
              isCurrent={currentIdx === i}
            />
          ))}
        </ol>

        <div className="proc-end">
          <div className="proc-end-mark" aria-hidden="true">
            <img decoding="async" src="/circle.svg" alt="" />
          </div>
          <p className="proc-end-line">
            <em>Beyond launch.</em> {PROCESS_END}
          </p>
        </div>
      </div>
    </section>
  );
}
