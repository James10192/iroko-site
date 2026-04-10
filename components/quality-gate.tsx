"use client";

import { useFadeIn } from "./use-fade-in";

export function QualityGate() {
  const ref = useFadeIn();
  const refStory = useFadeIn();
  const refTerminal = useFadeIn();

  return (
    <section className="px-6 py-28 md:py-36 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="fade-in text-center mb-20">
          <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">
            Pre-Commit
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Every commit gets
            <br />
            <span className="text-gradient">interrogated</span>
          </h2>
        </div>

        {/* Story + Terminal side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Story side */}
          <div ref={refStory} className="fade-in">
            <p className="text-foreground text-xl font-medium leading-relaxed mb-6">
              Stack traces in production. Debug code in the diff. Unprotected routes.
              N+1 queries nobody noticed.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              The quality gate catches what code review misses. Every{" "}
              <code className="font-mono text-accent bg-surface px-2 py-0.5 rounded-lg text-sm border border-border">
                /commit
              </code>{" "}
              triggers a 4-axes audit. PASS means your code ships. BLOCK means it gets fixed first. No exceptions.
            </p>

            <div className="space-y-4">
              {[
                { axis: "Architecture", desc: "God classes, mixed responsibilities, files over 300 lines with 3+ concerns" },
                { axis: "Quality", desc: "N+1 queries, debug code left behind, copy-paste duplication" },
                { axis: "Production", desc: "Exposed stack traces, unprotected routes, missing database transactions" },
                { axis: "SOLID", desc: "Liskov violations, hardcoded roles instead of permissions, broken overrides" },
              ].map((item) => (
                <div key={item.axis} className="group flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-accent font-mono text-sm font-semibold shrink-0 mt-0.5 w-24">
                    {item.axis}
                  </span>
                  <span className="text-muted text-sm leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal side */}
          <div ref={refTerminal} className="fade-in">
            <div className="terminal rounded-2xl overflow-hidden animate-glow">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border">
                <div className="terminal-dots flex gap-1.5">
                  <span className="w-3 h-3 rounded-full" />
                  <span className="w-3 h-3 rounded-full" />
                  <span className="w-3 h-3 rounded-full" />
                </div>
                <span className="text-muted text-xs font-mono ml-3">
                  Quality Gate
                </span>
              </div>
              <div className="p-6 md:p-8 font-mono text-sm">
                <div className="text-muted/50 text-xs mb-6">$ git commit -m &quot;feat: add user endpoint&quot;</div>

                <div className="space-y-4">
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
                </div>

                <div className="border-t border-border pt-5 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-semibold cursor-blink">Verdict</span>
                    <span className="text-yellow-400 font-bold">WARN</span>
                  </div>
                  <p className="text-muted/50 text-xs mt-3">
                    1 warning found. Confirm to proceed or fix first.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="bg-surface rounded-xl border border-border py-3">
                <span className="text-accent font-mono text-lg font-bold block">PASS</span>
                <span className="text-muted text-[10px] uppercase tracking-wider">Ships</span>
              </div>
              <div className="bg-surface rounded-xl border border-yellow-400/20 py-3">
                <span className="text-yellow-400 font-mono text-lg font-bold block">WARN</span>
                <span className="text-muted text-[10px] uppercase tracking-wider">Confirm</span>
              </div>
              <div className="bg-surface rounded-xl border border-red-400/20 py-3">
                <span className="text-red-400 font-mono text-lg font-bold block">BLOCK</span>
                <span className="text-muted text-[10px] uppercase tracking-wider">Fix first</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
