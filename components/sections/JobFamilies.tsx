"use client";
import { useEffect, useRef } from "react";
import { jobFamilies } from "@/data/content";
import { Head, wrap } from "../ui";

const clamp = (x: number) => Math.min(1, Math.max(0, x));

/**
 * Pinned section: as you scroll down, the job family cards slide sideways (right to left).
 * Cards are straight, no tilt. They alternate dark and gold.
 */
export default function JobFamilies() {
  const track = useRef<HTMLDivElement>(null);
  const row = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let dist = 0, raf = 0;
    const total = jobFamilies.list.length;

    const update = () => {
      raf = 0;
      const r = track.current!.getBoundingClientRect();
      const p = clamp(dist > 0 ? -r.top / dist : 0);
      row.current!.style.transform = `translate3d(${-p * dist}px,0,0)`;
      bar.current!.style.transform = `scaleX(${p})`;
      count.current!.textContent = `${String(Math.min(total, Math.floor(p * total) + 1)).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    };
    const measure = () => {
      dist = Math.max(0, row.current!.offsetWidth - window.innerWidth);
      track.current!.style.height = `${window.innerHeight + dist}px`; // vertical scroll length = horizontal distance
      update();
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const pad = "max(1.25rem, calc((100vw - 1180px) / 2))"; // lines up with the page content on the left

  return (
    <section id="job-families" className="border-y border-line bg-[#070707]">
      <div ref={track} style={{ minHeight: "200svh" }}>
        <div className="sticky top-0 flex h-svh flex-col justify-center gap-10 overflow-hidden pt-20">
          <div className={wrap}>
            <Head title={jobFamilies.heading} lead={jobFamilies.lead} />
          </div>

          <div ref={row} className="flex w-max gap-6 will-change-transform" style={{ paddingLeft: pad, paddingRight: pad }}>
            {jobFamilies.list.map((f, i) => {
              const dark = i % 2 === 0;
              return (
                <article
                  key={f.title}
                  className={`relative flex min-h-[46svh] w-[min(82vw,25rem)] shrink-0 flex-col justify-between p-[clamp(1.4rem,3vw,2.4rem)] shadow-[0_30px_60px_-20px_rgba(0,0,0,.9)] ${
                    dark ? "border border-line border-l-[6px] border-l-gold bg-panel" : "bg-gold text-black"
                  }`}
                >
                  <span aria-hidden className={`absolute right-5 top-5 h-3 w-12 clip-slab ${dark ? "bg-gold" : "bg-black"}`} />
                  <div>
                    <h3 className="max-w-[12ch] text-[clamp(1.6rem,3.4vw,2.4rem)]">{f.title}</h3>
                    <p className={`mt-4 ${dark ? "text-mute" : "text-black/75"}`}>{f.text}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {f.roles.map((r) => (
                      <span
                        key={r}
                        className={`px-3 py-1.5 text-sm ${dark ? "border border-[#3a3320]" : "bg-black/10 font-medium"}`}
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          {/* progress */}
          <div className={`${wrap} flex items-center gap-4`}>
            <div className="h-px flex-1 bg-line">
              <span ref={bar} className="block h-px origin-left scale-x-0 bg-gold" />
            </div>
            <span ref={count} className="font-display text-sm text-gold">01 / {String(jobFamilies.list.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}