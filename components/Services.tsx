"use client"
import { AnimatedSection } from "./AnimatedSection";
import {
  TrendingUp,
  MousePointerClick,
  BarChart3,
  Search,
  Megaphone,
  Gauge,
  Share2,
  Paintbrush,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { useClientFlow } from "./ClientFlowContext";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}

const services: ServiceCard[] = [
  {
    icon: <TrendingUp size={20} />,
    title: "Growth Engineering",
    description:
      "Systematic experimentation loops that identify and scale what actually moves your MRR. Data led, not gut led.",
    tag: "Core",
  },
  {
    icon: <MousePointerClick size={20} />,
    title: "Conversion Rate Optimization",
    description:
      "Deep funnel analysis, hypothesis driven A/B tests, and UX improvements that turn more visitors into paying users.",
    tag: "CRO",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Product Analytics",
    description:
      "Instrument your product with precision tracking. Know exactly where users drop off and why they upgrade.",
    tag: "Data",
  },
  {
    icon: <Search size={20} />,
    title: "SEO and Content Systems",
    description:
      "Programmatic SEO architecture and content engines that compound organic traffic month over month.",
    tag: "Organic",
  },
  {
    icon: <Megaphone size={20} />,
    title: "Performance Marketing",
    description:
      "Paid acquisition built for SaaS unit economics. We scale what's profitable and cut what isn't.",
    tag: "Paid",
  },
  {
    icon: <Gauge size={20} />,
    title: "Technical SEO Audits",
    description:
      "Core Web Vitals, crawlability, structured data — we eliminate every technical barrier between you and rank 1.",
    tag: "Technical",
  },
  {
    icon: <Globe size={20} />,
    title: "Digital Marketing",
    description:
      "Data driven marketing strategies focused on acquiring and retaining users for tech products and startups.",
    tag: "Marketing",
  },
  {
    icon: <Share2 size={20} />,
    title: "Social Media Management",
    description:
      "Strategic content planning, platform growth, and engagement systems tailored for startups and online communities.",
    tag: "Social",
  },
  {
    icon: <Paintbrush size={20} />,
    title: "Brand Creating",
    description:
      "Brand identity creation including positioning, visual identity direction, and messaging strategy for tech products.",
    tag: "Brand",
  },
];

function Card({ service, index }: { service: ServiceCard; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimatedSection delay={index * 70} direction="up">
      <div
        className="relative p-6 rounded-2xl h-full cursor-default"
        style={{
          background: hovered ? "rgba(58,237,76,0.04)" : "rgba(255,255,255,0.03)",
          border: hovered
            ? "1px solid rgba(58,237,76,0.22)"
            : "1px solid rgba(255,255,255,0.07)",
          transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
          boxShadow: hovered
            ? "0 0 40px rgba(58,237,76,0.06), inset 0 0 0 1px rgba(58,237,76,0.1)"
            : "none",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className="inline-block px-2 py-0.5 rounded-md text-xs mb-4"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            color: hovered ? "#3AED4C" : "#4a4a6a",
            background: hovered ? "rgba(58,237,76,0.1)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${hovered ? "rgba(58,237,76,0.2)" : "rgba(255,255,255,0.07)"}`,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            transition: "all 0.25s ease",
          }}
        >
          {service.tag}
        </span>

        <div
          className="flex items-center justify-center w-10 h-10 rounded-xl mb-4"
          style={{
            background: hovered ? "rgba(58,237,76,0.12)" : "rgba(255,255,255,0.05)",
            color: hovered ? "#3AED4C" : "#6060a0",
            transition: "all 0.25s ease",
          }}
        >
          {service.icon}
        </div>

        <h3
          className="mb-2"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            color: hovered ? "#ffffff" : "#d0d0e8",
            transition: "color 0.2s ease",
          }}
        >
          {service.title}
        </h3>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "#7070a0",
          }}
        >
          {service.description}
        </p>

        <div
          className="absolute bottom-0 left-6 right-6 h-px rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(58,237,76,0.4), transparent)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      </div>
    </AnimatedSection>
  );
}

export function Services() {
  const { openModal } = useClientFlow();

  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{ background: "#050508" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
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
            Services
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
            Everything your product needs
            <br />
            <span style={{ color: "#4a4a6a" }}>to grow fast.</span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1rem",
              color: "#6060a0",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Nine focused disciplines, one integrated team. We only work on what moves the needle.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {services.map((service, i) => (
            <Card key={service.title} service={service} index={i} />
          ))}
        </div>

        <AnimatedSection className="text-center">
          <button
            onClick={openModal}
            className="px-8 py-3 rounded-xl text-sm"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              color: "#050508",
              background: "#3AED4C",
              border: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 28px rgba(58,237,76,0.4)";
              e.currentTarget.style.background = "#52ff60";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.background = "#3AED4C";
              e.currentTarget.style.transform = "none";
            }}
          >
            Get in Touch
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
