import type { Metadata } from "next";
import { IBM_Plex_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "iroko — Claude Code Configuration",
  description:
    "28 custom components for Claude Code. Rules, skills, agents, hooks. Built in Abidjan.",
  metadataBase: new URL("https://iroko-site.vercel.app"),
  openGraph: {
    title: "iroko — Claude Code Configuration",
    description:
      "28 custom components for Claude Code. Quality gate, parallel agents, plan-and-confirm workflow.",
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
      className={`${dmSans.variable} ${plexMono.variable} antialiased`}
    >
      <body className="min-h-dvh bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
