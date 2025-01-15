import React from "react";
import { useNavigate } from "react-router-dom";

const HeroHome = () => {

  const navigate = useNavigate();
  const goToContactPage = () => {
    navigate("/contact");
  };


  return (
    <div className="w-full h-screen overflow-hidden relative bg-gray-900 text-white md:pt-5 pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="object-cover w-full h-full opacity-25"
          autoPlay
          loop
          muted
        >
          <source src="/src/assets/home/homeVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Welcome to <span className="text-blue-500">DrutSys Technologies</span>{" "}
          to Accelerate Growth
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-8">
          Empowering businesses with innovative technology solutions for growth,
          optimization, and success.
        </p>
        <button onClick={goToContactPage} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-all">
          Automate your Business →
        </button>
      </div>
    </div>
  );
};

export default HeroHome;
