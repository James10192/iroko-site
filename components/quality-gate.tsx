"use client";

import { useFadeIn } from "./use-fade-in";

export function QualityGate() {
  const ref = useFadeIn();
  const refCards = useFadeIn();

  return (
    <section className="px-6 py-24 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="fade-in">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center tracking-tight">
            The <span className="text-gradient">quality gate</span>
          </h2>
          <p className="text-muted text-center mb-14 text-lg max-w-xl mx-auto">
            Every <code className="font-mono text-accent bg-surface px-2 py-0.5 rounded">/commit</code> runs
            a 4-axes audit on your diff. Critical issues block the commit.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-2xl overflow-hidden font-mono text-sm glow-accent">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-[#0f0f0f]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="text-muted text-xs ml-3">Quality Gate — Pre-Commit Audit</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted">Architecture</span>
              <span className="text-accent font-semibold">PASS</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted">Quality vs Speed</span>
              <span className="text-accent font-semibold">PASS</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted">Production-ready</span>
              <span className="text-yellow-400 font-semibold">WARN</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted">SOLID / Liskov</span>
              <span className="text-accent font-semibold">PASS</span>
            </div>
            <div className="border-t border-border pt-4 mt-4">
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
          {[
            { axis: "Architecture", checks: "God class, mixed responsibilities, >300 lines" },
            { axis: "Quality", checks: "N+1 queries, debug code, duplication" },
            { axis: "Production", checks: "Stack traces, unprotected routes, missing transactions" },
            { axis: "SOLID", checks: "Liskov violations, hardcoded roles, broken overrides" },
          ].map((item) => (
            <div key={item.axis} className="p-5 bg-surface rounded-xl border border-border hover:border-accent/30 transition-colors duration-200">
              <p className="text-foreground font-semibold text-sm mb-2">{item.axis}</p>
              <p className="text-muted text-xs leading-relaxed">{item.checks}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
