interface AsideSectionProps {
  num: string;
  ofTotal: string;
  label: string;
  heading: string;
  desc: string;
  progressLabel: string;
  progressRange: string[];
  isActive: boolean;
  progress: number;
  id: string;
}

export default function AsideSection({
  num,
  ofTotal,
  label,
  heading,
  desc,
  progressLabel,
  progressRange,
  isActive,
  progress,
  id,
}: AsideSectionProps) {
  return (
    <div className={`aside-section${isActive ? " is-active" : ""}`} data-key={id}>
      <div>
        <div className="num-row">
          <div className="num">{num}</div>
          <div className="of">{ofTotal}</div>
        </div>
        <div className="label" dangerouslySetInnerHTML={{ __html: label }} />
        <h2 dangerouslySetInnerHTML={{ __html: heading }} />
        <p className="desc">{desc}</p>
      </div>
      <div className="aside-progress">
        <div className="row">
          <span>{progressLabel}</span>
          <b>{Math.round(progress * 100)}%</b>
        </div>
        <div className="bar">
          <i style={{ width: `${progress * 100}%` }} />
        </div>
        <div className="row" style={{ color: "var(--ink-3)" }}>
          {progressRange.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
