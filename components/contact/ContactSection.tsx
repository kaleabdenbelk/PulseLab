import ContactForm from "./ContactForm";
import { EYEBROWS, CONTACT } from "../constants";

export default function ContactSection() {
  return (
    <section className="rsec contact" id="contact" data-key="contact">
      <div className="eyebrow in">
        <span className="num">{EYEBROWS.contact.num}</span> {EYEBROWS.contact.label} <span className="ind" />
        <span className="end">{EYEBROWS.contact.end}</span>
      </div>

      <div className="contact-inner">
        <div>
          <h2 dangerouslySetInnerHTML={{ __html: CONTACT.heading }} />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
