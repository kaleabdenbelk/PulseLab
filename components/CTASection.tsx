"use client";

import { useClientFlow } from "./ClientFlowContext";

export function CTASection() {
  const { openModal } = useClientFlow();

  return (
    <section className="pd-cta" style={{ maxWidth: "1680px", margin: "0 auto" }}>
      <div
        className="pd-glow-green"
        style={{ left: "-60px", bottom: "0px", position: "absolute", opacity: 0.6 }}
      />
      <div
        className="pd-glow-green"
        style={{ right: "-60px", bottom: "0px", position: "absolute", opacity: 0.6 }}
      />

      <h2 className="pd-cta-heading">Get in touch</h2>
      <p className="pd-cta-sub-label">Ready to scale your product?</p>
      <p className="pd-cta-desc">
        Book a focused 30 minute growth call.
        <br />
        No fluff, no sales pitch
        <br />
        Just a direct conversation about
        <br />
        your goals and how we can help.
      </p>

      <div className="pd-cta-buttons">
        <button className="pd-cta-btn-primary" onClick={openModal}>Book A Call</button>
        <button className="pd-cta-btn-secondary">Contact Us</button>
      </div>
    </section>
  );
}
