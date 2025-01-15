

import React from "react";
import FAQAccordion from "../../components/contact/FAQAccordion";

const Contact = () => {
  return (
    <div>
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50">
      {/* Background Image with Transparent Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/src/assets/contact/contact.webp"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-16 pt-20 pb-10 sm:pt-24 sm:pb-16">
        {/* Left Section: Contact Information */}
        <div className="md:w-1/2 text-white space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-6">
            DrutSys Technologies
          </h1>
          <p className="text-xl font-medium">
            Transforming your business with innovative technology solutions.
          </p>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-lg">
              Whether you need help with a specific project or are looking for
              long-term IT consulting, our team is here to assist. Contact
              DrustSys Technologies today to start transforming your business
              through innovative technology solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p className="text-xl font-bold">
              <strong className="text-xl">Address:</strong>
              <br />
              4030 Wake Forest Road STE 349, Raleigh, NC 27609-0010
            </p>
            <p className="text-xl font-bold">
              <strong className="text-xl">Phone:</strong> +1 919-234-5678
            </p>
            <p className="text-xl font-bold">
              <strong className="text-xl">Email:</strong>{" "}
              <a href="mailto:contact@drutsys.com" className="text-blue-500">
                contact@drutsys.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="md:w-1/2 bg-white p-8 md:p-10 shadow-lg rounded-lg max-w-lg w-full">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
              <input
                type="text"
                placeholder="First name*"
                className="border bg-white border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last name*"
                className="border bg-white border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email*"
              className="border bg-white border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone Number*"
              className="border bg-white border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message..."
              className="border bg-white border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white w-full py-3 rounded-full font-semibold transition duration-200 hover:bg-blue-800 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
    </div>
    <div className="max-w-4xl mx-auto mt-16">
              <h1 className="text-4xl font-bold text-black text-center mb-8">Join Our Team</h1>
              <FAQAccordion />
            </div>
    </div>
  );
};

export default Contact;