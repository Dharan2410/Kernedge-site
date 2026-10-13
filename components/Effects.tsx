"use client";
import { useEffect } from "react";

/** Client behaviour: unlocks scroll after the loader, nav background (data-on), parallax for [data-s] elements (value = speed). */
export default function Effects() {
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = document.getElementById("nav");
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-s]"));
    let ticking = false;

    const update = () => {
      ticking = false;
      if (nav) nav.dataset.on = String(window.scrollY > 30);
      if (rm) return;
      for (const el of els) {
        const host = el.parentElement;
        if (!host) continue;
        const r = host.getBoundingClientRect();
        if (r.bottom < -300 || r.top > window.innerHeight + 300) continue;
        const speed = parseFloat(el.dataset.s ?? "0");
        el.style.setProperty("--py", `${(r.top + r.height / 2 - window.innerHeight / 2) * speed}px`);
      }
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);
  return null;
}
