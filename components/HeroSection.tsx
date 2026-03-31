"use client";

import { TriangleGrid } from "@/constants";
import { useClientFlow } from "./ClientFlowContext";

export function HeroSection() {
  const { openModal } = useClientFlow();

  return (
    <section className="pd-hero pd-section">
      <div className="pd-glow-orange" style={{ left: "-120px", top: "-80px" }} />
      <div className="pd-glow-grey" style={{ right: "-120px", top: "-40px" }} />

      <p className="pd-announce-bar">Top Brands Trust Our Data Services!</p>

      <div style={{ position: "absolute", left: "40px", top: "140px", opacity: 0.8 }}>
        <TriangleGrid />
      </div>

      <h1 className="pd-hero-heading">We build growth systems for software products.</h1>

      <p className="pd-hero-sub">
        Pulse Digital helps SaaS startups, mobile apps, and online platforms
        acquire and retain users through product-focused growth systems.
      </p>

      <div className="pd-hero-cta">
        <button className="pd-hero-btn-primary" onClick={openModal}>Start Now</button>
        <button className="pd-hero-btn-secondary">Learn More</button>
      </div>

      <div className="pd-hero-image">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/64e3947b76e30293aa4f13eb2ada475a9b71ca8d?width=1800"
          alt="Pulse Digital growth platform"
        />
      </div>
    </section>
  );
}
