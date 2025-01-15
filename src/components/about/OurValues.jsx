import React from "react";

const OurValues = () => {
  return (
    <div className="flex flex-wrap px-4 py-6">
      
      {/* Left Column */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h3 className=" text-black leading-relaxed">
          Our values are more than just words on a page. They guide the
          decisions and behaviors that shape our culture. At DrutSys Technologies , 5 key
          principles guide everything we do.
          <br />
          <br />
          <ol className="list-decimal pl-5 space-y-2">
            <li>Put people first.</li>
            <li>Create customer value.</li>
            <li>Innovate relentlessly.</li>
            <li>Be sustainable.</li>
            <li>Come on in!</li>
          </ol>
        </h3>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 relative">
        <img
          className="w-full mb-2 rounded-lg"
          src="/src/assets/aboutImg/ourvalues.jpg"
          alt="Our Values"
        />
        
      </div>
    </div>
  );
};

export default OurValues;
