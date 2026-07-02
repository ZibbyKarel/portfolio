import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Karel Zíbar — Senior Frontend Developer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0f",
          color: "#e8e8f0",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#00d4ff" }}>
          ~ % whoami
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Karel Zíbar
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 34,
            color: "#00d4ff",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Senior Frontend Developer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 28,
            color: "#8f8fa3",
            maxWidth: 900,
            lineHeight: 1.5,
          }}
        >
          12+ years building interfaces for products used by millions — now
          building my own AI agent OS on the side.
        </div>
      </div>
    ),
    size,
  );
}
