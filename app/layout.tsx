import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ViewTransition } from "react";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Pranjal Butola",
    template: "%s · Pranjal Butola",
  },

  description: "Computer science enthusiast and student.",
  openGraph: {
    title: "Pranjal Butola",
    description: "Computer science enthusiast and student.",
    locale: "en_US",
    type: "website",
    images: [
      "/api/og?title=Pranjal%20Butola&description=Designer%20%26%20Developer",
    ],
  },
  twitter: {
    title: "Pranjal Butola",
    card: "summary_large_image",
    creator: "@pranjal_fxd_",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <ViewTransition>{children}</ViewTransition>
        <Analytics />
      </body>
    </html>
  );
}
