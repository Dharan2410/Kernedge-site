import { mission } from "@/data/content";
import { K_PATH, MARK_VIEWBOX } from "../Logo";
import { btn, section, wrap } from "../ui";

export default function Mission() {
  const { quote, contrast, belief, counselling } = mission;
  return (
    <section id="approach" className={`${section} relative overflow-hidden`}>
      <svg aria-hidden data-s=".1" viewBox={MARK_VIEWBOX}
        className="plx pointer-events-none absolute -left-[6vw] top-1/2 -mt-[240px] w-[480px] opacity-[.05] max-md:hidden">
        <path d={K_PATH} fill="#F3EEDF" />
      </svg>

      <div className={`${wrap} relative`}>
        <h2 className="max-w-[18ch] text-[clamp(1.9rem,4.6vw,3.6rem)]">{mission.heading}</h2>

        {/* the quote card */}
        <figure className="m-0 mt-12 grid md:grid-cols-[1.4fr_1fr]">
          <div className="relative bg-gold p-[clamp(1.6rem,4vw,3.4rem)] text-black">
            <span aria-hidden className="block font-display text-[6rem] font-extrabold leading-[.6] text-black/20">“</span>
            <blockquote className="m-0 mt-2 font-display text-[clamp(1.4rem,3.2vw,2.5rem)] font-extrabold leading-[1.15] tracking-tight">
              {quote.text}
            </blockquote>
            <figcaption className="mt-6 font-semibold">
              {quote.by} <span className="font-normal text-black/60">({quote.note})</span>
            </figcaption>
          </div>
          <div className="flex flex-col justify-center gap-6 border border-line bg-panel p-[clamp(1.6rem,4vw,3rem)] md:clip-win md:pl-16">
            {contrast.map((c, i) => (
              <div key={c.label} className={i === 0 ? "text-mute" : ""}>
                <b className={`block font-display text-[1.05rem] font-medium ${i === 0 ? "line-through decoration-[#554a22]" : "text-gold"}`}>{c.label}</b>
                <span className="text-sm">{c.note}</span>
              </div>
            ))}
          </div>
        </figure>

        {/* what we believe */}
        <div className="mt-20 grid items-start gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h3 className="text-[clamp(1.6rem,3.6vw,2.8rem)]">{belief.title}</h3>
            <p className="mt-5 max-w-xl text-[1.1rem] text-mute">{belief.text}</p>
          </div>
          <ol>
            {belief.steps.map((s, i) => (
              <li key={s} className="flex items-center gap-4 border-b border-line py-4">
                <span className="font-display text-xl font-extrabold text-gold">{i + 1}</span>
                <span className="font-medium">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* free counselling */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border border-line border-l-[6px] border-l-gold bg-[#0c0c0c] p-[clamp(1.4rem,3vw,2.4rem)]">
          <div>
            <h3 className="text-[clamp(1.2rem,2.4vw,1.8rem)]">{counselling.title}</h3>
            <p className="mt-2 max-w-xl text-mute">{counselling.text}</p>
          </div>
          <a href={counselling.href} className={btn}>{counselling.button}</a>
        </div>
      </div>
    </section>
  );
}