"use client";

import { useState } from "react";
import { PlusIcon } from "@/constants";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes Pulse Digital different?",
      a: "We focus on product growth systems, not marketing campaigns.",
    },
    {
      q: "Do you run ads?",
      a: "Only when they support product-driven growth strategies.",
    },
    {
      q: "Who is this for?",
      a: "Early-stage and scaling software products.",
    },
  ];

  return (
    <section className="pd-faq" style={{ maxWidth: "1680px", margin: "0 auto" }}>
      <div className="pd-faq-left">
        <p className="pd-faq-label">Frequently Asked Questions</p>
        <h2 className="pd-faq-heading">Any Questions? Find here.</h2>
        <p className="pd-faq-sub">Boost your Sales and Marketing Efficiency</p>
        <button className="pd-faq-send-btn">Send Message</button>
      </div>

      <div className="pd-faq-right">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="pd-faq-item"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="pd-faq-question-row">
              <span className="pd-faq-question">{faq.q}</span>
              <div className="pd-faq-toggle">
                <PlusIcon />
              </div>
            </div>
            {openIndex === i && <p className="pd-faq-answer">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
