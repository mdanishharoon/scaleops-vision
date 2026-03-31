import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Secure Ledger Financials";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0c0a06",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "380px",
            fontWeight: "bold",
            fontStyle: "italic",
            color: "#d4a017",
            lineHeight: 1,
          }}
        >
          S
        </span>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
