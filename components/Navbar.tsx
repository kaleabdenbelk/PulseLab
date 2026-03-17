"use client"
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { PulseLabLogo } from "./Logo";
import { useClientFlow } from "./ClientFlowContext";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const TelegramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.68l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.958.879z" />
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useClientFlow();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const linkHoverStyle = {
    color: "#9999b0" as const,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500 as const,
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,5,10,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group flex-shrink-0"
        >
          <PulseLabLogo height={26} />
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "#ffffff",
              letterSpacing: "-0.01em",
            }}
          >
            Pulse<span style={{ color: "#3AED4C" }}>Lab</span>
          </span>
        </button>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-sm transition-colors duration-200"
              style={linkHoverStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9999b0")}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop right: phone + telegram + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0922463636"
            className="flex items-center gap-1.5 text-xs transition-colors duration-200"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              color: "#6060a0",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00E87A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6060a0")}
          >
            <Phone size={12} />
            0922 463 636
          </a>
          <a
            href="https://t.me/Pulsejar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition-colors duration-200"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              color: "#6060a0",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00E87A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6060a0")}
          >
            <TelegramIcon />
            Telegram
          </a>
          <button
            onClick={openModal}
            className="px-4 py-2 rounded-lg text-sm transition-all duration-200"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              color: "#050508",
              background: "#00E87A",
              border: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,232,122,0.4)";
              e.currentTarget.style.background = "#00ff87";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.background = "#00E87A";
            }}
          >
            Book a Call
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-3"
          style={{
            background: "rgba(5,5,10,0.97)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-left text-sm py-2"
              style={{
                color: "#9999b0",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
              }}
            >
              {link.label}
            </button>
          ))}

          <div
            className="flex items-center gap-4 pt-1 pb-1"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <a
              href="tel:0922463636"
              className="flex items-center gap-1.5 text-xs"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                color: "#6060a0",
                textDecoration: "none",
              }}
            >
              <Phone size={12} />
              0922 463 636
            </a>
            <a
              href="https://t.me/Pulsejar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                color: "#6060a0",
                textDecoration: "none",
              }}
            >
              <TelegramIcon />
              Telegram
            </a>
          </div>

          <button
            onClick={() => { setMenuOpen(false); openModal(); }}
            className="px-4 py-2.5 rounded-lg text-sm text-center mt-1"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              color: "#050508",
              background: "#00E87A",
            }}
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
}
