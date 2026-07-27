import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import { ViewTransition } from "react";
import "./globals.css";

const _geist = Geist({
  subsets: ["latin"],
  variable: "--font-site-sans",
});
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-site-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https:${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000",
  ),
  title: {
    default: "Pranjal Butola",
    template: "%s · Pranjal Butola",
  },
  description:
    "Backend-focused computer science student writing about software and building in public.",
  openGraph: {
    title: "Pranjal Butola",
    description:
      "Backend-focused computer science student writing about software and building in public.",
    locale: "en_US",
    type: "website",
    images: [
      `/api/og?title=Pranjal%20Butola&description=${encodeURIComponent(
        "Backend-focused computer science student writing about software and building in public.",
      )}`,
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
      <body
        className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-50 -translate-y-24 bg-foreground px-3 py-2 text-sm text-background transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 sm:px-6">
          <Header />
          <ViewTransition name="page" default="page">
            <main
              id="main-content"
              className="flex-1 py-12 sm:py-16"
              suppressHydrationWarning
            >
              {children}
            </main>
          </ViewTransition>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
