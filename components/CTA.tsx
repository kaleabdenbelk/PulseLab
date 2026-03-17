"use client"
import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight, Phone } from "lucide-react";
import { useClientFlow } from "./ClientFlowContext";

const TelegramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.68l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.958.879z" />
  </svg>
);

export function CTA() {
  const { openModal } = useClientFlow();

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#07070f" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(58,237,76,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(58,237,76,0.2), transparent)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <AnimatedSection>
          <span
            className="inline-block text-xs mb-6 px-3 py-1 rounded-full"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              color: "#3AED4C",
              background: "rgba(58,237,76,0.08)",
              border: "1px solid rgba(58,237,76,0.2)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Get in touch
          </span>

          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Ready to scale
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #3AED4C 0%, #00bfff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              your product?
            </span>
          </h2>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.65,
              color: "#6060a0",
              maxWidth: "440px",
              margin: "0 auto 40px",
            }}
          >
            Book a focused 30 minute growth call. No fluff, no sales pitch — just a direct conversation about your goals and how we can help.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openModal}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                color: "#050508",
                background: "#3AED4C",
                border: "none",
                transition: "all 0.2s ease",
                minWidth: "200px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px rgba(58,237,76,0.4)";
                e.currentTarget.style.background = "#52ff60";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.background = "#3AED4C";
                e.currentTarget.style.transform = "none";
              }}
            >
              Book a Call
              <ArrowRight size={15} />
            </button>

            <button
              onClick={openModal}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                color: "#c8c8d8",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.2s ease",
                minWidth: "200px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.09)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "#c8c8d8";
              }}
            >
              Contact Us
            </button>
          </div>

          {/* Contact links */}
          <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
            <a
              href="tel:0922463636"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                color: "#5050a0",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3AED4C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5050a0")}
            >
              <Phone size={14} />
              0922 463 636
            </a>
            <span style={{ color: "#2a2a4a" }}>·</span>
            <a
              href="https://t.me/pulselab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                color: "#5050a0",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3AED4C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5050a0")}
            >
              <TelegramIcon />
              @pulselab
            </a>
            <span style={{ color: "#2a2a4a" }}>·</span>
            <a
              href="mailto:hello@pulselab.io"
              className="text-sm transition-colors duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                color: "#5050a0",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3AED4C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5050a0")}
            >
              hello@pulselab.io
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
