"use client";

import { useState, type FormEvent } from "react";
import { CONTACT } from "../constants";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (!btn) return;

    setStatus("sending");
    btn.disabled = true;
    btn.innerHTML = CONTACT.form.sendingText;

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Array.from(new FormData(form).entries()).map(([k, v]) => [k, String(v)])
        ).toString(),
      });
      if (!res.ok) throw new Error("Network");
      form.reset();
      setStatus("success");
      btn.innerHTML = CONTACT.form.successText;
      btn.style.background = "var(--accent)";
      btn.style.color = "var(--ink)";
    } catch {
      setStatus("error");
      btn.disabled = false;
      btn.innerHTML = `${CONTACT.form.submitText} <span class="arr">${CONTACT.form.submitArrow}</span>`;
    }
  }

  return (
    <form
      action="/?submitted=true"
      aria-label="Project brief"
      className="form"
      id="brief"
      method="POST"
      name="contact"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value={CONTACT.form.subject} />

      <p className="hp-field" aria-hidden="true">
        <label>
          {CONTACT.form.honeypotLabel}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="row">
        <label htmlFor="f-name">{CONTACT.form.nameLabel}</label>
        <input id="f-name" name="name" autoComplete="name" required placeholder={CONTACT.form.namePlaceholder} />
      </div>
      <div className="row">
        <label htmlFor="f-email">{CONTACT.form.emailLabel}</label>
        <input id="f-email" name="email" type="email" autoComplete="email" required placeholder={CONTACT.form.emailPlaceholder} />
      </div>
      <div className="row">
        <label htmlFor="f-company">{CONTACT.form.companyLabel}</label>
        <input id="f-company" name="company" autoComplete="organization" placeholder={CONTACT.form.companyPlaceholder} />
      </div>
      <div className="row">
        <label htmlFor="f-budget">{CONTACT.form.budgetLabel}</label>
        <input id="f-budget" name="budget" placeholder={CONTACT.form.budgetPlaceholder} />
      </div>
      <div className="row">
        <label htmlFor="f-service">{CONTACT.form.serviceLabel}</label>
        <input id="f-service" name="service" placeholder={CONTACT.form.servicePlaceholder} />
      </div>
      <div className="row">
        <label htmlFor="f-timeline">{CONTACT.form.timelineLabel}</label>
        <input id="f-timeline" name="timeline" placeholder={CONTACT.form.timelinePlaceholder} />
      </div>
      <div className="row">
        <label htmlFor="f-message">{CONTACT.form.messageLabel}</label>
        <textarea
          id="f-message"
          name="message"
          placeholder={CONTACT.form.messagePlaceholder}
        />
      </div>

      <button type="submit">
        {CONTACT.form.submitText} <span className="arr">{CONTACT.form.submitArrow}</span>
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status === "success" && CONTACT.form.successStatus}
        {status === "error" && CONTACT.form.errorStatus}
      </p>
    </form>
  );
}
