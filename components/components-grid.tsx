"use client";

import { useFadeIn } from "./use-fade-in";

interface Skill {
  name: string;
  desc: string;
}

interface SkillCategory {
  title: string;
  tagline: string;
  pitch: string;
  skills: Skill[];
  optional?: boolean;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Coding",
    tagline: "Write better code, faster",
    pitch:
      "Every commit is audited on 4 axes before it reaches your repo. Documentation is checked before you write a single line. Errors are fixed in parallel by specialized agents. You code, iroko guards.",
    skills: [
      { name: "/commit", desc: "Quality-gated commit with 4-axes audit" },
      { name: "/plan-and-confirm", desc: "Critic + research + mandatory OKAY gate" },
      { name: "/find-doc", desc: "Look up library docs via ctx7 before coding" },
      { name: "/visual-check", desc: "Screenshot pages to verify implementation" },
      { name: "/fix-errors", desc: "Fix ESLint + TypeScript with parallel agents" },
      { name: "/fix-grammar", desc: "Fix spelling while preserving formatting" },
    ],
  },
  {
    title: "Collaboration",
    tagline: "Ship with your team, not against your tools",
    pitch:
      "PRs write themselves. Issues link to epics automatically. Worktrees isolate your work so you never break main. Review comments become code changes in one command.",
    skills: [
      { name: "/create-pr", desc: "PR with auto-generated title and description" },
      { name: "/create-issue", desc: "GitHub issue with labels, scope, epic linking" },
      { name: "/worktree-start", desc: "Isolated branch from a GitHub issue number" },
      { name: "/worktree-finish", desc: "Clean up worktree after PR is merged" },
      { name: "/merge", desc: "Context-aware conflict resolution" },
      { name: "/fix-pr-comments", desc: "Implement all unresolved PR review comments" },
    ],
  },
  {
    title: "Content",
    tagline: "Turn your work into visibility",
    pitch:
      "Generate LinkedIn posts from your actual git history and conversation context. Publish via MCP, draft via Typefully, or just copy-paste. Your expertise deserves an audience.",
    skills: [{ name: "/linkedin-post", desc: "Generate and publish from work context" }],
    optional: true,
  },
  {
    title: "Publishing",
    tagline: "Release without the ceremony",
    pitch:
      "One command: bump the version, build, publish to npm, tag, push. No more forgetting a step in the release checklist.",
    skills: [
      { name: "/npm-publish", desc: "Bump, build, publish, tag, push" },
      { name: "/convex-cli", desc: "Initialize Convex projects non-interactively" },
    ],
    optional: true,
  },
];

const RULES = [
  { name: "pre-commit-quality-gate", desc: "Audit 4 axes before every commit" },
  { name: "parallel-agents", desc: "Launch up to 4 agents in parallel" },
  { name: "token-efficiency", desc: "When to use agents vs direct tools" },
  { name: "use-available-tools", desc: "Always check docs before coding with external APIs" },
  { name: "marcel-global-preferences", desc: "Personal preferences: pnpm, French UI, no AI slop" },
];

const AGENTS = [
  { name: "critic", desc: "Technical reviewer with auto-detected CTO/UX/Security lenses" },
  { name: "explore-docs", desc: "Documentation research via ctx7 CLI and Context7 MCP" },
  { name: "linkedin-post", desc: "Content generation agent with reputation protection" },
];

const HOOKS = [
  { name: "monitor-session", desc: "Tracks Stop, Permission, and Notification events" },
  { name: "notify-workflow", desc: "Sends notification after Bash command execution" },
];

function SkillCard({ name, desc }: Skill) {
  return (
    <div className="group flex items-center gap-4 py-2.5 border-b border-border/50 last:border-0 hover:pl-2 transition-all duration-300">
      <code className="font-mono text-[13px] text-accent font-medium shrink-0 group-hover:text-accent-light transition-colors">
        {name}
      </code>
      <span className="text-muted text-sm group-hover:text-foreground/70 transition-colors">{desc}</span>
    </div>
  );
}

function SkillCategoryBlock({ category, index }: { category: SkillCategory; index: number }) {
  const ref = useFadeIn();
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="fade-in">
      <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start ${isEven ? "" : "lg:direction-rtl"}`}>
        {/* Story side */}
        <div className={`lg:col-span-2 ${isEven ? "" : "lg:order-2"}`}>
          <div className="sticky top-32">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-3xl font-extrabold tracking-tight text-gradient">
                {category.title}
              </h3>
              {category.optional && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-accent/30 text-accent uppercase tracking-wider">
                  optional
                </span>
              )}
            </div>
            <p className="text-foreground font-medium text-lg leading-relaxed mb-3">
              {category.tagline}
            </p>
            <p className="text-muted text-sm leading-relaxed">
              {category.pitch}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-accent font-mono text-xs">{category.skills.length}</span>
              <span className="text-muted text-xs">
                {category.skills.length === 1 ? "command" : "commands"}
              </span>
            </div>
          </div>
        </div>

        {/* Commands side */}
        <div className={`lg:col-span-3 ${isEven ? "" : "lg:order-1"}`}>
          <div className="bg-surface rounded-2xl border border-border p-6 hover:border-border-hover transition-colors duration-300">
            {category.skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfraItem({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className="font-mono text-xs text-accent shrink-0 mt-0.5">{name}</span>
      <span className="text-muted text-xs">{desc}</span>
    </div>
  );
}

export function ComponentsGrid() {
  const ref = useFadeIn();
  const refInfra = useFadeIn();

  return (
    <section className="px-6 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={ref} className="fade-in mb-24">
          <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4 text-center">
            15 skills
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-center tracking-tight leading-tight">
            Commands that do
            <br />
            <span className="text-gradient">real work</span>
          </h2>
          <p className="text-muted text-center mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Type a slash command. Claude Code does the rest. Each skill is built from months of
            iteration on production SaaS projects.
          </p>
        </div>

        {/* Skill categories — stacked, alternating layout */}
        <div className="space-y-24 md:space-y-32">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCategoryBlock key={cat.title} category={cat} index={i} />
          ))}
        </div>

        {/* Infrastructure separator */}
        <div className="flex items-center gap-6 my-28">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-muted font-mono text-xs tracking-[0.2em] uppercase">
            Infrastructure
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Rules, Agents, Hooks — compact grid */}
        <div ref={refInfra} className="fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Rules */}
            <div className="bg-surface rounded-2xl border border-border p-6">
              <div className="flex items-baseline gap-2 mb-5">
                <h3 className="font-bold text-lg text-foreground">Rules</h3>
                <span className="text-muted font-mono text-xs">5</span>
              </div>
              <p className="text-muted text-xs mb-5 leading-relaxed">
                Always active. Loaded into every conversation. Shape how Claude thinks without you typing anything.
              </p>
              {RULES.map((r) => (
                <InfraItem key={r.name} {...r} />
              ))}
            </div>

            {/* Agents */}
            <div className="bg-surface rounded-2xl border border-border p-6">
              <div className="flex items-baseline gap-2 mb-5">
                <h3 className="font-bold text-lg text-foreground">Agents</h3>
                <span className="text-muted font-mono text-xs">3</span>
              </div>
              <p className="text-muted text-xs mb-5 leading-relaxed">
                Specialized subagents that skills spawn under the hood. The critic reviews, the explorer researches, the writer publishes.
              </p>
              {AGENTS.map((a) => (
                <InfraItem key={a.name} {...a} />
              ))}
            </div>

            {/* Hooks + Sounds */}
            <div className="space-y-6">
              <div className="bg-surface rounded-2xl border border-border p-6">
                <div className="flex items-baseline gap-2 mb-5">
                  <h3 className="font-bold text-lg text-foreground">Hooks</h3>
                  <span className="text-muted font-mono text-xs">2</span>
                </div>
                <p className="text-muted text-xs mb-5 leading-relaxed">
                  Automatic triggers on session events. You never invoke them, they just watch.
                </p>
                {HOOKS.map((h) => (
                  <InfraItem key={h.name} {...h} />
                ))}
              </div>

              <div className="bg-surface rounded-2xl border border-accent/20 p-6">
                <div className="flex items-baseline gap-2 mb-3">
                  <h3 className="font-bold text-lg text-accent">Sounds</h3>
                  <span className="text-muted font-mono text-xs">2 MP3</span>
                </div>
                <p className="text-muted text-xs leading-relaxed">
                  Claude finished? You hear it. Claude needs input? You hear it. Stop watching the terminal.
                  Works on Windows, Mac, Linux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
