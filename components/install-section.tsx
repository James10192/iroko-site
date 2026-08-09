"use client";

import { useState, type ReactNode } from "react";
import { useCopy } from "./use-copy";
import { useFadeIn } from "./use-fade-in";
import type { Dictionary } from "@/i18n/dictionaries/fr";

const BAR = "▰".repeat(20);

interface InstallSectionProps {
  dict: Dictionary["quickstart"];
  commands: { init: string; guide: string; list: string; doctor: string; update: string };
  version: string;
  listCounts: { rules: number; skills: number; agents: number; hooks: number };
}

interface Step {
  index: string;
  title: string;
  command: string;
  desc: string;
  output: ReactNode;
}

function StepBlock({
  step,
  copyLabel,
  copiedLabel,
  copyAriaPrefix,
}: {
  step: Step;
  copyLabel: string;
  copiedLabel: string;
  copyAriaPrefix: string;
}) {
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
              aria-label={`${copyAriaPrefix}: ${step.command}`}
              className="min-h-8 shrink-0 rounded-md border border-term-line px-2.5 py-1.5 font-mono text-xs text-term-muted transition-colors hover:border-term-walnut hover:text-term-ink"
            >
              {copied ? copiedLabel : copyLabel}
            </button>
          </div>
          <div className="p-5 font-mono text-[13px] leading-relaxed md:px-6">{step.output}</div>
        </div>
      </div>
    </div>
  );
}

export function InstallSection({ dict, commands, version, listCounts }: InstallSectionProps) {
  const refHead = useFadeIn();
  const refAlt = useFadeIn();
  const { copied, copy } = useCopy();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const listRows: Array<[string, string]> = [
    [dict.steps.list.rows.rules, `${listCounts.rules}/${listCounts.rules}`],
    [dict.steps.list.rows.skills, `${listCounts.skills}/${listCounts.skills}`],
    [dict.steps.list.rows.agents, `${listCounts.agents}/${listCounts.agents}`],
    [dict.steps.list.rows.hooks, `${listCounts.hooks}/${listCounts.hooks}`],
  ];

  const steps: Step[] = [
    {
      index: "01",
      title: dict.steps.init.title,
      command: commands.init,
      desc: dict.steps.init.desc,
      output: (
        <>
          <p className="text-term-ink">
            <span aria-hidden className="text-term-ochre">▰</span>{" "}
            <span className="font-semibold">iroko</span>{" "}
            <span className="text-term-muted">v{version}</span>
          </p>
          <p className="mt-3 text-term-muted">{dict.steps.init.promptLine}</p>
          <p className="mt-1 text-term-ink">
            <span className="text-term-ochre">◉</span> rules{" "}
            <span className="text-term-ochre">◉</span> skills{" "}
            <span className="text-term-ochre">◉</span> agents{" "}
            <span className="text-term-ochre">◉</span> hooks
          </p>
          <p className="mt-3 text-term-ochre">{dict.steps.init.resultLine}</p>
        </>
      ),
    },
    {
      index: "02",
      title: dict.steps.guide.title,
      command: commands.guide,
      desc: dict.steps.guide.desc,
      output: (
        <>
          <p className="text-term-ink">
            <span aria-hidden className="text-term-ochre">▰</span>{" "}
            <span className="font-semibold">iroko</span>{" "}
            <span className="text-term-muted">--guide</span>
          </p>
          <p className="mt-3 text-term-muted">{dict.steps.guide.promptLine}</p>
          <p className="mt-3 text-term-ochre">{dict.steps.guide.resultLine}</p>
        </>
      ),
    },
    {
      index: "03",
      title: dict.steps.list.title,
      command: commands.list,
      desc: dict.steps.list.desc,
      output: (
        <>
          <p className="text-term-ink">
            <span aria-hidden className="text-term-ochre">▰</span>{" "}
            <span className="font-semibold">{dict.steps.list.summaryTitle}</span>
          </p>
          <div className="mt-3 space-y-1.5 text-term-muted">
            {listRows.map(([label, count]) => (
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
      index: "04",
      title: dict.steps.doctor.title,
      command: commands.doctor,
      desc: dict.steps.doctor.desc,
      output: (
        <>
          <p className="text-term-ink">{dict.steps.doctor.okLine}</p>
          <p className="mt-3 text-term-muted">{dict.steps.doctor.fixLine}</p>
        </>
      ),
    },
    {
      index: "05",
      title: dict.steps.update.title,
      command: commands.update,
      desc: dict.steps.update.desc,
      output: (
        <>
          <p className="text-term-muted">{dict.steps.update.checkingLine}</p>
          <p className="mt-3 text-term-ochre">{dict.steps.update.resultLine}</p>
        </>
      ),
    },
  ];

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div ref={refHead} className="fade-in mb-16 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-walnut">
            {dict.kicker}
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{dict.intro}</p>
        </div>

        <div className="space-y-12">
          {steps.map((step) => (
            <StepBlock
              key={step.index}
              step={step}
              copyLabel={dict.copyLabel}
              copiedLabel={dict.copiedLabel}
              copyAriaPrefix={dict.copyAriaPrefix}
            />
          ))}
        </div>

        {/* Alternate install methods */}
        <div ref={refAlt} className="fade-in mt-20 border-t border-line pt-8">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            {dict.altTitle}
          </p>
          <div className="grid grid-cols-1 gap-x-10 gap-y-3 lg:grid-cols-3">
            {dict.altMethods.map((m, i) => (
              <button
                key={m.label}
                onClick={() => {
                  copy(m.command);
                  setCopiedIndex(i);
                }}
                aria-label={`${dict.copyAriaPrefix}: ${m.command}`}
                className="group flex min-h-11 flex-col items-start gap-0.5 rounded-lg text-left"
              >
                <span className="text-xs font-medium text-ink-soft">
                  {m.label}
                  <span className="ml-2 font-mono text-muted opacity-0 transition-opacity group-hover:opacity-100">
                    {copied && copiedIndex === i ? dict.copiedLabel : dict.altCopyHint}
                  </span>
                </span>
                <code className="min-w-0 break-all font-mono text-[13px] text-ochre-ink transition-colors group-hover:text-ink">
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
