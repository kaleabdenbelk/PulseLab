import { LogoSVG } from "@/constants";

export function Footer() {
  return (
    <footer className="pd-footer">
      <div className="pd-footer-inner">
        <div className="pd-footer-brand">
          <div className="pd-footer-logo">
            <LogoSVG size={44} />
            <span className="pd-logo-text">
              <span className="pd-logo-white">Pulse </span>
              <span className="pd-logo-green">Digital</span>
            </span>
          </div>
          <p className="pd-footer-tagline">Growth is engineered, not guessed.</p>
        </div>

        <div>
          <h4 className="pd-footer-col-title">Quick links</h4>
          <ul className="pd-footer-links">
            {["Home", "Pricing", "About us", "Service", "Blog"].map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="pd-footer-newsletter">
          <h4 className="pd-footer-col-title">Quick links</h4>
          <p className="pd-footer-newsletter-label">Join over 68,000 people getting our emails</p>
          <div className="pd-footer-email-row">
            <input
              type="email"
              className="pd-footer-email-input"
              placeholder="Enter Email"
            />
            <button className="pd-footer-subscribe-btn">Subscribe</button>
          </div>
          <p className="pd-footer-disclaimer">We only send interesting and relevant emails.</p>
        </div>
      </div>

      <p className="pd-footer-copyright">© Copyright 2026 Zendro - All Rights Reserved</p>
    </footer>
  );
}
