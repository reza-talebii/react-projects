import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import HeroImage from "../Components/Hero/HeroImage";
import Form from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";

const concat = () => {
  return (
    <>
      <Navbar />
      <HeroImage heading={"Concat"} text={"Test"} />
      <Form />
      <Footer />
    </>
  );
};

export default concat;
