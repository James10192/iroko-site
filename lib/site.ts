// Single source of truth for non-translatable site facts.
// Version and package identity mirror the CLI (src/lib/banner.ts).

export const SITE = {
  version: "3.1.0",
  pkg: "@james10192/iroko",
  url: "https://iroko-site.vercel.app",
  installCommand: "npx @james10192/iroko init",
  guideCommand: "npx @james10192/iroko init --guide",
  listCommand: "iroko list",
  updateCommand: "iroko update",
  github: "https://github.com/James10192/iroko",
  npm: "https://www.npmjs.com/package/@james10192/iroko",
  changelog: "https://github.com/James10192/iroko/blob/master/CHANGELOG.md",
  license: "https://github.com/James10192/iroko/blob/master/LICENSE",
  author: {
    name: "Marcel DJEDJE-LI",
    url: "https://astonishing-sprite-8fb0c9.netlify.app/",
  },
} as const;

// Exact iroko silhouette from the CLI banner (src/lib/banner.ts).
export const TREE = [
  "    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "          ████",
  "          ████",
  "          ████",
  "        ▓▓████▓▓",
  "      ▓▓▓▓████▓▓▓▓",
] as const;
