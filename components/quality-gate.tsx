"use client";

import { useFadeIn } from "./use-fade-in";
import type { Dictionary } from "@/i18n/dictionaries/fr";

interface QualityGateProps {
  dict: Dictionary["qualityGate"];
}

export function QualityGate({ dict }: QualityGateProps) {
  const refCopy = useFadeIn();
  const refTerm = useFadeIn();

  return (
    <section className="border-y border-line bg-card px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div ref={refCopy} className="fade-in lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-walnut">
              {dict.kicker} · <code className="normal-case">{dict.kickerCode}</code>
            </p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              {dict.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              {dict.lead}
            </p>

            <dl className="mt-10 space-y-5">
              {dict.axes.map((item) => (
                <div key={item.axis} className="flex items-baseline gap-4">
                  <dt className="flex w-40 shrink-0 items-center gap-2 font-mono text-sm font-semibold text-ochre-ink">
                    <span aria-hidden className="text-xs text-ochre">▰</span>
                    {item.axis}
                  </dt>
                  <dd className="text-sm leading-relaxed text-muted">{item.desc}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Terminal */}
          <div ref={refTerm} className="fade-in lg:col-span-6">
            <div className="term overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(36,29,17,0.5)]">
              <div className="term-header flex items-center gap-2 px-5 py-3.5">
                <span aria-hidden className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-term-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-term-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-term-line" />
                </span>
                <span className="ml-2 font-mono text-xs text-term-muted">
                  {dict.terminalTitle}
                </span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed md:p-8">
                <p className="text-term-muted">
                  <span className="text-term-ochre">$</span> /commit
                </p>
                <p className="mt-5 text-term-ink">
                  <span aria-hidden className="text-term-ochre">▰</span>{" "}
                  <span className="font-semibold">{dict.auditTitle}</span>{" "}
                  <span className="text-term-muted">· {dict.auditSubtitle}</span>
                </p>
                <div aria-hidden className="my-3 overflow-hidden whitespace-nowrap text-term-line">
                  {"─".repeat(60)}
                </div>
                <div className="space-y-2.5">
                  {dict.results.map((row) => (
                    <div key={row.label} className="flex items-center justify-between">
                      <span className="text-term-muted">{row.label}</span>
                      <span
                        className={
                          row.warn
                            ? "font-semibold text-warn"
                            : "font-semibold text-term-ochre"
                        }
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div aria-hidden className="my-3 overflow-hidden whitespace-nowrap text-term-line">
                  {"─".repeat(60)}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-term-ink">{dict.verdictLabel}</span>
                  <span className="font-semibold text-warn">{dict.verdictValue}</span>
                </div>
              </div>
            </div>

            {/* Verdict legend */}
            <div className="mt-5 grid grid-cols-3 gap-3 text-center font-mono">
              {dict.legend.map((item, i) => (
                <div
                  key={item.status}
                  className="rounded-xl border border-line-strong bg-paper py-3"
                >
                  <span
                    className={`block text-sm font-semibold ${
                      i === 0 ? "text-ochre-ink" : i === 1 ? "text-warn" : "text-ink"
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="text-xs text-muted">{item.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
