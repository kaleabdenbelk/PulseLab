"use client"
import { Phone } from "lucide-react";
import { PulseLabLogo } from "./Logo";

const TelegramIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.68l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.958.879z" />
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();

  const linkStyle: React.CSSProperties = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    color: "#5050a0",
    textDecoration: "none",
    fontSize: "0.75rem",
    transition: "color 0.2s ease",
  };

  return (
    <footer
      className="relative py-10 px-6"
      style={{
        background: "#050508",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <PulseLabLogo height={22} />
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#ffffff",
              letterSpacing: "-0.01em",
            }}
          >
            Pulse<span style={{ color: "#3AED4C" }}>Lab</span>
          </span>
        </div>

        {/* Contact links */}
        <div className="flex items-center gap-5 flex-wrap justify-center">
          <a
            href="tel:0922463636"
            className="flex items-center gap-1.5"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#3AED4C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5050a0")}
          >
            <Phone size={11} />
            0922 463 636
          </a>
          <a
            href="https://t.me/Pulsejar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#3AED4C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5050a0")}
          >
            <TelegramIcon />
            Telegram
          </a>
          <a
            href="mailto:hello@pulselab.io"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#3AED4C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5050a0")}
          >
            hello@pulselab.io
          </a>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "0.75rem",
            color: "#3a3a5a",
          }}
        >
          © {year} PulseLab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
