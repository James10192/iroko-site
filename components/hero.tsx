"use client";

import { useCopy } from "./use-copy";

// Exact iroko silhouette from the CLI banner (src/lib/banner.ts).
const TREE = [
  "    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "          ████",
  "          ████",
  "          ████",
  "        ▓▓████▓▓",
  "      ▓▓▓▓████▓▓▓▓",
];

const PROOF = ["25 components", "Strict semver", "MIT license"];

export function Hero() {
  const { copied, copy } = useCopy();
  const command = "npx @james10192/iroko init";

  return (
    <header className="relative border-b border-line">
      {/* Top bar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="flex min-h-11 items-center gap-2.5 font-mono text-sm font-semibold">
          <span aria-hidden className="text-ochre">▰</span>
          <span>iroko</span>
        </a>
        <nav className="flex items-center gap-1 font-mono text-sm">
          <a
            href="https://github.com/James10192/iroko"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center px-3 text-ink-soft transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/@james10192/iroko"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center px-3 text-ink-soft transition-colors hover:text-ink"
          >
            npm
          </a>
          <span className="ml-2 hidden rounded-full border border-line-strong px-3 py-1 text-xs text-ochre-ink sm:inline">
            v2.2.1
          </span>
        </nav>
      </div>

      {/* Hero body */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-14 md:pb-28 md:pt-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="animate-rise font-mono text-xs uppercase tracking-[0.25em] text-walnut">
            Claude Code configuration
          </p>
          <h1 className="animate-rise mt-6 font-display text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl md:text-7xl">
            Deep roots for
            <br />
            your Claude Code.
          </h1>
          <p className="animate-rise-1 mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            iroko installs 25 hand-built components — rules, skills, agents and
            hooks — refined daily on production SaaS projects. Named after the
            West African hardwood: durable, solid, the foundation everything
            else builds on.
          </p>

          {/* Install command */}
          <div className="animate-rise-2 mt-10">
            <button
              onClick={() => copy(command)}
              aria-label="Copy install command"
              className="term group flex min-h-14 w-full max-w-xl items-center gap-3 rounded-xl px-5 py-4 text-left font-mono text-sm transition-colors hover:border-walnut sm:text-base"
            >
              <span aria-hidden className="select-none font-semibold text-term-ochre">
                $
              </span>
              <span className="flex-1 truncate text-term-ink">{command}</span>
              <span className="shrink-0 rounded-md border border-term-line px-2.5 py-1 text-xs text-term-muted transition-colors group-hover:border-term-walnut group-hover:text-term-ink">
                {copied ? "copied ✓" : "copy"}
              </span>
            </button>

            <ul className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-sm text-muted">
              {PROOF.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden className="text-xs text-ochre">▰</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CLI banner, reproduced faithfully */}
        <div className="animate-rise-2 lg:col-span-5">
          <div className="term overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(36,29,17,0.5)]">
            <div className="term-header flex items-center gap-2 px-5 py-3.5">
              <span aria-hidden className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-term-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-term-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-term-line" />
              </span>
              <span className="ml-2 font-mono text-xs text-term-muted">iroko</span>
            </div>
            <div className="p-6 font-mono text-[13px] leading-snug md:p-8">
              <pre aria-hidden className="select-none text-term-walnut">
                {TREE.join("\n")}
              </pre>
              <div className="mt-6 flex items-baseline justify-between">
                <span className="font-semibold text-term-ink">iroko</span>
                <span className="text-term-ochre">v2.2.1</span>
              </div>
              <div aria-hidden className="my-2 overflow-hidden whitespace-nowrap text-term-line">
                {"─".repeat(60)}
              </div>
              <p className="text-term-ink">Claude Code Configuration</p>
              <p className="mt-1 text-term-muted">
                25 components · Built in Abidjan, Côte d&apos;Ivoire
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
