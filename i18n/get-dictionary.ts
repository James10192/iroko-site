// Server-side only: called from server components, dictionaries never
// reach the client bundle (only the rendered strings do, as props).
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/fr";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("./dictionaries/fr").then((mod) => mod.fr),
  en: () => import("./dictionaries/en").then((mod) => mod.en),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export type { Dictionary };
