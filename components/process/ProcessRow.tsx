interface ProcessRowProps {
  step: string;
  title: string;
  desc: string;
  week: string;
  deliverables: readonly string[];
  isPassed: boolean;
  isCurrent: boolean;
  optional?: boolean;
}

export default function ProcessRow({
  step,
  title,
  desc,
  week,
  deliverables,
  isPassed,
  isCurrent,
  optional,
}: ProcessRowProps) {
  const classes = ["proc-row"];
  if (isPassed) classes.push("is-passed");
  if (isCurrent) classes.push("is-current");
  if (optional) classes.push("is-optional");

  return (
    <li className={classes.join(" ")} data-step={step}>
      <span className="proc-node" aria-hidden="true">
        <span className="proc-node-dot" />
      </span>
      <span className="proc-num">{step}</span>
      <div className="proc-content">
        <h3 className="proc-title">{title}</h3>
        {optional && <span className="proc-optional-badge">Optional</span>}
        <p className="proc-desc">{desc}</p>
      </div>
      <div className="proc-meta">
        <span className="meta-week">{week}</span>
        <ul className="meta-deliv" role="list">
          {deliverables.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
