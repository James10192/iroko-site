"use client";

import { useFadeIn } from "./use-fade-in";

// Component names and descriptions mirror the CLI manifest (src/lib/manifest.ts).

interface Item {
  name: string;
  desc: string;
}

const RULES: Item[] = [
  { name: "pre-commit-quality-gate", desc: "Audit code on 4 axes before every commit" },
  { name: "parallel-agents", desc: "Launch up to 4 agents in parallel, synthesize results" },
  { name: "token-efficiency", desc: "When to use agents vs direct tools" },
  { name: "use-available-tools", desc: "Always check docs before coding with external APIs" },
  { name: "global-preferences", desc: "Opinionated defaults: pnpm, monochrome design, no AI slop" },
];

const SKILLS: Item[] = [
  { name: "/commit", desc: "Quality-gated commit with 4-axes audit" },
  { name: "/plan-and-confirm", desc: "Critic + research + mandatory OKAY gate" },
  { name: "/find-doc", desc: "Look up library docs before writing code" },
  { name: "/visual-check", desc: "Screenshot pages to verify implementation" },
  { name: "/fix-errors", desc: "Fix ESLint + TypeScript with parallel agents" },
  { name: "/fix-grammar", desc: "Fix spelling while preserving formatting" },
  { name: "/create-pr", desc: "PR with auto-generated title and description" },
  { name: "/create-issue", desc: "GitHub issue with labels and epic linking" },
  { name: "/worktree-start", desc: "Isolated branch from a GitHub issue" },
  { name: "/worktree-finish", desc: "Clean up after the PR is merged" },
  { name: "/merge", desc: "Context-aware conflict resolution" },
  { name: "/fix-pr-comments", desc: "Implement all PR review comments" },
  { name: "/linkedin-post", desc: "Generate a post from real work context" },
  { name: "/npm-publish", desc: "Bump, build, publish, tag, push" },
  { name: "/convex-cli", desc: "Manage Convex projects non-interactively" },
];

const AGENTS: Item[] = [
  { name: "critic", desc: "Reviewer with auto-detected CTO / UX / Security lenses" },
  { name: "explore-docs", desc: "Documentation research via ctx7 and Context7 MCP" },
  { name: "linkedin-post-agent", desc: "Content generation with reputation guardrails" },
];

const HOOKS: Item[] = [
  { name: "monitor-session", desc: "Tracks Stop, Permission and Notification events" },
  { name: "notify-workflow", desc: "Notifies after Bash command execution" },
];

function CategoryHeader({
  index,
  title,
  count,
  tagline,
}: {
  index: string;
  title: string;
  count: number;
  tagline: string;
}) {
  return (
    <div className="mb-8 border-t-2 border-ink pt-6">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-mono text-sm text-walnut">{index}</span>
        <h3 className="font-display text-3xl font-medium tracking-tight">{title}</h3>
        <span className="font-mono text-sm text-ochre-ink">
          <span aria-hidden>▰</span> {count}
        </span>
      </div>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{tagline}</p>
    </div>
  );
}

function Row({ name, desc }: Item) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-3.5 sm:flex-row sm:items-baseline sm:gap-5">
      <code className="shrink-0 font-mono text-[13px] font-medium text-ochre-ink sm:w-52">
        {name}
      </code>
      <span className="text-sm leading-relaxed text-ink-soft">{desc}</span>
    </div>
  );
}

export function ComponentsGrid() {
  const refHead = useFadeIn();
  const refRules = useFadeIn();
  const refSkills = useFadeIn();
  const refInfra = useFadeIn();

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section intro */}
        <div ref={refHead} className="fade-in mb-20 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-walnut">
            The manifest
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            One command installs 25 components.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Nothing generated, nothing filler. Every component below ships in
            the package, versioned under strict semver, and is used daily on
            real production projects.
          </p>
        </div>

        <div className="space-y-20">
          {/* 01 — Rules */}
          <div ref={refRules} className="fade-in">
            <CategoryHeader
              index="01"
              title="Rules"
              count={RULES.length}
              tagline="Always active. Loaded into every conversation — they shape how Claude thinks before you type anything."
            />
            <div>
              {RULES.map((item) => (
                <Row key={item.name} {...item} />
              ))}
            </div>
          </div>

          {/* 02 — Skills */}
          <div ref={refSkills} className="fade-in">
            <CategoryHeader
              index="02"
              title="Skills"
              count={SKILLS.length}
              tagline="Slash commands that do real work. Type the command, Claude Code runs the whole pipeline."
            />
            <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-2">
              {SKILLS.map((item) => (
                <Row key={item.name} {...item} />
              ))}
            </div>
          </div>

          {/* 03 + 04 — Agents & Hooks */}
          <div ref={refInfra} className="fade-in grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
            <div>
              <CategoryHeader
                index="03"
                title="Agents"
                count={AGENTS.length}
                tagline="Specialized subagents the skills spawn under the hood."
              />
              {AGENTS.map((item) => (
                <Row key={item.name} {...item} />
              ))}
            </div>
            <div>
              <CategoryHeader
                index="04"
                title="Hooks"
                count={HOOKS.length}
                tagline="Automatic triggers on session events. You never invoke them, they just watch."
              />
              {HOOKS.map((item) => (
                <Row key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
