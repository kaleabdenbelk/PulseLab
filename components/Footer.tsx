"use client"
export function Footer() {
  const year = new Date().getFullYear();

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
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-7 h-7">
            <span
              className="absolute w-7 h-7 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,232,122,0.25) 0%, transparent 70%)",
                animation: "pulse-ring 2.5s cubic-bezier(0.4,0,0.6,1) infinite",
              }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full block"
              style={{ background: "#00E87A" }}
            />
          </div>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#ffffff",
            }}
          >
            Pulse<span style={{ color: "#00E87A" }}>Lab</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <a
            href="https://t.me/pulselab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition-colors duration-200"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              color: "#5050a0",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00E87A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5050a0")}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.68l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.958.879z" />
            </svg>
            Telegram
          </a>
          <a
            href="mailto:hello@pulselab.io"
            className="text-xs transition-colors duration-200"
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
