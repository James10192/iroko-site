export function QualityGate() {
  return (
    <section className="px-6 py-20 md:py-28 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          The quality gate
        </h2>
        <p className="text-muted text-center mb-12 max-w-xl mx-auto">
          Every <span className="font-mono text-accent">/commit</span> runs a
          4-axes audit on your diff. Critical issues block the commit.
        </p>

        <div className="bg-surface border border-border rounded-lg overflow-hidden font-mono text-sm">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="text-muted text-xs ml-2">Quality Gate</span>
          </div>
          <div className="p-5 space-y-3">
            <div className="flex justify-between">
              <span className="text-muted">Architecture</span>
              <span className="text-accent">PASS</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Quality vs Speed</span>
              <span className="text-accent">PASS</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Production-ready</span>
              <span className="text-yellow-400">WARN</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">SOLID / Liskov</span>
              <span className="text-accent">PASS</span>
            </div>
            <div className="border-t border-border pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground">Verdict</span>
                <span className="text-yellow-400 font-semibold">
                  WARN — confirm to proceed
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {[
            {
              axis: "Architecture",
              checks: "God class, mixed responsibilities, >300 lines with 3+ concerns",
            },
            {
              axis: "Quality",
              checks: "N+1 queries, debug code (dd, console.log), duplication",
            },
            {
              axis: "Production",
              checks: "Stack traces in responses, unprotected routes, missing transactions",
            },
            {
              axis: "SOLID",
              checks: "Liskov violations, hardcoded roles, contract broken in overrides",
            },
          ].map((item) => (
            <div key={item.axis} className="p-4 bg-surface rounded-lg border border-border">
              <p className="text-foreground font-medium text-sm mb-1">{item.axis}</p>
              <p className="text-muted text-xs">{item.checks}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
