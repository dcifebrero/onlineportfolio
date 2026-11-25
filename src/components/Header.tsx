"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { id: "about", label: "About" },
  { id: "tools", label: "Tools" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
];

export default function Header() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
      setScrolled(h.scrollTop > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header id="hdr" className={scrolled ? "scrolled" : ""}>
      <div className="wrap">
        <nav aria-label="Main">
          <a href="#top" className="brand">
            <Image src="/logo-pf.png" alt="PhewFlow logo" width={60} height={32} priority />
            {site.name}
          </a>
          <ul>
            {links.map((l) => (
              <li key={l.id} className="hm">
                <a className={`l${active === l.id ? " act" : ""}`} href={`#${l.id}`}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a className="btn primary sm" href="#book">
                Book a call
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="bar" style={{ width: `${progress}%` }} />
    </header>
  );
}
