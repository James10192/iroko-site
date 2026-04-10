"use client";

import { useState } from "react";

const TREE = `      @@@@
     @@@@@@@@
    @@@@@@@@@@
   @@@@@@@@@@@@
  @@@@@@@@@@@@@@
   @@@@@@@@@@@@
    @@@@@@@@@@
     @@@@@@@@
       ||||
       ||||`;

export function Hero() {
  const [copied, setCopied] = useState(false);
  const command = "npx @james10192/iroko init";

  const copy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 pt-28 pb-24 md:pt-40 md:pb-36">
      <pre className="text-accent font-mono text-xs md:text-sm leading-tight select-none mb-10 opacity-80">
        {TREE}
      </pre>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-center mb-5">
        iroko
      </h1>

      <p className="text-muted text-lg md:text-xl text-center max-w-lg mb-12 leading-relaxed">
        28 components for Claude Code.
        <br />
        Rules. Skills. Agents. Hooks.
        <br />
        <span className="text-foreground font-medium">One install.</span>
      </p>

      <button
        onClick={copy}
        className="group flex items-center gap-3 bg-surface border border-border rounded-xl px-6 py-4 font-mono text-sm md:text-base hover:border-accent glow-accent transition-all duration-300 cursor-pointer"
      >
        <span className="text-accent select-none">$</span>
        <span className="text-foreground">{command}</span>
        <span className="text-muted group-hover:text-accent transition-colors text-xs ml-2">
          {copied ? "✓" : "copy"}
        </span>
      </button>

      <div className="flex items-center gap-5 mt-10">
        <a
          href="https://github.com/James10192/iroko"
          className="text-muted hover:text-foreground text-sm transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <span className="text-border text-xs">•</span>
        <a
          href="https://www.npmjs.com/package/@james10192/iroko"
          className="text-muted hover:text-foreground text-sm transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          npm
        </a>
        <span className="text-border text-xs">•</span>
        <span className="text-muted text-sm font-mono">v1.4.0</span>
      </div>
    </section>
  );
}
