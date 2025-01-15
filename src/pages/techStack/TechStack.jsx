import React from "react";
import TechTechnologies from "../../components/techstack/TechTechnologies";
import FullStackContent from "../../components/techstack/FullStackContent";
import WhyChooseUsTech from "../../components/techstack/WhyChooseUsTech";
import ToolsAndTechSection from "../../components/techstack/ToolsAndTechSection;";

const TechStack = () => {
  return (
    <div className=" py-12">
      <div className="mt-8">
        <div className="bg-white px-2 py-2 mx-auto rounded-lg shadow-lg">
          <FullStackContent />
        </div>

        <div className="bg-white container mx-auto px-4 py-12 mt-5 rounded-xl shadow-lg">
          <WhyChooseUsTech />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <TechTechnologies />
        </div>

        {/* <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <ToolsAndTechSection />
        </div> */}
      </div>
    </div>
  );
};

export default TechStack;
