import { ImageResponse } from "next/og";
import { K_PATH, SLAB_PATH, MARK_VIEWBOX } from "@/components/Logo";

export const alt = "Kernedge: internships, training and IT services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#000", padding: 80 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, color: "#F3EEDF", letterSpacing: 6 }}>KERNEDGE</div>
          <div style={{ display: "flex", fontSize: 40, color: "#FFC20E", marginTop: 24 }}>Internships, training and IT services</div>
          <div style={{ display: "flex", fontSize: 32, color: "#a79f88", marginTop: 20 }}>Coimbatore and Tiruppur</div>
        </div>
        <svg width="330" height="316" viewBox={MARK_VIEWBOX}>
          <path d={K_PATH} fill="#F3EEDF" />
          <path d={SLAB_PATH} fill="#FFC20E" />
        </svg>
      </div>
    ),
    size,
  );
}