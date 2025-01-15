import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyncAlt,
  faCogs,
  faCloud,
  faBox,
  faChartLine,
  faLock,
  faHandshake,
  faRedoAlt,
  faRocket,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: "DevOps Strategy & Assessment",
      description:
        "Evaluate existing processes, assess DevOps maturity, and create a tailored transformation roadmap for streamlined development and deployment.",
      icon: faSyncAlt,
      link: "/services/devops-strategy",
    },
    {
      title: "Automation of CI/CD Pipelines",
      description:
        "Automate integration, testing, and deployment using tools like Jenkins, GitLab, and CircleCI for faster, reliable releases.",
      icon: faCogs,
      link: "/services/cicd-automation",
    },
    {
      title: "Cloud Infrastructure Management",
      description:
        "Migrate to the cloud and implement Infrastructure as Code (IaC) for scalable, cost-effective, and secure cloud solutions.",
      icon: faCloud,
      link: "/services/cloud-infrastructure",
    },
    {
      title: "Containerization and Orchestration",
      description:
        "Leverage Docker and Kubernetes for containerization and orchestration, ensuring seamless deployment and scalability.",
      icon: faBox,
      link: "/services/containerization",
    },
    {
      title: "Monitoring & Observability",
      description:
        "Implement tools like Prometheus and Grafana for system health monitoring, log aggregation, and performance optimization.",
      icon: faChartLine,
      link: "/services/monitoring",
    },
    {
      title: "Security and Compliance",
      description:
        "Integrate security into DevOps pipelines with automated compliance checks and vulnerability management.",
      icon: faLock,
      link: "/services/security",
    },
    {
      title: "Collaboration & Culture Change",
      description:
        "Transform organizational culture with agile practices and better collaboration tools to foster innovation and teamwork.",
      icon: faHandshake,
      link: "/services/collaboration",
    },
    {
      title: "Disaster Recovery & High Availability",
      description:
        "Design disaster recovery plans and high-availability systems to ensure minimal downtime and business continuity.",
      icon: faRedoAlt,
      link: "/services/disaster-recovery",
    },
    {
      title: "Performance Engineering",
      description:
        "Conduct load and stress testing to ensure systems handle peak demands while optimizing infrastructure scalability.",
      icon: faRocket,
      link: "/services/performance-engineering",
    },
    {
      title: "Cost and Resource Optimization",
      description:
        "Analyze and optimize cloud costs and resource utilization for efficient infrastructure management.",
      icon: faDollarSign,
      link: "/services/cost-optimization",
    },
  ];

  const goToPreviousCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 4 : prevIndex - 1
    );
  };

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="overflow-hidden py-8 bg-gray-50 w-full">
      <h2 className="text-center font-bold text-blue-700 text-[35px] mb-8">
        Services We Offer
      </h2>
      <div className="relative flex justify-center w-full">
        {/* Left Arrow Button */}
        <button
          onClick={goToPreviousCard}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full shadow-lg z-10"
        >
          <FaArrowLeft />
        </button>

        {/* Cards Wrapper */}
        <div className="flex space-x-8 w-full mt-10 justify-center">
          {services
            .slice(currentIndex, currentIndex + 4)
            .map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="min-w-[300px] min-h-[350px] p-4 border-2 rounded-md hover:-translate-y-2 hover:border-blue-600 hover:text-blue-600 transition duration-300 ease-in-out shadow-md bg-white hidden sm:block"
              >
                <div className="flex justify-center mb-4 mt-6">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-4xl text-blue-600"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center text-black mt-8 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center text-2xl w-full">
                  {service.description}
                </p>
              </a>
            ))}

          {/* Mobile View: Show One Card with Full Width */}
          <a
            href={services[currentIndex].link}
            className="min-w-full  p-4 border-2 rounded-md hover:-translate-y-2 hover:border-blue-600 hover:text-blue-600 transition duration-300 ease-in-out shadow-md bg-white block sm:hidden"
          >
            <div className="flex justify-center  mb-4">
              <FontAwesomeIcon
                icon={services[currentIndex].icon}
                className="text-4xl text-blue-600"
              />
            </div>
            <h3 className="text-2xl font-bold text-center text-black mb-2">
              {services[currentIndex].title}
            </h3>
            <p className="text-gray-600 text-center text-2xl w-full">
              {services[currentIndex].description}
            </p>
          </a>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={goToNextCard}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full shadow-lg z-10"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Cards;
