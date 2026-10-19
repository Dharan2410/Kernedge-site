import type { Metadata, Viewport } from "next";
import { Unbounded, Instrument_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SEO, jsonLd } from "@/lib/seo";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500", "800"], variable: "--font-unbounded", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-instrument", display: "swap" });

const google = process.env.NEXT_PUBLIC_GSC_TOKEN;
const bing = process.env.NEXT_PUBLIC_BING_TOKEN;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SEO.title, template: "%s | Kernedge" },
  description: SEO.description,
  applicationName: "Kernedge",
  category: "education",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: "/", siteName: "Kernedge", locale: "en_IN",
    title: SEO.title, description: SEO.description,
  },
  twitter: { card: "summary_large_image", title: SEO.title, description: SEO.description },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google, ...(bing ? { other: { "msvalidate.01": bing } } : {}) },
};
export const viewport: Viewport = { themeColor: "#000000", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${unbounded.variable} ${instrument.variable}`}>
      <body className="lock">
        <JsonLd data={jsonLd} />
        {children}
      </body>
    </html>
  );
}