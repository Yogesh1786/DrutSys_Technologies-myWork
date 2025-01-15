// import React from "react";

// const FullStackContent = () => {
//   return (
//     <div className="bg-black w-full md:px-0 px-3 pt-20 md:pt-24 lg:pt-32 flex flex-col md:flex-row md:p-4 lg:p-0 justify-around items-center text-white">
//       <div className="w-full md:w-[50vw] text-center md:text-left">
//         <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
//         Empower your business with full-stack development solutions
//         </h1>
//         <p className="text-base lg:text-lg mt-3">
//           Our <strong className="text-blue-800 text-2xl font-bold">Full Stack Development Consulting</strong>  services offer comprehensive
//           expertise to help businesses build, scale, and optimize web and mobile
//           applications. We support the entire development lifecycle, from
//           initial planning and architecture to development, deployment, and
//           ongoing maintenance. Our approach ensures that all parts of your
//           application are seamlessly integrated, performant, and scalable.
//         </p>
//         <div className="flex gap-4 mt-6 md:px-0 px-3 mb-4 justify-center sm:justify-start">
//           <button className="bg-purple-700 p-2 rounded-full text-white">
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth="0"
//               viewBox="0 0 1024 1024"
//               height="30"
//               width="30"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
//             </svg>
//           </button>
//           <button className="bg-green-600 p-2 rounded-full text-white">
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth="0"
//               viewBox="0 0 448 512"
//               height="30"
//               width="30"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
//             </svg>
//           </button>
//           <button className="bg-orange-500 p-2 rounded-full text-white">
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth="0"
//               viewBox="0 0 1024 1024"
//               height="30"
//               width="30"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div className="w-full md:w-auto flex justify-center">
//         <img
//           alt="Custom Web Development and Design"
//           loading="lazy"
//           width="300"
//           height="300"
//           decoding="async"
//           className=""
//           src="/src/assets/techStack/fullStackContent.webp"
//           style={{ color: "transparent" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default FullStackContent;

import React from "react";

const FullStackContent = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full px-4 py-20 md:py-24 lg:py-32 flex flex-col-reverse md:flex-row justify-between items-center text-white">
      {/* Left Content Section */}
      <div className="w-full md:w-[50%] text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          Empower Your Business with <br />
          <span className="text-blue-500">
            Full-Stack Development Solutions
          </span>
        </h1>
        <p className="text-base lg:text-lg leading-relaxed mb-6">
          Our{" "}
          <strong className="text-blue-400 text-xl font-bold">
            Full Stack Development Consulting
          </strong>{" "}
          services provide expertise to help businesses build, scale, and
          optimize web and mobile applications. From planning and architecture
          to development, deployment, and maintenance, we ensure seamless
          integration, performance, and scalability.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <button className="bg-blue-600 hover:bg-blue-500 transition-all text-white px-5 py-3 rounded-full flex items-center gap-3 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M6.003 15.003V21a1 1 0 0 0 1.664.753l4.333-3.895 4.333 3.895A1 1 0 0 0 18.003 21v-5.997h-1.5V18.2l-3.333-3.002-3.333 3.002V15.003h-1.5zm0-6.003H4.5a.5.5 0 0 0-.35.857l7.853 7.147a.5.5 0 0 0 .694 0l7.853-7.147a.5.5 0 0 0-.35-.857H12V6.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V9z" />
            </svg>
            Learn More
          </button>
          <button className="bg-green-500 hover:bg-green-400 transition-all text-white px-5 py-3 rounded-full flex items-center gap-3 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M20.707 8.293l-8-8a1 1 0 0 0-1.414 0l-8 8a1 1 0 0 0 1.414 1.414L5 9.414V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.414l1.293 1.293a1 1 0 1 0 1.414-1.414zM13 9h-2v4H9l3 3 3-3h-2V9z" />
            </svg>
            Get Started
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-[40%] flex justify-center md:mb-0">
        <img
          src="/src/assets/techStack/fullStackContent.webp"
          alt="Full-Stack Development"
          className="w-96 h-96 shadow-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default FullStackContent;
