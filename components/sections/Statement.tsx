import { statement } from "@/data/content";
import { K_PATH, MARK_VIEWBOX } from "../Logo";
import { wrap } from "../ui";

export default function Statement() {
  return (
    <section className="relative overflow-hidden bg-gold py-[clamp(5rem,13vw,10rem)] text-black">
      <svg aria-hidden data-s=".14" viewBox={MARK_VIEWBOX} className="plx pointer-events-none absolute -right-[4vw] top-1/2 -mt-[220px] w-[440px] opacity-[.12] max-md:hidden"><path d={K_PATH} /></svg>
      <div className={`${wrap} relative`}>
        <h2 data-s="-.05" className="plx max-w-[16ch] text-[clamp(2.2rem,6.5vw,5.4rem)] font-extrabold">{statement.heading}</h2>
        <p data-s=".04" className="plx mt-8 max-w-[36rem] text-[1.2rem]">{statement.text}</p>
      </div>
    </section>
  );
}
