import { benefits } from "./data";
import BenefitCard from "./BenefitCard";
import { EYEBROWS, BENEFITS_STATS } from "../constants";

const diamond = (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L15 8L8 15L1 8L8 1Z" fill="currentColor" />
  </svg>
);

export default function BenefitsSection() {
  return (
    <section className="rsec rsec--why" id="why" data-key="why">
      <div className="eyebrow in">
        <span className="num">{EYEBROWS.why.num}</span> {EYEBROWS.why.label} <span className="ind" />
        <span className="end">{EYEBROWS.why.end}</span>
      </div>
      <div className="ben-grid">
        {benefits.map((b, i) => (
          <BenefitCard
            key={b.id}
            id={b.id}
            title={b.title}
            desc={b.desc}
            image={b.image}
            index={i}
          />
        ))}
      </div>
      <div className="ft-marquee contained-marquee">
        <div className="footer-mq">
          <div className="track">
            {[...BENEFITS_STATS, ...BENEFITS_STATS].map((stat, i) => (
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
      </div>
    </section>
  );
}
