import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          alt="Background"
          className="opacity-50 inset-0 bg-gray-500 absolute h-full w-full object-cover"
          src="/src/assets/servicesImg/banner.jpeg"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-8 h-full flex flex-col justify-center items-start text-white">
        <span className="text-xl text-black text-center font-semibold mb-3">
          Migrate and Modernize with Efficient
        </span>
        <h1 className="text-5xl text-center text-black font-extrabold mb-6">DevOps Services</h1>
        <p className="text-xl mb-8 text-gray-800 font-bold leading-relaxed">
          When offering <strong className="text-blue-600">IT consulting</strong> and <strong className="text-blue-600">DevOps services</strong>, our goal is
          to help businesses optimize their IT infrastructure, improve software
          development and operations workflows, and ultimately accelerate time
          to market, reduce costs, and enhance system reliability. Below are key
          services and approaches that can be part of an IT consulting and
          DevOps offering:
          
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow hover:bg-gray-200 transition transform hover:scale-105 flex items-center">
          Start Your DevOps Journey
          <i className="ml-2">
            <svg
              width="38"
              height="12"
              viewBox="0 0 38 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00684738 5.9239L0 5.82214C-1.65926e-08 5.44256 0.282063 5.12885 0.64803 5.07927L0.749769 5.07237L35.4419 5.07327L32.2217 1.85486C31.9554 1.58874 31.931 1.17218 32.1486 0.878564L32.2212 0.794487C32.4873 0.528172 32.9039 0.50378 33.1974 0.721513L33.2816 0.79399L37.7802 5.2889C38.0465 5.55492 38.0708 5.97149 37.8532 6.2651L37.7807 6.34918L33.282 10.8516C32.9893 11.1445 32.5146 11.1447 32.2217 10.8521C31.9554 10.5859 31.931 10.1694 32.1486 9.87579L32.2212 9.7917L35.4378 6.5728L0.749769 6.57191C0.370186 6.57191 0.0564921 6.2899 0.00684738 5.9239Z"
                fill="currentColor"
              />
            </svg>
          </i>
        </button>
      </div>
    </div>
  );
};

export default Banner;
