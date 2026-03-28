import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChapterMarker from "@/components/ChapterMarker";
import MarketSection from "@/components/MarketSection";
import ModelSection from "@/components/ModelSection";
import GrowthArcSection from "@/components/GrowthArcSection";
import StrategySection from "@/components/StrategySection";
import RiskSection from "@/components/RiskSection";
import ReturnSection from "@/components/ReturnSection";
import AskSection from "@/components/AskSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />

      <div className="pull-stripe">
        <p className="pull-quote">
          Most freelancers treat platforms like a job board. We treat them like a sales funnel.
        </p>
      </div>

      <ChapterMarker chapter="Chapter I — The Market" title="Global freelance economy" />
      <MarketSection />

      <ChapterMarker chapter="Chapter II — The Model" title="Where the money goes" />
      <ModelSection />

      <ChapterMarker chapter="Chapter III — The Growth Arc" title="18-month roadmap" />
      <GrowthArcSection />

      <div className="pull-stripe bg-[#f3ede0]">
        <p className="pull-quote !text-[var(--ink)]">
          At $100K billed, the relationship inverts. We stop chasing clients — and start choosing them.
        </p>
      </div>

      <ChapterMarker chapter="Chapter IV — The Strategy" title="Operational edge" />
      <StrategySection />

      <ChapterMarker chapter="Chapter V — Risk & Mitigation" title="Stress-tested scenarios" />
      <RiskSection />

      <ChapterMarker chapter="Chapter VI — Return Structure" title="What investors receive" />
      <ReturnSection />

      <AskSection />
      <Footer />
    </main>
  );
}
