"use client";

import { useCopy } from "./use-copy";
import type { Dictionary } from "@/i18n/dictionaries/fr";

interface HeroProps {
  dict: Dictionary["hero"];
  topbar: Dictionary["topbar"];
  cycleSteps: string[];
  command: string;
  version: string;
  tree: string;
  github: string;
  npm: string;
  currentLocale: string;
  switchHref: string;
}

export function Hero({
  dict,
  topbar,
  cycleSteps,
  command,
  version,
  tree,
  github,
  npm,
  currentLocale,
  switchHref,
}: HeroProps) {
  const { copied, copy } = useCopy();

  return (
    <header className="relative border-b border-line">
      {/* Top bar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href={`/${currentLocale}`}
          className="flex min-h-11 items-center gap-2.5 font-mono text-sm font-semibold"
        >
          <span aria-hidden className="text-ochre">▰</span>
          <span>iroko</span>
        </a>
        <nav className="flex items-center gap-1 font-mono text-sm">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center px-3 text-ink-soft transition-colors hover:text-ink"
          >
            {topbar.github}
          </a>
          <a
            href={npm}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center px-3 text-ink-soft transition-colors hover:text-ink"
          >
            {topbar.npm}
          </a>
          <a
            href={switchHref}
            aria-label={topbar.langSwitchAria}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line-strong px-3 font-semibold text-ink-soft transition-colors hover:border-walnut hover:text-ink"
          >
            {topbar.langSwitch}
          </a>
          <span className="ml-2 hidden rounded-full border border-line-strong px-3 py-1 text-xs text-ochre-ink sm:inline">
            v{version}
          </span>
        </nav>
      </div>

      {/* Hero body */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-16 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="animate-rise font-mono text-xs uppercase tracking-[0.25em] text-walnut">
            {dict.kicker}
          </p>
          <h1 className="animate-rise mt-6 font-display text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl md:text-7xl">
            {dict.titleLine1}
            <br />
            {dict.titleLine2}
          </h1>
          <p className="animate-rise-1 mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            {dict.lead}
          </p>

          {/* Install command */}
          <div className="animate-rise-2 mt-10">
            <button
              onClick={() => copy(command)}
              aria-label={dict.copyAria}
              className="term group flex min-h-14 w-full max-w-xl items-center gap-3 rounded-xl px-5 py-4 text-left font-mono text-sm transition-colors hover:border-walnut sm:text-base"
            >
              <span aria-hidden className="select-none font-semibold text-term-ochre">
                $
              </span>
              <span className="flex-1 truncate text-term-ink">{command}</span>
              <span className="shrink-0 rounded-md border border-term-line px-2.5 py-1 text-xs text-term-muted transition-colors group-hover:border-term-walnut group-hover:text-term-ink">
                {copied ? dict.copiedLabel : dict.copyLabel}
              </span>
            </button>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              {dict.guideNote}
            </p>

            <ul className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-sm text-muted">
              {dict.proof.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden className="text-xs text-ochre">▰</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CLI banner, reproduced faithfully */}
        <div className="animate-rise-2 lg:col-span-5">
          <div className="term overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(36,29,17,0.5)]">
            <div className="term-header flex items-center gap-2 px-5 py-3.5">
              <span aria-hidden className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-term-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-term-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-term-line" />
              </span>
              <span className="ml-2 font-mono text-xs text-term-muted">
                {dict.terminal.windowTitle}
              </span>
            </div>
            <div className="p-6 font-mono text-[13px] leading-snug md:p-8">
              <pre aria-hidden className="select-none text-term-walnut">
                {tree}
              </pre>
              <div className="mt-6 flex items-baseline justify-between">
                <span className="font-semibold text-term-ink">iroko</span>
                <span className="text-term-ochre">v{version}</span>
              </div>
              <div aria-hidden className="my-2 overflow-hidden whitespace-nowrap text-term-line">
                {"─".repeat(60)}
              </div>
              <p className="text-term-ink">{dict.terminal.productLine}</p>
              <p className="mt-1 text-term-muted">{dict.terminal.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Three promises */}
      <div className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="sr-only">{dict.promisesTitle}</h2>
        <div className="animate-rise-2 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {dict.promises.map((promise) => (
            <div key={promise.title} className="bg-card p-6">
              <h3 className="flex items-center gap-2.5 font-display text-xl font-medium tracking-tight">
                <span aria-hidden className="text-sm text-ochre">▰</span>
                {promise.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                {promise.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Builder's cycle */}
        <div className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-walnut">
            {dict.cycleTitle}
          </p>
          <ol className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm">
            {cycleSteps.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="rounded-md border border-line-strong bg-paper px-3 py-1.5 font-semibold uppercase tracking-wide text-ochre-ink">
                  {step}
                </span>
                {i < cycleSteps.length - 1 && (
                  <span aria-hidden className="text-muted">→</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </header>
  );
}
