"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { finder } from "@/data/content";

const STEP = 24;   // degrees between job families on the wheel
const HOLD = 70;   // svh of scrolling per job family
const INTRO = 60;  // svh of scrolling while the wheel rises into view (the page is empty before it)
const TOUCH = 2.5; // degrees: a label "touches" the pointer when it is this close
const WORD_MS = 32;
const fam = finder.families;
const n = fam.length;
const clamp = (x: number) => Math.min(1, Math.max(0, x));

const SHORT: Record<string, string> = {
  biz: "Business", sales: "Sales and marketing", fin: "Finance", hr: "HR",
  ops: "Operations", svc: "Customer service", tech: "Technology", health: "Healthcare",
};

/**
 * 1. Empty black page.  2. The wheel rises from the bottom.
 * 3. As it turns, each time a label touches the pointer the content switches and is written word by word.
 */
export default function CapabilityWheel() {
  const track = useRef<HTMLDivElement>(null);
  const wheel = useRef<HTMLDivElement>(null);
  const pointer = useRef<HTMLSpanElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const chips = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(-1); // -1 = nothing shown yet
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cur = 0, target = 0, intro = 0, raf = 0, last = -1, lastReady = false;

    const read = () => {
      const r = track.current!.getBoundingClientRect(), vh = window.innerHeight;
      const scrolled = -r.top, introPx = (INTRO / 100) * vh, total = r.height - vh;
      intro = clamp(scrolled / introPx);
      const rot = clamp((scrolled - introPx) / Math.max(1, total - introPx));
      target = -rot * (n - 1) * STEP;
    };

    const frame = () => {
      raf = 0;
      cur = reduce ? target : cur + (target - cur) * 0.14;
      if (Math.abs(target - cur) < 0.02) cur = target;

      const e = 1 - Math.pow(1 - intro, 3); // wheel rises from below
      wheel.current!.style.transform = `translate(-50%, calc(var(--v) * ${(1 - e) * 1.4})) rotate(${cur}deg)`;
      pointer.current!.style.opacity = String(e);

      chips.current.forEach((el, i) => {
        if (el) el.style.opacity = String(Math.max(0.1, 1 - Math.abs(i * STEP + cur) / 60));
      });

      const isReady = intro >= 0.98;
      if (isReady !== lastReady) { lastReady = isReady; setReady(isReady); }

      // which label is under the pointer?
      const k = Math.min(n - 1, Math.max(0, Math.round(-cur / STEP)));
      const off = Math.abs(-cur - k * STEP);
      if (isReady && off < TOUCH && k !== last) { last = k; setActive(k); }
      if (!isReady && last !== -1) { last = -1; setActive(-1); } // scrolled back up: empty again

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

  const f = active >= 0 ? fam[active] : null;

  // word-by-word reveal: every word gets the next delay slot
  let w = 0;
  const words = (text: string) =>
    text.split(" ").map((t, i) => (
      <span key={i} className="mr-[.28em] inline-block animate-pop motion-reduce:animate-none"
        style={{ animationDelay: `${w++ * WORD_MS}ms` }}>{t}</span>
    ));

  return (
    <div ref={track} className="relative mt-10" style={{ height: `calc(100svh + ${INTRO + (n - 1) * HOLD}svh)` }}>
      <div className="sticky top-0 h-svh overflow-hidden bg-black"
        style={{
          ["--r" as string]: "max(70vw, 560px)",
          ["--v" as string]: "clamp(190px, 30svh, 300px)",
        } as CSSProperties}>

        {/* content, above the wheel (empty until the first label touches the pointer) */}
        <div className="absolute inset-x-0 top-24 z-10 mx-auto w-[min(1180px,calc(100%-2.5rem))] overflow-hidden"
          style={{ bottom: "calc(var(--v) + 1.25rem)" }}>
          <div className="mb-3 flex items-center justify-between text-sm text-mute transition-opacity duration-500"
            style={{ opacity: ready ? 1 : 0 }}>
            <span>Scroll to turn the wheel</span>
            {f && <span className="font-display text-gold">{String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>}
          </div>
          {f && (
            <div ref={body} key={f.id} aria-live="polite"
              className="grid gap-x-10 gap-y-4 transition-opacity duration-300 md:grid-cols-[1fr_1.25fr]">
              <div>
                <h3 className="text-[clamp(1.4rem,3.2vw,2.4rem)]">{words(f.label)}</h3>
                <p className="mt-2 hidden text-mute sm:block">{words(f.blurb)}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {f.roles.map((r) => (
                    <span key={r} className="animate-pop border-l-4 border-gold bg-panel px-3 py-1 text-sm motion-reduce:animate-none"
                      style={{ animationDelay: `${w * WORD_MS}ms` }}>{r}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-1 font-semibold text-gold">{words(finder.youWill)}</p>
                <ul>
                  {f.abilities.map((a) => (
                    <li key={a.title} className="flex items-baseline gap-3 border-b border-line py-2">
                      <span aria-hidden className="mt-1 h-2 w-[18px] shrink-0 bg-gold clip-slab" />
                      <span>
                        <b className="font-display text-[.95rem] font-medium">{words(a.title)}</b>
                        <span className="hidden text-mute sm:inline"> {words(a.text)}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* the wheel: rises from below, then turns */}
        <div ref={wheel} aria-hidden
          className="absolute left-1/2 rounded-full border border-line bg-[radial-gradient(circle_at_50%_50%,#120e04_0,#050505_70%)]"
          style={{ top: "calc(100% - var(--v))", width: "calc(var(--r) * 2)", height: "calc(var(--r) * 2)", transform: "translate(-50%, calc(var(--v) * 1.4))" }}>
          <div className="absolute rounded-full border border-dashed border-[#3a3320]" style={{ inset: "84px" }} />
          {fam.map((x, i) => (
            <div key={x.id} ref={(el) => { chips.current[i] = el; }}
              className={`absolute left-1/2 top-1/2 whitespace-nowrap border px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                i === active ? "border-gold bg-gold text-black" : "border-[#3a3320] bg-[#0a0a0a] text-ivory"
              }`}
              style={{ transform: `translate(-50%, -50%) rotate(${i * STEP}deg) translateY(calc(var(--r) * -1 + 46px))` }}>
              {SHORT[x.id] ?? x.label}
            </div>
          ))}
        </div>

        {/* fixed pointer above the active label */}
        <span ref={pointer} aria-hidden className="absolute left-1/2 h-3 w-10 -translate-x-1/2 bg-gold opacity-0 clip-slab"
          style={{ top: "calc(100% - var(--v) - 8px)" }} />
      </div>
    </div>
  );
}