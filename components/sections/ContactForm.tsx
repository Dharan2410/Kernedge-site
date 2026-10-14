"use client";
import type { FormEvent } from "react";
import { site, contact } from "@/data/content";
import { btn } from "../ui";

const field = "w-full border border-[#3a3320] bg-[#0c0c0c] px-4 py-3.5 text-ivory focus:border-gold focus:outline-none focus:ring-[3px] focus:ring-gold/25";

export default function ContactForm() {
  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const d = new FormData(ev.currentTarget);
    const text =
      `Hello KERNEDGE, I am ${d.get("name")} (${d.get("email")}).\n` +
      `Subject: ${d.get("subject")}\n` +
      `${d.get("message") ?? ""}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1.5 font-medium text-mute">
        Your name
        <input name="name" autoComplete="name" required className={field} />
      </label>
      <label className="grid gap-1.5 font-medium text-mute">
        Your email
        <input name="email" type="email" autoComplete="email" required className={field} />
      </label>
      <label className="grid gap-1.5 font-medium text-mute">
        Subject
        <span className="relative block">
          <select name="subject" required defaultValue="" className={`${field} appearance-none pr-12`}>
            <option value="" disabled>Select a subject</option>
            {contact.subjects.map((s) => (
              <option key={s} value={s} className="bg-black text-ivory">{s}</option>
            ))}
          </select>
          <svg aria-hidden viewBox="0 0 24 24" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 9l7 7 7-7" />
          </svg>
        </span>
      </label>
      <label className="grid gap-1.5 font-medium text-mute">
        How can we help?
        <textarea name="message" rows={4} className={field} />
      </label>
      <button type="submit" className={`${btn} justify-self-start`}>{contact.button}</button>
    </form>
  );
}