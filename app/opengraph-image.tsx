import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/siteConfig";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111827",
          backgroundImage: "linear-gradient(to top, #011f2d, #0c4b5c 60%, #17a3b3 100%)",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            display: "flex",
          }}
        >
          Aliia Tech
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#9CA3AF",
            marginTop: 20,
            display: "flex",
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
