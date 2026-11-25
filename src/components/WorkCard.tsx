"use client";

import { useState } from "react";
import type { CaseStudy } from "@/data/site";

function MailMock() {
  return (
    <div className="mock">
      <div className="mbar">
        <span>GMAIL · LOCAL OLLAMA</span>
        <em>● Private</em>
      </div>
      <div className="mrow" style={{ "--a": ".1s" }}>
        <span>Quote request: Dana R.</span>
        <u>TRIAGED</u>
      </div>
      <div className="mrow" style={{ "--a": ".3s" }}>
        <span>Re: Invoice question</span>
        <u>DRAFT READY</u>
      </div>
      <div className="draft">
        <s />
        <s />
        <s />
      </div>
      <span className="appr">Approve ✓</span>
    </div>
  );
}

const BARS = Array.from({ length: 34 }, (_, i) => ({
  delay: `${(i * 0.07).toFixed(2)}s`,
  height: `${30 + ((i * 37) % 65)}%`, // deterministic, so server and browser markup match
}));

function ClipMock() {
  return (
    <div className="mock">
      <div className="mbar">
        <span>YOUTUBE → SHORTS</span>
        <em>● Auto</em>
      </div>
      <div className="wave-v">
        {BARS.map((b, i) => (
          <span key={i} style={{ "--e": b.delay, "--h": b.height }} />
        ))}
        <div className="hl" />
      </div>
      <div className="phones">
        {[0, 0.5, 1].map((d) => (
          <div className="ph" key={d} style={{ "--p": `${d}s` }}>
            <b />
            <b />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorkCard({ study, delay }: { study: CaseStudy; delay: number }) {
  // On touch screens there is no hover, so a tap toggles the demo overlay.
  const [shown, setShown] = useState(false);

  const onTap = () => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) setShown((s) => !s);
  };

  return (
    // The outer wrapper owns the scroll-reveal class; the inner article owns the dynamic "show" class,
    // so React never overwrites the "in" class that RevealObserver adds.
    <div className="reveal" style={{ "--d": `${delay}s` }}>
    <article className={`wc${shown ? " show" : ""}`}>
      <div className="vis" onClick={onTap}>
        {study.kind === "mail" ? <MailMock /> : <ClipMock />}
        <span className="hint">Hover for demo</span>
        <div className="demo">
          <div>
            <div className="play">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6 4l14 8-14 8z" />
              </svg>
            </div>
            <b>Demo coming soon</b>
            <span>A walkthrough is on its way</span>
          </div>
        </div>
      </div>
      <div className="wb">
        <div className="wtag">{study.tag}</div>
        <h3>{study.title}</h3>
        <dl>
          <div>
            <dt>The solution</dt>
            <dd>{study.solution}</dd>
          </div>
          <div>
            <dt>Key benefit</dt>
            <dd>{study.benefit}</dd>
          </div>
          <div>
            <dt>Impact</dt>
            <dd>{study.impact}</dd>
          </div>
        </dl>
        <div className="chips">
          {study.chips.map((c) => (
            <i key={c}>{c}</i>
          ))}
        </div>
      </div>
    </article>
    </div>
  );
}
