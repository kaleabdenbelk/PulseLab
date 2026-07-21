import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Project } from "./data";
import { PROJECTS } from "../constants";

function SealSVG({ id }: { id: string }) {
  const pathId = `agSealPath_${id}`;
  return (
    <div className="ag-seal" aria-hidden="true">
      <svg className="ag-seal__svg" viewBox="0 0 200 200">
        <defs>
          <path
            id={pathId}
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <circle className="ag-seal__ring" cx="100" cy="100" r="96" />
        <circle className="ag-seal__ring-inner" cx="100" cy="100" r="62" />
        <g className="ag-seal__spin">
          <text className="ag-seal__text">
            <textPath href={`#${pathId}`} startOffset="0">
              SELECTED WORK · REVIEWED WITH CARE · PULSE DIGITAL ·{" "}
            </textPath>
          </text>
        </g>
      </svg>
      <span className="ag-seal__mark">
        <Image
          src="/circle.svg"
          width={24}
          height={24}
          unoptimized
          alt=""
        />
      </span>
    </div>
  );
}

export default function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const router = useRouter();
  const num = String(index + 1).padStart(2, "0");
  const paddedId = `ws${index}`;

  return (
    <article
      className="ws-card"
      data-case={project.id}
      style={{ "--idx": index } as React.CSSProperties}
      role="button"
      tabIndex={0}
      data-cursor="view"
      aria-label={project.ariaLabel}
      onClick={() => router.push(`/case-studies/${project.id}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          router.push(`/case-studies/${project.id}`);
        }
      }}
    >
      <div className="ws-head">
        <span className="ws-eyebrow">
          <span className="ws-idx">
            <b>{num}</b> / {String(total).padStart(2, "0")}
          </span>
          <span className="ws-name">{project.name}</span>
        </span>
        <span className="ws-view" aria-hidden="true">
          {PROJECTS.viewProject}{" "}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>

      <div className="ws-stage">
        <Image
          src={project.image}
          width={1672}
          height={941}
          unoptimized
          alt={`${project.name} — case study preview`}
        />
        <span className="ws-pill">{project.pill}</span>
        <span className="ws-year">{project.year}</span>
        <SealSVG id={paddedId} />
      </div>

      <div className="ws-panel">
        <div className="ws-lead">
          <p className="ws-desc">{project.description}</p>
        </div>
        <div className="ws-info">
          <div className="ws-block">
            <span className="ws-label">{PROJECTS.deliverables}</span>
            <p>{project.deliverables}</p>
          </div>
          <div className="ws-block">
            <span className="ws-label">{PROJECTS.outcome}</span>
            <p>{project.outcome}</p>
          </div>
        </div>
        <span className="ws-cta" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </article>
  );
}
