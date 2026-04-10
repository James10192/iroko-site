import { Hero } from "@/components/hero";
import { ComponentsGrid } from "@/components/components-grid";
import { QualityGate } from "@/components/quality-gate";
import { InstallSection } from "@/components/install-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="noise">
      <Hero />
      <ComponentsGrid />
      <QualityGate />
      <InstallSection />
      <Footer />
    </main>
  );
}
