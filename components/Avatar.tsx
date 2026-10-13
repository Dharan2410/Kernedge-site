const TONES = [["#FFC20E", "#000"], ["#F3EEDF", "#000"], ["#B8860B", "#000"], ["#1c1608", "#FFC20E"], ["#2a2410", "#F3EEDF"], ["#FFC20E", "#000"]];

/** Placeholder portrait: monogram on slab shapes. Swap for <Image> when real photos exist. */
export default function Avatar({ initials, tone = 0 }: { initials: string; tone?: number }) {
  const [bg, fg] = TONES[tone % TONES.length];
  return (
    <svg viewBox="0 0 160 160" role="img" aria-label={`Portrait placeholder for ${initials}`} className="block aspect-square w-full">
      <rect width="160" height="160" fill={bg} />
      <path d="M70 0H160V60L120 100H20Z" fill={fg} opacity=".1" />
      <path d="M0 120L60 160H0Z" fill={fg} opacity=".14" />
      <text x="80" y="92" textAnchor="middle" fontSize="46" fontWeight="800" fill={fg} style={{ fontFamily: "var(--font-unbounded), sans-serif" }}>{initials}</text>
    </svg>
  );
}
