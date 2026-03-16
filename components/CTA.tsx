"use client"
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight, Send } from "lucide-react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

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
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,232,122,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,232,122,0.2), transparent)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <AnimatedSection>
          {/* Badge */}
          <span
            className="inline-block text-xs mb-6 px-3 py-1 rounded-full"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              color: "#00E87A",
              background: "rgba(0,232,122,0.08)",
              border: "1px solid rgba(0,232,122,0.2)",
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
                background: "linear-gradient(135deg, #00E87A 0%, #00bfff 100%)",
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
            Drop your email and we'll reach out within 24 hours. No fluff — just a focused conversation about your growth goals.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div
                className="flex-1 relative"
                style={{
                  borderRadius: "12px",
                  border: focused
                    ? "1px solid rgba(0,232,122,0.4)"
                    : "1px solid rgba(255,255,255,0.1)",
                  boxShadow: focused
                    ? "0 0 0 3px rgba(0,232,122,0.08)"
                    : "none",
                  transition: "all 0.2s ease",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="you@startup.com"
                  required
                  className="w-full px-4 py-3 bg-transparent outline-none text-sm"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#ffffff",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm whitespace-nowrap"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  color: "#050508",
                  background: "#00E87A",
                  transition: "all 0.2s ease",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 24px rgba(0,232,122,0.4)";
                  e.currentTarget.style.background = "#00ff87";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.background = "#00E87A";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <Send size={14} />
                Let's talk
              </button>
            </form>
          ) : (
            <div
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl max-w-md mx-auto"
              style={{
                background: "rgba(0,232,122,0.08)",
                border: "1px solid rgba(0,232,122,0.2)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "#00E87A", animation: "pulse-ring 2s infinite" }}
              />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  color: "#00E87A",
                }}
              >
                We've received your email — talk soon!
              </span>
            </div>
          )}

          {/* Alt contact */}
          <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
            <a
              href="https://t.me/pulselab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                color: "#5050a0",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00E87A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5050a0")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.68l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.958.879z" />
              </svg>
              @pulselab
            </a>
            <span style={{ color: "#2a2a4a" }}>·</span>
            <a
              href="mailto:hello@pulselab.io"
              className="text-sm transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                color: "#5050a0",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00E87A")}
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
