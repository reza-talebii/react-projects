import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Pricing from "../Components/Pricing/Pricing";
import Footer from "../Components/Footer/Footer";
import HeroImage from "../Components/Hero/HeroImage";

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <HeroImage heading={"PricingPage"} text={"Test"} />
      <Pricing />
      <Footer />
    </>
  );
};

export default PricingPage;
