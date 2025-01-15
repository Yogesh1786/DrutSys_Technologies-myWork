import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row justify-between gap-16 py-10 md:py-10 md:px-8 px-3 lg:px-16">
        {/* Text Section */}
        <div className="md:w-[1900px]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2">
            Why Choose DrutSys Technologies for Your Next Project?
          </h2>
          <p className="text-base md:text-lg lg:text-xl mt-4 md:mt-0">
            At DrutSys Technologies, we offer more than just a service—we become
            your trusted partner in achieving success. Our competitive pricing
            is designed to deliver exceptional results while keeping your budget
            in mind. By deeply understanding the market and your business needs,
            we help you reach new heights of success. DrutSys Technologies
            stands out in this area, always prioritizing your business goals. We
            focus on crafting solutions that tackle challenges head-on. Whether
            it’s web development or app development, we bring our expertise and
            innovative approach to every project.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative sm:w-[400px] w-full h-[300px] md:w-[900px] md:h-[349.42px] mx-auto md:mx-0">
          <div className="relative z-10 w-full h-full">
            <img
              alt="DrutSys Technologies: A partner focused on your success with affordable pricing"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 rounded-2xl lg:w-[600px] object-cover"
              src="/src/assets/aboutImg/WhyChoose.webp"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                objectFit: "cover",
                color: "transparent",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
