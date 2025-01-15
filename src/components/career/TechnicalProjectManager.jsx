// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const TechnicalProjectManager = () => {
//   const [showForm, setShowForm] = useState(false); // State to show the career form
//   const navigate = useNavigate();

//   const handleApplyNow = () => {
//     setShowForm(true); // Show the form when the button is clicked
//   };

//   return (
//     <section className="bg-white py-12 px-6">
//       <div className="container mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
//         <div className="flex justify-between items-center mb-4">
//           <button
//             className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700"
//             onClick={() => navigate("/career")}
//           >
//             Back
//           </button>
//         </div>

//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-semibold text-gray-800">
//             Technical Project Manager
//           </h1>
//           <p className="text-xl text-gray-600 mt-2">US Remote/Hybrid</p>
//         </div>

//         <div className="text-gray-800">
//           <h2 className="text-2xl font-bold mb-4">Job Requirements :</h2>
//           <div className="space-y-4">
//             <h3 className="font-semibold text-xl">
//               Education & Qualifications:
//             </h3>
//             <ul className="list-inside list-disc space-y-2 text-lg">
//               <li>
//                 Bachelor's Degree (or equivalent) in a relevant field such as:
//               </li>
//               <ul className="list-inside list-disc space-y-2">
//                 <li>Computer Science</li>
//                 <li>Engineering (Software, Systems, etc.)</li>
//                 <li>Information Technology</li>
//                 <li>
//                   Business Administration (with a focus on technology or project
//                   management)
//                 </li>
//               </ul>
//               <h3 className="font-semibold text-xl">
//                 Certifications (Preferred) :
//               </h3>
//               <ul className="list-inside list-disc space-y-2">
//                 <li>PMP (Project Management Professional)</li>
//                 <li>Scrum Master (CSM or similar Agile certification)</li>
//                 <li>
//                   PRINCE2 (Professional certifications in project management
//                   frameworks)
//                 </li>
//                 <li>ITIL certification</li>
//               </ul>
//               <h3 className="font-semibold text-xl">Technical Skills :</h3>
//               <ul className="list-inside list-disc space-y-2">
//                 <li>
//                   Familiarity with software development methodologies (e.g.,
//                   Agile, Scrum, Waterfall).
//                 </li>
//                 <li>
//                   Understanding of software development, system architecture, or
//                   hardware (depending on the focus area).
//                 </li>
//                 <li>
//                   Basic knowledge of programming languages (e.g., Python, Java,
//                   C++) can be a plus, depending on the project scope.
//                 </li>
//                 <li>
//                   Familiarity with cloud technologies (AWS, Azure, Google Cloud)
//                   or DevOps practices is often desirable.
//                 </li>
//               </ul>
//             </ul>

//             <h3 className="font-semibold text-2xl">Experience :</h3>
//             <ul className="list-inside list-disc space-y-2 text-lg">
//               <li>
//                 Proven experience in managing technical projects (e.g., software
//                 development, systems integration, IT infrastructure):
//               </li>
//               <ul className="list-inside list-disc space-y-2">
//                 <li>
//                   8+ years of experience as a Technical Project Manager or in a
//                   similar role (e.g., Engineering Project Manager, IT Project
//                   Manager)
//                 </li>
//                 <li>
//                   Hands-on experience leading cross-functional teams (e.g.,
//                   developers, engineers, designers, QA)
//                 </li>
//               </ul>
//             </ul>

//             <h2 className="text-2xl font-bold mb-4">Key Responsibilities :</h2>
//             <ul className="mb-4 list-inside list-disc space-y-2 text-lg">
//               <h3 className="font-semibold text-xl">
//                 Project Planning & Execution :
//               </h3>
//               <ul className="list-inside list-disc space-y-2">
//                 <li>
//                   Develop detailed project plans, including scope, timeline,
//                   resources, budget, and milestones.
//                 </li>
//                 <li>
//                   Monitor and control project execution to ensure successful
//                   delivery.
//                 </li>
//                 <li>
//                   Identify and manage project risks, dependencies, and issues.
//                 </li>
//                 <li>
//                   Ensure quality and compliance standards are met throughout the
//                   project lifecycle.
//                 </li>
//               </ul>
//               <h3 className="font-semibold text-xl">
//                 Stakeholder Management :
//               </h3>
//               <ul className="list-inside list-disc space-y-2">
//                 <li>
//                   Collaborate with internal teams (e.g., engineering, QA,
//                   marketing, design) and external stakeholders (e.g., clients,
//                   vendors) to align on goals and deliverables.
//                 </li>
//                 <li>
//                   Report on project progress, risks, and any changes to
//                   timelines or resources to senior management and clients.
//                 </li>
//               </ul>
//               <h3 className="font-semibold text-xl">Resource Management :</h3>
//               <ul className="list-inside list-disc space-y-2">
//                 <li>
//                   Ensure that team members have the resources and support they
//                   need to meet project goals.
//                 </li>
//                 <li>
//                   Manage project budgets and ensure resources are allocated
//                   efficiently.
//                 </li>
//                 <li>Balance priorities, scope, and resources effectively.</li>
//               </ul>
//               <h3 className="font-semibold text-xl">Risk Management :</h3>
//               <ul className="list-inside list-disc space-y-2">
//                 <li>
//                   Identify potential risks early in the project lifecycle and
//                   implement mitigation strategies.
//                 </li>
//                 <li>
//                   Proactively address issues that could impact the project
//                   timeline or quality.
//                 </li>
//               </ul>
//               <h3 className="font-semibold text-xl">
//                 Quality Assurance & Delivery :
//               </h3>
//               <ul className="list-inside list-disc space-y-2">
//                 <li>
//                   Ensure that the technical deliverables meet the defined
//                   quality standards.
//                 </li>
//                 <li>Perform or coordinate testing and review processes.</li>
//               </ul>
//               <h3 className="font-semibold text-xl">
//                 Documentation & Reporting :
//               </h3>
//               <ul className="list-inside list-disc space-y-2">
//                 <li>
//                   Maintain detailed documentation of project progress,
//                   decisions, and outcomes.
//                 </li>
//                 <li>
//                   Ensure that proper project records are maintained for auditing
//                   and compliance purposes
//                 </li>
//                 <li>
//                   Provide detailed reports and updates to senior leadership on
//                   project health.
//                 </li>
//               </ul>
//             </ul>

//             <h2 className="text-2xl font-bold mb-4">Key Success Factors :</h2>
//             <ul className="mb-4 list-inside list-disc space-y-2 text-lg">
//               <li>Ability to deliver projects on time and within scope.</li>
//               <li>Successful management of stakeholder expectations.</li>
//               <li>Efficient team coordination and motivation.</li>
//               <li>Proactive risk management and issue resolution.</li>
//             </ul>

//             <h3 className="font-bold text-2xl">Salary :</h3>
//             <p className="text-lg">
//               Salary can vary greatly depending on experience: $85,000 to
//               $150,000 annually
//             </p>

//             <button
//               className="mt-4 px-6 py-2 text-xl bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
//               onClick={handleApplyNow}
//             >
//               Apply Now
//             </button>

//             {showForm && (
//               <div className="bg-gray-50 p-8 rounded-lg shadow-lg mt-8 w-3/5 mx-auto">
//                 <h2 className="text-3xl font-semibold text-gray-800 mb-6">
//                   Apply for Technical Project Manager
//                 </h2>
//                 <form className="space-y-6">
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">
//                       Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full border border-gray-300 rounded-lg p-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">
//                       Email <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       className="w-full border border-gray-300 rounded-lg p-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">
//                       Phone <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="tel"
//                       className="w-full border border-gray-300 rounded-lg p-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">
//                       Attach CV <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="file"
//                       accept=".pdf,.doc,.docx"
//                       className="w-full border border-gray-300 rounded-lg p-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">
//                       Message <span className="text-red-500">*</span>
//                     </label>
//                     <textarea
//                       rows="4"
//                       className="w-full border border-gray-300 rounded-lg p-2"
//                       required
//                     ></textarea>
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-500"
//                   >
//                     Submit Now
//                   </button>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechnicalProjectManager;

// Here is the code with advance css properties-

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TechnicalProjectManager = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleApplyNow = () => {
    setShowForm(true);
  };

  return (
    <section className="bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 py-12 px-6">
      <div className="container mx-auto bg-white p-8 rounded-xl shadow-lg">
        {/* Back Button */}
        <div className="flex justify-between items-center mb-6 mt-5">
          <button
            className="px-6 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition duration-300"
            onClick={() => navigate("/career")}
          >
            Back
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Technical Project Manager
          </h1>
          <p className="text-lg text-gray-500 mt-2">US Remote/Hybrid</p>
        </div>

        {/* Job Details */}
        <div className="text-gray-700">
          <h2 className="text-3xl font-extrabold mb-6 text-teal-600">
            Job Requirements
          </h2>

          <div className="space-y-6">
            {/* Education & Qualifications */}
            <div>
              <h3 className="font-semibold text-xl mb-2 text-cyan-600">
                Education & Qualifications
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Bachelor's Degree in a relevant field:</li>
                <ul className="ml-5 list-decimal">
                  <li>Computer Science</li>
                  <li>Engineering (Software, System, etc.)</li>
                  <li>Information Technology</li>
                  <li>Business Administrator</li>
                </ul>
                <li>
                  Preferred Certifications:
                  <ul className="ml-5 list-decimal">
                    <li>PMP</li>
                    <li>Scrum Master</li>
                    <li>ITIL Certification</li>
                    <li>PRINCE2</li>
                  </ul>
                </li>
                <li>
                  Technical Skills:
                  <ul className="ml-5 list-decimal">
                    <li>
                      Familiarity with software development methodologies (e.g.,
                      Agile, Scrum, Waterfall).
                    </li>
                    <li>
                      Understanding of software development, system
                      architecture, or hardware (depending on the focus area).
                    </li>
                    <li>
                      Basic knowledge of programming languages (e.g., Python,
                      Java, C++) can be a plus, depending on the project scope.
                    </li>
                    <li>
                      Familiarity with cloud technologies (AWS, Azure, Google
                      Cloud) or DevOps practices is often desirable.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <h3 className="text-2xl font-bold text-teal-600 mb-4">
              Experience
            </h3>
            <ul className="list-inside list-disc space-y-2 text-lg">
              <li>
                Proven experience in managing technical projects (e.g., software
                development, systems integration, IT infrastructure):
              </li>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  8+ years of experience as a Technical Project Manager or in a
                  similar role (e.g., Engineering Project Manager, IT Project
                  Manager)
                </li>
                <li>
                  Hands-on experience leading cross-functional teams (e.g.,
                  developers, engineers, designers, QA)
                </li>
              </ul>
            </ul>

            {/* Responsibilities */}
            <div>
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                Key Responsibilities
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Plan and execute technical projects.</li>
                <li>Manage teams and allocate resources efficiently.</li>
                <li>
                  Ensure quality deliverables and manage risks effectively.
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-teal-600 mb-4">
              Key Success Factors
            </h3>
            <ul className="mb-4 list-inside list-disc space-y-2 text-lg">
              <li>Ability to deliver projects on time and within scope.</li>
              <li>Successful management of stakeholder expectations.</li>
              <li>Efficient team coordination and motivation.</li>
              <li>Proactive risk management and issue resolution.</li>
            </ul>

            {/* Salary */}
            <div>
              <h3 className="font-bold text-xl text-teal-600">Salary</h3>
              <p className="text-lg">$85,000 to $150,000 annually</p>
            </div>

            {/* Apply Button */}
            <button
              className="mt-6 px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xl font-bold rounded-lg shadow-md hover:opacity-90 transform hover:scale-105 transition duration-300"
              onClick={handleApplyNow}
            >
              Apply Now
            </button>

            {/* Form */}
            {showForm && (
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mt-10 animate-fade-in">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                  Apply for Technical Project Manager
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-600 font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 font-medium mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 font-medium mb-2">
                      Attach CV <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows="4"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg shadow-md font-semibold hover:opacity-90 transition duration-300"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProjectManager;
