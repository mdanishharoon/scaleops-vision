import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChapterMarker from "@/components/ChapterMarker";
import MarketSection from "@/components/MarketSection";
import ComparisonTable from "@/components/ComparisonTable";
import ModelSection from "@/components/ModelSection";
import GrowthArcSection from "@/components/GrowthArcSection";
import CRMSection from "@/components/CRMSection";
import StrategySection from "@/components/StrategySection";
import BusinessLabSection from "@/components/BusinessLabSection";
import RiskSection from "@/components/RiskSection";
import ReturnSection from "@/components/ReturnSection";
import FAQSection from "@/components/FAQSection";
import AskSection from "@/components/AskSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />

      <div className="pull-stripe">
        <p className="pull-quote">
          Most professionals support someone else&apos;s portfolio. Partners originate them.
        </p>
      </div>

      <ChapterMarker chapter="Chapter I: The Position" title="Partner Track vs Freelancing" />
      <MarketSection />
      <ComparisonTable />

      <ChapterMarker chapter="Chapter II: The Build" title="9-Month Growth Horizon" />
      <ModelSection />

      <ChapterMarker chapter="Chapter III: The Roadmap" title="Phase 1, 2, and 3" />
      <GrowthArcSection />

      <div className="pull-stripe bg-[#f3ede0]">
        <p className="pull-quote !text-[var(--ink)]">
          At £100K billed, the model matures. We move from acquisition to relationship leverage.
        </p>
      </div>

      <ChapterMarker chapter="Chapter IV: The Systems" title="Internal CRM Infrastructure" />
      <CRMSection />

      <ChapterMarker chapter="Chapter V: The Edge" title="Operational Strategy" />
      <StrategySection />

      <ChapterMarker chapter="Chapter VI: Validation" title="Business Lab Case Study" />
      <BusinessLabSection />

      <ChapterMarker chapter="Chapter VII: Security" title="Mitigation & Safeguards" />
      <RiskSection />

      <ChapterMarker chapter="Chapter VIII: Outcomes" title="Earnings & Guarantee" />
      <ReturnSection />

      <FAQSection />
      <AskSection />
      <Footer />
    </main>
  );
}
