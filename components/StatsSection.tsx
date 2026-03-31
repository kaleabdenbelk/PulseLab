export function StatsSection() {
  const stats = [
    { value: "3.2x", label: "Average MRR growth multiplier" },
    { value: "10+", label: "SaaS products scaled" },
    { value: "30K+", label: "Customers acquired for clients" },
  ];

  return (
    <section className="pd-stats-outer" style={{ maxWidth: "1680px", margin: "0 auto" }}>
      <div className="pd-stats-inner">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="pd-stat-value">{stat.value}</div>
            <div className="pd-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
