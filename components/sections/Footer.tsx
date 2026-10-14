import { nav, site } from "@/data/content";
import { K_PATH, SLAB_PATH, MARK_VIEWBOX } from "../Logo";
import { wrap } from "../ui";

const link = "font-medium text-black/75 transition-colors hover:text-black hover:underline hover:underline-offset-4";

export default function Footer() {
  return (
    <footer className="bg-gold text-black">
      <div className={`${wrap} grid gap-6 py-6 text-sm md:grid-cols-[1.2fr_1.1fr_1fr] md:gap-10`}>
        <div>
          <a href="#top" aria-label="Back to top" className="flex items-center gap-2.5 font-display text-sm font-extrabold tracking-[.1em]">
            {/* black version of the mark, for the gold background */}
            <svg viewBox={MARK_VIEWBOX} aria-hidden className="w-6">
              <path d={K_PATH} fill="#000" />
              <path d={SLAB_PATH} fill="#000" />
            </svg>
            KERNEDGE
          </a>
          <p className="mt-2 max-w-xs text-black/75">{site.tagline}</p>

          {/* MSME logo: put the file at public/msme.png */}
          <div className="mt-3 inline-block bg-white p-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/msme.png" alt="MSME registered" className="block h-9 w-auto" />
          </div>
        </div>

        <div>
          <p className="mb-2 font-display text-xs font-extrabold">Explore</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} className={link}>{n.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-2 font-display text-xs font-extrabold">Contact</p>
          <ul className="grid gap-1.5">
            {site.phones.map((p) => (
              <li key={p}><a href={`tel:${p.replace(/\s/g, "")}`} className={link}>{p}</a></li>
            ))}
            <li><a href={`mailto:${site.email}`} className={link}>{site.email}</a></li>
            <li><a href={site.instagram.url} rel="noopener" className={link}>{site.instagram.handle}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/15">
        <div className={`${wrap} py-3 text-xs text-black/70`}>
          © {new Date().getFullYear()} {site.name}
        </div>
      </div>
    </footer>
  );
}