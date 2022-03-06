import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import HeroImage from "../Components/Hero/HeroImage";
import Training from "../Components/Training/Training";
import Footer from "../Components/Footer/Footer";

const TrainingPage = () => {
  return (
    <>
      <Navbar />
      <HeroImage heading={"TrainingPage"} text={"Test"} />
      <Training />
      <Footer />
    </>
  );
};

export default TrainingPage;
