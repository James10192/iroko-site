"use client";

import { useFadeIn } from "./use-fade-in";

const CODING = [
  { name: "/commit", desc: "Quality-gated commit with 4-axes audit" },
  { name: "/plan-and-confirm", desc: "Critic + research + OKAY gate" },
  { name: "/find-doc", desc: "Look up library docs via ctx7" },
  { name: "/visual-check", desc: "Screenshot to verify implementation" },
  { name: "/fix-errors", desc: "Fix ESLint + TS with parallel agents" },
  { name: "/fix-grammar", desc: "Fix spelling, preserve formatting" },
];

const COLLABORATION = [
  { name: "/create-pr", desc: "PR with auto-generated description" },
  { name: "/create-issue", desc: "GitHub issue with labels + epic" },
  { name: "/worktree-start", desc: "Isolated work on a GitHub issue" },
  { name: "/worktree-finish", desc: "Clean up after PR merge" },
  { name: "/merge", desc: "Context-aware conflict resolution" },
  { name: "/fix-pr-comments", desc: "Implement all PR review comments" },
];

const CONTENT = [
  { name: "/linkedin-post", desc: "Generate post from work context" },
];

const PUBLISHING = [
  { name: "/npm-publish", desc: "Bump, build, publish, tag, push" },
  { name: "/convex-cli", desc: "Convex project init" },
];

const RULES = [
  { name: "pre-commit-quality-gate", desc: "Audit 4 axes before every commit" },
  { name: "parallel-agents", desc: "Launch up to 4 agents in parallel" },
  { name: "token-efficiency", desc: "When to use agents vs direct tools" },
  { name: "use-available-tools", desc: "Check docs before coding with APIs" },
  { name: "marcel-global-preferences", desc: "Personal: pnpm, French UI" },
];

const AGENTS = [
  { name: "critic", desc: "Auto-detects CTO/UX/Security lenses" },
  { name: "explore-docs", desc: "Docs via ctx7 CLI and MCP" },
  { name: "linkedin-post", desc: "Content generation for LinkedIn" },
];

const HOOKS = [
  { name: "monitor-session", desc: "Stop, Permission, Notification events" },
  { name: "notify-workflow", desc: "Notification after Bash execution" },
];

function ComponentCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="group flex items-start gap-3 px-4 py-3 -mx-4 rounded-xl hover:bg-surface-hover border border-transparent hover:border-border transition-all duration-200">
      <span className="font-mono text-[13px] text-accent font-medium shrink-0 mt-px">{name}</span>
      <span className="text-muted text-sm">{desc}</span>
    </div>
  );
}

function Section({
  title,
  count,
  items,
  accent,
  tag,
}: {
  title: string;
  count?: number;
  items: { name: string; desc: string }[];
  accent?: boolean;
  tag?: string;
}) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="fade-in">
      <div className="flex items-baseline gap-3 mb-6">
        <h3 className={`font-bold text-2xl tracking-tight ${accent ? "text-gradient" : "text-foreground"}`}>
          {title}
        </h3>
        {count !== undefined && <span className="text-muted font-mono text-sm">{count}</span>}
        {tag && (
          <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-border text-muted">
            {tag}
          </span>
        )}
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="stagger visible space-y-0">
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
    <section className="px-6 py-28 md:py-36">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="fade-in mb-20">
          <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4 text-center">
            Components
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight">
            What&apos;s inside
          </h2>
          <p className="text-muted text-center mt-4 text-lg max-w-lg mx-auto">
            25 components. Organized by workflow.
          </p>
        </div>

        {/* Skills by workflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <Section title="Coding" count={6} items={CODING} accent />
          <Section title="Collaboration" count={6} items={COLLABORATION} accent />
          <Section title="Content" items={CONTENT} tag="optional" />
          <Section title="Publishing" items={PUBLISHING} tag="optional" />
        </div>

        {/* Separator */}
        <div className="flex items-center gap-4 my-20">
          <div className="flex-1 h-px bg-border" />
          <span className="text-muted font-mono text-xs tracking-wider uppercase">Infrastructure</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Rules, Agents, Hooks, Sounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <Section title="Rules" count={5} items={RULES} />
          <Section title="Agents" count={3} items={AGENTS} />
          <div>
            <Section title="Hooks" count={2} items={HOOKS} />
            <div className="mt-10 p-5 bg-surface rounded-2xl border border-border">
              <p className="text-muted text-sm">
                <span className="text-accent font-mono font-medium">Sounds</span>{" "}
                — 2 notification MP3s. Plays when Claude finishes or needs input.
                <span className="text-muted/60 block mt-1 text-xs">PowerShell · afplay · paplay</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
