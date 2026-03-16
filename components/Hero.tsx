"use client"
import { useEffect, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#050508" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Green glow orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,232,122,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
        }}
      />

      {/* Second soft orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(90,60,255,0.07) 0%, transparent 70%)",
          bottom: "10%",
          right: "5%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
          style={{
            border: "1px solid rgba(0,232,122,0.25)",
            background: "rgba(0,232,122,0.06)",
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(16px)",
            transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1) 100ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) 100ms",
          }}
        >
          <span
            className="text-xs"
            style={{
              color: "#00E87A",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Growth Partner
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(24px)",
            transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1) 200ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) 200ms",
            maxWidth: "820px",
          }}
        >
          We grow SaaS products{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00E87A 0%, #00bfff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            that matter.
          </span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: 1.65,
            color: "#7878a0",
            maxWidth: "560px",
            marginTop: "24px",
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
            transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1) 320ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) 320ms",
          }}
        >
          PulseLab is a technical growth partner for early-stage founders. We engineer acquisition, optimize conversion, and unlock compounding scale.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 mt-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(16px)",
            transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1) 420ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) 420ms",
          }}
        >
          <button
            onClick={() => handleScroll("#contact")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm group"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              color: "#050508",
              background: "#00E87A",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 32px rgba(0,232,122,0.45)";
              e.currentTarget.style.background = "#00ff87";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.background = "#00E87A";
              e.currentTarget.style.transform = "none";
            }}
          >
            Start a project
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={() => handleScroll("#services")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              color: "#c8c8d8",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.2s ease",
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
            See our work
          </button>
        </div>

        {/* Social proof strip */}
        <div
          className="flex items-center gap-6 mt-14 flex-wrap justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1) 550ms",
          }}
        >
          <span className="text-xs" style={{ color: "#44445a", fontFamily: "Inter, sans-serif" }}>
            Trusted by founders at
          </span>
          {["Notion-style", "Linear-style", "Vercel-style", "Stripe-style"].map((name) => (
            <span
              key={name}
              className="text-xs px-3 py-1 rounded-md"
              style={{
                color: "#5a5a78",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #050508)",
        }}
      />
    </section>
  );
}
