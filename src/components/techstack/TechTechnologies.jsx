// import React from "react";
// import {
//   FaTools,
//   FaProjectDiagram,
//   FaCode,
//   FaServer,
//   FaShieldAlt,
//   FaCloud,
//   FaGraduationCap,
//   FaHandsHelping,
//   FaPenNib,
// } from "react-icons/fa";

// const TechServices = () => {
//   const offerings = [
//     {
//       title: "Technology Stack Consulting",
//       icon: <FaTools size={40} />,
//       description:
//         "Expertise in frontend, backend, databases, cloud infrastructure, and mobile development.",
//       details: [
//         "Frontend: React, Angular, Vue.js, Svelte",
//         "Backend: Node.js, Express, Django, Spring Boot",
//         "Databases: PostgreSQL, MySQL, MongoDB",
//         "Cloud: AWS, GCP, Azure",
//         "Mobile: React Native, Flutter, Swift",
//       ],
//     },
//     {
//       title: "Architectural Design & Strategy",
//       icon: <FaProjectDiagram size={40} />,
//       description:
//         "Design scalable, robust, and efficient application architectures.",
//       details: [
//         "Microservices and serverless computing",
//         "API design (REST, GraphQL)",
//         "Database optimization",
//         "CI/CD pipelines",
//       ],
//     },
//     {
//       title: "Custom Software Development",
//       icon: <FaCode size={40} />,
//       description:
//         "End-to-end development services for building customized web and mobile applications.",
//       details: [
//         "MVP Development: Quickly launch your product with a lean, feature-focused version.",
//         "Enterprise Applications: Scalable solutions for ERP systems, CRMs, and business intelligence tools.",
//         "E-commerce Platforms: Design and build custom e-commerce solutions with payment systems and third-party APIs.",
//         "SaaS Development: Build multi-tenant SaaS applications with authentication, subscription management, and billing systems.",
//       ],
//     },
//     {
//       title: "Code Quality & Performance Optimization",
//       icon: <FaServer size={40} />,
//       description:
//         "Ensure your application is maintainable, scalable, and performant with best practices.",
//       details: [
//         "Code reviews and refactoring",
//         "Performance profiling and optimization (frontend and backend)",
//         "Frontend performance: Lazy loading, code splitting, image optimization",
//         "Backend performance: Caching, database optimization, API throttling",
//       ],
//     },
//     {
//       title: "Security Audits & Best Practices",
//       icon: <FaShieldAlt size={40} />,
//       description:
//         "Integrate security best practices into every layer of your stack for a secure application.",
//       details: [
//         "Secure coding practices and vulnerability testing",
//         "Data encryption (at rest and in transit)",
//         "Authentication & Authorization (OAuth, JWT, multi-factor authentication)",
//         "Compliance with security standards (GDPR, HIPAA, SOC 2)",
//       ],
//     },
//     {
//       title: "Cloud & DevOps Consulting",
//       icon: <FaCloud size={40} />,
//       description:
//         "Optimize infrastructure and development workflows with cloud services and DevOps practices.",
//       details: [
//         "Cloud infrastructure setup and management (AWS, GCP, Azure)",
//         "CI/CD pipeline setup (Jenkins, GitLab CI, CircleCI)",
//         "Infrastructure as code (Terraform, CloudFormation)",
//         "Kubernetes & Docker containerization",
//         "Cost optimization strategies in the cloud",
//       ],
//     },
//     {
//       title: "Agile Development & Project Management",
//       icon: <FaProjectDiagram size={40} />,
//       description:
//         "Adopt Agile practices and manage projects effectively with our expert guidance.",
//       details: [
//         "Agile project management (Scrum, Kanban)",
//         "Sprint planning, retrospectives, and backlog grooming",
//         "Cross-functional team collaboration (frontend, backend, UX/UI, QA)",
//         "Product management guidance, roadmap planning",
//       ],
//     },
//     {
//       title: "UX/UI Design Consulting",
//       icon: <FaPenNib size={40} />,
//       description:
//         "Create engaging, user-friendly products with the help of experienced designers.",
//       details: [
//         "User experience research and testing",
//         "Prototyping and wireframing",
//         "Visual design for web and mobile interfaces",
//         "Accessibility best practices (WCAG compliance)",
//       ],
//     },
//     {
//       title: "Training & Knowledge Transfer",
//       icon: <FaGraduationCap size={40} />,
//       description:
//         "Equip your in-house teams with the necessary skills for long-term product success.",
//       details: [
//         "Full-stack development training (backend, frontend, DevOps)",
//         "Specific tech stack training (React, Node.js, Angular, etc.)",
//         "Security best practices",
//         "Cloud management and DevOps tools",
//       ],
//     },
//     {
//       title: "Ongoing Support & Maintenance",
//       icon: <FaHandsHelping size={40} />,
//       description:
//         "We offer ongoing support to manage, maintain, and scale your applications.",
//       details: [
//         "Regular updates, bug fixes, and patches",
//         "Scaling as your user base grows",
//         "Monitoring and error tracking (using tools like Sentry, New Relic)",
//         "Custom feature enhancements and iteration",
//       ],
//     },
//   ];

//   return (
//     <div className="py-12 px-8 bg-gradient-to-r from-blue-500 to-indigo-500">
//       <div className="text-center text-white mb-12">
//         <h1 className="text-5xl font-bold">Technology & Service Offerings</h1>
//         <p className="text-lg mt-4">
//           Discover how we can help you succeed in your technology journey.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {offerings.map((offering, index) => (
//           <div
//             key={index}
//             className="group bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-50 p-6"
//           >
//             <div className="flex items-center justify-between">
//               <div className="text-blue-600">{offering.icon}</div>
//               <h2 className="text-lg mx-8 font-semibold text-gray-800">
//                 {offering.title}
//               </h2>
//             </div>
//             <p className="mt-4 text-gray-700">{offering.description}</p>
//             <div className="mt-6">
//               <h3 className="text-lg font-medium text-gray-900">
//                 Technologies & Services:
//               </h3>
//               <ul className="list-disc pl-5 mt-2 text-gray-600">
//                 {offering.details.map((detail, idx) => (
//                   <li key={idx}>{detail}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TechServices;

import React, { useState } from "react";
import {
  FaTools,
  FaProjectDiagram,
  FaCode,
  FaServer,
  FaShieldAlt,
  FaCloud,
  FaGraduationCap,
  FaHandsHelping,
  FaPenNib,
} from "react-icons/fa";

const TechServices = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const offerings = [
    {
      title: "Technology Stack Consulting",
      icon: <FaTools size={40} />,
      description:
        "Expertise in frontend, backend, databases, cloud infrastructure, and mobile development.",
      details: [
        "Frontend: React, Angular, Vue.js, Svelte",
        "Backend: Node.js, Express, Django, Spring Boot",
        "Databases: PostgreSQL, MySQL, MongoDB",
        "Cloud: AWS, GCP, Azure",
        "Mobile: React Native, Flutter, Swift",
      ],
    },
    {
      title: "Architectural Design & Strategy",
      icon: <FaProjectDiagram size={40} />,
      description:
        "Design scalable, robust, and efficient application architectures.",
      details: [
        "Microservices and serverless computing",
        "API design (REST, GraphQL)",
        "Database optimization",
        "CI/CD pipelines",
      ],
    },
    {
      title: "Custom Software Development",
      icon: <FaCode size={40} />,
      description:
        "End-to-end development services for building customized web and mobile applications.",
      details: [
        "MVP Development: Quickly launch your product with a lean, feature-focused version.",
        "Enterprise Applications: Scalable solutions for ERP systems, CRMs, and business intelligence tools.",
        "E-commerce Platforms: Design and build custom e-commerce solutions with payment systems and third-party APIs.",
        "SaaS Development: Build multi-tenant SaaS applications with authentication, subscription management, and billing systems.",
      ],
    },
    {
      title: "Code Quality & Performance Optimization",
      icon: <FaServer size={40} />,
      description:
        "Ensure your application is maintainable, scalable, and performant with best practices.",
      details: [
        "Code reviews and refactoring",
        "Performance profiling and optimization (frontend and backend)",
        "Frontend performance: Lazy loading, code splitting, image optimization",
        "Backend performance: Caching, database optimization, API throttling",
      ],
    },
    {
      title: "Security Audits & Best Practices",
      icon: <FaShieldAlt size={40} />,
      description:
        "Integrate security best practices into every layer of your stack for a secure application.",
      details: [
        "Secure coding practices and vulnerability testing",
        "Data encryption (at rest and in transit)",
        "Authentication & Authorization (OAuth, JWT, multi-factor authentication)",
        "Compliance with security standards (GDPR, HIPAA, SOC 2)",
      ],
    },
    {
      title: "Cloud & DevOps Consulting",
      icon: <FaCloud size={40} />,
      description:
        "Optimize infrastructure and development workflows with cloud services and DevOps practices.",
      details: [
        "Cloud infrastructure setup and management (AWS, GCP, Azure)",
        "CI/CD pipeline setup (Jenkins, GitLab CI, CircleCI)",
        "Infrastructure as code (Terraform, CloudFormation)",
        "Kubernetes & Docker containerization",
      ],
    },
    {
      title: "Agile Development & Project Management",
      icon: <FaProjectDiagram size={40} />,
      description:
        "Adopt Agile practices and manage projects effectively with our expert guidance.",
      details: [
        "Agile project management (Scrum, Kanban)",
        "Sprint planning, retrospectives, and backlog grooming",
        "Cross-functional team collaboration (frontend, backend, UX/UI, QA)",
        "Product management guidance, roadmap planning",
      ],
    },
    {
      title: "UX/UI Design Consulting",
      icon: <FaPenNib size={40} />,
      description:
        "Create engaging, user-friendly products with the help of experienced designers.",
      details: [
        "User experience research and testing",
        "Prototyping and wireframing",
        "Visual design for web and mobile interfaces",
        "Accessibility best practices (WCAG compliance)",
      ],
    },
    {
      title: "Training & Knowledge Transfer",
      icon: <FaGraduationCap size={40} />,
      description:
        "Equip your in-house teams with the necessary skills for long-term product success.",
      details: [
        "Full-stack development training (backend, frontend, DevOps)",
        "Specific tech stack training (React, Node.js, Angular, etc.)",
        "Security best practices",
        "Cloud management and DevOps tools",
      ],
    },
    {
      title: "Ongoing Support & Maintenance",
      icon: <FaHandsHelping size={40} />,
      description:
        "We offer ongoing support to manage, maintain, and scale your applications.",
      details: [
        "Regular updates, bug fixes, and patches",
        "Scaling as your user base grows",
        "Monitoring and error tracking (using tools like Sentry, New Relic)",
        "Custom feature enhancements and iteration",
      ],
    },
  ];

  return (
    <div className="py-16 px-8 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-xl">
      {/* Header Section */}
      <div className="text-center text-white mb-16">
        <h1 className="text-5xl font-extrabold">
          Technology & Service Offerings
        </h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Unlock innovation and scale your business with our advanced technology
          services.
        </p>
      </div>

      {/* Offerings Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <div className="text-blue-500">{offering.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {offering.title}
              </h2>
            </div>
            <p className="mt-4 text-gray-600">{offering.description}</p>
            <button
              className="mt-4 text-blue-500 font-bold"
              onClick={() => toggleDetails(index)}
            >
              {expandedIndex === index ? "Show Less" : "Learn More"}
            </button>
            {expandedIndex === index && (
              <ul className="mt-6 text-gray-700 list-disc pl-5 space-y-2">
                {offering.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechServices;
