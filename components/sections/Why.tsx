import { why } from "@/data/content";
import { Head, section, wrap } from "../ui";

export default function Why() {
  return (
    <section id="why" className={`${section} pt-0`}>
      <div className={wrap}>
        <Head title={why.heading} />
        <div className="mt-12 grid md:grid-cols-2">
          <div className="bg-[#0c0c0c] p-[clamp(1.4rem,4vw,3rem)] text-mute">
            <h3 className="mb-4 text-xl">{why.others.title}</h3>
            <ul>{why.others.items.map((i) => <li key={i} className="border-b border-white/10 py-3 line-through decoration-[#554a22]">{i}</li>)}</ul>
          </div>
          <div className="bg-gold p-[clamp(1.4rem,4vw,3rem)] text-black md:clip-win">
            <h3 className="mb-4 text-xl">{why.us.title}</h3>
            <ul>{why.us.items.map((i) => <li key={i} className="border-b border-black/20 py-3">{i}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
