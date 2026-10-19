import { ImageResponse } from "next/og";
import { K_PATH, SLAB_PATH, MARK_VIEWBOX } from "@/components/Logo";

// 192 = 4 x 48, a size Google accepts for favicons
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#000" }}>
        <svg width="140" height="134" viewBox={MARK_VIEWBOX}>
          <path d={K_PATH} fill="#F3EEDF" />
          <path d={SLAB_PATH} fill="#FFC20E" />
        </svg>
      </div>
    ),
    size,
  );
}