import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jbmono",
  display: "swap",
});

const siteUrl = "https://humanodeid.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HumanodeID — Verify every user is human.",
    template: "%s — HumanodeID",
  },
  description:
    "HumanodeID helps developers build more trusted applications by making human verification simple to integrate.",
  keywords: [
    "human verification API",
    "bot detection",
    "fake account prevention",
    "sybil resistance",
    "developer infrastructure",
    "identity verification",
  ],
  authors: [{ name: "HumanodeID" }],
  openGraph: {
    title: "HumanodeID — Verify every user is human.",
    description:
      "HumanodeID helps developers build more trusted applications by making human verification simple to integrate.",
    url: siteUrl,
    siteName: "HumanodeID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HumanodeID — Verify every user is human.",
    description:
      "HumanodeID helps developers build more trusted applications by making human verification simple to integrate.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${sora.variable} ${inter.variable} ${jbmono.variable} font-body bg-ink-950 text-slate-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
