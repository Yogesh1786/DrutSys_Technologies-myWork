import React from "react";
import {
  FaGithub,
  FaDocker,
  FaCloud,
  FaAws,
  FaSlack,
  FaJira,
  FaLaptopCode,
  FaChartLine,
  FaWrench,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// Define the content array with all the tools and icons
const toolsData = [
  {
    icon: <FaGithub className="text-4xl text-black mx-auto" />,
    title: "Version Control",
    tools: ["Git", "GitHub", "Bitbucket", "GitLab"],
  },
  {
    icon: <FaLaptopCode className="text-4xl text-green-600 mx-auto" />,
    title: "CI/CD Tools",
    tools: ["Jenkins", "CircleCI", "GitLab CI", "Travis CI", "ArgoCD"],
  },
  {
    icon: <FaWrench className="text-4xl text-purple-600 mx-auto" />,
    title: "Configuration Management",
    tools: ["Ansible", "Chef", "Puppet", "SaltStack"],
  },
  {
    icon: <FaDocker className="text-4xl text-indigo-600 mx-auto" />,
    title: "Containerization",
    tools: ["Docker", "Kubernetes", "OpenShift", "Helm"],
  },
  {
    icon: <FaChartLine className="text-4xl text-teal-600 mx-auto" />,
    title: "Monitoring & Logging",
    tools: ["Prometheus", "Grafana", "ELK Stack", "Splunk", "Datadog"],
  },
  {
    icon: <FaCloud className="text-4xl text-orange-600 mx-auto" />,
    title: "Cloud Providers",
    tools: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
  },
  {
    icon: <FaLaptopCode className="text-4xl text-yellow-600 mx-auto" />,
    title: "Infrastructure as Code",
    tools: ["Terraform", "CloudFormation", "Ansible"],
  },
  {
    icon: <FaSlack className="text-4xl text-pink-600 mx-auto" />,
    title: "Collaboration Tools",
    tools: ["Jira", "Confluence", "Slack", "Microsoft Teams"],
  },
];

const ToolsTechnologies = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          DevOps Consulting Services
        </h2>

        {/* Grid Container for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Dynamically generate cards based on toolsData */}
          {toolsData.map((tool, index) => (
            <div
              key={index}
              ref={ref}
              className={`service-card bg-white shadow-2xl rounded-lg text-center hover:transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out ${
                inView
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-10"
              }`}
              style={{
                width: "350px", // Set width to 350px
              }}
            >
              <div className="mb-8">{tool.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                {tool.title}
              </h3>
              <ul className="list-inside text-lg text-gray-700">
                {tool.tools.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnologies;
