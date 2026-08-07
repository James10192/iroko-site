const LINKS = [
  { label: "GitHub", href: "https://github.com/James10192/iroko" },
  { label: "npm", href: "https://www.npmjs.com/package/@james10192/iroko" },
  { label: "Changelog", href: "https://github.com/James10192/iroko/blob/master/CHANGELOG.md" },
  { label: "MIT license", href: "https://github.com/James10192/iroko/blob/master/LICENSE" },
];

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-2.5 font-mono text-sm font-semibold">
              <span aria-hidden className="text-ochre">▰</span>
              <span>iroko</span>
              <span className="font-normal text-muted">v2.2.1</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Built by{" "}
              <a
                href="https://astonishing-sprite-8fb0c9.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink"
              >
                Marcel DJEDJE-LI
              </a>{" "}
              in Abidjan, Côte d&apos;Ivoire. Open source, MIT licensed,
              versioned under strict semver.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center px-3 text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
