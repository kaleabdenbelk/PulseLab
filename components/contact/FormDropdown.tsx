"use client";

import { useState, useRef } from "react";

interface FormDropdownProps {
  name: string;
  label: string;
  placeholder: string;
  options: readonly string[];
  value: string;
  onChange: (val: string) => void;
}

export default function FormDropdown({
  name,
  label,
  placeholder,
  options,
  value,
  onChange,
}: FormDropdownProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  function show() {
    clearTimeout(timeoutRef.current!);
    setOpen(true);
  }

  function hide() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div className="row">
      <label>{label}</label>
      <div
        className={`form-dd${open ? " is-open" : ""}`}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        <div className="form-dd-trigger">
          <span className={value ? "" : "form-dd-placeholder"}>
            {value || placeholder}
          </span>
          <svg className="form-dd-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        <ul className="form-dd-menu" role="listbox">
          {options.map((opt) => (
            <li
              key={opt}
              className={`form-dd-item${value === opt ? " is-selected" : ""}`}
              role="option"
              aria-selected={value === opt}
              onMouseDown={(e) => {
                e.preventDefault();
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
              {value === opt && (
                <svg className="form-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      </div>
      <input type="hidden" name={name} value={value} />
    </div>
  );
}
