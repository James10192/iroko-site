import type { ComponentName, ComponentType, Step } from "@/lib/manifest";

// Source de vérité des textes du site. en.ts doit satisfaire `Dictionary`.
// Règles : accents corrects, jamais de tiret long, aucun nombre en dur
// (les compteurs passent par des templates {count} résolus depuis lib/manifest.ts).

export const fr = {
  meta: {
    title: "iroko : des racines profondes pour construire avec l'IA",
    description:
      "iroko installe {total} garde-fous pour Claude Code : l'IA ne code que ce qu'on lui demande, brûle moins de tokens, et rien ne part sans audit. Grown in Abidjan.",
    ogTitle: "iroko : des racines profondes pour construire avec l'IA",
    ogDescription:
      "{total} garde-fous pour le travail assisté par IA : cadrer, économiser, vérifier. Une commande et c'est planté.",
  },

  topbar: {
    github: "GitHub",
    npm: "npm",
    langSwitch: "EN",
    langSwitchAria: "Switch to English",
  },

  hero: {
    kicker: "Garde-fous pour Claude Code",
    titleLine1: "Des racines profondes",
    titleLine2: "pour construire avec l'IA.",
    lead: "L'iroko est un grand arbre d'Afrique de l'Ouest : on tient conseil sous son ombre avant d'agir, et ses racines profondes tiennent bon dans la tempête. iroko plante ces racines dans votre projet : {total} composants qui cadrent l'agent IA avant, pendant et après chaque ligne de code.",
    copyLabel: "copier",
    copiedLabel: "copié ✓",
    copyAria: "Copier la commande d'installation",
    proof: ["{total} composants", "Semver strict", "Licence MIT"],
    guideNote:
      "Vous débutez ? iroko init --guide installe le pack débutant : prompts en français, pensé pour accompagner les personnes qui découvrent le développement.",
    promisesTitle: "Trois promesses",
    promises: [
      {
        title: "Cadrer",
        desc: "L'IA ne code jamais un truc qu'on ne lui a pas demandé : plan d'abord, OKAY obligatoire.",
      },
      {
        title: "Économiser",
        desc: "Moins de tokens brûlés : recherche ciblée avant le code, agents seulement quand c'est utile.",
      },
      {
        title: "Vérifier",
        desc: "Rien ne part sans audit : revue qualité et commit gate sur chaque livraison.",
      },
    ],
    cycleTitle: "Le cycle du bâtisseur",
    terminal: {
      windowTitle: "iroko",
      productLine: "Garde-fous pour le travail assisté par IA",
      tagline: "{total} composants · Grown in Abidjan, Côte d'Ivoire",
    },
  },

  stepLabels: {
    cadrer: "Cadrer",
    illustrer: "Illustrer",
    documenter: "Documenter",
    construire: "Construire",
    verifier: "Vérifier",
  } satisfies Record<Step, string>,

  typeLabels: {
    rule: "rule",
    skill: "skill",
    agent: "agent",
    hook: "hook",
  } satisfies Record<ComponentType, string>,

  components: {
    kicker: "Le manifeste",
    title: "Une commande installe {total} composants.",
    intro:
      "Rien de généré, rien de superflu : chaque composant répond à une douleur concrète et s'inscrit dans une étape du cycle. {rules} rules toujours actives, {skills} skills à la demande, {agents} agents spécialisés, {hooks} hook de protection.",
    stepTaglines: {
      cadrer: "Décider quoi construire avant d'écrire la moindre ligne.",
      illustrer: "Montrer des options visuelles avant de coder.",
      documenter: "Lire la doc à jour au lieu de deviner une API.",
      construire: "Exécuter dans le cadre, sans rien détruire.",
      verifier: "Auditer avant de livrer, sans exception.",
    } satisfies Record<Step, string>,
    descriptions: {
      "quality-gate":
        "Audit du diff sur 4 axes avant chaque commit : PASS, WARN ou BLOCK, avec un glossaire en langage simple",
      "git-safety":
        "Interdit reset --hard, push --force, migrate:fresh et toute commande destructive sans accord écrit",
      "stay-in-scope":
        "Jamais au-delà de la demande : pas de features non demandées, des fichiers qui restent courts",
      "ship-quality":
        "Chaque livrable gère chargement, vide, erreur et succès : pas de coming soon",
      "token-efficiency":
        "Quand utiliser un agent ou un outil direct : moins de tokens brûlés pour le même résultat",
      "docs-first":
        "Ne jamais deviner une API : ctx7, MCP puis recherche web, et la méthode pour lire une doc",
      "global-preferences":
        "Des défauts assumés : pnpm, design monochrome, zéro bricolage",
      "plan-and-confirm":
        "Plan, agent critique et OKAY obligatoire avant toute ligne de code",
      "pick-stack":
        "Interroge le besoin (budget, cible, hors-ligne, mobile money) et recommande une stack argumentée",
      sketch:
        "Croquis de plusieurs options visuelles : vous choisissez, l'IA code ce que vous avez validé",
      "read-docs":
        "La doc à jour avant d'écrire du code, avec la méthode de lecture",
      demarrer:
        "Accompagnement pas à pas, entièrement en français, pour les personnes qui découvrent le développement",
      commit:
        "Stage précis des fichiers de la conversation, audité par le quality gate",
      "deep-review":
        "Revue structurelle impitoyable : correct ne suffit pas pour être approuvé",
      "fix-errors":
        "Corrige lint et typecheck, en séquentiel par défaut pour économiser",
      "visual-check":
        "Vérifie le rendu dans un navigateur : capture d'écran et snapshot d'accessibilité",
      "create-pr": "Pull request GitHub avec titre et description générés",
      "create-issue": "Issue GitHub avec labels et rattachement à un epic",
      oneshot:
        "Le raccourci pour une tâche triviale : explore, code, teste, et s'arrête après deux échecs",
      critic:
        "Relit chaque plan avec un regard CTO, UX ou sécurité selon le contexte",
      "explore-docs": "Recherche documentaire via ctx7 et Context7 MCP",
      "explore-codebase":
        "Explore le code existant avant de proposer un plan",
      websearch: "Recherche web rapide multi-sources",
      "guard-destructive":
        "Bloque git reset --hard, push --force, migrate:fresh et rm -rf avant leur exécution",
    } satisfies Record<ComponentName, string>,
  },

  qualityGate: {
    kicker: "La section vedette",
    kickerCode: "/commit",
    title: "Chaque commit passe l'audit d'abord.",
    lead: "Le quality gate lit votre diff et l'interroge sur quatre axes avant que quoi que ce soit n'atteigne le dépôt. PASS part. WARN demande confirmation. BLOCK se corrige d'abord, sans exception. Et chaque verdict s'explique en langage simple, sans jargon.",
    axes: [
      {
        axis: "Architecture",
        desc: "Fichiers qui font trop de choses, responsabilités mélangées, patterns existants ignorés",
      },
      {
        axis: "Qualité vs vitesse",
        desc: "Requêtes N+1, code de debug oublié, validation manquante",
      },
      {
        axis: "Production",
        desc: "Traces d'erreur exposées, routes non protégées, transactions manquantes",
      },
      {
        axis: "SOLID",
        desc: "Contrats de classes violés, rôles codés en dur au lieu de permissions",
      },
    ],
    terminalTitle: "quality gate",
    auditTitle: "Quality Gate",
    auditSubtitle: "audit avant commit",
    results: [
      { label: "Architecture", status: "PASS", warn: false },
      { label: "Qualité vs vitesse", status: "PASS", warn: false },
      { label: "Production", status: "WARN", warn: true },
      { label: "SOLID", status: "PASS", warn: false },
    ],
    verdictLabel: "Verdict",
    verdictValue: "WARN : confirmer ou corriger",
    legend: [
      { status: "PASS", meaning: "part" },
      { status: "WARN", meaning: "confirmer" },
      { status: "BLOCK", meaning: "corriger d'abord" },
    ],
  },

  quickstart: {
    kicker: "Quickstart",
    title: "Quatre commandes, et c'est planté.",
    intro:
      "Aucun fichier de config à écrire, aucun compte à créer. Le CLI vous guide de bout en bout.",
    copyLabel: "copier",
    copiedLabel: "copié ✓",
    copyAriaPrefix: "Copier la commande",
    steps: {
      init: {
        title: "Init",
        desc: "Checklist interactive. Tout est sélectionné par défaut : décochez ce qui ne vous sert pas, confirmez, terminé.",
        promptLine: "? Sélectionnez les composants à installer",
        resultLine: "▰ {total} composants installés",
      },
      guide: {
        title: "Pack débutant",
        desc: "Le pack minimal pour bien commencer : {guide} composants essentiels, prompts du CLI en français, zéro jargon.",
        promptLine: "? Prêt à planter les racines ? (O/n)",
        resultLine: "▰ {guide} composants installés (pack guide)",
      },
      list: {
        title: "List",
        desc: "Voir ce qui est installé face au manifeste, type par type. La barre ▰ est celle que dessine le CLI.",
        summaryTitle: "Résumé",
        rows: {
          rules: "Rules",
          skills: "Skills",
          agents: "Agents",
          hooks: "Hooks",
        },
      },
      update: {
        title: "Update",
        desc: "Récupère les dernières versions de ce que vous avez installé. Semver strict : patch corrige, minor ajoute, major renomme, jamais de surprise.",
        checkingLine: "Vérification du manifeste…",
        resultLine: "▰ tout est à jour (v{version})",
      },
    },
    altTitle: "Autres façons d'installer",
    altCopyHint: "cliquer pour copier",
    altMethods: [
      { label: "Installation globale", command: "pnpm add -g @james10192/iroko" },
      {
        label: "Plugin Claude Code",
        command: "/plugin marketplace add James10192/iroko",
      },
      {
        label: "Cherry-pick manuel",
        command: "git clone https://github.com/James10192/iroko.git",
      },
    ],
  },

  footer: {
    tagline: "Grown in Abidjan · Built for everyone",
    builtByPrefix: "Construit par",
    builtBySuffix:
      "à Abidjan, Côte d'Ivoire. Open source, licence MIT, semver strict.",
    links: {
      github: "GitHub",
      npm: "npm",
      changelog: "Changelog",
      license: "Licence MIT",
    },
    langSwitch: "English version",
    langSwitchAria: "Switch to English",
  },
};

export type Dictionary = typeof fr;
