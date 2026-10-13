import { nav } from "@/data/content";
import { KMark } from "./Logo";
import { btn, wrap } from "./ui";

export default function Nav() {
  return (
    <nav
      id="nav"
      data-ready="false"
      data-letters="false"
      className="group/nav fixed inset-x-0 top-0 z-50 border-b border-line bg-black/85 pb-3.5 pt-[calc(.9rem+env(safe-area-inset-top,0px))] opacity-0 backdrop-blur-md transition-opacity duration-500 data-[ready=true]:opacity-100"
    >
      <div className={`${wrap} flex items-center justify-between gap-4`}>
        <a
          id="nav-logo"
          href="#top"
          aria-label="Kernedge home"
          className="flex items-center gap-3 font-display text-base font-extrabold tracking-[.1em]"
        >
          <span id="nav-mark" className="block w-[30px] shrink-0">
            <KMark className="w-full" />
          </span>
          <span aria-hidden className="flex">
            {"KERNEDGE".split("").map((c, i) => (
              <span
                key={i}
                className="inline-block translate-y-2 opacity-0 transition duration-500 ease-out motion-reduce:transition-none group-data-[letters=true]/nav:translate-y-0 group-data-[letters=true]/nav:opacity-100"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {c}
              </span>
            ))}
          </span>
        </a>
        <ul className="hidden gap-7 lg:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="font-medium text-mute transition-colors hover:text-gold">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className={btn}>Talk to us</a>
      </div>
    </nav>
  );
}