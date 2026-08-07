"use client";

import { useFadeIn } from "./use-fade-in";

const AXES = [
  {
    axis: "Architecture",
    desc: "God classes, mixed responsibilities, patterns ignored",
  },
  {
    axis: "Quality vs speed",
    desc: "N+1 queries, debug code left behind, missing validation",
  },
  {
    axis: "Production-grade",
    desc: "Exposed stack traces, unprotected routes, missing transactions",
  },
  {
    axis: "SOLID",
    desc: "Liskov violations, hardcoded roles instead of permissions",
  },
];

const RESULTS = [
  { label: "Architecture", status: "PASS", warn: false },
  { label: "Quality vs speed", status: "PASS", warn: false },
  { label: "Production-grade", status: "WARN", warn: true },
  { label: "SOLID", status: "PASS", warn: false },
];

export function QualityGate() {
  const refCopy = useFadeIn();
  const refTerm = useFadeIn();

  return (
    <section className="border-y border-line bg-card px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div ref={refCopy} className="fade-in lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-walnut">
              The flagship · <code className="normal-case">/commit</code>
            </p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Every commit gets audited first.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              The pre-commit quality gate reads your diff and interrogates it on
              four axes before anything reaches the repo. PASS ships. WARN asks
              you to confirm. BLOCK gets fixed first — no exceptions.
            </p>

            <dl className="mt-10 space-y-5">
              {AXES.map((item) => (
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
                <span className="ml-2 font-mono text-xs text-term-muted">quality gate</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed md:p-8">
                <p className="text-term-muted">
                  <span className="text-term-ochre">$</span> /commit
                </p>
                <p className="mt-5 text-term-ink">
                  <span aria-hidden className="text-term-ochre">▰</span>{" "}
                  <span className="font-semibold">Quality Gate</span>{" "}
                  <span className="text-term-muted">— pre-commit audit</span>
                </p>
                <div aria-hidden className="my-3 overflow-hidden whitespace-nowrap text-term-line">
                  {"─".repeat(60)}
                </div>
                <div className="space-y-2.5">
                  {RESULTS.map((row) => (
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
                  <span className="font-semibold text-term-ink">Verdict</span>
                  <span className="font-semibold text-warn">WARN — confirm or fix</span>
                </div>
              </div>
            </div>

            {/* Verdict legend */}
            <div className="mt-5 grid grid-cols-3 gap-3 text-center font-mono">
              <div className="rounded-xl border border-line-strong bg-paper py-3">
                <span className="block text-sm font-semibold text-ochre-ink">PASS</span>
                <span className="text-xs text-muted">ships</span>
              </div>
              <div className="rounded-xl border border-line-strong bg-paper py-3">
                <span className="block text-sm font-semibold text-warn">WARN</span>
                <span className="text-xs text-muted">confirm</span>
              </div>
              <div className="rounded-xl border border-line-strong bg-paper py-3">
                <span className="block text-sm font-semibold text-ink">BLOCK</span>
                <span className="text-xs text-muted">fix first</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
