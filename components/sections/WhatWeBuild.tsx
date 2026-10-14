import { builds } from "@/data/content";
import { Head, btn, section, v, wrap } from "../ui";

/**
 * "What we build": IT services as stacking cards. Each new card rises from the bottom
 * of the screen over the previous one. Cards are straight and alternate slightly left and right.
 */
export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className={`${section} pt-[clamp(5rem,12vw,9rem)]`}>
      <div className={wrap}>
        <Head title={builds.heading} lead={builds.lead} />
        <div className="mt-14 pb-[6vh]">
          {builds.list.map((b, i) => {
            const dark = i % 2 === 0;
            return (
              <article
                key={b.title}
                style={v("--n", i)}
                className={`sticky top-[calc(92px+var(--n)*12px)] mx-auto mb-[18vh] grid min-h-[48vh] w-full max-w-4xl gap-8 p-[clamp(1.6rem,4vw,3rem)] shadow-[0_30px_60px_-20px_rgba(0,0,0,.9)] md:grid-cols-[1.1fr_1fr] md:content-center ${
                  dark
                    ? "border border-line border-l-[6px] border-l-gold bg-panel md:-translate-x-[6%]"
                    : "bg-gold text-black md:translate-x-[6%]"
                }`}
              >
                <div>
                  <p className={`mb-3 font-semibold ${dark ? "text-gold" : "text-black/70"}`}>{b.forWho}</p>
                  <h3 className="text-[clamp(1.6rem,3.4vw,2.6rem)]">{b.title}</h3>
                  <p className={`mt-4 max-w-md ${dark ? "text-mute" : "text-black/75"}`}>{b.text}</p>
                </div>
                <ul className="self-center">
                  {b.gets.map((g) => (
                    <li
                      key={g}
                      className={`flex items-center gap-4 border-b py-3.5 ${dark ? "border-line" : "border-black/20"}`}
                    >
                      <span aria-hidden className={`h-2 w-[22px] shrink-0 clip-slab ${dark ? "bg-gold" : "bg-black"}`} />
                      {g}
                    </li>
                  ))}
                </ul>
                <span
                  aria-hidden
                  className={`absolute right-6 top-6 hidden h-3 w-12 clip-slab md:block ${dark ? "bg-gold" : "bg-black"}`}
                />
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center gap-6 border-t border-line pt-10">
          <p className="max-w-md text-mute">{builds.cta.text}</p>
          <a href="#contact" className={btn}>{builds.cta.label}</a>
        </div>
      </div>
    </section>
  );
}