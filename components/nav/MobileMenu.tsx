"use client";

import { useEffect, useState, useCallback } from "react";
import { sections } from "./data";
import { MOBILE_MENU } from "../constants";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  // Close on escape
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <button
        className={`mm-toggle${isOpen ? " is-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className="mm-bars" aria-hidden="true">
          <span />
          <span />
        </span>
        <span className="mm-label">{isOpen ? MOBILE_MENU.closeLabel : MOBILE_MENU.openLabel}</span>
      </button>

      <div
        className={`mm-overlay${isOpen ? " is-open" : ""}`}
        aria-hidden={!isOpen}
        role="dialog"
      >
        <div className="mm-bg" aria-hidden="true">
          <img
            decoding="async"
            src="/logo.svg"
            alt=""
            className="mm-mark"
          />
        </div>
        <nav className="mm-nav">
          {sections.map((sec, i) => (
            <a
              key={sec.key}
              className="mm-item"
              href={sec.href}
              data-jump={sec.key}
              onClick={close}
              style={{ transitionDelay: isOpen ? `${0.18 + i * 0.06}s` : undefined }}
            >
              <span className="mm-num">{sec.num} —</span>
              <span className="mm-name">{sec.label}</span>
            </a>
          ))}
        </nav>
        <div className="mm-foot">
          <span className="mm-status">
            <span className="dot" /> {MOBILE_MENU.status}
          </span>
          <a className="mm-email" href={`mailto:${MOBILE_MENU.email}`}>
            {MOBILE_MENU.email}
          </a>
        </div>
      </div>
    </>
  );
}
