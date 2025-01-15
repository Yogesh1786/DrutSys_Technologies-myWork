import React from "react";
import "./home.css";
import Cards from "../../components/home/Cards";
import Business from "../../components/home/Business";
import HireDeveloper from "../../components/home/HireDeveloper";

import AboutHome from "../../components/home/AboutHome";
import HeroHome from "../../components/home/HeroHome";
import OffersAndBenefits from "../../components/home/OffersAndBenefits";
import CallToAction from "../../components/home/CallToAction";

const Home = () => {
  return (
    <div className="home-container ">
      {/* Hero Home Section */}
      <div>
        <HeroHome />
      </div>
      {/* Business */}

      <div className="flex justify-center items-center px-4 py-8 sm:px-8 md:px-16 lg:px-24">
        <Business />
      </div>

      <div className="flex justify-center items-center px-4 py-8 sm:px-8 md:px-16 lg:px-24">
        <AboutHome />
      </div>

      {/* Services */}
      <div className="md:w-[100%] text-blue-700  max-w-screen- md:text-left mt-10">
        <Cards />
      </div>
      {/* Offers And Benefits */}
      <div>
        <OffersAndBenefits />
      </div>

      {/*  HireDeveloper */}
      <div className="flex justify-center items-center px-4 py-8 sm:px-8 md:px-16 lg:px-24">
        <HireDeveloper />
      </div>

      {/* Call to Action */}
      <div>
        <CallToAction />
      </div>
    </div>
  );
};

export default Home;
