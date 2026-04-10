import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
