import React from "react";
import Header from "@/components/common/Header";
import OperationsModule from "@/components/solutions/OperationsModule";
import Footer from "@/components/common/Footer";
import Faq from "@/components/common/Faq";
import Contact from "@/components/common/Contact";
import GetMoreInsights from "@/components/solutions/GetMoreInsights";

import { useLocation } from "react-router-dom";

function OperationsSolution() {
  const location = useLocation();
  const title = location.state?.title || "Comprehensive Operations Module";

  return (
    <>
      <Header variant="dark" inside={true} />
      <OperationsModule title={title} />
      <GetMoreInsights />
      <Faq bg="#020B18" />
      <Contact />
      <Footer variant="black" />
    </>
  );
}

export default OperationsSolution;
