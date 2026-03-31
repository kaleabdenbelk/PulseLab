"use client";

import { LogoSVG } from "@/constants";
import { useClientFlow } from "./ClientFlowContext";

export function Navbar() {
  const { openModal } = useClientFlow();

  return (
    <nav className="pd-navbar">
      <div className="pd-nav-inner">
        <div className="pd-logo">
          <LogoSVG size={48} />
          <span className="pd-logo-text">
            <span className="pd-logo-white">Pulse </span>
            <span className="pd-logo-green">Digital</span>
          </span>
        </div>
        <div className="pd-nav-links">
          <a href="#" className="pd-nav-link pd-nav-link--active">Home</a>
          <a href="#" className="pd-nav-link">Systems</a>
          <a href="#" className="pd-nav-link">Experiments</a>
          <a href="#" className="pd-nav-link">Insights</a>
          <a href="#" className="pd-nav-link">About</a>
          <a href="#" className="pd-nav-link">Contact</a>
        </div>
        <button className="pd-btn-outline" onClick={openModal}>Book Call</button>
      </div>
    </nav>
  );
}
