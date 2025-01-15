import React from "react";

const About = () => {
  return (
    <div>
      {" "}
      <div className="relative bg-gray-900 text-white h-[500px] md:h-[700px]">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt="Background"
            className="opacity-25 absolute inset-0 h-full w-full object-cover"
            src="/src/assets/aboutImg/Hero.jpeg"
            sizes="100vw"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full text-center">
            <h1 className="font-bold text-5xl sm:text-[48px] md:text-[58px] leading-[1.2] mb-0">
              Empowering Innovation, Transforming Futures
            </h1>
          </div>
        </div>
      </div>
      {/* <div> <HeroSection/></div> */}
      <section className="deploy mb-20">
        <div className="container mx-auto px-4">
          {/* Feature Header */}
          <div className="feature-offer mb-12 text-center">
            <h2 className="text-blue-600 mt-10 text-5xl font-extrabold">
              Who we are
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              A team of passionate innovators committed to empowering businesses
              with transformative solutions
            </p>
          </div>

          {/* Horizontal Line */}
          {/* <div className="text-center  my-8">
        <hr className="w-1/4 mx-auto border-t-2 border-blue-600" />
      </div> */}

          {/* Vertical Line */}
          {/* <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 border-l-4 border-blue-600"></div>
      </div> */}

          {/* About Us */}
          <div className="flex flex-wrap justify-between items-center mb-12">
            <div className="w-full lg:w-5/12">
              <div className="img-services text-center lg:text-right mb-6 lg:mb-0">
                <img
                  className="img-fluid mx-auto max-w-full"
                  src="/src/assets/aboutImg/AboutUs.png"
                  alt="About Us Image"
                />
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="description-services">
                <h2 className="text-3xl font-extrabold text-blue-600 mb-4">
                  About Us
                </h2>
                <p className="mb-16 text-black  text-xl md:text-xl">
                  At{" "}
                  <strong className="text-blue-800">
                    DrutSys Technologies
                  </strong>
                  , we are a provider of technology consulting services, Values
                  innovative solutions designed to help businesses harness the
                  power of modern technology to drive growth, optimize
                  operations, and enhance performance. Our team of experienced
                  consultants is dedicated to delivering transformative results
                  that align with your business goals, ensuring that your
                  organization stays competitive in an ever-evolving digital
                  landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="flex flex-wrap justify-between items-center mb-12">
            <div className="w-full lg:w-5/12 order-2 lg:order-1">
              <div className="description-services">
                <h2 className="text-3xl font-extrabold text-blue-600 mb-4">
                  Our Mission
                </h2>
                <p className="text-black  text-xl">
                  Our mission is to empower businesses by providing cutting-edge
                  technology solutions that enhance operational efficiency,
                  foster innovation, and help businesses succeed in the digital
                  world. We collaborate closely with our clients, ensuring our
                  solutions are tailored to their unique needs.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-5/12 order-1 lg:order-2">
              <div className="img-services text-center lg:text-left mb-6 lg:mb-0">
                <img
                  className="img-fluid mx-auto max-w-full"
                  src="/src/assets/aboutImg/Mission.png"
                  alt="Mission"
                />
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="flex flex-wrap justify-between items-center mb-12">
            <div className="w-full lg:w-5/12">
              <div className="img-services text-center lg:text-right mb-6 lg:mb-0">
                <img
                  className="img-fluid mx-auto max-w-full"
                  src="/src/assets/aboutImg/ourvalue.jpg"
                  alt="Our Values"
                />
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="description-services">
                <h2 className="text-3xl font-extrabold text-blue-600 mb-4">
                  Our Values
                </h2>
                <p className="text-black  text-xl">
                  Our values are more than just words on a page. They guide the
                  decisions and behaviors that shape our culture. At DrutSys
                  Technologies, 5 key principles guide everything we do.
                  <br />
                  <br />
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Put people first.</li>
                    <li>Create customer value.</li>
                    <li>Innovate relentlessly.</li>
                    <li>Be sustainable.</li>
                    <li>Come on in!</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full lg:w-5/12 order-2 lg:order-1">
              <div className="description-services">
                <h2 className="text-3xl font-extrabold text-blue-600 mb-4">
                  Our Services
                </h2>
                <p className="text-black  text-xl">
                  At{" "}
                  <strong className="text-blue-800">
                    DrutSys Technologies
                  </strong>
                  , we specialize in modernizing workflows, enhancing
                  operational standards, and simplifying the adoption of
                  cutting-edge DevOps practices. Our expert services ensure
                  seamless cloud integration, optimized delivery pipelines, and
                  advanced collaboration tools, empowering businesses to achieve
                  faster time-to-market and unparalleled reliability.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-5/12 order-1 lg:order-2">
              <div className="img-services text-center lg:text-left mb-6 lg:mb-0">
                <img
                  className="img-fluid mx-auto max-w-full"
                  src="/src/assets/aboutImg/ourservices.png"
                  alt="Our Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
