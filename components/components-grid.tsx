const RULES = [
  { name: "pre-commit-quality-gate", desc: "Audit 4 axes before every commit" },
  { name: "parallel-agents", desc: "Launch up to 4 agents in parallel" },
  { name: "token-efficiency", desc: "When to use agents vs direct tools" },
  { name: "use-available-tools", desc: "Check docs before coding with external APIs" },
  { name: "marcel-global-preferences", desc: "Personal: pnpm, French UI, no AI slop" },
];

const SKILLS = [
  { name: "/commit", desc: "Quality-gated commit with 4-axes audit" },
  { name: "/plan-and-confirm", desc: "Critic + research agents + OKAY gate" },
  { name: "/find-doc", desc: "Look up library docs via ctx7" },
  { name: "/linkedin-post", desc: "Generate post from work context" },
  { name: "/visual-check", desc: "Screenshot to verify implementation" },
  { name: "/create-pr", desc: "PR with auto-generated description" },
  { name: "/create-issue", desc: "GitHub issue with labels + epic linking" },
  { name: "/worktree-start", desc: "Isolated work on a GitHub issue" },
  { name: "/worktree-finish", desc: "Clean up after PR merge" },
  { name: "/merge", desc: "Context-aware conflict resolution" },
  { name: "/fix-errors", desc: "Fix ESLint + TS with parallel agents" },
  { name: "/fix-grammar", desc: "Fix spelling, preserve formatting" },
  { name: "/fix-pr-comments", desc: "Implement all PR review comments" },
  { name: "/npm-publish", desc: "Bump, build, publish, tag, push" },
  { name: "/convex-cli", desc: "Convex project init (optional)" },
];

const AGENTS = [
  { name: "critic", desc: "Auto-detects CTO/UX/Security lenses" },
  { name: "explore-codebase", desc: "Deep exploration with file:line refs" },
  { name: "explore-docs", desc: "Docs via ctx7 CLI and MCP" },
  { name: "websearch", desc: "Best practices and breaking changes" },
  { name: "linkedin-post", desc: "Content generation for LinkedIn" },
  { name: "action", desc: "Conditional executor for batch tasks" },
];

const HOOKS = [
  { name: "monitor-session", desc: "Tracks Stop, Permission, Notification events" },
  { name: "notify-workflow", desc: "Notification after Bash execution" },
];

function ComponentList({
  title,
  count,
  items,
}: {
  title: string;
  count: number;
  items: { name: string; desc: string }[];
}) {
  return (
    <div>
      <h3 className="text-foreground font-semibold text-lg mb-1">
        {title}
        <span className="text-muted font-normal text-sm ml-2">({count})</span>
      </h3>
      <ul className="space-y-2 mt-4">
        {items.map((item) => (
          <li key={item.name} className="flex flex-col">
            <span className="font-mono text-sm text-accent">{item.name}</span>
            <span className="text-muted text-sm">{item.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ComponentsGrid() {
  return (
    <section className="px-6 py-20 md:py-28 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          What&apos;s inside
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <ComponentList title="Rules" count={5} items={RULES} />
          <ComponentList title="Agents" count={6} items={AGENTS} />
          <ComponentList title="Skills" count={15} items={SKILLS} />
          <div>
            <ComponentList title="Hooks" count={2} items={HOOKS} />
            <div className="mt-10 p-4 bg-surface rounded-lg border border-border">
              <p className="text-muted text-sm">
                <span className="text-accent font-mono">+ 2 sounds</span>{" "}
                Notification MP3s for session events. Cross-platform: PowerShell,
                afplay, paplay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
