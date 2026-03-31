export function HowItWorksSection() {
  const steps = [
    {
      num: "1",
      title: "Diagnose",
      desc: "We analyze your product, funnel, and user behavior to identify growth constraints.",
    },
    {
      num: "2",
      title: "Design",
      desc: "We build custom growth models aligned with your product mechanics.",
    },
    {
      num: "3",
      title: "Deploy",
      desc: "Experiments are launched, measured, and continuously optimized.",
    },
  ];

  return (
    <section className="pd-hiw" style={{ maxWidth: "1680px", margin: "0 auto" }}>
      <h2 className="pd-section-heading">How It works</h2>
      <div className="pd-hiw-cards">
        {steps.map((step, i) => (
          <div key={i} className="pd-hiw-card" style={{ marginTop: "48px" }}>
            <div className="pd-hiw-num-wrap">
              <span className="pd-hiw-num">{step.num}</span>
            </div>
            <h3 className="pd-hiw-card-title">{step.title}</h3>
            <p className="pd-hiw-card-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
