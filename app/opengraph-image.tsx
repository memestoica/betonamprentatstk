import { ImageResponse } from "next/og";

export const alt = "Beton Amprentat STK";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #f7f4ef 0%, #efe6da 54%, #d9b08a 100%)",
          padding: "64px",
          color: "#1f2933",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <span
              style={{
                fontSize: 24,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#9b5d2b",
              }}
            >
              Beton amprentat premium
            </span>
            <span style={{ fontSize: 40, fontWeight: 700 }}>
              Beton Amprentat STK
            </span>
          </div>
          <div
            style={{
              border: "2px solid rgba(196, 122, 60, 0.35)",
              borderRadius: "999px",
              padding: "18px 28px",
              fontSize: 24,
            }}
          >
            Toata Romania
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: "820px",
            }}
          >
            Curti, terase si alei cu finisaj durabil
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              maxWidth: "900px",
              color: "#4b5563",
            }}
          >
            Modele moderne, culori variate si executie curata pentru lucrari de
            beton amprentat.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
