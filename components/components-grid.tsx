"use client";

import { useFadeIn } from "./use-fade-in";

const RULES = [
  { name: "pre-commit-quality-gate", desc: "Audit 4 axes before every commit" },
  { name: "parallel-agents", desc: "Launch up to 4 agents in parallel" },
  { name: "token-efficiency", desc: "When to use agents vs direct tools" },
  { name: "use-available-tools", desc: "Check docs before coding with APIs" },
  { name: "marcel-global-preferences", desc: "Personal: pnpm, French UI" },
];

const SKILLS = [
  { name: "/commit", desc: "Quality-gated commit with 4-axes audit" },
  { name: "/plan-and-confirm", desc: "Critic + research + OKAY gate" },
  { name: "/find-doc", desc: "Look up library docs via ctx7" },
  { name: "/linkedin-post", desc: "Generate post from work context" },
  { name: "/visual-check", desc: "Screenshot to verify implementation" },
  { name: "/create-pr", desc: "PR with auto-generated description" },
  { name: "/create-issue", desc: "GitHub issue with labels + epic" },
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
  { name: "monitor-session", desc: "Stop, Permission, Notification events" },
  { name: "notify-workflow", desc: "Notification after Bash execution" },
];

function ComponentCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="group flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-surface transition-colors duration-200">
      <span className="font-mono text-sm text-accent shrink-0 mt-0.5">{name}</span>
      <span className="text-muted text-sm">{desc}</span>
    </div>
  );
}

function Section({
  title,
  count,
  items,
}: {
  title: string;
  count: number;
  items: { name: string; desc: string }[];
}) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="fade-in">
      <h3 className="text-foreground font-bold text-xl mb-1">
        {title}
        <span className="text-muted font-normal text-sm ml-2">{count}</span>
      </h3>
      <div className="stagger-children visible mt-4 space-y-0">
        {items.map((item) => (
          <ComponentCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export function ComponentsGrid() {
  const ref = useFadeIn();
  return (
    <section className="px-6 py-24 md:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="fade-in">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center tracking-tight">
            What&apos;s <span className="text-gradient">inside</span>
          </h2>
          <p className="text-muted text-center mb-16 text-lg">
            28 components, each does one thing well.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          <Section title="Rules" count={5} items={RULES} />
          <Section title="Agents" count={6} items={AGENTS} />
          <Section title="Skills" count={15} items={SKILLS} />
          <div>
            <Section title="Hooks" count={2} items={HOOKS} />
            <div className="mt-8 p-4 bg-surface rounded-xl border border-border">
              <p className="text-muted text-sm">
                <span className="text-accent font-mono font-medium">+ 2 sounds</span>{" "}
                Cross-platform notification MP3s. PowerShell, afplay, paplay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
