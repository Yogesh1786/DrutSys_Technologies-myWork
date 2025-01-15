import React from "react";
import {
  FaTools,
  FaProjectDiagram,
  FaCode,
  FaServer,
  FaShieldAlt,
  FaCloud,
  FaPenNib,
  FaGraduationCap,
  FaHandsHelping,
} from "react-icons/fa";

const offerings = [
  {
    title: "Technology Stack Consulting",
    icon: <FaTools size={30} className="text-blue-600" />,
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
    icon: <FaProjectDiagram size={30} className="text-blue-600" />,
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
    icon: <FaCode size={30} className="text-blue-600" />,
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
    icon: <FaServer size={30} className="text-blue-600" />,
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
    icon: <FaShieldAlt size={30} className="text-blue-600" />,
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
    icon: <FaCloud size={30} className="text-blue-600" />,
    description:
      "Optimize infrastructure and development workflows with cloud services and DevOps practices.",
    details: [
      "Cloud infrastructure setup and management (AWS, GCP, Azure)",
      "CI/CD pipeline setup (Jenkins, GitLab CI, CircleCI)",
      "Infrastructure as code (Terraform, CloudFormation)",
      "Kubernetes & Docker containerization",
      "Cost optimization strategies in the cloud",
    ],
  },
  {
    title: "Agile Development & Project Management",
    icon: <FaProjectDiagram size={30} className="text-blue-600" />,
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
    icon: <FaPenNib size={30} className="text-blue-600" />,
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
    icon: <FaGraduationCap size={30} className="text-blue-600" />,
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
    icon: <FaHandsHelping size={30} className="text-blue-600" />,
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

const TechnologyCategory = ({ title, details }) => (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h4 className="text-xl font-semibold text-gray-700 mb-4">{title}</h4>
      <ul className="list-disc pl-5 space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-gray-600">{detail}</li>
        ))}
      </ul>
    </div>
  );
  
  const ToolsAndTechSection = () => {
    return (
      <section className="tool-and-tech-section bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Tools and Technologies We Excel In
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Daffodil has been an early adopter of emerging technologies and has
              built extensive experience in various programming languages,
              frameworks, libraries, and tools. We continuously experiment with
              new technologies through our in-house R&D labs and pass on the
              learnings to our clients for a competitive edge.
            </p>
          </div>
  
          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {offerings.map((offering, index) => (
              <TechnologyCategory
                key={index}
                title={offering.title}
                details={offering.details}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ToolsAndTechSection;
