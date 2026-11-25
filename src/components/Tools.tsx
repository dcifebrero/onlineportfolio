"use client";

import { useState } from "react";
import { toolFilters, tools, type ToolCategory } from "@/data/site";

export default function Tools() {
  const [filter, setFilter] = useState<ToolCategory | "all">("all");
  const visible = tools.filter((t) => filter === "all" || t.cat === filter);

  return (
    <section id="tools">
      <div className="wave soft" />
      <div className="wrap">
        <div className="label reveal">Tools I use</div>
        <h2 className="reveal" style={{ "--d": ".06s" }}>
          The stack behind the workflows
        </h2>
        <p className="lead reveal" style={{ "--d": ".1s" }}>
          Pick a category to see what I reach for, and why.
        </p>

        <div className="filters reveal" style={{ "--d": ".14s" }} role="group" aria-label="Filter tools">
          {toolFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`fbtn${filter === f.key ? " on" : ""}`}
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="tgrid">
          {visible.map((t, i) => (
            <div className="tool" key={`${filter}-${t.name}`} style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="mono" aria-hidden="true">
                {t.name[0]}
              </div>
              <div>
                <b>{t.name}</b>
                <span>{t.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
