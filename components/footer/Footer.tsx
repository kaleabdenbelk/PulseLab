import { FOOTER } from "../constants";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr-inner">
        {/* Top: headline + CTA */}
        <div className="ftr-top">
          <div className="ftr-lead">
            <span className="ftr-status">
              <span className="dot" /> {FOOTER.status}
            </span>
            <h2 className="ftr-headline">
              Good work starts<br />
              with a <em>careful brief</em>
              <span className="ftr-period">.</span>
            </h2>
            <p className="ftr-sub">
              {FOOTER.subtext}
            </p>
            <br />
            <nav className="ftr-nav" aria-label="Footer navigation">
              {FOOTER.navLinks.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </nav>
          </div>
          <div className="ftr-action">
            <a className="ftr-cta" href="#contact">
              {FOOTER.cta}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              className="ftr-email"
              href={`mailto:${FOOTER.email}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
              {FOOTER.email}
            </a>
          </div>
        </div>

        {/* Giant logo */}
        <div className="ftr-logo" aria-hidden="true">
          <img
            decoding="async"
            src="/logo-white.svg"
            alt=""
          />
        </div>



        {/* Nav + social */}
        {/* <div className="ftr-rowline">
          
          <div className="ftr-social">
            <a
              href="https://www.instagram.com/allgoodstudioco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/irshad-ahamed-74b7b8416/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://x.com/allgoodstudioco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l6.5 8L4 20h2l5.5-6.5L16 20h4l-6.5-8L20 4h-2l-5.5 6.5L8 4H4z" />
              </svg>
            </a>
            <a
              href="https://dribbble.com/irshadac5d"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
              </svg>
            </a>
          </div>
        </div> */}


        {/* Legal */}
        <div className="ftr-legal">
          <span>
            &copy; 2026 · All Rights Reserved by{" "}
            <a href="#hero">{FOOTER.studioName}</a>
          </span>
          <span className="ftr-loc">
            {FOOTER.location}
          </span>
          <span className="ftr-legal-links">
            <a href="/privacy">{FOOTER.privacy}</a>
            <span className="sep">·</span>
            <a href="/terms">{FOOTER.terms}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
