"use client";
import { useEffect, useRef } from "react";
import { whatWeDo } from "@/data/content";
import { wrap } from "../ui";

const HOLD = 90; // svh of scrolling per flip
const faces = whatWeDo.faces;
const n = faces.length;
const clamp = (x: number) => Math.min(1, Math.max(0, x));
const smooth = (x: number) => x * x * (3 - 2 * x);

/**
 * A long palm-leaf card pinned to the screen. As you scroll it flips upward
 * to reveal its other side: Teaching, then IT services.
 */
export default function WhatWeDo() {
  const track = useRef<HTMLDivElement>(null);
  const faceEls = useRef<(HTMLDivElement | null)[]>([]);
  const tabEls = useRef<(HTMLSpanElement | null)[]>([]);
  const hint = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cur = 0, target = 0, raf = 0;

    const read = () => {
      const r = track.current!.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const f = clamp(total > 0 ? -r.top / total : 0);
      const t = f * (n - 1);
      const k = Math.min(n - 2, Math.floor(t));
      target = k + smooth(clamp((t - k - 0.2) / 0.6)); // rests on each face, then flips
    };
    const frame = () => {
      raf = 0;
      cur = reduce ? target : cur + (target - cur) * 0.16;
      if (Math.abs(target - cur) < 0.001) cur = target;
      faceEls.current.forEach((el, i) => {
        if (!el) return;
        const a = (cur - i) * 180;
        el.style.transform = `rotateX(${a}deg)`;
        el.style.visibility = Math.abs(a) < 90 ? "visible" : "hidden";
        el.style.filter = `brightness(${1 - Math.min(1, Math.abs(a) / 120) * 0.55})`;
      });
      tabEls.current.forEach((el, i) => { if (el) el.dataset.on = String(i === Math.round(cur)); });
      if (hint.current) hint.current.style.opacity = cur > 0.05 ? "0" : "1";
      if (cur !== target) raf = requestAnimationFrame(frame);
    };
    const onScroll = () => { read(); if (!raf) raf = requestAnimationFrame(frame); };

    read(); cur = target; frame();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="what-we-do" className="relative bg-black">
      <div ref={track} style={{ height: `calc(100svh + ${(n - 1) * HOLD}svh)` }}>
        <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden pt-20">
          <div className={`${wrap} mb-8 flex flex-wrap items-end justify-between gap-4`}>
            <h2 className="text-[clamp(1.9rem,4.6vw,3.6rem)]">{whatWeDo.heading}</h2>
            <div className="flex items-center gap-6 text-sm font-semibold">
              {faces.map((f, i) => (
                <span key={f.tab} ref={(el) => { tabEls.current[i] = el; }} data-on={i === 0}
                  className="border-b-2 border-transparent pb-1 text-mute transition-colors duration-300 data-[on=true]:border-gold data-[on=true]:text-gold">
                  {String(i + 1).padStart(2, "0")} {f.tab}
                </span>
              ))}
            </div>
          </div>

          {/* the palm-leaf card */}
          <div className={`${wrap} relative h-[min(78svh,560px)] md:h-[clamp(300px,52svh,410px)]`} style={{ perspective: "1700px" }}>
            {faces.map((f, i) => {
              const gold = f.tone === "gold";
              return (
                <div key={f.tab} ref={(el) => { faceEls.current[i] = el; }}
                  className={`absolute inset-0 will-change-transform [backface-visibility:hidden] [clip-path:polygon(2.5%_0,100%_0,97.5%_100%,0_100%)] ${
                    gold
                      ? "bg-gold bg-[image:repeating-linear-gradient(0deg,rgba(0,0,0,.06)_0_1px,transparent_1px_7px)] text-black"
                      : "border-l-[6px] border-gold bg-panel bg-[image:repeating-linear-gradient(0deg,rgba(255,255,255,.035)_0_1px,transparent_1px_7px)]"
                  }`}
                  style={{ transform: `rotateX(${-i * 180}deg)`, visibility: i === 0 ? "visible" : "hidden" }}>
                  {/* string holes, like a palm-leaf manuscript */}
                  <span aria-hidden className="absolute left-[3.4%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-black ring-1 ring-gold/50" />
                  <span aria-hidden className="absolute right-[3.4%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-black ring-1 ring-gold/50" />

                  <div className="grid h-full items-center gap-5 px-[8%] py-6 md:grid-cols-[.95fr_1.35fr] md:gap-10">
                    <div>
                      <p className={`mb-2 font-semibold ${gold ? "text-black/70" : "text-gold"}`}>{f.kicker}</p>
                      <h3 className="text-[clamp(1.2rem,2.6vw,2rem)]">{f.title}</h3>
                    </div>
                    <div>
                      <p className={`text-[.95rem] md:text-base ${gold ? "text-black/80" : "text-mute"}`}>{f.text}</p>
                      <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
                        {f.steps.map((s, k) => (
                          <li key={s} className="flex items-center gap-2">
                            {k > 0 && <span aria-hidden className={`h-2 w-5 clip-slab ${gold ? "bg-black" : "bg-gold"}`} />}
                            <span className={`px-3 py-1 text-sm font-medium ${gold ? "bg-black/10" : "border border-[#3a3320]"}`}>{s}</span>
                          </li>
                        ))}
                      </ol>
                      <div className="mt-3 hidden flex-wrap gap-2 sm:flex">
                        {f.chips.map((c) => (
                          <span key={c} className={`border-l-4 px-3 py-1 text-sm ${gold ? "border-black bg-black/10" : "border-gold bg-black/40"}`}>{c}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <span ref={hint} className="mt-8 text-center text-sm text-mute transition-opacity duration-500">{whatWeDo.hint}</span>
        </div>
      </div>
    </section>
  );
}