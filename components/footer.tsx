export function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-muted text-sm">
          Built by{" "}
          <a
            href="https://github.com/James10192"
            className="text-foreground hover:text-accent transition-colors font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marcel DJEDJE-LI
          </a>{" "}
          in Abidjan, Cote d&apos;Ivoire.
        </p>
        <p className="text-muted/60 text-xs mt-3 max-w-md mx-auto leading-relaxed">
          Used daily on KLASSCI (Laravel SaaS, 3000+ students), MailPulse
          (Next.js email marketing), E-pagne (fintech).
        </p>
        <div className="flex items-center justify-center gap-8 mt-8">
          <a href="https://github.com/James10192/iroko" className="text-muted hover:text-foreground text-sm transition-colors" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.npmjs.com/package/@james10192/iroko" className="text-muted hover:text-foreground text-sm transition-colors" target="_blank" rel="noopener noreferrer">
            npm
          </a>
          <a href="https://github.com/James10192/iroko/blob/master/LICENSE" className="text-muted hover:text-foreground text-sm transition-colors" target="_blank" rel="noopener noreferrer">
            MIT
          </a>
        </div>
      </div>
    </footer>
  );
}
