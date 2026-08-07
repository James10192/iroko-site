import type { Metadata } from "next";
import { Fraunces, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { COUNTS } from "@/lib/manifest";
import { SITE } from "@/lib/site";
import { fmt } from "@/lib/format";
import "../globals.css";

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const vars = { total: COUNTS.total };

  return {
    title: fmt(dict.meta.title, vars),
    description: fmt(dict.meta.description, vars),
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        "x-default": "/fr",
      },
    },
    openGraph: {
      title: fmt(dict.meta.ogTitle, vars),
      description: fmt(dict.meta.ogDescription, vars),
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: `/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <html
      lang={locale satisfies Locale}
      className={`${fraunces.variable} ${dmSans.variable} ${plexMono.variable} antialiased`}
    >
      <body className="min-h-dvh bg-paper text-ink">{children}</body>
    </html>
  );
}
