// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const FullStackDeveloper = () => {
//   const [showForm, setShowForm] = useState(false);
//   const navigate = useNavigate();

//   const handleApplyNow = () => {
//     setShowForm(true); // Show the career form
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
//             Full Stack Developer
//           </h1>
//           <p className="text-xl text-gray-600 mt-2">US Remote/Hybrid</p>
//         </div>

//         <div className="text-gray-800">
//           <h2 className="text-2xl font-bold mb-4">Job Description :</h2>
//           <p className="mb-4 text-lg">
//             As a Full Stack Developer, you will be responsible for designing,
//             developing, and maintaining both front-end and back-end solutions
//             for our web applications. You'll work closely with product managers,
//             designers, and other developers to deliver high-quality features
//             that meet both business needs and technical requirements.
//           </p>
//           <h2 className="text-2xl font-bold mb-4">Key Responsibilities :</h2>
//           <ul className="mb-4 list-inside list-disc space-y-2 text-lg">
//             <li>
//               Develop and maintain web applications across the full stack,
//               including front-end and back-end systems.
//             </li>
//             <li>
//               Work with modern technologies such as React, Angular, Node.js,
//               Express, etc., Backend tech stack: Python, Ruby, Java, JavaScript
//               (Node.js), etc., Databases: MySQL, MongoDB, PostgreSQL, etc., and
//               Cloud: AWS, Azure, Google Cloud, etc.
//             </li>
//             <li>
//               Write clean, scalable, and efficient code, following best
//               practices in design and development.
//             </li>
//             <li>
//               Collaborate with cross-functional teams to deliver high-quality
//               software that meets customer needs and deadlines.
//             </li>
//             <li>
//               Participate in code reviews to maintain code quality and share
//               knowledge with peers.
//             </li>
//             <li>
//               Work on bug fixes, updates, and enhancements to existing
//               applications.
//             </li>
//             <li>
//               Optimize application performance for speed, scalability, and
//               efficiency.
//             </li>
//             <li>
//               Stay up to date with emerging trends and technologies in web
//               development.
//             </li>
//           </ul>
//           <h2 className="text-2xl font-bold mb-4">
//             Required Skills and Qualifications :
//           </h2>
//           <ul className="mb-4 list-inside list-disc space-y-2 text-lg">
//             <li>
//               3+ years of full-stack development experience, preferably in a
//               SaaS or similar environment.
//             </li>
//             <li>
//               Proficiency in front-end technologies such as HTML, CSS,
//               JavaScript (ES6+), and at least one modern front-end framework
//               (React, Angular, Vue.js, etc.).
//             </li>
//             <li>
//               Strong experience with server-side languages like Node.js, Python,
//               Java, Ruby, or PHP.
//             </li>
//             <li>Experience with databases (SQL and NoSQL).</li>
//             <li>Familiarity with version control systems, especially Git.</li>
//             <li>
//               Experience with RESTful APIs, WebSockets, and other methods for
//               communication between front-end and back-end.
//             </li>
//             <li>
//               Understanding of cloud platforms (AWS, Google Cloud, Azure, etc.)
//               and CI/CD pipelines.
//             </li>
//             <li>Strong problem-solving skills and attention to detail.</li>
//             <li>
//               Ability to write automated tests (unit, integration, and
//               end-to-end tests).
//             </li>
//             <li>
//               Excellent communication skills and the ability to collaborate
//               effectively in a remote team.
//             </li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-4">Preferred Skills :</h2>
//           <ul className="mb-4 list-inside list-disc space-y-2 text-lg">
//             <li>Experience with microservices architecture.</li>
//             <li>
//               Familiarity with Docker and Kubernetes for containerization and
//               orchestration.
//             </li>
//             <li>Experience with GraphQL or gRPC.</li>
//             <li>
//               Familiarity with DevOps practices and infrastructure-as-code
//               (Terraform, Ansible, etc.).
//             </li>
//             <li>Knowledge of security best practices in web development.</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-4">Salary :</h2>
//           <p className="text-lg mb-8">
//             Salary can vary greatly depending on experience: $85,000 to $150,000
//             annually.
//           </p>

//           <button
//             className="mt-4 px-6 py-2 text-xl bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
//             onClick={handleApplyNow}
//           >
//             Apply Now
//           </button>

//           {showForm && (
//             <div className="bg-gray-50 p-8 rounded-lg shadow-lg mt-8 w-3/5 mx-auto">
//               <h2 className="text-3xl font-semibold text-gray-800 mb-6">
//                 Apply for Full Stack Developer
//               </h2>
//               <form className="space-y-6">
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Email <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Phone <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Attach CV <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="file"
//                     accept=".pdf,.doc,.docx"
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Message <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     rows="4"
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     required
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-500"
//                 >
//                   Submit Now
//                 </button>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FullStackDeveloper;

// Here is the code with advance css properties-

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FullStackDeveloper = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleApplyNow = () => {
    setShowForm(true); // Show the career form
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 via-teal-50 to-cyan-50 py-12 px-6">
      <div className="container mx-auto bg-white p-8 rounded-xl shadow-lg">
        {/* Back Button */}
        <div className="flex justify-between items-center mb-6 mt-5">
          <button
            className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:opacity-90 transition duration-300"
            onClick={() => navigate("/career")}
          >
            Back
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Full Stack Developer
          </h1>
          <p className="text-lg text-gray-600 mt-2">US Remote/Hybrid</p>
        </div>

        {/* Job Description */}
        <div className="text-gray-800">
          <h2 className="text-3xl font-extrabold mb-6 text-teal-600">
            Job Description
          </h2>
          <p className="mb-6 text-lg">
            As a Full Stack Developer, you will be responsible for designing,
            developing, and maintaining both front-end and back-end solutions
            for our web applications. You'll work closely with product managers,
            designers, and other developers to deliver high-quality features
            that meet both business needs and technical requirements.
          </p>

          {/* Responsibilities */}
          <h2 className="text-3xl font-extrabold mb-6 text-teal-600">
            Key Responsibilities
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-4 text-lg">
            <li>
              Develop and maintain web applications across the full stack,
              including front-end and back-end systems.
            </li>
            <li>
              Work with modern technologies such as React, Angular, Node.js,
              Express, etc., Backend tech stack: Python, Ruby, Java, JavaScript
              (Node.js), etc., Databases: MySQL, MongoDB, PostgreSQL, etc., and
              Cloud: AWS, Azure, Google Cloud, etc.
            </li>
            <li>
              Write clean, scalable, and efficient code following best
              practices.
            </li>
            <li>
              Collaborate with cross-functional teams to deliver high-quality
              software on deadlines.
            </li>
            <li>
              Participate in code reviews to maintain code quality and mentor
              peers.
            </li>
            <li>
              Work on bug fixes, updates, and enhancements to existing
              applications.
            </li>
            <li>
              Optimize application performance for speed, scalability, and
              efficiency.
            </li>
            <li>
              Stay up to date with emerging trends and technologies in web
              development.
            </li>
          </ul>

          {/* Required Skills */}
          <h2 className="text-3xl font-extrabold mb-6 text-teal-600">
            Required Skills and Qualifications
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-4 text-lg">
            <li>
              3+ years of full-stack development experience, preferably in a
              SaaS or similar environment.
            </li>
            <li>
              Proficiency in front-end technologies such as HTML, CSS,
              JavaScript (ES6+), and at least one modern front-end framework
              (React, Angular, Vue.js, etc.).
            </li>
            <li>
              Strong experience with server-side languages like Node.js, Python,
              Java, Ruby, or PHP.
            </li>
            <li>
              Experience with back-end technologies like Node.js or Python.
            </li>
            <li>Understanding of databases (SQL and NoSQL).</li>
            <li>
              Familiarity with cloud platforms (AWS, Google Cloud, Azure, etc.).
            </li>
            <li>Strong problem-solving skills and attention to detail.</li>
          </ul>

          {/* Salary */}
          <h2 className="text-3xl font-extrabold mb-6 text-teal-600">Salary</h2>
          <p className="text-lg">$85,000 to $150,000 annually</p>

          {/* Apply Button */}
          <button
            className="mt-8 px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:opacity-90 transition duration-300"
            onClick={handleApplyNow}
          >
            Apply Now
          </button>

          {/* Form */}
          {showForm && (
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg mt-8 animate-fade-in w-full sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Apply for Full Stack Developer
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
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
                  <label className="block text-gray-700 font-medium mb-2">
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
    </section>
  );
};

export default FullStackDeveloper;
