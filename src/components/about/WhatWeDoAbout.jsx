

import React from "react";

const WhatWeDo = () => {
  const services = [
    {
      title: "IT Strategy & Digital Transformation",
      description:
        "We assist in creating a digital transformation roadmap and aligning IT strategies with business goals.",
      image: "/src/assets/aboutImg/Digital_Marketing.png",
    },
    {
      title: "Software Development & Custom Solutions",
      description:
        "We develop custom software solutions designed to meet the specific needs of your business.",
      image: "/src/assets/aboutImg/devlopment.jpg",
    },
    {
      title: "Cloud Computing & Infrastructure",
      description:
        "We offer cloud-based solutions for scalability and flexibility, helping businesses adapt to modern infrastructure.",
      image: "/src/assets/aboutImg/cloud-computing.webp",
    },
    {
      title: "Cybersecurity & Risk Management",
      description:
        "Our cybersecurity services ensure your business is protected from threats, ensuring compliance and data security.",
      image: "/src/assets/aboutImg/Cyber_Security.png",
    },
    {
      title: "Data Analytics & Business Intelligence",
      description:
        "We help businesses harness data analytics for actionable insights, optimizing decision-making and strategy.",
      image: "/src/assets/aboutImg/Data_Analytics.png",
    },
    {
      title: "Managed Services & IT Support",
      description:
        "Our managed services ensure seamless IT operations, with 24/7 monitoring and proactive issue resolution.",
      image: "/src/assets/aboutImg/It_Solutions.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 ">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-blue-800">What We Do</h2>
        <p className="mt-2 text-lg text-gray-600">
          Discover how our services can transform your business and drive success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover rounded-t-lg group-hover:opacity-90"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-800 group-hover:underline">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
            <div className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-30 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;

