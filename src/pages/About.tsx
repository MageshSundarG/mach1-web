import AIOperationalVision from "@/components/about/AIOperationalVision";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import PurposeImpact from "@/components/about/PurposeImpact";
import Timeline from "@/components/about/Timeline";
import WhatWereSolving from "@/components/about/WhatWereSolving";
import Contact from "@/components/common/Contact";
import Faq from "@/components/common/Faq";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

function About() {
  return (
    <>
      <Header variant="dark" />
      <Timeline />
      <LeadershipTeam />
      <PurposeImpact />
      <AIOperationalVision />
      <WhatWereSolving />
      <Faq bg="#020817" />
      <Contact />
      <Footer variant="dark" />
    </>
  );
}

export default About;
