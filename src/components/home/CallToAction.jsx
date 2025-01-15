import React from "react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
 
  const navigate = useNavigate();
  const goToContactPage = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Ready to Transform Your Business?
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Let DrutSys Technologies guide your journey to success in the digital
          era.
        </p>
        <div>
          <button
            onClick={goToContactPage}
            className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
