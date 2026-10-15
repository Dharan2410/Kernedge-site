import { hero } from "@/data/content";
import { K_PATH, MARK_VIEWBOX } from "../Logo";
import { btn, btnGhost, wrap, Slab } from "../ui";
import { REVEAL_AT } from "@/lib/timing";

export default function Hero() {
  return (
    <header className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-28">
      {/* depth layers, slowest to fastest */}
      <div aria-hidden className="rays pointer-events-none absolute -right-[40vmax] top-1/2 -mt-[60vmax] h-[120vmax] w-[120vmax] animate-rays motion-reduce:animate-none" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 -right-[18vw] flex w-[95vw] items-center opacity-25 md:-right-[6vw] md:w-[min(62vw,760px)] md:opacity-100">
        <div data-s="-.12" className="plx w-full">
          <svg viewBox={MARK_VIEWBOX} className="w-full overflow-visible">
            <path d={K_PATH} transform="translate(-40 -30) scale(1.08)" fill="none" stroke="#3a2f0a" strokeWidth="2" />
            <path d={K_PATH} fill="#F3EEDF" />
          </svg>
        </div>
      </div>
      <Slab data-s=".18" className="plx absolute right-[6vw] top-[18%] z-[1] hidden h-[70px] w-[240px] md:block" />
      <Slab data-s="-.22" className="plx absolute bottom-[14%] right-[30vw] z-[1] hidden h-9 w-[120px] opacity-50 md:block" />
      <Slab data-s=".1" className="plx absolute bottom-[10%] left-[4vw] z-[1] h-6 w-20 opacity-30" />
      <div className={`${wrap} relative z-[2]`}>
        <h1 className="text-[clamp(2.4rem,7vw,6rem)] font-extrabold">
          {hero.lines.map((l, i) => {
            const [first, ...rest] = l.split(" "); // first word white, the rest gold
            return (
              <span key={l} className="block overflow-hidden pb-[.08em]">
                <span
                  className="block translate-y-[110%] animate-rise motion-reduce:translate-y-0 motion-reduce:animate-none"
                  style={{ animationDelay: `calc(var(--reveal, ${REVEAL_AT}s) + ${i * 0.14}s)` }}
                >
                  {first} <span className="text-gold">{rest.join(" ")}</span>
                </span>
              </span>
            );
          })}
        </h1>
        <p
          className="mb-9 mt-7 max-w-[36rem] text-[1.15rem] text-mute opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100"
          style={{ animationDelay: `calc(var(--reveal, ${REVEAL_AT}s) + 0.7s)` }}
        >
          {hero.text}
        </p>
        <div
          className="flex flex-wrap gap-4 opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100"
          style={{ animationDelay: `calc(var(--reveal, ${REVEAL_AT}s) + 0.9s)` }}
        >
          <a className={btn} href={hero.primary.href}>{hero.primary.label}</a>
          <a className={btnGhost} href={hero.secondary.href}>{hero.secondary.label}</a>
        </div>
      </div>
      <div aria-hidden className="absolute bottom-6 left-1/2 z-[2] h-14 w-px bg-gradient-to-b from-gold to-transparent" />
    </header>
  );
}