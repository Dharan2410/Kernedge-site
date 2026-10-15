import { localArea } from "@/data/content";
import { Head, section, wrap } from "../ui";

export default function LocalArea() {
  return (
    <section id="areas" className={`${section} pt-0`}>
      <div className={wrap}>
        <Head title={localArea.heading} lead={localArea.lead} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {localArea.cards.map((c, i) => {
            const dark = i % 2 === 0;
            return (
              <article key={c.title}
                className={`p-7 ${dark ? "border border-line border-l-[6px] border-l-gold bg-panel" : "bg-gold text-black"}`}>
                <h3 className="text-xl">{c.title}</h3>
                <p className={`mt-3 ${dark ? "text-mute" : "text-black/75"}`}>{c.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.points.map((p) => (
                    <li key={p} className={`px-3 py-1 text-sm ${dark ? "border border-[#3a3320]" : "bg-black/10 font-medium"}`}>{p}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}