import { TriangleGrid } from "@/constants";

export function WhyPLGSection() {
  return (
    <section className="pd-plg" style={{ maxWidth: "1680px", margin: "0 auto" }}>
      <div style={{ position: "absolute", right: "60px", top: "0", opacity: 0.8, display: "none" }}>
        <TriangleGrid />
      </div>

      <div className="pd-plg-left">
        <p className="pd-plg-label">Why Product-Led Growth Wins</p>
        <h2 className="pd-plg-heading">
          Growth is not campaigns. It is systems embedded into the product itself.
        </h2>
        <p className="pd-plg-desc">
          We design measurable mechanisms that scale with your users.
        </p>

        <div style={{ marginBottom: "28px" }}>
          <svg width="56" height="56" viewBox="0 0 71 71" fill="none">
            <g clipPath="url(#gridClip)">
              <path d="M46.641 69.1692H69.1692V46.641H46.641V69.1692Z" stroke="#3AED4C" strokeWidth="3" strokeMiterlimit="10"/>
              <path d="M46.641 46.6347H69.1692V24.1065L46.641 24.1065V46.6347Z" stroke="#3AED4C" strokeWidth="3" strokeMiterlimit="10"/>
              <path d="M24.1065 46.6347H46.6348V24.1065L24.1065 24.1065L24.1065 46.6347Z" stroke="#3AED4C" strokeWidth="3" strokeMiterlimit="10"/>
              <path d="M46.641 24.1164L69.1692 24.1164V1.58818L46.641 1.58818V24.1164Z" stroke="#3AED4C" strokeWidth="3" strokeMiterlimit="10"/>
              <path d="M24.1065 24.1164L46.6348 24.1164V1.58818L24.1065 1.58818L24.1065 24.1164Z" stroke="#3AED4C" strokeWidth="3" strokeMiterlimit="10"/>
              <path d="M1.58824 24.1164L24.1165 24.1164L24.1165 1.58818L1.58824 1.58818L1.58824 24.1164Z" stroke="#3AED4C" strokeWidth="3" strokeMiterlimit="10"/>
            </g>
            <defs>
              <clipPath id="gridClip"><rect width="70.7552" height="70.7552" fill="white"/></clipPath>
            </defs>
          </svg>
        </div>

        <button className="pd-plg-btn">Read a Case</button>
      </div>

      <div className="pd-plg-right">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/fa11178e69323799d48ed97aeb859fc178835e8f?width=885"
          alt="Growth chart"
        />
      </div>
    </section>
  );
}
