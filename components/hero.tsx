"use client";

import { useState } from "react";

const TREE = [
  "        ⣠⣤⣤⣤⣤⣄",
  "      ⣴⣿⣿⣿⣿⣿⣿⣿⣦",
  "    ⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆",
  "   ⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧",
  "  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
  "   ⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟",
  "    ⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁",
  "      ⠈⠛⣿⣿⣿⣿⠛⠁",
  "         ⠿⠿",
  "         ║║",
  "         ║║",
  "         ║║",
];

export function Hero() {
  const [copied, setCopied] = useState(false);
  const command = "npx @james10192/iroko init";

  const copy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-dvh px-6 overflow-hidden grid-bg">
      {/* Ambient radial glow behind tree */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74, 124, 89, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="animate-tree animate-float">
        <pre className="text-accent font-mono text-sm md:text-base leading-snug select-none text-center">
          {TREE.join("\n")}
        </pre>
      </div>

      <h1 className="animate-hero-delay-1 text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-[-0.06em] text-center mt-8">
        iroko
      </h1>

      <p className="animate-hero-delay-2 text-muted text-lg md:text-xl text-center max-w-md mt-6 leading-relaxed font-mono">
        <span className="text-foreground">25 components</span> for Claude Code.
        <br />
        Rules. Skills. Agents. Hooks.
      </p>

      <button
        onClick={copy}
        className="animate-hero-delay-3 animate-glow group flex items-center gap-3 bg-surface border border-border hover:border-accent rounded-2xl px-7 py-4 font-mono text-sm md:text-base transition-all duration-300 cursor-pointer mt-10"
      >
        <span className="text-accent select-none font-semibold">$</span>
        <span className="text-foreground">{command}</span>
        <span className="text-muted group-hover:text-accent-light transition-colors text-xs ml-2 font-sans">
          {copied ? "copied" : "copy"}
        </span>
      </button>

      <nav className="animate-hero-delay-3 flex items-center gap-6 mt-8 font-mono text-sm">
        <a
          href="https://github.com/James10192/iroko"
          className="text-muted hover:text-accent-light transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <span className="text-border">·</span>
        <a
          href="https://www.npmjs.com/package/@james10192/iroko"
          className="text-muted hover:text-accent-light transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          npm
        </a>
        <span className="text-border">·</span>
        <span className="text-muted">v2.0.0</span>
      </nav>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted text-xs font-mono tracking-wider uppercase">scroll</span>
        <svg
          className="scroll-indicator w-4 h-4 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
}
