"use client";

import { useState } from "react";

const TREE = `    @@@@
   @@@@@@@@
  @@@@@@@@@@
 @@@@@@@@@@@@
  @@@@@@@@@@
   @@@@@@@@
    ||
    ||`;

export function Hero() {
  const [copied, setCopied] = useState(false);
  const command = "npx @james10192/iroko init";

  const copy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <pre className="text-accent font-mono text-sm leading-tight select-none mb-8">
        {TREE}
      </pre>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-4">
        iroko
      </h1>

      <p className="text-muted text-lg md:text-xl text-center max-w-xl mb-10">
        28 components for Claude Code. Rules, skills, agents, hooks.
        <br className="hidden md:block" />
        One install.
      </p>

      <button
        onClick={copy}
        className="group flex items-center gap-3 bg-surface border border-border rounded-lg px-5 py-3 font-mono text-sm hover:border-accent transition-colors cursor-pointer"
      >
        <span className="text-muted select-none">$</span>
        <span className="text-foreground">{command}</span>
        <span className="text-muted group-hover:text-accent transition-colors text-xs">
          {copied ? "copied" : "copy"}
        </span>
      </button>

      <div className="flex items-center gap-4 mt-8">
        <a
          href="https://github.com/James10192/iroko"
          className="text-muted hover:text-foreground text-sm transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <span className="text-border">|</span>
        <a
          href="https://www.npmjs.com/package/@james10192/iroko"
          className="text-muted hover:text-foreground text-sm transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          npm
        </a>
        <span className="text-border">|</span>
        <span className="text-muted text-sm">v1.4.0</span>
      </div>
    </section>
  );
}
