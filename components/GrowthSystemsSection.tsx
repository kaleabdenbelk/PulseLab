import { AcquisitionIcon, ActivationIcon, RetentionIcon } from "@/constants";

export function GrowthSystemsSection() {
  const cards = [
    {
      variant: "left",
      icon: <AcquisitionIcon />,
      title: "Aquisation Systems",
      desc: "We design scalable user acquisition engines aligned with your product experience.",
    },
    {
      variant: "right",
      icon: <ActivationIcon />,
      title: "Activation Design",
      desc: "Turn new users into active users through onboarding and behavioral optimization.",
    },
    {
      variant: "left",
      icon: <RetentionIcon />,
      title: "Retention Engineering",
      desc: "We improve engagement loops that keep users coming back.",
    },
  ];

  return (
    <section style={{ padding: "80px 60px", maxWidth: "1680px", margin: "0 auto" }}>
      <p className="pd-growth-label">Growth Systems</p>
      <p className="pd-growth-subtitle">
        Purchase Accounts Contract + Client Alignment · Powered by Technical Teams &amp; Marketers
      </p>

      {cards.map((card, i) => (
        <div key={i} className={`pd-growth-card pd-growth-card--${card.variant}`}>
          <div className="pd-growth-icon-wrap">{card.icon}</div>
          <div className="pd-growth-content">
            <h3 className="pd-growth-card-title">{card.title}</h3>
            <p className="pd-growth-card-desc">{card.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
