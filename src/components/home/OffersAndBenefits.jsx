import React, { useState } from "react";

const OffersAndBenefits = () => {
  const offers = [
    {
      title: "Consulting",
      description:
        "Expert guidance to navigate your technology challenges and opportunities.",
      icon: "🧠", // Placeholder for an icon; replace with actual SVG or image.
    },
    {
      title: "Strategy",
      description:
        "Tailored strategies to help you achieve digital transformation.",
      icon: "📈",
    },
    {
      title: "Performance",
      description:
        "Solutions designed to optimize your business operations and performance.",
      icon: "⚡",
    },
  ];

  const benefits = [
    {
      title: "24/7 Support",
      description: "Always here to assist you, anytime, anywhere.",
      icon: "🕒",
    },
    {
      title: "Customized Solutions",
      description: "Tailored IT strategies that fit your unique needs.",
      icon: "🔧",
    },
    {
      title: "Proven Track Record",
      description: "Over 500+ successful projects delivered globally.",
      icon: "🏆",
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Our Excellence in Action
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapping through Offers */}
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 text-center hover:scale-105 transform transition-transform duration-300"
            >
              <div className="text-5xl text-indigo-500 mb-4">{offer.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {offer.title}
              </h3>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          ))}

          {/* Mapping through Benefits */}
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-indigo-500 text-white shadow-lg rounded-lg p-8 text-center hover:scale-105 transform transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersAndBenefits;
