import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

// https://vercel.com/kb/guide/using-custom-font
async function loadGoogleFont(font: string, text: string, weight: number) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(
    text
  )}`;

  const css = await (await fetch(url)).text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);

    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title")
    ? `${searchParams.get("title")}  · Pranjal Butola`
    : "Pranjal Butola";
  const description = searchParams.get("description") || "Designer & Developer";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#191919",
          fontFamily: "Geist Mono Title",
        }}
      >
        {/* Orange accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#e0fe56",
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            color: "#e0fe56",
            marginBottom: "24px",
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 32,
            color: "#a3a3a3",
            lineHeight: 1.4,
            fontFamily: "Geist Mono Description",
          }}
        >
          {description}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            fontSize: 24,
            color: "#525252",
            fontFamily: "Geist Mono Description",
          }}
        >
          pranjal.sh
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist Mono Title",
          data: await loadGoogleFont("Geist+Mono", title, 700),
          style: "normal",
        },
        {
          name: "Geist Mono Description",
          data: await loadGoogleFont("Geist+Mono", title, 400),
          style: "normal",
        },
      ],
    }
  );
}
