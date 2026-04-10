"use client";

import { useState } from "react";
import { useFadeIn } from "./use-fade-in";

const METHODS = [
  { id: "npx", label: "npx", command: "npx @james10192/iroko init", note: "No install required" },
  { id: "global", label: "Global", command: "pnpm add -g @james10192/iroko\niroko init", note: "Permanent install" },
  { id: "plugin", label: "Plugin", command: "/plugin marketplace add James10192/iroko\n/plugin install iroko@iroko", note: "Claude Code native" },
  { id: "manual", label: "Manual", command: "git clone https://github.com/James10192/iroko.git\ncp -r iroko/rules/* ~/.claude/rules/\ncp -r iroko/skills/* ~/.claude/skills/\ncp -r iroko/agents/* ~/.claude/agents/", note: "Pick what you need" },
];

const PLUGINS = [
  { name: "AI Blueprint", author: "Melvynx", url: "https://github.com/Melvynx/aiblueprint", desc: "APEX, ralph-loop, ultrathink" },
  { name: "Impeccable", author: "Paul Bakaus", url: "https://github.com/pbakaus/impeccable", desc: "Design quality skills" },
  { name: "Superpowers Laravel", author: "JP Caparas", url: "https://github.com/jpcaparas/superpowers-laravel", desc: "50+ Laravel patterns" },
  { name: "Claude Official", author: "Anthropic", url: "https://github.com/anthropics/claude-plugins-official", desc: "feature-dev, pr-review, vercel" },
];

export function InstallSection() {
  const [active, setActive] = useState("npx");
  const ref = useFadeIn();
  const refPlugins = useFadeIn();
  const method = METHODS.find((m) => m.id === active)!;

  return (
    <section className="px-6 py-28 md:py-36 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="fade-in">
          <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4 text-center">
            Get started
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center tracking-tight">
            Install
          </h2>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-1 mb-8 bg-surface rounded-2xl p-1.5 border border-border max-w-md mx-auto">
            {METHODS.map((m) => (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  active === m.id
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Terminal */}
          <div className="terminal rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border">
              <div className="terminal-dots flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" />
                <span className="w-2.5 h-2.5 rounded-full" />
                <span className="w-2.5 h-2.5 rounded-full" />
              </div>
              <span className="text-muted text-xs font-mono">{method.note}</span>
            </div>
            <pre className="p-6 text-accent text-sm md:text-base whitespace-pre-wrap font-mono">
              {method.command}
            </pre>
          </div>

          <p className="text-muted text-sm text-center mt-8 font-mono">
            Interactive checklist. All selected by default.
          </p>
        </div>

        {/* Recommended plugins */}
        <div ref={refPlugins} className="fade-in mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border" />
            <h3 className="text-lg font-bold text-muted">Recommended plugins</h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PLUGINS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-5 bg-surface border border-border rounded-2xl hover:border-border-hover hover:bg-surface-hover transition-all duration-200"
              >
                <span className="text-foreground text-sm font-semibold">{p.name}</span>
                <span className="text-muted text-xs mt-1">{p.desc}</span>
                <span className="text-muted/40 text-xs mt-3 font-mono">{p.author}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
