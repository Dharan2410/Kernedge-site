import type { Metadata, Viewport } from "next";
import { Unbounded, Instrument_Sans } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500", "800"], variable: "--font-unbounded", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  title: "Kernedge Pvt. Ltd. | Learn it. Build it. Scale it.",
  description: "Industry-led training and internships, IT services and technology consulting from Kernedge Pvt. Ltd.",
  icons: { icon: "/logo-mark.jpeg" },
};
export const viewport: Viewport = { themeColor: "#000000", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${instrument.variable}`}>
      <body className="lock">{children}</body>
    </html>
  );
}
