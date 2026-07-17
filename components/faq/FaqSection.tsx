"use client";

import { useState } from "react";
import { faqs } from "./data";
import FaqItem from "./FaqItem";
import { EYEBROWS, FAQ_CTA } from "../constants";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="rsec faq-block" id="faq" data-key="faq">
      <div className="eyebrow in">
        <span className="num">{EYEBROWS.faq.num}</span> {EYEBROWS.faq.label} <span className="ind" />
        <span className="end">{EYEBROWS.faq.end}</span>
      </div>
      <div className="chat">
        <div className="chat-feed">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              index={i}
              question={faq.question}
              answer={faq.answer}
              isActive={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <a className="chat-compose" href="#contact">
          <div className="cc-prompt">
            <div className="cc-ava" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div className="cc-text">
              {FAQ_CTA.prompt} <em>{FAQ_CTA.promptSuffix}</em>
            </div>
          </div>
          <span className="cc-send">
            {FAQ_CTA.button}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
