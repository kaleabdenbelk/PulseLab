"use client"
import { AnimatedSection } from "./AnimatedSection";
import { Microscope, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Microscope size={18} />,
    title: "Diagnose",
    description:
      "We start with a technical growth audit — analytics, funnel mapping, competitive benchmarking, and tracking integrity. No guesswork.",
    detail: "2 to 3 days",
  },
  {
    number: "02",
    icon: <Wrench size={18} />,
    title: "Build",
    description:
      "We engineer a prioritized roadmap of high impact experiments and infrastructure: tracking, landing pages, SEO, paid systems.",
    detail: "Sprint based",
  },
  {
    number: "03",
    icon: <Rocket size={18} />,
    title: "Scale",
    description:
      "Once we identify what's compounding, we double down. Systematic iteration until growth becomes predictable and defensible.",
    detail: "Ongoing",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#07070f" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(58,237,76,0.15), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(58,237,76,0.1), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <span
            className="inline-block text-xs mb-4 px-3 py-1 rounded-full"
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
            How it works
          </span>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#ffffff",
            }}
          >
            A process built for speed,
            <br />
            <span style={{ color: "#4a4a6a" }}>not bureaucracy.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 120} direction="up">
              <div
                className="relative p-8 rounded-2xl flex flex-col h-full"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{
                      background: "rgba(58,237,76,0.1)",
                      border: "1px solid rgba(58,237,76,0.2)",
                      color: "#3AED4C",
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 800,
                      fontSize: "0.75rem",
                      color: "rgba(58,237,76,0.5)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="flex-1"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "#6060a0",
                  }}
                >
                  {step.description}
                </p>

                <div className="mt-6">
                  <span
                    className="text-xs px-2 py-1 rounded-md"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      color: "#3AED4C",
                      background: "rgba(58,237,76,0.08)",
                      border: "1px solid rgba(58,237,76,0.15)",
                    }}
                  >
                    {step.detail}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
