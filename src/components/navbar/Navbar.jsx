// import React, { useState } from "react";
// import { MenuIcon, PhoneIcon, XIcon, PlusIcon } from "@heroicons/react/outline";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };
//   const handleDropdownEnter = () => {
//     setIsDropdownOpen(true);
//   };

//   const handleDropdownLeave = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     <nav className="bg-slate-100 text-black h-15 w-full fixed z-50">
//       {/* Navbar Container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
//         {/* Logo Section */}
//         <a href="/" className="flex items-center gap-2 truncate">
//           <img
//             src="/src/assets/Drutsys Logos/logo-svg.svg"
//             alt="Logo"
//             className="h-12 w-auto sm:h-14"
//             loading="lazy"
//           />
//           <span className="font-bold text-lg sm:text-xl leading-tight truncate">
//             DrutSys Technologies
//           </span>
//         </a>
//         <br />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex font-bold text-lg space-x-6">
//           <a
//             href="/"
//             className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md"
//           >
//             Home
//           </a>
//           <a
//             href="/about"
//             className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md"
//           >
//             About
//           </a>
//           <div
//             className="relative "
//             onMouseEnter={handleDropdownEnter}
//             onMouseLeave={handleDropdownLeave}
//           >
//             {/* Services Dropdown with Down Arrow Icon */}
//             <a href="/services">
//               <button
//                 onClick={toggleDropdown}
//                 className="flex items-center hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md"
//               >
//                 <span>Services</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="size-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="m19.5 8.25-7.5 7.5-7.5-7.5"
//                   />
//                 </svg>
//                 {/* Down Arrow */}
//               </button>
//             </a>

//             {/* Dropdown Menu */}
//             {isDropdownOpen && (
//               <div className="absolute left-0 w-96 bg-gray-800  font-light rounded-md mt-2 shadow-lg z-10">
//                 <div className="grid grid-cols-2 gap-2 px-4 py-3">
//                   <div>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-white hover:bg-blue-500"
//                     >
//                       DevOps Strategy & Assessment
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-white hover:bg-blue-500"
//                     >
//                       Automation of CI/CD Pipelines
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-white hover:bg-blue-500"
//                     >
//                       Cloud Infrastructure Management
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-white hover:bg-blue-500"
//                     >
//                       Containerization and Orchestration
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-white hover:bg-blue-500"
//                     >
//                       Monitoring & Observability
//                     </a>
//                   </div>
//                   <div>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-white hover:bg-blue-500"
//                     >
//                       Security and Compliance
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-white hover:bg-blue-500"
//                     >
//                       Collaboration & Culture Change
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-white hover:bg-blue-500"
//                     >
//                       Disaster Recovery & High Availability
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-white hover:bg-blue-500"
//                     >
//                       Performance Engineering
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-white hover:bg-blue-500"
//                     >
//                       Cost and Resource Optimization
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           <a
//             href="/techstack"
//             className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md"
//           >
//             Tech Stack
//           </a>
//           <a
//             href="/career"
//             className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md"
//           >
//             Career
//           </a>
//           <a
//             href="/contact"
//             className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="p-2 rounded-md  hover:bg-gray-700 focus:outline-none"
//           >
//             {isOpen ? (
//               <XIcon className="h-6 w-6" />
//             ) : (
//               <MenuIcon className="h-6 w-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white text-black">
//           <div className="space-y-2 px-4 py-3">
//             <a
//               href="/"
//               className="block hover:bg-blue-500 px-3 py-2 rounded-md"
//             >
//               Home
//             </a>
//             <a
//               href="/about"
//               className="block hover:bg-blue-500 px-3 py-2 rounded-md"
//             >
//               About
//             </a>
//             <div className="relative">
//               {/* Mobile Services Dropdown with Plus Icon */}
//               <button
//                 onClick={toggleDropdown}
//                 className="flex items-center justify-between w-full hover:bg-blue-500 px-3 py-2 rounded-md"
//               >
//                 <span>Services</span>
//                 <PlusIcon className="h-5 w-5 ml-2" /> {/* Plus Icon */}
//               </button>
//               {/* Mobile Dropdown Menu */}
//               {isDropdownOpen && (
//                 <div className="bg-gray-800 w-full px-4 py-3 space-y-2">
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-white hover:bg-blue-500"
//                   >
//                     DevOps Strategy & Assessment
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-white hover:bg-blue-500"
//                   >
//                     Automation of CI/CD Pipelines
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-white hover:bg-blue-500"
//                   >
//                     Cloud Infrastructure Management
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-white hover:bg-blue-500"
//                   >
//                     Containerization and Orchestration
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-white hover:bg-blue-500"
//                   >
//                     Monitoring & Observability
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-white hover:bg-blue-500"
//                   >
//                     Security and Compliance
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-white hover:bg-blue-500"
//                   >
//                     Collaboration & Culture Change
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-white hover:bg-blue-500"
//                   >
//                     Disaster Recovery & High Availability
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-white hover:bg-blue-500"
//                   >
//                     Performance Engineering
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-white hover:bg-blue-500"
//                   >
//                     Cost and Resource Optimization
//                   </a>
//                 </div>
//               )}
//             </div>
//             <a
//               href="/career"
//               className="block hover:bg-blue-500 px-3 py-2 rounded-md"
//             >
//               Career
//             </a>
//             <a
//               href="/contact"
//               className="block hover:bg-blue-500 px-3 py-2 rounded-md"
//             >
//               Contact
//             </a>
//             <div className="flex items-center gap-2">
//               <PhoneIcon className="h-6 w-6 text-blue-500" />
//               <a href="tel:+1 919-234-5678" className="hover:underline">
//                 +1 919-234-5678
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






// Here is the code with advance css properties-

import React, { useState } from "react";
import { MenuIcon, PhoneIcon, XIcon, PlusIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleDropdownEnter = () => setIsDropdownOpen(true);
  const handleDropdownLeave = () => setIsDropdownOpen(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white fixed top-0 w-full z-50 shadow-lg backdrop-blur-md">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 flex items-center justify-between h-20">
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/src/assets/Drutsys Logos/logo-svg.svg"
            alt="Logo"
            className="h-12 w-auto sm:h-14"
          />
          <span className="font-bold text-2xl sm:text-3xl tracking-wide hover:text-yellow-300 transition-all duration-300">
            DrutSys Technologies
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center font-semibold space-x-8 text-lg">
          <a
            href="/"
            className="hover:text-yellow-300 transform transition-all hover:scale-110 duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-yellow-300 transform transition-all hover:scale-110 duration-300"
          >
            About
          </a>
          <div
            className="relative group"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className="flex items-center gap-2 hover:text-yellow-300 transition-all transform hover:scale-110 duration-300"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-72 bg-gray-800 text-white rounded-lg shadow-xl p-4 transform transition-all duration-500">
                <a
                  href="#"
                  className="block px-4 py-2 rounded-md hover:bg-blue-500 transition-all"
                >
                  DevOps Strategy & Assessment
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-md hover:bg-blue-500 transition-all"
                >
                  Automation of CI/CD Pipelines
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-md hover:bg-blue-500 transition-all"
                >
                  Cloud Infrastructure Management
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-md hover:bg-blue-500 transition-all"
                >
                  Containerization and Orchestration
                </a>
              </div>
            )}
          </div>
          <a
            href="/techstack"
            className="hover:text-yellow-300 transform transition-all hover:scale-110 duration-300"
          >
            Tech Stack
          </a>
          <a
            href="/career"
            className="hover:text-yellow-300 transform transition-all hover:scale-110 duration-300"
          >
            Career
          </a>
          <a
            href="/contact"
            className="hover:text-yellow-300 transform transition-all hover:scale-110 duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 rounded-md hover:bg-blue-500 focus:outline-none transition-all duration-300"
        >
          {isOpen ? (
            <XIcon className="h-6 w-6 transform transition-all" />
          ) : (
            <MenuIcon className="h-6 w-6 transform transition-all" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white">
          <div className="space-y-2 px-6 py-4">
            <a href="/" className="block hover:bg-blue-500 px-3 py-2 rounded-md transition-all duration-300">
              Home
            </a>
            <a href="/about" className="block hover:bg-blue-500 px-3 py-2 rounded-md transition-all duration-300">
              About
            </a>
            <button
              onClick={toggleDropdown}
              className="block hover:bg-blue-500 px-3 py-2 rounded-md transition-all duration-300"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="pl-6">
                <a
                  href="#"
                  className="block hover:bg-blue-500 px-3 py-2 rounded-md transition-all duration-300"
                >
                  DevOps Strategy
                </a>
                <a
                  href="#"
                  className="block hover:bg-blue-500 px-3 py-2 rounded-md transition-all duration-300"
                >
                  Cloud Management
                </a>
              </div>
            )}
            <a href="/techstack" className="block hover:bg-blue-500 px-3 py-2 rounded-md transition-all duration-300">
              Tech Stack
            </a>
            <a href="/career" className="block hover:bg-blue-500 px-3 py-2 rounded-md transition-all duration-300">
              Career
            </a>
            <a href="/contact" className="block hover:bg-blue-500 px-3 py-2 rounded-md transition-all duration-300">
              Contact
            </a>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-6 w-6 text-blue-500" />
              <a href="tel:+1 919-234-5678" className="hover:underline text-blue-500">
                +1 919-234-5678
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
