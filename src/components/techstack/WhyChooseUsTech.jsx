// import React from "react";

// const WhyChooseUs = () => {
//   return (
//     <section className="py-16 rounded-xl">
//       <h2 className="text-blue-600 font-extrabold text-center text-5xl md:text-[35px] leading-tight md:leading-[45px] mb-4">
//         Why Choose Us?
//       </h2>

//       <div className="my-16 md:mt-20 flex md:flex-row flex-col xl:px-0 sm:px-3 px-1 gap-7">
//         <div className="border-r xl:pr-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-layout-dashboard w-6 h-6 text-pink-500 flex-shrink-0"
//           >
//             <rect width="7" height="9" x="3" y="3" rx="1"></rect>
//             <rect width="7" height="5" x="14" y="3" rx="1"></rect>
//             <rect width="7" height="9" x="14" y="12" rx="1"></rect>
//             <rect width="7" height="5" x="3" y="16" rx="1"></rect>
//           </svg>
//           <p className="text-gray-700 text-sm md:text-base xl:text-lg mt-2">
//             Build scalable websites with modern technologies tailored to your
//             business goals.
//           </p>
//         </div>

//         <div className="border-r xl:pr-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-file-text w-6 h-6 text-purple-500 flex-shrink-0"
//           >
//             <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
//             <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
//             <path d="M10 9H8"></path>
//             <path d="M16 13H8"></path>
//             <path d="M16 17H8"></path>
//           </svg>
//           <p className="text-gray-700 text-sm md:text-base xl:text-lg mt-2">
//             Ensure seamless performance and intuitive user experience with our
//             web solutions.
//           </p>
//         </div>

//         <div className="border-r xl:pr-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-zap w-6 h-6 text-yellow-500 flex-shrink-0"
//           >
//             <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
//           </svg>
//           <p className="text-gray-700 text-sm md:text-base xl:text-lg mt-2">
//             Integrate powerful features and tools to enhance your website’s
//             functionality.
//           </p>
//         </div>

//         <div>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-clock w-6 h-6 text-blue-500 flex-shrink-0"
//           >
//             <circle cx="12" cy="12" r="10"></circle>
//             <polyline points="12 6 12 12 16 14"></polyline>
//           </svg>
//           <p className="text-gray-700 text-sm md:text-base xl:text-lg mt-2">
//             Deliver projects on time with precision and a focus on quality.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;





import React from "react";

const WhyChooseUs = () => {
  const points = [
    {
      title: "Scalable Websites",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-pink-500"
        >
          <rect width="7" height="9" x="3" y="3" rx="1"></rect>
          <rect width="7" height="5" x="14" y="3" rx="1"></rect>
          <rect width="7" height="9" x="14" y="12" rx="1"></rect>
          <rect width="7" height="5" x="3" y="16" rx="1"></rect>
        </svg>
      ),
      description:
        "Build scalable websites with modern technologies tailored to your business goals.",
    },
    {
      title: "Seamless Performance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
        </svg>
      ),
      description:
        "Ensure seamless performance and intuitive user experience with our web solutions.",
    },
    {
      title: "Powerful Features",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-yellow-500"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
        </svg>
      ),
      description:
        "Integrate powerful features and tools to enhance your website’s functionality.",
    },
    {
      title: "On-Time Delivery",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      description:
        "Deliver projects on time with precision and a focus on quality.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
      <h2 className="text-blue-600 font-extrabold text-center text-5xl mb-12">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {points.map((point, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center rounded-full bg-white shadow-lg p-6 transform transition-transform hover:-translate-y-2 hover:shadow-2xl`}
          >
            <div className="mb-4">{point.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {point.title}
            </h3>
            <p className="text-gray-600">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
