import { site } from "@/data/content";
import { wrap } from "../ui";

export default function Footer() {
  return (
    <footer className="border-t border-line py-9 text-[.95rem] text-mute">
      <div className={`${wrap} flex flex-wrap items-center justify-between gap-4`}>
        <span>© {site.name}</span><span>{site.tagline}</span>
      </div>
    </footer>
  );
}
