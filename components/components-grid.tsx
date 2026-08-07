"use client";

import { useFadeIn } from "./use-fade-in";

// Content is fully driven by props: names/steps come from lib/manifest.ts,
// descriptions from the locale dictionary. No hardcoded numbers here.

interface GridItem {
  display: string;
  typeLabel: string;
  desc: string;
}

interface StepGroup {
  index: string;
  label: string;
  tagline: string;
  items: GridItem[];
}

interface ComponentsGridProps {
  kicker: string;
  title: string;
  intro: string;
  groups: StepGroup[];
}

function Row({ display, typeLabel, desc }: GridItem) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-3.5 sm:flex-row sm:items-baseline sm:gap-5">
      <div className="flex shrink-0 items-baseline gap-2.5 sm:w-64">
        <code className="font-mono text-[13px] font-medium text-ochre-ink">
          {display}
        </code>
        <span className="rounded border border-line-strong px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-walnut">
          {typeLabel}
        </span>
      </div>
      <span className="text-sm leading-relaxed text-ink-soft">{desc}</span>
    </div>
  );
}

function StepBlock({ group }: { group: StepGroup }) {
  const ref = useFadeIn();

  return (
    <div ref={ref} className="fade-in">
      <div className="mb-8 border-t-2 border-ink pt-6">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="font-mono text-sm text-walnut">{group.index}</span>
          <h3 className="font-display text-3xl font-medium tracking-tight">
            {group.label}
          </h3>
          <span className="font-mono text-sm text-ochre-ink">
            <span aria-hidden>▰</span> {group.items.length}
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          {group.tagline}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-2">
        {group.items.map((item) => (
          <Row key={item.display} {...item} />
        ))}
      </div>
    </div>
  );
}

export function ComponentsGrid({ kicker, title, intro, groups }: ComponentsGridProps) {
  const refHead = useFadeIn();

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section intro */}
        <div ref={refHead} className="fade-in mb-20 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-walnut">
            {kicker}
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{intro}</p>
        </div>

        <div className="space-y-20">
          {groups.map((group) => (
            <StepBlock key={group.index} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
