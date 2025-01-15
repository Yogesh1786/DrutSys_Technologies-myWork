import React, { useState } from "react";

const Accordian = () => {
  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Expertise",
      content:
        "We have a highly skilled team of experts in various domains of technology, from software development to cybersecurity, ensuring we can provide top-notch solutions.",
    },
    {
      title: "Tailored Solutions",
      content:
        "We recognize that every business is unique and take a customized approach to solving your technology challenges.",
    },
    {
      title: "Client-Centric",
      content:
        "We prioritize clear communication, timely delivery, and building long-term relationships with our clients.",
    },
    {
      title: "Innovation",
      content:
        "We stay ahead of the curve by adopting emerging technologies that provide our clients with a competitive edge.",
    },
    {
      title: "Quality",
      content:
        "Our solutions adhere to the highest industry standards, ensuring reliability and robustness for all our clients.",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 rounded-2xl  shadow-lg py-16 max-w-screen-lg mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-8 flex justify-center mt-5">
        <div className="relative inline-block py-2 px-4">
          <h2 className="text-5xl font-extrabold text-blue-800">
            Why Choose DrutSys Technologies?
          </h2>
          <p className="mt-2 text-lg text-gray-600">We deliver excellence, innovation, and measurable results</p>
        </div>
      </div>

      {/* Accordion Items */}
      <div className="space-y-4">
        {accordionItems.map((item, index) => (
          <div key={index} className="border-b-2">
            <div
              className="flex justify-between items-center py-3 cursor-pointer"
              onClick={() => handleAccordionChange(index)}
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 text-blue-600 mr-2 transition-transform ${
                    expanded === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <h3 className="text-xl font-bold text-blue-900">
                  {item.title}
                </h3>
              </div>
            </div>
            {expanded === index && (
              <div className="px-4 py-2 text-black text-lg font-semibold bg-gray-100">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
