import { journey, type Photo, type Stat } from "@/data/content";
import { Head, section, wrap } from "../ui";
import Image from "next/image";

function StatCard({ s, i }: { s: Stat; i: number }) {
  const gold = i % 2 === 1;
  return (
    <div
      className={`flex min-h-[11rem] w-[min(17rem,72vw)] shrink-0 flex-col justify-between p-7 ${
        gold ? "bg-gold text-black" : "border border-line border-l-[6px] border-l-gold bg-panel"
      }`}
    >
      <span className="font-display text-[clamp(2.8rem,6vw,4.2rem)] font-extrabold leading-none">{s.value}</span>
      <span className={`mt-4 font-medium ${gold ? "text-black/80" : "text-mute"}`}>{s.label}</span>
    </div>
  );
}

/** Image only: no tag, no caption. Shows a "Demo photo" placeholder until `src` is set. */
function PhotoCard({ p, i }: { p: Photo; i: number }) {
  const dark = i % 2 === 0;
  return (
    <div className="relative aspect-[4/3] w-[min(20rem,78vw)] shrink-0 overflow-hidden border border-line">
      {p.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <Image src={p.src} alt={p.alt} fill sizes="320px" className="object-cover" />
      ) : (
        <div
          className={`grid h-full w-full place-items-center bg-[image:repeating-linear-gradient(135deg,rgba(255,255,255,.05)_0_12px,transparent_12px_24px)] ${
            dark ? "bg-[#14100a] text-mute" : "bg-gold text-black"
          }`}
        >
          <div className="text-center">
            <svg viewBox="0 0 24 24" className="mx-auto h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <rect x="3" y="5" width="18" height="14" rx="1" />
              <circle cx="9" cy="10" r="1.6" />
              <path d="M3 17l5-4.5 4 3.5 3-2.5 6 4" />
            </svg>
            <span className="mt-2 block text-xs font-semibold">Demo photo</span>
          </div>
        </div>
      )}
    </div>
  );
}

/** Auto-scrolling row. Content is repeated so the loop never shows a gap. Hover pauses it. */
function Row({ children, rev }: { children: React.ReactNode[]; rev?: boolean }) {
  const half = [...children, ...children];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-5 pr-5 hover:[animation-play-state:paused] motion-reduce:animate-none ${
          rev ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {[...half, ...half]}
      </div>
    </div>
  );
}

export default function Stories() {
  return (
    <section id="stories" className={`${section} overflow-hidden bg-[#070707]`}>
      <div className={wrap}>
        <Head title={journey.heading} lead={journey.lead} />
      </div>
      <div className="mt-14 grid gap-6">
        <Row>{journey.stats.map((s, i) => <StatCard key={s.label} s={s} i={i} />)}</Row>
        <Row rev>{journey.photos.map((p, i) => <PhotoCard key={i} p={p} i={i} />)}</Row>
      </div>
    </section>
  );
}