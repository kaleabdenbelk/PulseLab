export default function SpinningBadge() {
  return (
    <div className="spin-badge" aria-hidden="true">
      <div className="spin-badge__ring">
        <svg viewBox="0 0 100 100">
          <defs>
            <path
              id="spinBadgeCircle"
              d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              fill="none"
            />
          </defs>
          <text>
            <textPath
              href="#spinBadgeCircle"
              startOffset="0%"
            >
              Human-Led  ·  AI-Speed  ·  Design Studio  ·  Human-Led  ·  AI-Speed  ·  Design Studio  ·{" "}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="spin-badge__core">
        <img
          decoding="async"
          src="https://allgoodstudio.com/assets/ai-magic.svg"
          alt=""
        />
      </div>
    </div>
  );
}
