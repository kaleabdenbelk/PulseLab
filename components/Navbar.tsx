"use client"
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(5,5,10,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div className="relative flex items-center justify-center w-8 h-8">
            <span
              className="absolute w-8 h-8 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(0,232,122,0.3) 0%, transparent 70%)",
                animation: "pulse-ring 2.5s cubic-bezier(0.4,0,0.6,1) infinite",
              }}
            />
            <span
              className="w-3 h-3 rounded-full block"
              style={{ background: "#00E87A" }}
            />
          </div>
          <span
            className="text-white tracking-tight"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
          >
            Pulse<span style={{ color: "#00E87A" }}>Lab</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-sm transition-colors duration-200"
              style={{
                color: "#9999b0",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#9999b0")
              }
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNav("#contact")}
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
            Start a project
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
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
          <button
            onClick={() => handleNav("#contact")}
            className="px-4 py-2 rounded-lg text-sm text-center mt-2"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              color: "#050508",
              background: "#00E87A",
            }}
          >
            Start a project
          </button>
        </div>
      )}
    </nav>
  );
}
