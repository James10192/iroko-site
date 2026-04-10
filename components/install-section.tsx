const METHODS = [
  {
    label: "npx",
    command: "npx @james10192/iroko init",
    note: "No install required",
  },
  {
    label: "global",
    command: "pnpm add -g @james10192/iroko\niroko init",
    note: "Permanent install",
  },
  {
    label: "plugin",
    command: "/plugin marketplace add James10192/iroko\n/plugin install iroko@iroko",
    note: "Claude Code plugin system",
  },
  {
    label: "manual",
    command:
      "git clone https://github.com/James10192/iroko.git\ncp -r iroko/rules/* ~/.claude/rules/\ncp -r iroko/skills/* ~/.claude/skills/\ncp -r iroko/agents/* ~/.claude/agents/",
    note: "Pick what you need",
  },
];

export function InstallSection() {
  return (
    <section className="px-6 py-20 md:py-28 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Install
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {METHODS.map((m) => (
            <div
              key={m.label}
              className="bg-surface border border-border rounded-lg p-5 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-foreground font-semibold text-sm uppercase tracking-wider">
                  {m.label}
                </span>
                <span className="text-muted text-xs">{m.note}</span>
              </div>
              <pre className="text-accent text-sm whitespace-pre-wrap break-all flex-1">
                {m.command}
              </pre>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted text-sm">
            The interactive installer shows a checklist grouped by type.
            <br />
            Everything selected by default. Deselect what you don&apos;t need.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-semibold mb-6 text-center">
            Recommended plugins
          </h3>
          <p className="text-muted text-sm text-center mb-6">
            Tools I use alongside iroko. Not bundled, install separately.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                name: "AI Blueprint",
                author: "Melvynx",
                url: "https://github.com/Melvynx/aiblueprint",
                desc: "APEX, ralph-loop, ultrathink, oneshot",
              },
              {
                name: "Impeccable",
                author: "Paul Bakaus",
                url: "https://github.com/pbakaus/impeccable",
                desc: "Design quality and adaptation",
              },
              {
                name: "Superpowers Laravel",
                author: "JP Caparas",
                url: "https://github.com/jpcaparas/superpowers-laravel",
                desc: "50+ Laravel patterns",
              },
              {
                name: "Claude Plugins Official",
                author: "Anthropic",
                url: "https://github.com/anthropics/claude-plugins-official",
                desc: "feature-dev, pr-review, vercel, slack",
              },
            ].map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-4 bg-surface border border-border rounded-lg hover:border-accent transition-colors"
              >
                <span className="text-foreground text-sm font-medium">
                  {p.name}
                </span>
                <span className="text-muted text-xs mt-1">
                  {p.desc}
                </span>
                <span className="text-muted text-xs mt-2">by {p.author}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
