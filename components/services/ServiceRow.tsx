interface ServiceRowProps {
  id: string;
  title: string;
  desc: string;
  tags: readonly string[];
  image: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ServiceRow({
  id,
  title,
  desc,
  tags,
  image,
  isOpen,
  onToggle,
}: ServiceRowProps) {
  const panelId = `srv-panel-${id}`;

  return (
    <div className={`srv-row${isOpen ? " is-open" : ""}`} data-srv={id} role="listitem">
      <button
        className="srv-head"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="srv-lime" aria-hidden="true" />
        <span className="srv-dot" aria-hidden="true" />
        <span className="srv-num"><i>{id}</i></span>
        <span className="srv-title" dangerouslySetInnerHTML={{ __html: title }} />
        <span className="srv-toggle" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path className="srv-plus-h" d="M5 12h14" />
            <path className="srv-plus-v" d="M12 5v14" />
          </svg>
        </span>
      </button>
      <div className="srv-panel" id={panelId} role="region">
        <div className="srv-panel-inner">
          <div className="srv-body">
            <p className="srv-desc">{desc}</p>
            <ul className="srv-tags" role="list">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <figure className="srv-fig">
            <img decoding="async" src={image} width="1254" height="898" alt="" loading="lazy" />
          </figure>
        </div>
      </div>
    </div>
  );
}
