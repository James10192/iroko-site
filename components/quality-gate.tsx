"use client";

import { useFadeIn } from "./use-fade-in";

const AXES = [
  { axis: "Architecture", checks: "God class, mixed responsibilities, >300 lines with 3+ concerns" },
  { axis: "Quality", checks: "N+1 queries, debug code (dd, console.log), duplication" },
  { axis: "Production", checks: "Stack traces exposed, unprotected routes, missing transactions" },
  { axis: "SOLID", checks: "Liskov violations, hardcoded roles, broken contract in overrides" },
];

export function QualityGate() {
  const ref = useFadeIn();
  const refCards = useFadeIn();

  return (
    <section className="px-6 py-28 md:py-36 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="fade-in">
          <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4 text-center">
            Pre-Commit
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight">
            The quality gate
          </h2>
          <p className="text-muted text-center mt-4 text-lg max-w-xl mx-auto">
            Every{" "}
            <code className="font-mono text-accent bg-surface px-2 py-1 rounded-lg text-sm border border-border">
              /commit
            </code>{" "}
            runs a 4-axes audit. Critical issues block the commit.
          </p>
        </div>

        <div className="terminal rounded-2xl overflow-hidden mt-14 animate-glow">
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border">
            <div className="terminal-dots flex gap-1.5">
              <span className="w-3 h-3 rounded-full" />
              <span className="w-3 h-3 rounded-full" />
              <span className="w-3 h-3 rounded-full" />
            </div>
            <span className="text-muted text-xs font-mono ml-3">Quality Gate — Pre-Commit Audit</span>
          </div>
          <div className="p-6 md:p-8 space-y-5 font-mono text-sm">
            {[
              { label: "Architecture", status: "PASS", color: "text-accent" },
              { label: "Quality vs Speed", status: "PASS", color: "text-accent" },
              { label: "Production-ready", status: "WARN", color: "text-yellow-400" },
              { label: "SOLID / Liskov", status: "PASS", color: "text-accent" },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center">
                <span className="text-muted">{row.label}</span>
                <span className={`${row.color} font-semibold`}>{row.status}</span>
              </div>
            ))}
            <div className="border-t border-border pt-5 mt-2">
              <div className="flex justify-between items-center">
                <span className="text-foreground font-semibold cursor-blink">Verdict</span>
                <span className="text-yellow-400 font-bold text-base">
                  WARN — confirm to proceed
                </span>
              </div>
            </div>
          </div>
        </div>

        <div ref={refCards} className="fade-in grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          {AXES.map((item) => (
            <div
              key={item.axis}
              className="p-5 bg-surface rounded-2xl border border-border hover:border-border-hover transition-colors duration-200"
            >
              <p className="text-foreground font-semibold text-sm mb-2">{item.axis}</p>
              <p className="text-muted text-xs leading-relaxed">{item.checks}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
