import AnnouncementBanner from "@/components/sections/announcement-banner";
import NavigationHeader from "@/components/sections/navigation-header";
import HeroSection from "@/components/sections/hero-section";
import NeuroSymbolicModel from "@/components/sections/neuro-symbolic-model";
import BenchmarkChart from "@/components/sections/benchmark-chart";
import NeuroSymbolicReasonerSection from "@/components/sections/neuro-symbolic-reasoner";
import VideoShowcase from "@/components/sections/video-showcase";
import BreakthroughFoundationModel from "@/components/sections/breakthrough-foundation-model";
import CompanyChatbotComparison from "@/components/sections/company-chatbot-comparison";
import CareersSection from "@/components/sections/careers-section";
import FooterCTA from "@/components/sections/footer-cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-space">
      <AnnouncementBanner />
      <NavigationHeader />
      <main className="pt-[108px] md:pt-[116px]">
        <HeroSection />
        <NeuroSymbolicModel />
        <BenchmarkChart />
        <NeuroSymbolicReasonerSection />
        <VideoShowcase />
        <BreakthroughFoundationModel />
        <CompanyChatbotComparison />
        <CareersSection />
        <FooterCTA />
      </main>
    </div>
  );
}