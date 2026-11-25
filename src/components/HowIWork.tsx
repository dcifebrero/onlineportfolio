"use client";

import { useEffect, useState, type ReactNode } from "react";
import { flowSteps } from "@/data/site";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: ReactNode[] = [
  <svg key="0" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="M5 13l4 4L19 7" />
  </svg>,
];

export default function HowIWork() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % flowSteps.length), 3200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="how">
      <div className="wrap">
        <div className="label reveal">How I work</div>
        <h2 className="reveal" style={{ "--d": ".06s" }}>
          Automation, with a human in the loop
        </h2>
        <p className="lead reveal" style={{ "--d": ".1s" }}>
          Tap a step, or just watch it flow.
        </p>

        <div
          className="flow reveal"
          style={{ "--d": ".14s" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="rail" aria-hidden="true">
            <i style={{ width: `${(current / (flowSteps.length - 1)) * 100}%` }} />
          </div>
          <div className="nodes">
            {flowSteps.map((s, i) => (
              <button
                key={s.label}
                type="button"
                className={`node${i === current ? " on" : ""}${i < current ? " done" : ""}`}
                aria-current={i === current ? "step" : undefined}
                onClick={() => {
                  setPaused(true);
                  setCurrent(i);
                }}
              >
                <div className="c">{icons[i]}</div>
                <small>Step {i + 1}</small>
                <b>{s.label}</b>
              </button>
            ))}
          </div>
          <div className="fdesc" aria-live="polite">
            <p key={current}>{flowSteps[current].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
