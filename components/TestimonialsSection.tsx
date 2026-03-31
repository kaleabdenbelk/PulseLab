"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, QuoteIcon } from "@/constants";

export function TestimonialsSection() {
  const [activeAvatar, setActiveAvatar] = useState(0);

  const avatars = [
    "https://api.builder.io/api/v1/image/assets/TEMP/ff26f281bbd78affb107f2e72dc925a681475103?width=131",
    "https://api.builder.io/api/v1/image/assets/TEMP/7772ce0154fc626d14958f08ad77c68cbaee940b?width=131",
    "https://api.builder.io/api/v1/image/assets/TEMP/f6abec1efc955b43d65045da1cc3f193d4f6bcca?width=237",
    "https://api.builder.io/api/v1/image/assets/TEMP/1b1ced802636d3d2c7d54c9fcd1c61236e9a72b5?width=131",
    "https://api.builder.io/api/v1/image/assets/TEMP/54fbfe70b31af14cc277b6f101fad19ff8c3777b?width=131",
  ];

  return (
    <section className="pd-testimonials" style={{ maxWidth: "1680px", margin: "0 auto" }}>
      <h2 className="pd-section-heading">What our client&apos;s say</h2>

      <div className="pd-quote-icon">
        <QuoteIcon />
      </div>

      <p className="pd-testimonial-text">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim.
      </p>

      <p className="pd-testimonial-name">Adrian Smith</p>

      <div className="pd-avatar-row">
        <button
          className="pd-avatar-btn"
          onClick={() => setActiveAvatar((prev) => (prev - 1 + avatars.length) % avatars.length)}
          aria-label="Previous"
        >
          <ArrowLeft />
        </button>

        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Client avatar"
            className={`pd-avatar ${i === activeAvatar ? "pd-avatar--active" : ""}`}
            onClick={() => setActiveAvatar(i)}
            style={{ cursor: "pointer" }}
          />
        ))}

        <button
          className="pd-avatar-btn"
          onClick={() => setActiveAvatar((prev) => (prev + 1) % avatars.length)}
          aria-label="Next"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
