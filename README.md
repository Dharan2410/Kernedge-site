# Kernedge site (Next.js 14, TypeScript, Tailwind CSS 3)

    npm install
    npm run dev      # http://localhost:3000
    npm run build

## Where to edit
- Text, job families, capabilities, people, testimonials: `data/content.ts`.
- Page order: `app/page.tsx`. One file per section in `components/sections/`.
- Brand colours, fonts, animation timing: `tailwind.config.ts`.
- Shared shapes (slab clip paths, parallax `.plx`, rays): `app/globals.css`.
- Parallax: add `data-s="0.1"` and class `plx` to any element. Positive moves with scroll, negative against it. Logic in `components/Effects.tsx`.
- Add a job family: push one object into `finder.families` (data/content.ts). The finder UI updates itself.

## Demo content
`people` and `stories` in `data/content.ts` are fictional placeholders (names, roles, companies, quotes). Replace with real, permissioned content before launch. `Avatar.tsx` draws monogram portraits; swap for photos when available.
