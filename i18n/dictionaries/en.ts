import type { Dictionary } from "./fr";

// English dictionary. Typed against the French source of truth:
// a renamed component or a missing key breaks the build.

export const en: Dictionary = {
  meta: {
    title: "iroko: deep roots for building with AI",
    description:
      "iroko installs {total} guardrails for Claude Code: the AI only builds what you asked for, burns fewer tokens, and nothing ships without an audit. Grown in Abidjan.",
    ogTitle: "iroko: deep roots for building with AI",
    ogDescription:
      "{total} guardrails for AI-assisted work: scope it, save tokens, verify everything. One command and it takes root.",
  },

  topbar: {
    github: "GitHub",
    npm: "npm",
    langSwitch: "FR",
    langSwitchAria: "Passer en français",
  },

  hero: {
    kicker: "Guardrails for Claude Code",
    titleLine1: "Deep roots for",
    titleLine2: "building with AI.",
    lead: "The iroko is a great West African tree: people hold counsel in its shade before acting, and its deep roots hold firm through the storm. iroko plants those roots in your project: {total} components that keep the AI agent in scope before, during and after every line of code.",
    copyLabel: "copy",
    copiedLabel: "copied ✓",
    copyAria: "Copy install command",
    proof: ["{total} components", "Strict semver", "MIT license"],
    guideNote:
      "New to code? iroko init --guide installs the beginner pack: CLI prompts in French, designed to walk absolute beginners through their first projects.",
    promisesTitle: "Three promises",
    promises: [
      {
        title: "Scope",
        desc: "The AI never builds something you did not ask for: plan first, mandatory OKAY.",
      },
      {
        title: "Save",
        desc: "Fewer tokens burned: targeted research before code, agents only when they earn their cost.",
      },
      {
        title: "Verify",
        desc: "Nothing ships without an audit: quality review and a commit gate on every delivery.",
      },
    ],
    cycleTitle: "The builder's cycle",
    terminal: {
      windowTitle: "iroko",
      productLine: "Guardrails for AI-assisted work",
      tagline: "{total} components · Grown in Abidjan, Côte d'Ivoire",
    },
  },

  stepLabels: {
    cadrer: "Scope",
    illustrer: "Sketch",
    documenter: "Document",
    construire: "Build",
    verifier: "Verify",
  },

  typeLabels: {
    rule: "rule",
    skill: "skill",
    agent: "agent",
    hook: "hook",
  },

  components: {
    kicker: "The manifest",
    title: "One command installs {total} components.",
    intro:
      "Nothing generated, nothing filler: every component answers a concrete pain and belongs to one step of the cycle. {rules} always-on rules, {skills} on-demand skills, {agents} specialized agents, {hooks} protective hook.",
    stepTaglines: {
      cadrer: "Decide what to build before writing a single line.",
      illustrer: "Show visual options before any code exists.",
      documenter: "Read up-to-date docs instead of guessing an API.",
      construire: "Execute within scope, without destroying anything.",
      verifier: "Audit before shipping, no exceptions.",
    },
    descriptions: {
      "quality-gate":
        "Audits the diff on 4 axes before every commit: PASS, WARN or BLOCK, with a plain-language glossary",
      "git-safety":
        "Forbids reset --hard, push --force, migrate:fresh and any destructive command without written consent",
      "stay-in-scope":
        "Never beyond the request: no unrequested features, files that stay short",
      "ship-quality":
        "Every deliverable handles loading, empty, error and success states: no coming soon",
      "token-efficiency":
        "When to use an agent versus a direct tool: fewer tokens burned for the same result",
      "docs-first":
        "Never guess an API: ctx7, MCP then web search, plus the method for reading docs",
      "global-preferences":
        "Opinionated defaults: pnpm, monochrome design, zero duct tape",
      "plan-and-confirm":
        "Plan, critic agent and mandatory OKAY before any line of code",
      "pick-stack":
        "Interrogates the need (budget, audience, offline, mobile money) and recommends an argued stack",
      sketch:
        "Sketches several visual options: you choose, the AI builds what you validated",
      "read-docs":
        "Up-to-date docs before writing code, with the reading method",
      demarrer:
        "Step-by-step companion, entirely in French, for people discovering development",
      commit:
        "Stages exactly the files from the conversation, audited by the quality gate",
      "deep-review":
        "Merciless structural review: correct is not enough to be approved",
      "fix-errors":
        "Fixes lint and typecheck, sequential by default to save tokens",
      "visual-check":
        "Verifies the rendering in a browser: screenshot and accessibility snapshot",
      "create-pr": "GitHub pull request with generated title and description",
      "create-issue": "GitHub issue with labels and epic linking",
      oneshot:
        "The shortcut for a trivial task: explore, code, test, and stops after two failures",
      critic:
        "Reviews every plan with a CTO, UX or security lens depending on context",
      "explore-docs": "Documentation research via ctx7 and Context7 MCP",
      "explore-codebase":
        "Explores the existing code before proposing a plan",
      websearch: "Fast multi-source web research",
      "guard-destructive":
        "Blocks git reset --hard, push --force, migrate:fresh and rm -rf before they run",
    },
  },

  qualityGate: {
    kicker: "The flagship",
    kickerCode: "/commit",
    title: "Every commit gets audited first.",
    lead: "The quality gate reads your diff and interrogates it on four axes before anything reaches the repo. PASS ships. WARN asks you to confirm. BLOCK gets fixed first, no exceptions. And every verdict is explained in plain language, no jargon.",
    axes: [
      {
        axis: "Architecture",
        desc: "Files doing too many things, mixed responsibilities, existing patterns ignored",
      },
      {
        axis: "Quality vs speed",
        desc: "N+1 queries, debug code left behind, missing validation",
      },
      {
        axis: "Production-grade",
        desc: "Exposed stack traces, unprotected routes, missing transactions",
      },
      {
        axis: "SOLID",
        desc: "Violated class contracts, hardcoded roles instead of permissions",
      },
    ],
    terminalTitle: "quality gate",
    auditTitle: "Quality Gate",
    auditSubtitle: "pre-commit audit",
    results: [
      { label: "Architecture", status: "PASS", warn: false },
      { label: "Quality vs speed", status: "PASS", warn: false },
      { label: "Production-grade", status: "WARN", warn: true },
      { label: "SOLID", status: "PASS", warn: false },
    ],
    verdictLabel: "Verdict",
    verdictValue: "WARN: confirm or fix",
    legend: [
      { status: "PASS", meaning: "ships" },
      { status: "WARN", meaning: "confirm" },
      { status: "BLOCK", meaning: "fix first" },
    ],
  },

  quickstart: {
    kicker: "Quickstart",
    title: "Four commands in.",
    intro:
      "No config files to write, no account to create. The CLI walks you through everything.",
    copyLabel: "copy",
    copiedLabel: "copied ✓",
    copyAriaPrefix: "Copy command",
    steps: {
      init: {
        title: "Init",
        desc: "Interactive checklist. Everything selected by default: deselect what you don't need, confirm, done.",
        promptLine: "? Select components to install",
        resultLine: "▰ {total} components installed",
      },
      guide: {
        title: "Beginner pack",
        desc: "The minimal pack to start right: {guide} essential components, CLI prompts in French, zero jargon.",
        promptLine: "? Ready to plant the roots? (Y/n)",
        resultLine: "▰ {guide} components installed (guide pack)",
      },
      list: {
        title: "List",
        desc: "See what's installed against the manifest, type by type. The ▰ bar is the same one the CLI draws.",
        summaryTitle: "Summary",
        rows: {
          rules: "Rules",
          skills: "Skills",
          agents: "Agents",
          hooks: "Hooks",
        },
      },
      update: {
        title: "Update",
        desc: "Pull the latest versions of what you installed. Strict semver: patch fixes, minor adds, major renames, never a surprise.",
        checkingLine: "Checking manifest…",
        resultLine: "▰ everything up to date (v{version})",
      },
    },
    altTitle: "Other ways to install",
    altCopyHint: "click to copy",
    altMethods: [
      { label: "Global install", command: "pnpm add -g @james10192/iroko" },
      {
        label: "Claude Code plugin",
        command: "/plugin marketplace add James10192/iroko",
      },
      {
        label: "Manual cherry-pick",
        command: "git clone https://github.com/James10192/iroko.git",
      },
    ],
  },

  footer: {
    tagline: "Grown in Abidjan · Built for everyone",
    builtByPrefix: "Built by",
    builtBySuffix:
      "in Abidjan, Côte d'Ivoire. Open source, MIT licensed, versioned under strict semver.",
    links: {
      github: "GitHub",
      npm: "npm",
      changelog: "Changelog",
      license: "MIT license",
    },
    langSwitch: "Version française",
    langSwitchAria: "Passer en français",
  },
};
