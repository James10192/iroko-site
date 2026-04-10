"use client";

import { useState } from "react";
import { useFadeIn } from "./use-fade-in";

const METHODS = [
  {
    id: "npx",
    label: "npx",
    command: "npx @james10192/iroko init",
    note: "No install required",
    desc: "Run once. Pick what you want. Done.",
  },
  {
    id: "global",
    label: "Global",
    command: "pnpm add -g @james10192/iroko\niroko init",
    note: "Permanent install",
    desc: "Install globally. Run iroko from anywhere.",
  },
  {
    id: "plugin",
    label: "Plugin",
    command: "/plugin marketplace add James10192/iroko\n/plugin install iroko@iroko",
    note: "Claude Code native",
    desc: "Use Claude Code's built-in plugin system.",
  },
  {
    id: "manual",
    label: "Manual",
    command: "git clone https://github.com/James10192/iroko.git\ncp -r iroko/rules/* ~/.claude/rules/\ncp -r iroko/skills/* ~/.claude/skills/\ncp -r iroko/agents/* ~/.claude/agents/",
    note: "Cherry-pick",
    desc: "Clone the repo. Copy only what you need.",
  },
];

const PLUGINS = [
  { name: "AI Blueprint", author: "Melvynx", url: "https://github.com/Melvynx/aiblueprint", desc: "APEX methodology, ralph-loop, ultrathink, oneshot" },
  { name: "Impeccable", author: "Paul Bakaus", url: "https://github.com/pbakaus/impeccable", desc: "Design quality and adaptation skills" },
  { name: "Superpowers Laravel", author: "JP Caparas", url: "https://github.com/jpcaparas/superpowers-laravel", desc: "50+ Laravel-specific patterns" },
  { name: "Claude Official", author: "Anthropic", url: "https://github.com/anthropics/claude-plugins-official", desc: "feature-dev, pr-review, vercel, slack" },
];

export function InstallSection() {
  const [active, setActive] = useState("npx");
  const [copied, setCopied] = useState(false);
  const ref = useFadeIn();
  const refPlugins = useFadeIn();
  const method = METHODS.find((m) => m.id === active)!;

  const copyCommand = () => {
    navigator.clipboard.writeText(method.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 py-28 md:py-36 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="fade-in">
          <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4 text-center">
            Get started
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-center tracking-tight leading-tight">
            30 seconds to
            <br />
            <span className="text-gradient">a better workflow</span>
          </h2>
          <p className="text-muted text-center mt-6 text-lg max-w-xl mx-auto">
            Interactive checklist. Everything selected by default. Deselect what you don&apos;t need. That&apos;s it.
          </p>

          {/* Method cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14">
            {METHODS.map((m) => (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`group text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  active === m.id
                    ? "bg-accent/10 border-accent"
                    : "bg-surface border-border hover:border-border-hover"
                }`}
              >
                <span
                  className={`font-mono text-sm font-semibold block mb-1 transition-colors ${
                    active === m.id ? "text-accent-light" : "text-foreground"
                  }`}
                >
                  {m.label}
                </span>
                <span className="text-muted text-xs leading-relaxed block">
                  {m.desc}
                </span>
              </button>
            ))}
          </div>

          {/* Terminal */}
          <div className="terminal rounded-2xl overflow-hidden mt-8 animate-glow">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border">
              <div className="terminal-dots flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" />
                <span className="w-2.5 h-2.5 rounded-full" />
                <span className="w-2.5 h-2.5 rounded-full" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted text-xs font-mono">{method.note}</span>
                <button
                  onClick={copyCommand}
                  className="text-muted hover:text-accent text-xs font-mono px-2.5 py-1 rounded-lg border border-border hover:border-accent/40 transition-all duration-200 cursor-pointer"
                >
                  {copied ? "copied ✓" : "copy"}
                </button>
              </div>
            </div>
            <pre className="p-6 md:p-8 text-accent text-sm md:text-base whitespace-pre-wrap font-mono leading-relaxed">
              {method.command}
            </pre>
          </div>
        </div>

        {/* Recommended plugins */}
        <div ref={refPlugins} className="fade-in mt-28">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-3">Goes well with</h3>
            <p className="text-muted text-sm max-w-md mx-auto">
              These plugins complement iroko. Different authors, same ecosystem. Install them separately.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PLUGINS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-5 bg-surface border border-border rounded-2xl hover:border-accent/30 hover:bg-surface-hover transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground text-sm font-semibold group-hover:text-accent-light transition-colors">
                    {p.name}
                  </span>
                  <svg className="w-3.5 h-3.5 text-muted/40 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <span className="text-muted text-xs leading-relaxed">{p.desc}</span>
                <span className="text-muted/30 text-xs mt-3 font-mono">{p.author}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
