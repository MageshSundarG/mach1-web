import Airport from "@/components/home/Airport";
import AirportAISolutions from "@/components/home/AirportAISolutions";
import AirportOpsLanding from "@/components/home/AirportOpsLanding";
import BusinessMarquee from "@/components/home/BusinessMarquee";
import Contact from "@/components/common/Contact";
import DynamicStatusSection from "@/components/home/DynamicStatusSection";
import Faq from "@/components/common/Faq";
import FeatureGrid from "@/components/home/FeatureGrid";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import InsightsSection from "@/components/common/InsightsSection";
import MachLandingPage from "@/components/home/MachLandingPage";
import FloatingVideo from "@/components/common/FloatingVideo";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-clip font-sans">
      <Header variant="dark" />
      <MachLandingPage />
      {/* <BusinessMarquee /> */}
      <Airport />
      <FeatureGrid />
      <AirportAISolutions />
      <AirportOpsLanding />
      <DynamicStatusSection />
      <InsightsSection />
      <Faq bg={"#020B18"} />
      <Contact />
      <Footer variant="dark" />
      <FloatingVideo />
    </main>
  );
};

export default Index;
