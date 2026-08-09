import { notFound } from "next/navigation";
import { hasLocale, otherLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  COUNTS,
  STEPS,
  componentsByStep,
  displayName,
} from "@/lib/manifest";
import { SITE, TREE } from "@/lib/site";
import { fmt } from "@/lib/format";
import { Hero } from "@/components/hero";
import { ComponentsGrid } from "@/components/components-grid";
import { QualityGate } from "@/components/quality-gate";
import { InstallSection } from "@/components/install-section";
import { Footer } from "@/components/footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const other = otherLocale(locale);
  const vars = {
    total: COUNTS.total,
    rules: COUNTS.rules,
    skills: COUNTS.skills,
    agents: COUNTS.agents,
    hooks: COUNTS.hooks,
    guide: COUNTS.guide,
    version: SITE.version,
  };

  const cycleSteps = STEPS.map((step) => dict.stepLabels[step]);

  const stepGroups = STEPS.map((step, index) => ({
    index: String(index + 1).padStart(2, "0"),
    label: dict.stepLabels[step],
    tagline: dict.components.stepTaglines[step],
    items: componentsByStep(step).map((component) => ({
      display: displayName(component),
      typeLabel: dict.typeLabels[component.type],
      desc: dict.components.descriptions[component.name],
    })),
  }));

  return (
    <main className="grain">
      <Hero
        dict={{
          ...dict.hero,
          lead: fmt(dict.hero.lead, vars),
          proof: dict.hero.proof.map((item) => fmt(item, vars)),
          terminal: {
            ...dict.hero.terminal,
            tagline: fmt(dict.hero.terminal.tagline, vars),
          },
        }}
        topbar={dict.topbar}
        cycleSteps={cycleSteps}
        command={SITE.installCommand}
        version={SITE.version}
        tree={TREE.join("\n")}
        github={SITE.github}
        npm={SITE.npm}
        currentLocale={locale}
        switchHref={`/${other}`}
      />
      <ComponentsGrid
        kicker={dict.components.kicker}
        title={fmt(dict.components.title, vars)}
        intro={fmt(dict.components.intro, vars)}
        groups={stepGroups}
      />
      <QualityGate dict={dict.qualityGate} />
      <InstallSection
        dict={{
          ...dict.quickstart,
          steps: {
            init: {
              ...dict.quickstart.steps.init,
              resultLine: fmt(dict.quickstart.steps.init.resultLine, vars),
            },
            guide: {
              ...dict.quickstart.steps.guide,
              desc: fmt(dict.quickstart.steps.guide.desc, vars),
              resultLine: fmt(dict.quickstart.steps.guide.resultLine, vars),
            },
            list: dict.quickstart.steps.list,
            doctor: dict.quickstart.steps.doctor,
            update: {
              ...dict.quickstart.steps.update,
              resultLine: fmt(dict.quickstart.steps.update.resultLine, vars),
            },
          },
        }}
        commands={{
          init: SITE.installCommand,
          guide: SITE.guideCommand,
          list: SITE.listCommand,
          doctor: SITE.doctorCommand,
          update: SITE.updateCommand,
        }}
        version={SITE.version}
        listCounts={{
          rules: COUNTS.rules,
          skills: COUNTS.skills,
          agents: COUNTS.agents,
          hooks: COUNTS.hooks,
        }}
      />
      <Footer
        dict={dict.footer}
        version={SITE.version}
        site={{
          github: SITE.github,
          npm: SITE.npm,
          changelog: SITE.changelog,
          license: SITE.license,
          authorName: SITE.author.name,
          authorUrl: SITE.author.url,
        }}
        switchHref={`/${other}`}
      />
    </main>
  );
}
