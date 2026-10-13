import type { Config } from "tailwindcss";

// Brand tokens: change colours/fonts here and the whole site follows.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#FFC20E", deep: "#B8860B" },
        ink: "#000000", panel: "#121212", line: "#2a2410", ivory: "#F3EEDF", mute: "#a79f88",
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "Arial Black", "sans-serif"],
        sans: ["var(--font-instrument)", "system-ui", "sans-serif"],
      },
      keyframes: {
        draw: { to: { strokeDashoffset: "0" } },
        fillk: { to: { fill: "#F3EEDF", stroke: "#F3EEDF" } },
        slide: { to: { opacity: "1", transform: "none" } },
        up: { to: { transform: "none" } },
        bar: { to: { transform: "scaleX(1)" } },
        out: { to: { transform: "translateY(-100%)", visibility: "hidden" } },
        fade: { to: { opacity: "1" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        marqueeRev: { from: { transform: "translateX(-50%)" }, to: { transform: "translateX(0)" } },
        pop: { from: { opacity: "0", transform: "translateY(14px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: {
        "ld-out": "out .9s cubic-bezier(.8,0,.2,1) 3.5s forwards",
        "ld-draw": "draw 1.5s cubic-bezier(.6,0,.3,1) .2s forwards, fillk .7s ease 1.5s forwards",
        "ld-slide": "slide .8s cubic-bezier(.2,.8,.2,1) 1.4s forwards",
        "ld-bar": "bar 3.2s ease-in-out forwards",
        rise: "up 1s cubic-bezier(.2,.8,.2,1) forwards",
        "rise-fast": "up .7s cubic-bezier(.2,.8,.2,1) forwards",
        "fade-in": "fade .9s ease forwards",
        marquee: "marquee 38s linear infinite",
        "marquee-rev": "marqueeRev 44s linear infinite",
        rays: "spin 90s linear infinite",
        pop: "pop .5s cubic-bezier(.2,.8,.2,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
