"use client";

import { useEffect, useRef } from "react";
import { CURTAIN } from "./constants";

export default function Curtain({ onDone }: { onDone: () => void }) {
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = curtainRef.current;
    if (!el) return;

    requestAnimationFrame(() => {
      el.classList.add("show");
      setTimeout(() => {
        el.classList.add("gone");
        setTimeout(onDone, 300);
      }, 600);
    });
  }, [onDone]);

  return (
    <div className="curtain" ref={curtainRef}>
      <div className="cl-meta">
        <span>{CURTAIN.studioName}</span>
        <span>{CURTAIN.loading}</span>
      </div>
      <div className="cl-mark">
        <img decoding="async" src="https://allgoodstudio.com/assets/loader.webp" alt="" />
      </div>
      <div className="cl-bot">
        <span>{CURTAIN.location}</span>
      </div>
    </div>
  );
}
