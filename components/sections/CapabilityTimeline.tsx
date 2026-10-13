"use client";
import { useEffect, useRef } from "react";
import { coreCaps } from "@/data/content";

/**
 * Vertical timeline. A gold line draws down the centre as you scroll;
 * each capability appears when the line reaches it: right, left, right...
 * On phones the line sits on the left and every card is on the right.
 */
export default function CapabilityTimeline() {
  const list = useRef<HTMLOListElement>(null);
  const fill = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = list.current!;
    const items = Array.from(el.querySelectorAll<HTMLElement>("[data-item]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      fill.current!.style.transform = "scaleY(1)";
      head.current!.style.opacity = "0";
      items.forEach((it) => (it.dataset.active = "true"));
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const trigger = window.innerHeight * 0.55; // the line "head" follows this point of the screen
      const y = Math.min(r.height, Math.max(0, trigger - r.top));
      fill.current!.style.transform = `scaleY(${r.height ? y / r.height : 0})`;
      head.current!.style.top = `${y}px`;
      head.current!.style.opacity = y > 0 && y < r.height ? "1" : "0";
      items.forEach((it) => {
        const node = it.querySelector<HTMLElement>("[data-node]")!.getBoundingClientRect();
        it.dataset.active = String(node.top + node.height / 2 <= trigger);
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <ol ref={list} className="relative mx-auto mt-16 max-w-4xl">
      {/* the centre line */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-4 top-0 w-px bg-line md:left-1/2">
        <div ref={fill} className="h-full w-px origin-top scale-y-0 bg-gold shadow-[0_0_14px_rgba(255,194,14,.7)]" />
        <span ref={head} className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-gold opacity-0 shadow-[0_0_18px_#FFC20E]" />
      </div>

      {coreCaps.items.map((c, i) => {
        const right = i % 2 === 0; // first on the right, then left
        return (
          <li key={c.title} data-item data-active="false"
            className="group relative py-6 pl-12 md:grid md:grid-cols-2 md:py-10 md:pl-0">
            {/* node on the line */}
            <span data-node aria-hidden
              className="absolute left-4 top-1/2 h-2.5 w-6 -translate-x-1/2 -translate-y-1/2 -skew-x-[30deg] border border-line bg-black transition-all duration-500 group-data-[active=true]:border-gold group-data-[active=true]:bg-gold group-data-[active=true]:shadow-[0_0_20px_rgba(255,194,14,.8)] md:left-1/2" />
            {/* connector from the line to the card */}
            <span aria-hidden
              className={`absolute top-1/2 h-px scale-x-0 bg-gold transition-transform delay-100 duration-500 group-data-[active=true]:scale-x-100 left-4 w-8 origin-left md:w-10 ${
                right ? "md:left-1/2 md:origin-left" : "md:left-auto md:right-1/2 md:origin-right"
              }`} />
            {/* card */}
            <div
              className={`border border-line bg-panel p-6 opacity-0 transition duration-700 ease-out delay-150 hover:bg-[#17120a] group-data-[active=true]:translate-x-0 group-data-[active=true]:opacity-100 ${
                right
                  ? "translate-x-10 border-l-4 border-l-gold md:col-start-2 md:ml-10"
                  : "translate-x-10 border-l-4 border-l-gold md:-translate-x-10 md:col-start-1 md:mr-10 md:border-l md:border-l-line md:border-r-4 md:border-r-gold md:text-right"
              }`}>
              <h3 className="text-lg md:text-xl">{c.title}</h3>
              <p className="mt-2 text-mute">{c.text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}