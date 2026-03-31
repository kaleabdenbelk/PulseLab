export function WhoWeHelpSection() {
  const categories = [
    {
      title: "SaaS Products",
      desc: "Improve activation and retention loops.",
    },
    {
      title: "Mobile Apps",
      desc: "Design growth flows inside user journeys.",
    },
    {
      title: "Online Platforms",
      desc: "Scale acquisition without dependency on ads.",
    },
  ];

  return (
    <section
      className="pd-wwh"
      style={{ maxWidth: "1680px", margin: "0 auto", position: "relative" }}
    >
      <div
        className="pd-glow-green"
        style={{ left: "0px", top: "100px", position: "absolute" }}
      />

      <div className="pd-wwh-left">
        <svg width="380" height="324" viewBox="0 0 470 402" fill="none" style={{ width: "100%", height: "auto" }}>
          <g clipPath="url(#blobClip)">
            <path
              d="M198.606 264.658C214.194 310.144 210.258 370.134 198.606 387.783C186.954 405.432 27.5093 403.828 12.1131 387.783C-16.3635 358.107 12.8037 106.243 24.1357 90.1985C44.7582 60.9999 54.1623 60.5857 79.0833 46.082C101.829 32.8442 127.486 24.0781 158.099 12.7917C198.606 -2.14241 435.737 -20.5077 455.686 63.726C466.515 109.447 478.947 214.703 455.686 234.578C441.649 246.573 309.7 234.578 309.7 234.578C309.7 234.578 321.955 151.823 318.517 109.447C309.7 0.794582 158.099 12.7917 158.099 12.7917C127.486 24.0781 101.829 32.8442 79.0833 46.082C79.0833 46.082 55.8645 104.196 61.4367 141.133C72.1898 212.414 175.236 196.464 198.606 264.658Z"
              fill="#3AED4C"
            />
          </g>
          <defs>
            <clipPath id="blobClip">
              <rect width="469.241" height="401.061" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="pd-wwh-right">
        <p className="pd-wwh-label">Simple + Scalable</p>
        <h2 className="pd-wwh-heading">Who We Help</h2>
        {categories.map((cat, i) => (
          <div key={i} className="pd-wwh-card">
            <h3 className="pd-wwh-card-title">{cat.title}</h3>
            <p className="pd-wwh-card-desc">{cat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
