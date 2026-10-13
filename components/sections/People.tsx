import { people } from "@/data/content";
import Avatar from "../Avatar";
import { Head, section, wrap } from "../ui";

// Each column drifts at its own speed: the parallax stagger.
const speeds = [".07", "-.06", ".12"];

export default function People() {
  return (
    <section id="people" className={`${section} overflow-hidden`}>
      <div className={wrap}>
        <Head title={people.heading} lead={people.lead} />
        <div className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {people.list.map((p, i) => (
            <article key={p.name} data-s={speeds[i % 3]} className="plx group bg-panel">
              <div className="overflow-hidden">
                <div className="transition-transform duration-700 group-hover:scale-[1.06]">
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="block aspect-square w-full object-cover object-top"
                    />
                  ) : (
                    <Avatar initials={p.initials} tone={i} />
                  )}
                </div>
              </div>
              <div className="border-l-4 border-gold p-5">
                <h3 className="text-lg">{p.name}</h3>
                <p className="mt-1 font-semibold text-gold">{p.role}</p>
                <p className="mt-2 text-sm text-mute">{p.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}