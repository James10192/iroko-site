const FOOTER_LINKS = [
  { label: "GitHub", href: "https://github.com/James10192/iroko" },
  { label: "npm", href: "https://www.npmjs.com/package/@james10192/iroko" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/marcel-djedje-li-099490235/" },
  { label: "Portfolio", href: "https://astonishing-sprite-8fb0c9.netlify.app/" },
  { label: "MIT", href: "https://github.com/James10192/iroko/blob/master/LICENSE" },
];

export function Footer() {
  return (
    <footer className="px-6 py-20 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-sm text-muted">
          Built by{" "}
          <a
            href="https://astonishing-sprite-8fb0c9.netlify.app/"
            className="text-foreground hover:text-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marcel DJEDJE-LI
          </a>
        </p>
        <p className="text-muted/40 text-xs mt-3 max-w-sm mx-auto leading-relaxed font-mono">
          Abidjan, Cote d&apos;Ivoire · KLASSCI · MailPulse · E-pagne
        </p>
        <div className="flex items-center justify-center gap-8 mt-8">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted hover:text-accent-light text-sm font-mono transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
