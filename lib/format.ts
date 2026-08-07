// Tiny template interpolation for dictionary strings.
// Dictionaries only contain templates ("{count} composants"),
// numbers always come from lib/manifest.ts at render time.

export function fmt(
  template: string,
  vars: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match
  );
}
