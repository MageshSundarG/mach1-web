import Faq from "@/components/common/Faq";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContactPage from "@/components/common/Contact";
import React from "react";
import FloatingVideo from "@/components/common/FloatingVideo";

function Contact() {
  return (
    <>
      <Header variant="light" />
      <ContactPage gradient={false} />
      <Faq bg={"#fff"} />
      <Footer variant="dark" />
      <FloatingVideo />
    </>
  );
}

export default Contact;
