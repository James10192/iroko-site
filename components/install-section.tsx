"use client";

import { useState } from "react";
import { useFadeIn } from "./use-fade-in";

const METHODS = [
  { id: "npx", label: "npx", command: "npx @james10192/iroko init", note: "No install required" },
  { id: "global", label: "Global", command: "pnpm add -g @james10192/iroko\niroko init", note: "Permanent" },
  { id: "plugin", label: "Plugin", command: "/plugin marketplace add James10192/iroko\n/plugin install iroko@iroko", note: "Claude Code native" },
  { id: "manual", label: "Manual", command: "git clone https://github.com/James10192/iroko.git\ncp -r iroko/rules/* ~/.claude/rules/\ncp -r iroko/skills/* ~/.claude/skills/\ncp -r iroko/agents/* ~/.claude/agents/", note: "Pick what you need" },
];

const PLUGINS = [
  { name: "AI Blueprint", author: "Melvynx", url: "https://github.com/Melvynx/aiblueprint", desc: "APEX, ralph-loop, ultrathink" },
  { name: "Impeccable", author: "Paul Bakaus", url: "https://github.com/pbakaus/impeccable", desc: "Design quality skills" },
  { name: "Superpowers Laravel", author: "JP Caparas", url: "https://github.com/jpcaparas/superpowers-laravel", desc: "50+ Laravel patterns" },
  { name: "Claude Plugins Official", author: "Anthropic", url: "https://github.com/anthropics/claude-plugins-official", desc: "feature-dev, pr-review, vercel" },
];

export function InstallSection() {
  const [active, setActive] = useState("npx");
  const ref = useFadeIn();
  const refPlugins = useFadeIn();

  const method = METHODS.find((m) => m.id === active)!;

  return (
    <section className="px-6 py-24 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="fade-in">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-14 text-center tracking-tight">
            Install
          </h2>

          <div className="flex items-center justify-center gap-1 mb-6 bg-surface rounded-xl p-1 border border-border max-w-md mx-auto">
            {METHODS.map((m) => (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  active === m.id
                    ? "bg-accent text-white"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border">
              <span className="text-muted text-xs font-mono">{method.note}</span>
            </div>
            <pre className="p-6 text-accent text-sm md:text-base whitespace-pre-wrap overflow-x-auto">
              {method.command}
            </pre>
          </div>

          <p className="text-muted text-sm text-center mt-8">
            Interactive checklist. Everything selected by default. Deselect what you don&apos;t need.
          </p>
        </div>

        <div ref={refPlugins} className="fade-in mt-20">
          <h3 className="text-xl font-bold mb-3 text-center">Recommended plugins</h3>
          <p className="text-muted text-sm text-center mb-8">
            Tools I use alongside iroko. Not bundled.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PLUGINS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-5 bg-surface border border-border rounded-xl hover:border-accent/40 transition-all duration-200"
              >
                <span className="text-foreground text-sm font-semibold">{p.name}</span>
                <span className="text-muted text-xs mt-1">{p.desc}</span>
                <span className="text-muted/60 text-xs mt-3">by {p.author}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
