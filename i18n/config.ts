export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}
