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
    </section>
  );
}