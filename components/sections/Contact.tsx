import { site, contact } from "@/data/content";
import { Head, section, wrap } from "../ui";
import ContactForm from "./ContactForm";

const link = "border-b border-gold pb-0.5 transition-colors hover:text-gold";

export default function Contact() {
  return (
    <section id="contact" className={`${section} overflow-hidden bg-[radial-gradient(900px_400px_at_85%_0,#2a2108,transparent_70%)]`}>
      <div className={`${wrap} grid items-start gap-[clamp(2rem,6vw,5rem)] md:grid-cols-2`}>
        <div>
          <Head title={contact.heading} lead={contact.lead} />
          <ul className="mt-8 grid gap-3.5">
            {site.phones.map((p) => <li key={p}><a className={link} href={`tel:${p.replace(/\s/g, "")}`}>{p}</a></li>)}
            <li><a className={link} href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className={link} href={site.instagram.url} rel="noopener">{site.instagram.handle} on Instagram</a></li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
