"use client";

import { useState } from "react";
import { useCopy } from "./use-copy";
import { useFadeIn } from "./use-fade-in";

const BAR = "▰".repeat(20);

const STEPS = [
  {
    index: "01",
    title: "Init",
    command: "npx @james10192/iroko init",
    desc: "Interactive checklist. Everything selected by default — deselect what you don't need, confirm, done.",
    output: (
      <>
        <p className="text-term-ink">
          <span aria-hidden className="text-term-ochre">▰</span>{" "}
          <span className="font-semibold">iroko</span>{" "}
          <span className="text-term-muted">v2.2.1</span>
        </p>
        <p className="mt-3 text-term-muted">? Select components to install</p>
        <p className="mt-1 text-term-ink">
          <span className="text-term-ochre">◉</span> rules{" "}
          <span className="text-term-ochre">◉</span> skills{" "}
          <span className="text-term-ochre">◉</span> agents{" "}
          <span className="text-term-ochre">◉</span> hooks
        </p>
        <p className="mt-3 text-term-ochre">▰ 25 components installed</p>
      </>
    ),
  },
  {
    index: "02",
    title: "List",
    command: "iroko list",
    desc: "See what's installed against the full manifest, type by type. The ▰ bar is the same one the CLI draws.",
    output: (
      <>
        <p className="text-term-ink">
          <span aria-hidden className="text-term-ochre">▰</span>{" "}
          <span className="font-semibold">Summary</span>
        </p>
        <div className="mt-3 space-y-1.5 text-term-muted">
          {[
            ["Rules", "5/5"],
            ["Skills", "15/15"],
            ["Agents", "3/3"],
            ["Hooks", "2/2"],
          ].map(([label, count]) => (
            <p key={label} className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
              <span className="w-14 shrink-0">{label}</span>
              <span aria-hidden className="text-term-ochre">{BAR}</span>
              <span className="shrink-0 text-term-ink">{count}</span>
            </p>
          ))}
        </div>
      </>
    ),
  },
  {
    index: "03",
    title: "Update",
    command: "iroko update",
    desc: "Pull the latest versions of what you installed. Strict semver: patch fixes, minor additions, major renames — never a surprise.",
    output: (
      <>
        <p className="text-term-muted">Checking manifest…</p>
        <p className="mt-2 text-term-ink">
          <span aria-hidden className="text-term-ochre">▴</span> commit{" "}
          <span className="text-term-muted">2.1.0 →</span>{" "}
          <span className="text-term-ochre">2.2.1</span>
        </p>
        <p className="mt-3 text-term-ochre">▰ 1 component updated</p>
      </>
    ),
  },
];

const ALT_METHODS = [
  { label: "Global install", command: "pnpm add -g @james10192/iroko" },
  { label: "Claude Code plugin", command: "/plugin marketplace add James10192/iroko" },
  { label: "Manual cherry-pick", command: "git clone https://github.com/James10192/iroko.git" },
];

function StepBlock({ step }: { step: (typeof STEPS)[number] }) {
  const ref = useFadeIn();
  const { copied, copy } = useCopy();

  return (
    <div ref={ref} className="fade-in grid grid-cols-1 gap-8 border-t border-line pt-10 md:grid-cols-12">
      <div className="md:col-span-5">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-walnut">{step.index}</span>
          <h3 className="font-display text-2xl font-medium tracking-tight">{step.title}</h3>
        </div>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{step.desc}</p>
      </div>
      <div className="md:col-span-7">
        <div className="term overflow-hidden rounded-xl">
          <div className="term-header flex min-h-11 items-center justify-between gap-4 px-5 py-2.5">
            <code className="truncate font-mono text-[13px] text-term-ink">
              <span className="text-term-ochre">$ </span>
              {step.command}
            </code>
            <button
              onClick={() => copy(step.command)}
              aria-label={`Copy command: ${step.command}`}
              className="shrink-0 rounded-md border border-term-line px-2.5 py-1.5 font-mono text-xs text-term-muted transition-colors hover:border-term-walnut hover:text-term-ink"
            >
              {copied ? "copied ✓" : "copy"}
            </button>
          </div>
          <div className="p-5 font-mono text-[13px] leading-relaxed md:px-6">{step.output}</div>
        </div>
      </div>
    </div>
  );
}

export function InstallSection() {
  const refHead = useFadeIn();
  const refAlt = useFadeIn();
  const { copied, copy } = useCopy();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div ref={refHead} className="fade-in mb-16 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-walnut">Quickstart</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Three commands in.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            No config files to write, no account to create. The CLI walks you
            through everything.
          </p>
        </div>

        <div className="space-y-12">
          {STEPS.map((step) => (
            <StepBlock key={step.index} step={step} />
          ))}
        </div>

        {/* Alternate install methods */}
        <div ref={refAlt} className="fade-in mt-20 border-t border-line pt-8">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Other ways to install
          </p>
          <div className="grid grid-cols-1 gap-x-10 gap-y-3 lg:grid-cols-3">
            {ALT_METHODS.map((m, i) => (
              <button
                key={m.label}
                onClick={() => {
                  copy(m.command);
                  setCopiedIndex(i);
                }}
                aria-label={`Copy command: ${m.command}`}
                className="group flex min-h-11 flex-col items-start gap-0.5 rounded-lg text-left"
              >
                <span className="text-xs font-medium text-ink-soft">
                  {m.label}
                  <span className="ml-2 font-mono text-muted opacity-0 transition-opacity group-hover:opacity-100">
                    {copied && copiedIndex === i ? "copied ✓" : "click to copy"}
                  </span>
                </span>
                <code className="font-mono text-[13px] text-ochre-ink transition-colors group-hover:text-ink">
                  {m.command}
                </code>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
