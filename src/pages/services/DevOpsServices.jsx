
import React, { useState } from "react";

// DevOps Services Array
const devOpsServices = [
  {
    title: "DevOps Strategy & Assessment",
    image: "/src/assets/servicesImg/devops.jpeg", 
    description: `
      <h3 class="text-2xl text-white font-extrabold  mb-3">Overview:</h3>
      <p class="text-white text-xl font-bold font-sans mb-3">
        This service focuses on evaluating the current DevOps processes and creating a tailored roadmap to improve efficiency and performance.
      </p>
      <ul class=" pl-5 text-lg font-bold text-white">
        <li>Assessment of Current State: Evaluate existing development, deployment, and operational processes to identify bottlenecks, inefficiencies, and areas for improvement.</li>
        <li>DevOps Readiness: Assess the organization's maturity in DevOps practices and tools, including culture, automation, and collaboration.</li>
        <li>Roadmap Development: Create a tailored DevOps transformation roadmap with clear milestones, timelines, and outcomes.</li>
      </ul>
    `,
  },
  {
    title: "Automation of CI/CD Pipelines",
    image: "/src/assets/servicesImg/automation.jpeg", 
    description: `
      <h3 class="text-2xl text-white font-extrabold  mb-3">Overview:</h3>
      <p class="text-white text-xl font-bold font-sans mb-3">
        This service focuses on automating the entire CI/CD pipeline to streamline integration, testing, and deployment processes, ensuring faster releases.
      </p>
      <ul class="pl-5 text-lg font-bold text-white">
        <li>CI/CD Implementation: Automate integration, testing, and deployment of software to reduce manual work and accelerate releases.</li>
        <li>Tooling Integration: Utilize tools like Jenkins, GitLab, and CircleCI for streamlined workflows.</li>
        <li>Automated Testing: Set up test suites for code quality assurance and defect minimization.</li>
      </ul>
    `,
  },
  {
    title: "Cloud Infrastructure Management",
    image: "/src/assets/servicesImg/Cloud_infrastructure.jpeg",
    description: `
      <h3 class="text-2xl text-white font-extrabold  mb-3">Overview:</h3>
      <p class="text-white text-xl font-bold font-sans mb-3">
        We help businesses migrate to the cloud, manage their infrastructure, and optimize costs to ensure scalability, efficiency, and resilience.
      </p>
      <ul class="pl-5 text-lg font-bold text-white">
        <li>Cloud Migration: Assist businesses in migrating to AWS, Azure, or Google Cloud for scalability and efficiency.</li>
        <li>Infrastructure as Code (IaC): Automate resource provisioning with Terraform or Ansible.</li>
        <li>Cost Optimization: Optimize cloud resources to ensure cost-effectiveness.</li>
      </ul>
    `,
  },
  {
    title: "Containerization and Orchestration",
    image: "/src/assets/servicesImg/Containerization.jpeg",
    description: `
      <h3 class="text-2xl text-white font-extrabold  mb-3">Overview:</h3>
      <p class="text-white text-xl font-bold font-sans mb-3">
        Containerizing applications and orchestrating them for streamlined deployments, scalability, and management, while ensuring security.
      </p>
      <ul class="pl-5 text-lg font-bold text-white">
        <li>Docker & Kubernetes: Containerize apps for seamless deployment and management.</li>
        <li>Microservices Architecture: Design scalable microservices aligned with DevOps principles.</li>
        <li>Container Security: Implement secure image creation and vulnerability scanning.</li>
      </ul>
    `,
  },
  {
    title: "Monitoring & Observability",
    image: "/src/assets/servicesImg/Monitoring.jpeg",
    description: `
      <h3 class="text-2xl text-white font-extrabold  mb-3">Overview:</h3>
      <p class="text-white text-xl font-bold font-sans mb-3">
        Ensure system health, reliability, and performance with advanced monitoring and log aggregation tools for better insights.
      </p>
      <ul class="pl-5 text-lg font-bold text-white">
        <li>Monitoring Tools: Use Prometheus, Grafana, or Datadog for system health tracking.</li>
        <li>Log Aggregation: Centralize log management with ELK stack or Splunk.</li>
        <li>Performance Optimization: Tune performance and plan capacity based on monitoring insights.</li>
      </ul>
    `,
  },
  {
    title: "Security and Compliance",
    image: "/src/assets/servicesImg/Security.jpeg",
    description: `
      <h3 class="text-2xl text-white font-extrabold  mb-3">Overview:</h3>
      <p class="text-white text-xl font-bold font-sans mb-3">
        Integrate security into the DevOps pipeline and automate compliance checks to protect your applications and meet regulatory standards.
      </p>
      <ul class="pl-5 text-lg font-bold text-white">
        <li>DevSecOps: Integrate security into the DevOps pipeline for end-to-end protection.</li>
        <li>Compliance Automation: Automate checks for GDPR, HIPAA, PCI DSS compliance.</li>
        <li>Vulnerability Management: Use tools to identify and resolve vulnerabilities early.</li>
      </ul>
    `,
  },
  {
    title: "Collaboration & Culture Change",
    image: "/src/assets/servicesImg/Collaboration.jpeg",
    description: `
      <h3 class="text-2xl text-white font-extrabold  mb-3">Overview:</h3>
      <p class="text-white text-xl font-bold font-sans mb-3">
        Help teams adapt to DevOps by fostering collaboration and cultural transformation to enhance overall productivity.
      </p>
      <ul class="pl-5 text-lg font-bold text-white">
        <li>Cultural Transformation: Build a collaborative and agile DevOps culture.</li>
        <li>Collaboration Tools: Optimize tools like Slack, Jira, and Confluence.</li>
        <li>Training & Workshops: Provide training for technical and non-technical teams.</li>
      </ul>
    `,
  },
  {
    title: "Disaster Recovery & High Availability",
    image: "/src/assets/servicesImg/Disaster.jpeg",
    description: `
      <h3 class="text-2xl text-white font-extrabold  mb-3">Overview:</h3>
      <p class="text-white text-xl font-bold font-sans mb-3">
        Ensure your business can recover quickly from disruptions and maintain high availability for mission-critical applications.
      </p>
      <ul class="pl-5 text-lg font-bold text-white">
        <li>Backup and Recovery: Design disaster recovery plans for data protection.</li>
        <li>High Availability: Use cloud-native architectures for minimal downtime.</li>
      </ul>
    `,
  },
  {
    title: "Performance Engineering",
    image: "/src/assets/servicesImg/Performance.jpeg",
    description: `
      <h3 class="text-2xl text-white font-extrabold  mb-3">Overview:</h3>
      <p class="text-white text-xl font-bold font-sans mb-3">
        Focus on load testing and scalable architectures to ensure that systems perform efficiently under high traffic.
      </p>
      <ul class="pl-5 text-lg font-bold text-white">
        <li>Load Testing: Simulate traffic spikes to ensure production-level readiness.</li>
        <li>Scalability: Design infrastructure to handle increased demands efficiently.</li>
      </ul>
    `,
  },
  {
    title: "Cost and Resource Optimization",
    image: "/src/assets/servicesImg/Cost.jpeg",
    description: `
      <h3 class="text-2xl text-white font-extrabold  mb-3">Overview:</h3>
      <p class="text-white text-xl font-bold font-sans mb-3">
        Help organizations optimize cloud resources and manage costs effectively, ensuring better financial performance.
      </p>
      <ul class="pl-5 text-lg font-bold text-white">
        <li>Cloud Cost Management: Manage cloud costs and avoid over-provisioning.</li>
        <li>Resource Optimization: Efficiently use resources based on business needs.</li>
      </ul>
    `,
  },
];

const DevOpsServices = () => {
  const [selectedService, setSelectedService] = useState(devOpsServices[0]);

  const handleTitleClick = (index) => {
    setSelectedService(devOpsServices[index]);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-50">
      {/* Left Section (Titles) */}
      <div className="w-full md:w-1/3 p-6 bg-gradient-to-b from-blue-700 to-blue-600 text-white shadow-md">
        {/* <h2 className="text-3xl font-extrabold mb-8">DevOps Services</h2> */}
        <ul className="space-y-3">
          {devOpsServices.map((item, index) => (
            <li
              key={index}
              onClick={() => handleTitleClick(index)}
              className={`cursor-pointer p-4 rounded-lg text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 ease-in-out ${
                selectedService.title === item.title
                  && "bg-blue-800 text-white"
                  
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section (Image and Description) */}
      <div className="w-full md:w-2/3 relative flex items-center justify-center">
        <div className="relative w-full">
          {/* Fullscreen Image */}
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full h-[70vh]  rounded-md shadow-lg"
          />

          {/* Description Overlay */}
          <div className="absolute bottom-0 w-full bg-gray-900/75 p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {selectedService.title}
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedService.description,
              }}
              className="prose max-w-none text-sm md:text-base text-gray-300 leading-relaxed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOpsServices;