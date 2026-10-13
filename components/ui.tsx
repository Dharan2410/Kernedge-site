import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export const wrap = "mx-auto w-[min(1180px,calc(100%-2.5rem))]";
export const btn = "inline-block bg-gold px-6 py-3.5 font-semibold text-black clip-btn transition duration-200 hover:translate-x-1 hover:bg-white";
export const btnGhost = "inline-block px-6 py-3.5 font-semibold text-ivory shadow-[inset_0_0_0_1px_#FFC20E] transition duration-200 hover:bg-gold hover:text-black";
export const section = "relative py-[clamp(5rem,12vw,9rem)]";

export function Slab({ className = "", ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return <span aria-hidden className={`inline-block bg-gold clip-slab ${className}`} {...rest} />;
}

export function Head({ title, lead, className = "" }: { title: ReactNode; lead?: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h2 className="max-w-[20ch] text-[clamp(1.9rem,4.6vw,3.6rem)]">{title}</h2>
      {lead && <p className="mt-5 max-w-xl text-mute">{lead}</p>}
    </div>
  );
}

/** Deterministic CSS variable helper for per-item styling. */
export const v = (name: string, value: string | number) => ({ [name]: value }) as CSSProperties;
