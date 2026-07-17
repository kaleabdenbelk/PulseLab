"use client";

import { useState, useEffect } from "react";

interface FaqItemProps {
  index: number;
  question: string;
  answer: string;
  isActive: boolean;
  onToggle: () => void;
}

export default function FaqItem({
  index,
  question,
  answer,
  isActive,
  onToggle,
}: FaqItemProps) {
  const [isTyping, setIsTyping] = useState(false);
  const dataQ = String(index + 1);

  useEffect(() => {
    if (isActive) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 650);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <>
      <div
        className={`msg from-you${isActive ? " active" : ""}${isTyping ? " is-typing" : ""}`}
        data-q={dataQ}
      >
        <button className="q-btn" type="button" onClick={onToggle}>
          <span className="q-toggle" aria-hidden="true">
            {isActive ? "−" : "+"}
          </span>
          <span className="q-bubble">{question}</span>
        </button>
      </div>
      <div className="ans-row" data-for={dataQ}>
        <div className="ava" aria-hidden="true">
          <img
            decoding="async"
            src="/circle.svg"
            alt=""
          />
        </div>
        <div className="typing" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div
          className="ans-bubble"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </>
  );
}
