import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Secure Ledger Financials | Partner Track";
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
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "Georgia, serif",
          overflow: "hidden",
        }}
      >
        {/* Radial glow top-right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(ellipse at top right, rgba(212,160,23,0.18) 0%, transparent 60%)",
            display: "flex",
          }}
        />

        {/* Radial glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(ellipse at bottom left, rgba(26,58,42,0.22) 0%, transparent 60%)",
            display: "flex",
          }}
        />

        {/* Large decorative S watermark */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "60px",
            fontSize: "380px",
            fontStyle: "italic",
            fontWeight: "900",
            color: "rgba(212,160,23,0.06)",
            lineHeight: 1,
            display: "flex",
            letterSpacing: "-8px",
          }}
        >
          S
        </div>

        {/* Top badge */}
        <div
          style={{
            position: "absolute",
            top: "52px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* S emblem */}
          <div
            style={{
              width: "40px",
              height: "40px",
              background: "#d4a017",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontStyle: "italic",
              fontWeight: "900",
              color: "#0c0a06",
            }}
          >
            S
          </div>
          <span
            style={{
              fontSize: "13px",
              color: "rgba(250,248,243,0.45)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Secure Ledger Financials
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative", zIndex: 10 }}>
          {/* Gold rule */}
          <div
            style={{
              width: "48px",
              height: "2px",
              background: "#d4a017",
              display: "flex",
            }}
          />

          {/* Headline */}
          <div
            style={{
              fontSize: "58px",
              fontWeight: "900",
              color: "#faf8f3",
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Build </span>
            <span>
              <span style={{ color: "#d4a017" }}>£100K</span> in contract value
            </span>
            <span style={{ fontStyle: "italic", color: "rgba(250,248,243,0.75)" }}>
              within 9 months.
            </span>
          </div>

          {/* Subtext */}
          <div
            style={{
              fontSize: "20px",
              color: "rgba(250,248,243,0.45)",
              letterSpacing: "0.02em",
              maxWidth: "620px",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Structured partner track for finance professionals. No delivery.
          </div>

          {/* Tags row */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "8px",
            }}
          >
            {["UK", "US", "Australia", "Middle East"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 14px",
                  border: "1px solid rgba(212,160,23,0.3)",
                  borderRadius: "99px",
                  fontSize: "12px",
                  color: "rgba(212,160,23,0.8)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
