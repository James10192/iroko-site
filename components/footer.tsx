import type { Dictionary } from "@/i18n/dictionaries/fr";

interface FooterProps {
  dict: Dictionary["footer"];
  version: string;
  site: {
    github: string;
    npm: string;
    changelog: string;
    license: string;
    authorName: string;
    authorUrl: string;
  };
  switchHref: string;
}

export function Footer({ dict, version, site, switchHref }: FooterProps) {
  const links = [
    { label: dict.links.github, href: site.github },
    { label: dict.links.npm, href: site.npm },
    { label: dict.links.changelog, href: site.changelog },
    { label: dict.links.license, href: site.license },
  ];

  return (
    <footer className="border-t border-line px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-2.5 font-mono text-sm font-semibold">
              <span aria-hidden className="text-ochre">▰</span>
              <span>iroko</span>
              <span className="font-normal text-muted">v{version}</span>
            </p>
            <p className="mt-3 font-mono text-sm text-walnut">{dict.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {dict.builtByPrefix}{" "}
              <a
                href={site.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink"
              >
                {site.authorName}
              </a>{" "}
              {dict.builtBySuffix}
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm">
            {links.map((link) => (
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
            <a
              href={switchHref}
              aria-label={dict.langSwitchAria}
              className="flex min-h-11 items-center rounded-md border border-line-strong px-3 text-ink-soft transition-colors hover:border-walnut hover:text-ink"
            >
              {dict.langSwitch}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
