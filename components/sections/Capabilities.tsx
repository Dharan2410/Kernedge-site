import { coreCaps, finder } from "@/data/content";
import { Head, section, wrap } from "../ui";
import CapabilityTimeline from "./CapabilityTimeline";
import CapabilityWheel from "./CapabilityWheel";

export default function Capabilities() {
  return (
    <section id="capabilities" className={section}>
      <div className={wrap}>
        <Head title={coreCaps.heading} lead={coreCaps.lead} />
        <CapabilityTimeline />
      </div>
      <div className={`${wrap} mt-28`}>
        <Head title={finder.heading} lead={finder.lead} />
      </div>
      <CapabilityWheel />

      {/* The wheel only shows one job family at a time. This keeps all of them in the page for search engines and screen readers. */}
      <div className="sr-only">
        {finder.families.map((f) => (
          <article key={f.id}>
            <h3>{f.label}</h3>
            <p>{f.blurb}</p>
            <ul>{f.abilities.map((a) => <li key={a.title}>{a.title}: {a.text}</li>)}</ul>
            <p>Roles: {f.roles.join(", ")}. Learn through: {f.formats.join(", ")}.</p>
          </article>
        ))}
      </div>
    </section>
  );
}