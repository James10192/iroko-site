import type { Metadata } from "next";
import { Fraunces, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "iroko — Claude Code configuration",
  description:
    "25 hand-built components for Claude Code: rules, skills, agents, hooks. Strict semver, MIT licensed. Built in Abidjan, Côte d'Ivoire.",
  metadataBase: new URL("https://iroko-site.vercel.app"),
  openGraph: {
    title: "iroko — Claude Code configuration",
    description:
      "25 hand-built components for Claude Code. One command installs the quality gate, the planning pipeline, and the whole workflow.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${plexMono.variable} antialiased`}
    >
      <body className="min-h-dvh bg-paper text-ink">{children}</body>
    </html>
  );
}
