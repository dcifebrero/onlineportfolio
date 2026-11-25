"use client";

import { useEffect } from "react";

/**
 * Pointer-only effects: cursor glow in the hero, gentle 3D tilt on cards/photo,
 * and "magnetic" buttons. Skipped on touch devices and for reduced-motion users.
 */
export default function Interactions() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const cleanups: Array<() => void> = [];

    const hero = document.getElementById("hero");
    const glow = hero?.querySelector<HTMLElement>(".glow");
    if (hero && glow) {
      const move = (e: MouseEvent) => {
        const r = hero.getBoundingClientRect();
        glow.style.setProperty("--mx", `${e.clientX - r.left}px`);
        glow.style.setProperty("--my", `${e.clientY - r.top}px`);
      };
      hero.addEventListener("mousemove", move);
      cleanups.push(() => hero.removeEventListener("mousemove", move));
    }

    document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
      const strength = el.classList.contains("stage") ? 8 : 4;
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transition = "transform .1s";
        el.style.transform = `perspective(800px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg)`;
      };
      const leave = () => {
        el.style.transition = "transform .6s cubic-bezier(.2,.7,.2,1)";
        el.style.transform = "";
      };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    });

    document.querySelectorAll<HTMLElement>(".mag").forEach((el) => {
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${
          (e.clientY - r.top - r.height / 2) * 0.28
        }px)`;
      };
      const leave = () => {
        el.style.transform = "";
      };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
