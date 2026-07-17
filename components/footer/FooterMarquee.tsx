const stats = [
  { value: "73%", label: "Returning clients" },
  { value: "98%", label: "Customer satisfaction" },
  { value: "10+", label: "Years experience" },
  { value: "140+", label: "Delivered projects" },
];

const diamond = (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L15 8L8 15L1 8L8 1Z" fill="currentColor" />
  </svg>
);

export default function FooterMarquee() {
  return (
    <section className="ft-marquee">
      <div className="footer-mq">
        <div className="track">
          {[...stats, ...stats].map((stat, i) => (
            <span key={i}>
              <span className="phrase">
                {stat.value} <em>{stat.label}</em>
              </span>
              <span className="sep" aria-hidden="true">
                {diamond}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
