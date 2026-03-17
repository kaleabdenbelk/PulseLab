"use client"
import { useState, useEffect } from "react";
import { X, ChevronLeft, CheckCircle2, Calendar, Clock, Phone } from "lucide-react";
import { useClientFlow } from "./ClientFlowContext";

function getNextDays(count: number): Date[] {
  const days: Date[] = [];
  const today = new Date();
  for (let i = 1; i <= count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

const dayAbbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const buildingOptions = [
  "SaaS product",
  "Mobile app",
  "Online community",
  "Startup idea",
  "Other",
];

const helpOptions = [
  "Product launch",
  "Growth optimization",
  "Community growth",
  "Digital marketing",
  "Social media management",
  "Brand creating",
  "Software Development",
  "Designing service",
  "Custom",
  "Other",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "10px",
  padding: "10px 14px",
  color: "#fff",
  fontFamily: "Inter, sans-serif",
  fontSize: "0.875rem",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  fontSize: "0.8rem",
  color: "#9999b8",
  marginBottom: "6px",
};

function FocusInput({
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        borderColor: focused ? "rgba(0,232,122,0.5)" : "rgba(255,255,255,0.1)",
        boxShadow: focused ? "0 0 0 3px rgba(0,232,122,0.07)" : "none",
      }}
    />
  );
}

function FocusTextarea({
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        resize: "none",
        lineHeight: 1.6,
        borderColor: focused ? "rgba(0,232,122,0.5)" : "rgba(255,255,255,0.1)",
        boxShadow: focused ? "0 0 0 3px rgba(0,232,122,0.07)" : "none",
      }}
    />
  );
}

export function ClientFlowModal() {
  const { isOpen, closeModal } = useClientFlow();

  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [company, setCompany] = useState("");
  const [building, setBuilding] = useState("");
  const [helpWith, setHelpWith] = useState<string[]>([]);
  const [link, setLink] = useState("");
  const [challenge, setChallenge] = useState("");

  const days = getNextDays(14);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStep(1);
      setName("");
      setEmail("");
      setSelectedDate(null);
      setSelectedTime("");
      setCompany("");
      setBuilding("");
      setHelpWith([]);
      setLink("");
      setChallenge("");
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleHelp = (item: string) => {
    setHelpWith((prev) =>
      prev.includes(item) ? prev.filter((h) => h !== item) : [...prev, item]
    );
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(10px)",
        animation: "fade-in-backdrop 0.25s ease",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        className="w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl overflow-hidden flex flex-col"
        style={{
          background: "#0d0d1a",
          border: "1px solid rgba(255,255,255,0.1)",
          maxHeight: "92vh",
          animation: "modal-slide-up 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-3">
            {step === 2 && (
              <button
                onClick={() => setStep(1)}
                className="flex items-center justify-center w-7 h-7 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "#9999b8",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <ChevronLeft size={16} />
              </button>
            )}
            <div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#fff",
                  lineHeight: 1.3,
                }}
              >
                {step === 1 && "Book a Growth Call"}
                {step === 2 && "Quick Project Form"}
                {step === 3 && "You're all set!"}
              </p>
              {step < 3 && (
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    color: "#5050a0",
                    marginTop: "2px",
                  }}
                >
                  Step {step} of 2
                </p>
              )}
            </div>
          </div>
          <button
            onClick={closeModal}
            className="flex items-center justify-center w-8 h-8 rounded-xl transition-colors"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "#6060a0",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.color = "#6060a0";
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Progress bar */}
        {step < 3 && (
          <div
            className="h-0.5 flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <div
              style={{
                height: "100%",
                width: step === 1 ? "50%" : "100%",
                background: "linear-gradient(90deg, #00E87A, #00bfff)",
                transition: "width 0.4s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          </div>
        )}

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-6 py-6">
          {/* ── STEP 1 ── */}
          {step === 1 && (
            <form onSubmit={handleStep1Submit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Name *</label>
                  <FocusInput
                    value={name}
                    onChange={setName}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <FocusInput
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              {/* Date picker */}
              <div>
                <label
                  style={{ ...labelStyle, display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <Calendar size={13} /> Select a date *
                </label>
                <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                  {days.map((d, i) => {
                    const isSelected =
                      selectedDate?.toDateString() === d.toDateString();
                    const isWeekend = d.getDay() === 0 || d.getDay() === 6;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedDate(d)}
                        className="flex-shrink-0 flex flex-col items-center justify-center px-3 py-2 rounded-xl"
                        style={{
                          minWidth: "52px",
                          background: isSelected
                            ? "rgba(0,232,122,0.12)"
                            : "rgba(255,255,255,0.03)",
                          border: isSelected
                            ? "1px solid rgba(0,232,122,0.4)"
                            : "1px solid rgba(255,255,255,0.07)",
                          transition: "all 0.15s ease",
                          opacity: isWeekend ? 0.45 : 1,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.65rem",
                            fontWeight: 600,
                            color: isSelected ? "#00E87A" : "#5050a0",
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                          }}
                        >
                          {dayAbbr[d.getDay()]}
                        </span>
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "1rem",
                            fontWeight: 700,
                            color: isSelected ? "#00E87A" : "#d0d0e8",
                            lineHeight: 1.2,
                          }}
                        >
                          {d.getDate()}
                        </span>
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.6rem",
                            color: isSelected ? "#00E87A" : "#3a3a60",
                          }}
                        >
                          {monthAbbr[d.getMonth()]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slots */}
              {selectedDate && (
                <div>
                  <label
                    style={{ ...labelStyle, display: "flex", alignItems: "center", gap: "6px" }}
                  >
                    <Clock size={13} /> Select a time *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((t) => {
                      const isSelected = selectedTime === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTime(t)}
                          className="px-3 py-1.5 rounded-lg text-xs"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                            background: isSelected
                              ? "rgba(0,232,122,0.12)"
                              : "rgba(255,255,255,0.04)",
                            border: isSelected
                              ? "1px solid rgba(0,232,122,0.4)"
                              : "1px solid rgba(255,255,255,0.08)",
                            color: isSelected ? "#00E87A" : "#7070a0",
                            transition: "all 0.15s ease",
                          }}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className="w-full py-3 rounded-xl text-sm mt-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  color: "#050508",
                  background:
                    !selectedDate || !selectedTime
                      ? "rgba(0,232,122,0.3)"
                      : "#00E87A",
                  cursor: !selectedDate || !selectedTime ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  if (selectedDate && selectedTime) {
                    e.currentTarget.style.boxShadow = "0 0 24px rgba(0,232,122,0.35)";
                    e.currentTarget.style.background = "#00ff87";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.background =
                    !selectedDate || !selectedTime ? "rgba(0,232,122,0.3)" : "#00E87A";
                }}
              >
                Continue — Add Project Details
              </button>

              <p
                className="text-center text-xs"
                style={{ color: "#3a3a60", fontFamily: "Inter, sans-serif" }}
              >
                Or skip to the project form below
              </p>
            </form>
          )}

          {/* ── STEP 2 ── */}
          {step === 2 && (
            <form onSubmit={handleStep2Submit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Name *</label>
                  <FocusInput
                    value={name}
                    onChange={setName}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <FocusInput
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Company or Product Name *</label>
                <FocusInput
                  value={company}
                  onChange={setCompany}
                  placeholder="Acme Inc."
                  required
                />
              </div>

              <div>
                <label style={labelStyle}>What are you building? *</label>
                <div
                  style={{
                    position: "relative",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                  }}
                >
                  <select
                    value={building}
                    onChange={(e) => setBuilding(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      padding: "10px 14px",
                      color: building ? "#fff" : "#40406a",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      outline: "none",
                      cursor: "pointer",
                      appearance: "none",
                    }}
                  >
                    <option value="" disabled style={{ background: "#0d0d1a" }}>
                      Select an option
                    </option>
                    {buildingOptions.map((o) => (
                      <option key={o} value={o} style={{ background: "#0d0d1a", color: "#fff" }}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <div
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                      color: "#5050a0",
                    }}
                  >
                    ▾
                  </div>
                </div>
              </div>

              <div>
                <label style={labelStyle}>What do you need help with?</label>
                <div className="flex flex-wrap gap-2">
                  {helpOptions.map((o) => {
                    const active = helpWith.includes(o);
                    return (
                      <button
                        key={o}
                        type="button"
                        onClick={() => toggleHelp(o)}
                        className="px-3 py-1.5 rounded-lg text-xs"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                          background: active
                            ? "rgba(0,232,122,0.1)"
                            : "rgba(255,255,255,0.04)",
                          border: active
                            ? "1px solid rgba(0,232,122,0.35)"
                            : "1px solid rgba(255,255,255,0.08)",
                          color: active ? "#00E87A" : "#7070a0",
                          transition: "all 0.15s ease",
                        }}
                      >
                        {active && "✓ "}
                        {o}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Website or product link (optional)</label>
                <FocusInput
                  type="url"
                  value={link}
                  onChange={setLink}
                  placeholder="https://yourproduct.com"
                />
              </div>

              <div>
                <label style={labelStyle}>Biggest challenge right now *</label>
                <FocusTextarea
                  value={challenge}
                  onChange={setChallenge}
                  placeholder="Describe your main growth challenge in a few sentences..."
                  rows={3}
                />
              </div>

              <button
                type="submit"
                disabled={!name || !email || !company || !building || !challenge}
                className="w-full py-3 rounded-xl text-sm"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  color: "#050508",
                  background:
                    !name || !email || !company || !building || !challenge
                      ? "rgba(0,232,122,0.3)"
                      : "#00E87A",
                  cursor:
                    !name || !email || !company || !building || !challenge
                      ? "not-allowed"
                      : "pointer",
                  transition: "all 0.2s ease",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  if (name && email && company && building && challenge) {
                    e.currentTarget.style.boxShadow = "0 0 24px rgba(0,232,122,0.35)";
                    e.currentTarget.style.background = "#00ff87";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.background =
                    !name || !email || !company || !building || !challenge
                      ? "rgba(0,232,122,0.3)"
                      : "#00E87A";
                }}
              >
                Request Growth Plan
              </button>
            </form>
          )}

          {/* ── STEP 3: CONFIRMATION ── */}
          {step === 3 && (
            <div className="flex flex-col items-center text-center py-6 gap-6">
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full"
                style={{
                  background: "rgba(0,232,122,0.1)",
                  border: "1px solid rgba(0,232,122,0.25)",
                }}
              >
                <CheckCircle2 size={32} style={{ color: "#00E87A" }} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#fff",
                    marginBottom: "10px",
                  }}
                >
                  Thanks. We're reviewing your product.
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: "#6060a0",
                    maxWidth: "360px",
                  }}
                >
                  We'll respond within 24 hours with a tailored growth plan. Keep an eye on{" "}
                  <span style={{ color: "#9090b8" }}>{email}</span>.
                </p>
              </div>

              {selectedDate && selectedTime && (
                <div
                  className="flex items-center gap-3 px-5 py-3 rounded-xl"
                  style={{
                    background: "rgba(0,232,122,0.06)",
                    border: "1px solid rgba(0,232,122,0.15)",
                  }}
                >
                  <Calendar size={14} style={{ color: "#00E87A" }} />
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.85rem",
                      color: "#00E87A",
                      fontWeight: 500,
                    }}
                  >
                    Call scheduled: {dayAbbr[selectedDate.getDay()]} {selectedDate.getDate()}{" "}
                    {monthAbbr[selectedDate.getMonth()]} at {selectedTime}
                  </span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded-xl text-sm"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    color: "#050508",
                    background: "#00E87A",
                    border: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(0,232,122,0.35)";
                    e.currentTarget.style.background = "#00ff87";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.background = "#00E87A";
                  }}
                >
                  Book a Call Now
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 py-3 rounded-xl text-sm"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    color: "#9999b8",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "#9999b8";
                  }}
                >
                  Close
                </button>
              </div>

              {/* Phone contact */}
              <a
                href="tel:0922463636"
                className="flex items-center gap-2 text-sm"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  color: "#4040a0",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00E87A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4040a0")}
              >
                <Phone size={13} />
                Prefer to call? 0922 463 636
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
