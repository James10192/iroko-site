// Mirror of the CLI v3 manifest (iroko src/lib/manifest.ts).
// Single source of truth for component names, types, cycle steps and packs.
// Every counter on the site derives from this file — never hardcode numbers.

export type ComponentType = "rule" | "skill" | "agent" | "hook";

export type Step =
  | "cadrer"
  | "illustrer"
  | "documenter"
  | "construire"
  | "verifier";

// guide ⊂ default ⊂ full — a component tagged "guide" ships in every pack.
export type Pack = "guide" | "default" | "full";

export interface ManifestComponent {
  name: string;
  type: ComponentType;
  step: Step;
  pack: Pack;
}

export const STEPS: readonly Step[] = [
  "cadrer",
  "illustrer",
  "documenter",
  "construire",
  "verifier",
] as const;

export const MANIFEST = [
  // Rules (7)
  { name: "quality-gate", type: "rule", step: "verifier", pack: "guide" },
  { name: "git-safety", type: "rule", step: "construire", pack: "guide" },
  { name: "stay-in-scope", type: "rule", step: "cadrer", pack: "guide" },
  { name: "ship-quality", type: "rule", step: "construire", pack: "default" },
  { name: "token-efficiency", type: "rule", step: "construire", pack: "guide" },
  { name: "docs-first", type: "rule", step: "documenter", pack: "default" },
  { name: "global-preferences", type: "rule", step: "construire", pack: "default" },
  // Skills (12)
  { name: "plan-and-confirm", type: "skill", step: "cadrer", pack: "guide" },
  { name: "pick-stack", type: "skill", step: "cadrer", pack: "default" },
  { name: "sketch", type: "skill", step: "illustrer", pack: "default" },
  { name: "read-docs", type: "skill", step: "documenter", pack: "guide" },
  { name: "demarrer", type: "skill", step: "cadrer", pack: "guide" },
  { name: "commit", type: "skill", step: "verifier", pack: "guide" },
  { name: "deep-review", type: "skill", step: "verifier", pack: "default" },
  { name: "fix-errors", type: "skill", step: "verifier", pack: "guide" },
  { name: "visual-check", type: "skill", step: "verifier", pack: "default" },
  { name: "create-pr", type: "skill", step: "construire", pack: "full" },
  { name: "create-issue", type: "skill", step: "construire", pack: "full" },
  { name: "oneshot", type: "skill", step: "construire", pack: "default" },
  // Agents (4)
  { name: "critic", type: "agent", step: "cadrer", pack: "guide" },
  { name: "explore-docs", type: "agent", step: "documenter", pack: "guide" },
  { name: "explore-codebase", type: "agent", step: "cadrer", pack: "default" },
  { name: "websearch", type: "agent", step: "documenter", pack: "default" },
  // Hook (1)
  { name: "guard-destructive", type: "hook", step: "construire", pack: "guide" },
] as const satisfies readonly ManifestComponent[];

export type ComponentName = (typeof MANIFEST)[number]["name"];

export function countByType(type: ComponentType): number {
  return MANIFEST.filter((c) => c.type === type).length;
}

export const COUNTS = {
  rules: countByType("rule"),
  skills: countByType("skill"),
  agents: countByType("agent"),
  hooks: countByType("hook"),
  guide: MANIFEST.filter((c) => c.pack === "guide").length,
  total: MANIFEST.length,
} as const;

export function componentsByStep(step: Step) {
  return MANIFEST.filter((c) => c.step === step);
}

// Skills are invoked as slash commands.
export function displayName(component: Pick<ManifestComponent, "name" | "type">): string {
  return component.type === "skill" ? `/${component.name}` : component.name;
}
