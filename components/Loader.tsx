"use client";
import { useEffect, useRef, useState } from "react";
import { K_PATH, SLAB_PATH, MARK_VIEWBOX } from "./Logo";
import { T, LAND_AT, COLLAPSE_AT, END_AT } from "@/lib/timing";

type Seg = { t0: number; t1: number; a: [number, number]; b: [number, number]; apex: number; drop?: boolean };
const EASE = "cubic-bezier(.77,0,.18,1)";
const GOLD = "#FFC20E";
const clamp = (n: number) => Math.min(1, Math.max(0, n));
const easeOut = (p: number) => 1 - Math.pow(1 - p, 3);

// K mark geometry (viewBox 270 260 740 710). The yellow slab's centre is the splash point.
const VB = { x: 270, y: 260, w: 740, h: 710 };
const SLAB = { x: 781, y: 349 };

/**
 * Ball fades in, falls, bounces once, hops around the page, then splashes onto the yellow
 * part of the K. The yellow fills outward from the impact, the rest of the K fades in,
 * then the screen slides up into the nav bar and the K flies into the nav mark (#nav-mark).
 */
export default function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const mark = useRef<HTMLDivElement>(null);
  const body = useRef<SVGPathElement>(null);
  const clip = useRef<SVGCircleElement>(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const nav = document.getElementById("nav");
    const finish = () => {
      if (nav) { nav.dataset.ready = "true"; nav.dataset.letters = "true"; } // letters appear in the nav
      document.body.classList.remove("lock");
      setGone(true);
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { finish(); return; }

    const W = window.innerWidth, H = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    inner.current!.style.height = `${H}px`; // keep layout fixed while the root shrinks
    const cv = canvas.current!;
    cv.width = W * dpr; cv.height = H * dpr;
    const ctx = cv.getContext("2d")!;
    ctx.scale(dpr, dpr);

    // where the yellow slab sits on screen
    const box = mark.current!.getBoundingClientRect();
    const sx = box.left + ((SLAB.x - VB.x) / VB.w) * box.width;
    const sy = box.top + ((SLAB.y - VB.y) / VB.h) * box.height;

    const cx = W / 2, cy = H / 2, floor = cy + H * 0.12, r = 5;

    // ---- path: fall, one bounce at centre, random hops, last hop lands on the slab
    const tFall = T.fade, tBounce = tFall + T.fall, tHops = tBounce + T.bounce;
    const segs: Seg[] = [
      { t0: tFall, t1: tBounce, a: [cx, cy - H * 0.3], b: [cx, floor], apex: 0, drop: true },
      { t0: tBounce, t1: tHops, a: [cx, floor], b: [cx, floor], apex: H * 0.15 },
    ];
    let prev: [number, number] = [cx, floor];
    for (let i = 0; i < T.hops; i++) {
      const last = i === T.hops - 1;
      const next: [number, number] = last ? [sx, sy] : [W * (0.08 + Math.random() * 0.84), H * (0.3 + Math.random() * 0.6)];
      segs.push({ t0: tHops + i * T.hop, t1: tHops + (i + 1) * T.hop, a: prev, b: next, apex: H * (0.1 + Math.random() * 0.16) });
      prev = next;
    }

    const place = (time: number) => {
      if (time < tFall) return { x: cx, y: cy - H * 0.3, a: time / tFall, s: 0 };
      const seg = segs.find((g) => time >= g.t0 && time < g.t1) ?? segs[segs.length - 1];
      const u = Math.min(1, (time - seg.t0) / (seg.t1 - seg.t0));
      const x = seg.a[0] + (seg.b[0] - seg.a[0]) * u;
      const y = seg.drop
        ? seg.a[1] + (seg.b[1] - seg.a[1]) * u * u
        : seg.a[1] + (seg.b[1] - seg.a[1]) * u - 4 * seg.apex * u * (1 - u);
      const s = seg.drop ? Math.max(0, 1 - (1 - u) / 0.1) : Math.max(0, 1 - Math.min(u, 1 - u) / 0.1); // squash at impact
      return { x, y, a: 1, s };
    };

    // splash droplets
    const drops = Array.from({ length: 14 }, () => {
      const a = -Math.PI * (0.08 + Math.random() * 0.84);
      const v = 110 + Math.random() * 230;
      return { vx: Math.cos(a) * v, vy: Math.sin(a) * v, r: 1.5 + Math.random() * 2.2 };
    });

    const trail: { x: number; y: number }[] = [];
    const draw = (time: number) => {
      ctx.clearRect(0, 0, W, H);
      const dt = time - LAND_AT;
      ctx.fillStyle = GOLD; ctx.strokeStyle = GOLD;

      if (dt < 0.08) { // the ball
        const shrink = dt > 0 ? 1 - dt / 0.08 : 1;
        const p = place(Math.min(time, LAND_AT));
        trail.push({ x: p.x, y: p.y });
        if (trail.length > 16) trail.shift();
        trail.forEach((q, i) => {
          const k = i / trail.length;
          ctx.globalAlpha = k * 0.25 * p.a * shrink;
          ctx.beginPath(); ctx.arc(q.x, q.y, r * (0.4 + 0.6 * k), 0, 7); ctx.fill();
        });
        ctx.globalAlpha = p.a * shrink;
        ctx.shadowColor = GOLD; ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y + r * 0.4 * p.s, r * (1 + 0.5 * p.s) * shrink, r * (1 - 0.4 * p.s) * shrink, 0, 0, 7);
        ctx.fill();
        ctx.shadowBlur = 0; ctx.globalAlpha = 1;
      }

      if (dt > 0 && dt < 0.55) { // the splash
        drops.forEach((d) => {
          ctx.globalAlpha = Math.max(0, 1 - dt / 0.55);
          ctx.beginPath();
          ctx.arc(sx + d.vx * dt, sy + d.vy * dt + 450 * dt * dt, d.r, 0, 7);
          ctx.fill();
        });
        ctx.globalAlpha = Math.max(0, 0.7 - dt / 0.55);
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(sx, sy, 8 + (110 * dt) / 0.55, 0, 7); ctx.stroke();
        ctx.globalAlpha = 1;
      }
    };

    const stepK = (time: number) => {
      // yellow fills the slab outward from the impact point
      clip.current!.setAttribute("r", String(easeOut(clamp((time - LAND_AT) / T.splash)) * 270));
      // the rest of the K fades in
      body.current!.style.opacity = String(clamp((time - LAND_AT - 0.15) / T.fadeK));
    };

    let collapsed = false;
    const collapse = () => {
      collapsed = true;
      const target = document.getElementById("nav-mark");
      const el = mark.current!, rootEl = root.current!;
      if (nav) nav.dataset.ready = "true"; // nav fades in underneath
      if (nav && target) {
        const s = el.getBoundingClientRect(), d = target.getBoundingClientRect();
        el.style.transformOrigin = "0 0";
        el.style.transition = `transform ${T.collapse}s ${EASE}`;
        el.style.transform = `translate(${d.left - s.left}px, ${d.top - s.top}px) scale(${d.width / s.width})`;
        rootEl.style.height = `${nav.offsetHeight}px`;
      } else {
        rootEl.style.height = "0px";
      }
    };

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const time = (now - start) / 1000;
      draw(time);
      stepK(time);
      if (!collapsed && time >= COLLAPSE_AT) collapse();
      if (time >= END_AT) { finish(); return; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (gone) return null;

  return (
    <div ref={root} id="ld" aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[99] overflow-hidden border-b border-line bg-black"
      style={{ height: "100svh", transition: `height ${T.collapse}s ${EASE}` }}>
      <div ref={inner} className="absolute inset-x-0 top-0 h-svh">
        <canvas ref={canvas} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 grid place-items-center">
          <div ref={mark} className="w-[clamp(120px,24vw,180px)]">
            <svg viewBox={MARK_VIEWBOX} className="block w-full overflow-visible">
              <defs>
                <clipPath id="ld-slab"><circle ref={clip} cx={SLAB.x} cy={SLAB.y} r="0" /></clipPath>
              </defs>
              <path ref={body} d={K_PATH} fill="#F3EEDF" style={{ opacity: 0 }} />
              <path d={SLAB_PATH} fill={GOLD} clipPath="url(#ld-slab)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}