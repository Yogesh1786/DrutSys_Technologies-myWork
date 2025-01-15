import React, { useRef, useState } from "react";

const About = () => {
  const [expanded, setExpanded] = useState(null);
  const accordionRef = useRef(null);

  const handleAccordionChange = (index) => {
    setExpanded(expanded === index ? null : index);
    if (accordionRef.current) {
      accordionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="py-16 max-w-screen-lg mx-auto px-4">
      {/* Title */}
      <h1 className="text-4xl text-blue-800 mt-10 font-bold text-center mb-8">
        DrutSys Technologies
      </h1>

      <img
        src="/src/assets/aboutImg/about1.avif"
        alt="Mission"
        className="w-full max-w-4xl mx-auto mb-10 rounded-lg shadow-lg"
      />

      {/* Introduction */}
      <p className="text-center mb-16 text-black text-xl md:text-xl">
        At <strong className="text-blue-800">DrutSys Technologies</strong>, we provide comprehensive
        technology consulting services. Our goal is to deliver innovative
        solutions to help businesses drive growth, streamline operations, and
        stay competitive in the digital era.
      </p>

      {/* Mission */}
      <div className="text-center mb-8 flex justify-center mt-10">
        <div className="inline-block relative py-2 px-4">
          <h2 className="text-2xl font-bold text-blue-800">Our Mission</h2>
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-blue-800" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-blue-800" />
        </div>
      </div>

      <p className="text-center mt-4 text-black text-xl md:text-xl">
        Our mission is to empower businesses by providing cutting-edge
        technology solutions that enhance operational efficiency, foster
        innovation, and help businesses succeed in the digital world. We
        collaborate closely with our clients, ensuring our solutions are
        tailored to their unique needs.
      </p>

      {/* What We Do Section */}
      <div className="text-center mb-8 flex justify-center mt-10">
        <div className="relative inline-block py-2 px-4">
          <h2 className="text-2xl font-bold text-blue-800">What We Do</h2>
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-blue-800" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-blue-800" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-black gap-8">
        {[
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
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white text-lg rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 w-full max-w-sm sm:max-w-md md:max-w-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover  mb-4"
            />
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="p-8 bg-gray-50 rounded-2xl mt-10 shadow-lg">
        <div className="text-center mb-8 flex justify-center mt-5">
          <div className="relative inline-block py-2 px-4">
            <h2 className="text-2xl font-bold text-blue-800">
              Why Choose DrutSys Technologies?
            </h2>
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-blue-800" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-blue-800" />
          </div>
        </div>

        <div className="space-y-4">
          {/* Accordion Section */}
          {[
            {
              title: "Expertise",
              content:
                "We have a highly skilled team of experts in various domains of technology, from software development to cybersecurity, ensuring we can provide top-notch solutions.",
            },
            {
              title: " Tailored Solutions",
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
                " We stay ahead of the curve by adopting emerging technologies that provide our clients with a competitive edge.",
            },
            {
              title: "Quality",
              content:
                "Our solutions adhere to the highest industry standards, ensuring reliability and robustness for all our clients.",
            },
          ].map((item, index) => (
            <div key={index} className="border-b-2">
              <div
                className="flex justify-between items-center py-3 cursor-pointer"
                onClick={() => handleAccordionChange(index)}
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-600 mr-2"
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
    </div>
  );
};

export default About;
