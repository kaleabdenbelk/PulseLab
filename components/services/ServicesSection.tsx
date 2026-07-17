"use client";

import { useState } from "react";
import { services } from "./data";
import ServiceRow from "./ServiceRow";
import { EYEBROWS } from "../constants";

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="rsec rsec--services" id="services" data-key="services">
      <div className="eyebrow in">
        <span className="num">{EYEBROWS.services.num}</span> {EYEBROWS.services.label} <span className="ind" />
        <span className="end">{EYEBROWS.services.end}</span>
      </div>
      <div className="srv-acc" role="list">
        {services.map((srv, i) => (
          <ServiceRow
            key={srv.id}
            id={srv.id}
            title={srv.title}
            desc={srv.desc}
            tags={srv.tags}
            image={srv.image}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}
