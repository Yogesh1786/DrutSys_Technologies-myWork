// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {
//   faMapMarkerAlt,
//   faPhone,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="bg-slate-100 text-black py-5">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {/* Logo Section */}
//           <div className="space-y-3">
//             <div className="flex gap-2 items-center">
//               <img
//                 src="/src/assets/Drutsys Logos/logo-svg.svg"
//                 alt="Logo"
//                 className="h-12 w-auto sm:h-14"
//                 loading="lazy"
//               />
//               <h2 className="text-2xl font-bold">DrutSys Technologies</h2>
//             </div>

//             <p className="">
//               Empowering businesses with innovative technology solutions for
//               growth, optimization, and success.
//             </p>
//             <h3 className="text-lg font-semibold ">Subscribe</h3>
//             <p className="">Stay updated with the latest in tech.</p>
//             <div className="space-y-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="w-full p-2 rounded-md bg-slate-300 text-black"
//               />
//               <button className="w-[50%] py-2 px-4 bg-blue-600 text-white rounded-md">
//                 Subscribe
//               </button>
//             </div>
//           </div>

//           {/* Navigation Section */}
//           <div className="pl-0 sm:pl-10">
//             <h3 className="text-lg font-semibold mb-2">Links</h3>
//             <div className="space-y-2 flex flex-col gap-2 ">
//               {["Home", "About", "Career", "Contact"].map((link) => (
//                 <Link
//                   key={link}
//                   to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
//                   className="hover:text-blue-600"
//                 >
//                   {link}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div className="pl-0 sm:pl-10">
//             <h3 className="text-lg font-semibold mb-2">DevOps Services</h3>
//             <div className="space-y-2 flex flex-col gap-2 ">
//               {[
//                 "DevOps Strategy & Assessment",
//                 "Automation of CI/CD Pipelines",
//                 "Cloud Infrastructure Management",
//                 "Containerization and Orchestration",
//                 "Monitoring & Observability",
//                 "Security and Compliance",
//                 "Collaboration & Culture Change",
//                 "Disaster Recovery & High Availability",
//                 "Performance Engineering",
//                 "Cost and Resource Optimization",
//               ].map((service) => (
//                 <Link
//                   key={service}
//                   to={`/${service.toLowerCase().replace(/\s+/g, "-")}`}
//                   className="hover:text-blue-600"
//                 >
//                   {service}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div className="pl-0 sm:pl-10">
//             <h3 className="text-xl font-semibold mb-2">Contact</h3>
//             <div className="space-y-2">
//               <p className="">
//                 <FontAwesomeIcon
//                   icon={faEnvelope}
//                   className="mr-2 text-blue-600 text-2xl"
//                 />
//                 contact@drutsys.com
//               </p>
//               <p className="">
//                 <FontAwesomeIcon
//                   icon={faPhone}
//                   className="mr-2 text-blue-600 text-2xl"
//                 />
//                 +1 919-234-5678
//               </p>
//               <h3 className="text-lg font-semibold mt-4">Our Office</h3>
//               <p className="">
//                 <FontAwesomeIcon
//                   icon={faMapMarkerAlt}
//                   className="mr-2 text-blue-600 text-2xl"
//                 />
//                 4030 Wake Forest Road STE 349, Raleigh, NC 27609-0010
//               </p>

//               {/* Social Links */}
//               <div className="flex items-center space-x-4 mt-4">
//                 {/* Twitter Link */}
//                 <a
//                   href="https://twitter.com/yourtwitterhandle"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-700 hover:text-blue-600 transition duration-300"
//                 >
//                   <FaTwitter className="text-3xl" />
//                 </a>
//                 {/* LinkedIn Link */}
//                 <a
//                   href="https://linkedin.com/in/yourlinkedinprofile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-700 hover:text-blue-600 transition duration-300"
//                 >
//                   <FaLinkedin className="text-3xl" />
//                 </a>
//                 {/* Facebook Link */}
//                 <a
//                   href="https://facebook.com/yourfacebookprofile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-700 hover:text-blue-600 transition duration-300"
//                 >
//                   <FaFacebook className="text-3xl" />
//                 </a>
//                 {/* Instagram Link */}
//                 <a
//                   href="https://instagram.com/yourinstagramhandle"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-700 hover:text-blue-600 transition duration-300"
//                 >
//                   <FaInstagram className="text-3xl" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-gray-600 text-center mt-5 pt-3">
//           <p className="">
//             &copy; 2024 DrutSys Technologies. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;





// Here is the code with advance css properties-

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src="/src/assets/Drutsys Logos/logo-svg.svg"
                alt="Logo"
                className="h-16 w-auto"
                loading="lazy"
              />
              <h2 className="text-3xl font-bold">DrutSys Technologies</h2>
            </div>
            <p className="text-gray-400">
              Innovating and transforming businesses through cutting-edge technology.
            </p>

            <h3 className="text-lg font-semibold mt-4">Subscribe</h3>
            <p className="text-gray-400">Get the latest updates on our services and innovations.</p>
            <div className="mt-4 space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded-md bg-gray-700 text-white"
              />
              <button className="w-full py-3 bg-blue-600 text-white rounded-md transition-all duration-300 hover:bg-blue-500">
                Subscribe
              </button>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-blue-500 transition-all duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <div className="space-y-2">
              {[
                "Cloud Solutions",
                "Automation & CI/CD",
                "DevOps Consulting",
                "Infrastructure Management",
                "Monitoring & Security",
              ].map((service) => (
                <Link
                  key={service}
                  to={`/${service.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block text-gray-400 hover:text-blue-500 transition-all duration-300"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-500 text-lg" />
                contact@drutsys.com
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-500 text-lg" />
                +1 919-234-5678
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-500 text-lg" />
                4030 Wake Forest Road STE 349, Raleigh, NC 27609-0010
              </p>

              <div className="flex items-center space-x-6 mt-6">
                <a
                  href="https://twitter.com/yourtwitterhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-all duration-300"
                >
                  <FaTwitter className="text-3xl" />
                </a>
                <a
                  href="https://linkedin.com/in/yourlinkedinprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-all duration-300"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
                <a
                  href="https://facebook.com/yourfacebookprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-all duration-300"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  href="https://instagram.com/yourinstagramhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-all duration-300"
                >
                  <FaInstagram className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 text-center mt-8 pt-4">
          <p className="text-sm text-gray-400">
            &copy; 2024 Yogesh Kumar. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
