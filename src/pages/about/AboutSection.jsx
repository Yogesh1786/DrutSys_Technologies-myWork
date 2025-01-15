import React from "react";
import HeroSection from "../../components/home/AboutHome";
import StatsSection from "../../components/about/StatsSection";

import WhatWeDoAbout from "../../components/about/WhatWeDoAbout";
import Accordian from "../../components/about/Accordian";
import { HiH1 } from "react-icons/hi2";
import About from "../../components/about/About";

const AboutSection = () => {
  return (
    <div className="home-container">
      <div>
        <About />
      </div>

      <div>
        <StatsSection />
      </div>
      {/* What We Do */}

      <div className="container mx-auto ">
        <WhatWeDoAbout />
      </div>

      {/* Accordian  */}

      <div className="container mx-auto  ">
        <Accordian />
      </div>
      {/* <div><WhyChooseUs/></div> */}
    </div>
  );
};

export default AboutSection;
