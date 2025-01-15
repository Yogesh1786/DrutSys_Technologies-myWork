// // Career.js
// import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDiamond } from "@fortawesome/free-solid-svg-icons";

// const Career = () => {
//   return (
//     <div className="Career-container">
//       <section className="career-page p-10 bg-gray-50">
//         <div className="mt-20">
//           {/* Career Page Heading */}
//           <h3 className="text-2xl text-center text-blue-400">
//             <FontAwesomeIcon icon={faDiamond} /> Join Us
//           </h3>
//           <br />
//           <h2 className="text-5xl text-center text-gray-800 mb-12">
//             Are You Ready To Join Our Team ?
//           </h2>
//         </div>

//         {/* About Us Section */}
//         <div className="about-us bg-white mx-auto p-6 rounded-lg shadow-md mb-12">
//           <h3 className="text-3xl font-semibold text-gray-800 mb-4">
//             About Us
//           </h3>
//           <p className="text-gray-600 text-xl">
//             We are a leading company in the tech industry, passionate about
//             innovation and creating cutting-edge solutions for our clients. Join
//             us and be part of a team that values collaboration, growth, and
//             professional development.
//           </p>
//         </div>

//         {/* Job Openings */}
//         <div className="job-openings grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {/* Full Stack Developer Card */}
//           <div className="job-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-xl">
//             <Link to="/career/full-stack-developer">
//               <div className="card">
//                 <h3 className="job-title text-2xl font-semibold text-gray-800 mb-2">
//                   Full Stack Developer
//                 </h3>
//                 <p className="job-location text-gray-600 mb-2">
//                   Location: US Remote/Hybrid
//                 </p>
//                 <p className="job-experience text-gray-600 mb-2">
//                   Experience: 2-5 Years
//                 </p>
//                 <p className="job-salary text-gray-600 mb-4">
//                   Salary: $60,000 - $90,000
//                 </p>
//                 <button className="apply-btn bg-blue-600 text-white py-2 px-6 mt-5 rounded-full hover:bg-blue-700 transition-colors duration-300">
//                   Apply Now
//                 </button>
//               </div>
//             </Link>
//           </div>

//           {/* Technical Project Manager Card */}
//           <div className="job-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-xl">
//             <Link to="/career/technical-project-manager">
//               <div className="card">
//                 <h3 className="job-title text-2xl font-semibold text-gray-800 mb-2">
//                   Technical Project Manager
//                 </h3>
//                 <p className="job-location text-gray-600 mb-2">
//                   Location: US Remote/Hybrid
//                 </p>
//                 <p className="job-experience text-gray-600 mb-2">
//                   Experience: 5+ Years
//                 </p>
//                 <p className="job-salary text-gray-600 mb-4">
//                   Salary: $80,000 - $120,000
//                 </p>
//                 <button className="apply-btn bg-blue-600 text-white py-2 px-6 mt-5 rounded-full hover:bg-blue-700 transition-colors duration-300">
//                   Apply Now
//                 </button>
//               </div>
//             </Link>
//           </div>
//         </div>

//         {/* Why Join Us Section */}
//         <div className="why-join-us bg-white p-6 rounded-lg shadow-md mt-12">
//           <h3 className="text-3xl font-semibold text-gray-800 mb-4">
//             Why Join Us?
//           </h3>
//           <ul className="list-disc pl-6 space-y-2 text-xl">
//             <li className="text-gray-600">
//               Competitive salary and benefits packages.
//             </li>
//             <li className="text-gray-600">
//               Opportunities for professional growth and development.
//             </li>
//             <li className="text-gray-600">
//               Work with cutting-edge technologies on exciting projects.
//             </li>
//             <li className="text-gray-600">
//               Collaborative and supportive team environment.
//             </li>
//           </ul>
//         </div>

//         {/* Benefits Section */}
//         <div className="benefits bg-white p-6 rounded-lg shadow-md mt-12">
//           <h3 className="text-3xl font-semibold text-gray-800 mb-4">
//             Employee Benefits :-
//           </h3>
//           <ul className="list-disc pl-6 space-y-2 text-xl">
//             <li className="text-gray-600">
//               Health, dental, and vision insurance plans.
//             </li>
//             <li className="text-gray-600">
//               Paid time off (PTO) and paid holidays.
//             </li>
//             <li className="text-gray-600">
//               Retirement savings plans with employer matching.
//             </li>
//             <li className="text-gray-600">
//               Flexible working hours and work-from-home options.
//             </li>
//             <li className="text-gray-600">
//               Annual wellness programs and team-building activities.
//             </li>
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Career;




// Here is the code with advance css properties-

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";

const Career = () => {
  return (
    <div className="Career-container">
      <section className="career-page bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen p-10">
        {/* Career Page Heading */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-blue-500 flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faDiamond} /> Join Us
          </h3>
          <h2 className="text-5xl font-extrabold text-gray-800 my-6">
            Are You Ready To Join Our Team?
          </h2>
        </div>

        {/* About Us Section */}
        <div className="about-us bg-white mx-auto p-8 rounded-2xl shadow-lg mb-12 max-w-5xl">
          <h3 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 pb-3 border-blue-500">
            About Us
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are a leading company in the tech industry, passionate about
            innovation and creating cutting-edge solutions for our clients. Join
            us and be part of a team that values collaboration, growth, and
            professional development.
          </p>
        </div>

        {/* Job Openings */}
        <div className="job-openings grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-7xl">
          {/* Full Stack Developer Card */}
          <div className="job-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <Link to="/career/full-stack-developer">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                Full Stack Developer
              </h3>
              <p className="text-gray-600 mb-2">Location: US Remote/Hybrid</p>
              <p className="text-gray-600 mb-2">Experience: 2-5 Years</p>
              <p className="text-gray-600 mb-4">Salary: $60,000 - $90,000</p>
              <button className="apply-btn bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-all">
                Apply Now
              </button>
            </Link>
          </div>

          {/* Technical Project Manager Card */}
          <div className="job-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <Link to="/career/technical-project-manager">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                Technical Project Manager
              </h3>
              <p className="text-gray-600 mb-2">Location: US Remote/Hybrid</p>
              <p className="text-gray-600 mb-2">Experience: 5+ Years</p>
              <p className="text-gray-600 mb-4">Salary: $80,000 - $120,000</p>
              <button className="apply-btn bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-all">
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="why-join-us bg-white p-8 rounded-2xl shadow-lg mt-16 mx-auto max-w-5xl">
          <h3 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 pb-3 border-blue-500">
            Why Join Us?
          </h3>
          <ul className="list-disc pl-8 space-y-4 text-lg text-gray-700">
            <li>Competitive salary and benefits packages.</li>
            <li>Opportunities for professional growth and development.</li>
            <li>Work with cutting-edge technologies on exciting projects.</li>
            <li>Collaborative and supportive team environment.</li>
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="benefits bg-white p-8 rounded-2xl shadow-lg mt-16 mx-auto max-w-5xl">
          <h3 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 pb-3 border-blue-500">
            Employee Benefits
          </h3>
          <ul className="list-disc pl-8 space-y-4 text-lg text-gray-700">
            <li>Health, dental, and vision insurance plans.</li>
            <li>Paid time off (PTO) and paid holidays.</li>
            <li>Retirement savings plans with employer matching.</li>
            <li>Flexible working hours and work-from-home options.</li>
            <li>Annual wellness programs and team-building activities.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Career;
