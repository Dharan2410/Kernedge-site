"use client";
import type { FormEvent } from "react";
import { site, contact } from "@/data/content";
import { btn } from "../ui";

const field = "w-full border border-[#3a3320] bg-[#0c0c0c] px-4 py-3.5 text-ivory focus:border-gold focus:outline-none focus:ring-[3px] focus:ring-gold/25";

export default function ContactForm() {
  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const d = new FormData(ev.currentTarget);
    const text = `Hello KERNEDGE, I am ${d.get("name")} (${d.get("email")}). ${d.get("message") ?? ""}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1.5 font-medium text-mute">Your name<input name="name" autoComplete="name" required className={field} /></label>
      <label className="grid gap-1.5 font-medium text-mute">Your email<input name="email" type="email" autoComplete="email" required className={field} /></label>
      <label className="grid gap-1.5 font-medium text-mute">How can we help?<textarea name="message" rows={4} className={field} /></label>
      <button type="submit" className={`${btn} justify-self-start`}>{contact.button}</button>
    </form>
  );
}
