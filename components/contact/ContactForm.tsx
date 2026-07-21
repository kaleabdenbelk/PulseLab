"use client";

import { useState, type FormEvent } from "react";
import { CONTACT } from "../constants";
import FormDropdown from "./FormDropdown";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [service, setService] = useState("");
  const [timeline, setTimeline] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (!btn) return;

    setStatus("sending");
    btn.disabled = true;
    btn.innerHTML = CONTACT.form.sendingText;

    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
      aria-label="Project brief"
      className="form"
      id="brief"
      name="contact"
      onSubmit={handleSubmit}
    >

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
        <label htmlFor="f-phone">{CONTACT.form.phoneLabel}</label>
        <input id="f-phone" name="phone" type="tel" autoComplete="tel" placeholder={CONTACT.form.phonePlaceholder} />
      </div>
      <div className="row">
        <label htmlFor="f-company">{CONTACT.form.companyLabel}</label>
        <input id="f-company" name="company" autoComplete="organization" placeholder={CONTACT.form.companyPlaceholder} />
      </div>
      <div className="row">
        <label htmlFor="f-budget">{CONTACT.form.budgetLabel}</label>
        <input id="f-budget" name="budget" placeholder={CONTACT.form.budgetPlaceholder} />
      </div>
      <FormDropdown
        name="service"
        label={CONTACT.form.serviceLabel}
        placeholder={CONTACT.form.servicePlaceholder}
        options={CONTACT.form.serviceOptions}
        value={service}
        onChange={setService}
      />
      <FormDropdown
        name="timeline"
        label={CONTACT.form.timelineLabel}
        placeholder={CONTACT.form.timelinePlaceholder}
        options={CONTACT.form.timelineOptions}
        value={timeline}
        onChange={setTimeline}
      />
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
