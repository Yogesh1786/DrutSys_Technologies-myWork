import { useState } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Where can I share my resume?",
      answer:
        "You can share your updated resume with our email address- careers@drutsys.com.",
    },
    {
      question: "Is it possible to get another interview opportunity?",
      answer:
        "Yes, we are happy to offer another interview opportunity. Candidates may schedule a follow-up interview after the timeframe specified by the HR.",
    },
    {
      question: "How can I stay updated on future job opportunities?",
      answer:
        "Please follow the career listing section and LinkedIn profile to stay informed about future job opportunities.",
    },
    {
      question:
        "What type of project will I work on after joining the company?",
      answer:
        "It depends on the candidate’s skill set and expertise; the candidate will be assigned to the process that aligns with their interest and capabilities.",
    },
    {
      question:
        "What kind of support does the company provide to new or junior developers?",
      answer:
        "We provide comprehensive mentorship support and essential training sessions for both professional and interpersonal skills that help new talents to succeed.",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-indigo-700">
            Frequently Asked Questions
          </h2>
          <p className="text-lg mt-4 text-gray-600">
            Get the answers to some common questions from our potential
            candidates.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-indigo-50"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-medium text-indigo-800">
                  {faq.question}
                </h3>
                <span
                  className={`transform transition-all duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
