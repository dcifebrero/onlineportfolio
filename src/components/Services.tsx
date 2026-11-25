"use client";

import { useState } from "react";
import { services } from "@/data/site";

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services">
      <div className="wave soft" />
      <div className="wrap">
        <div className="label reveal">What I bring to the table</div>
        <h2 className="reveal" style={{ "--d": ".06s" }}>
          Support for the day-to-day, systems for the long run
        </h2>

        <div className="acc reveal" style={{ "--d": ".1s" }}>
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <div className={`ai${isOpen ? " open" : ""}`} key={s.title}>
                <button
                  type="button"
                  className="ah"
                  aria-expanded={isOpen}
                  aria-controls={`svc-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <span className="pm" aria-hidden="true" />
                </button>
                <div className="ab" id={`svc-${i}`} role="region" aria-label={s.title}>
                  <div>
                    <p>{s.text}</p>
                    <div className="tags">
                      {s.tags.map((t) => (
                        <i key={t}>{t}</i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
