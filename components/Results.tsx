"use client"
import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Quote } from "lucide-react";

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function Metric({
  value,
  label,
  suffix,
  prefix,
  index,
}: {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, 1200, active);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const displayValue = Number.isInteger(value) ? Math.floor(count) : count.toFixed(1);

  return (
    <AnimatedSection delay={index * 100} direction="up">
      <div
        ref={ref}
        className="text-center p-8 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "#ffffff",
            marginBottom: "8px",
          }}
        >
          {prefix && <span style={{ color: "#00E87A" }}>{prefix}</span>}
          {displayValue}
          {suffix && <span style={{ color: "#00E87A" }}>{suffix}</span>}
        </div>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            color: "#6060a0",
          }}
        >
          {label}
        </p>
      </div>
    </AnimatedSection>
  );
}

const testimonials = [
  {
    quote:
      "PulseLab tripled our trial-to-paid conversion in 6 weeks. They don't just consult — they build.",
    name: "Alex M.",
    role: "Founder, SaaS platform",
    avatar: "AM",
  },
  {
    quote:
      "The SEO infrastructure they set up is still compounding 8 months later. ROI is extraordinary.",
    name: "Sarah K.",
    role: "CEO, B2B tool",
    avatar: "SK",
  },
  {
    quote:
      "Finally a growth partner that understands product. They think in systems, not campaigns.",
    name: "David R.",
    role: "Co-founder, DevTools startup",
    avatar: "DR",
  },
];

export function Results() {
  return (
    <section
      id="results"
      className="py-24 md:py-32 relative"
      style={{ background: "#050508" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span
            className="inline-block text-xs mb-4 px-3 py-1 rounded-full"
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
            Results
          </span>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Numbers that tell
            <br />
            <span style={{ color: "#4a4a6a" }}>the whole story.</span>
          </h2>
        </AnimatedSection>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
          <Metric value={3.2} label="Average MRR growth multiplier" suffix="x" index={0} />
          <Metric value={47} label="SaaS products scaled" suffix="+" index={1} />
          <Metric value={12} label="Revenue unlocked for clients" prefix="$" suffix="M+" index={2} />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 100} direction="up">
              <div
                className="p-6 rounded-2xl flex flex-col gap-4 h-full"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <Quote size={16} style={{ color: "rgba(0,232,122,0.4)" }} />
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "#a0a0c0",
                    flex: 1,
                  }}
                >
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-full text-xs"
                    style={{
                      background: "rgba(0,232,122,0.12)",
                      color: "#00E87A",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      border: "1px solid rgba(0,232,122,0.2)",
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        color: "#d0d0e8",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: "0.75rem",
                        color: "#5050a0",
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
