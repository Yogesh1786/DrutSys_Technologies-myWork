import React from "react";

const AboutSection = () => {
  return (
    <div className="md:py-10 py-6 px-2 md:px-10">
      <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-10">
        {/* Text Section */}
        <div className="flex-1 w-full py- md:py-16 px-2">
          <h2 className="text-blue-600 font-extrabold text-5xl md:text-[35px] leading-tight md:leading-[45px] mb-4">
            About DrutSys Technologies
          </h2>
          <p className="font-semibold text-black text-3xl p-2 xl:p-0 md:text-lg leading-7 md:leading-[36px]">
            At <strong className="text-blue-800">DrutSys Technologies</strong>,
            we believe that technology is a key driver of business success. By
            partnering with us, you gain a trusted advisor who will help you
            navigate the complexities of modern IT solutions and achieve your
            business objectives.
          </p>
          <p className="font-semibold text-black text-3xl p-2 xl:p-0 md:text-lg leading-7 md:leading-[36px] mt-6">
            Bless us with the opportunity to serve and build the future
            together.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex flex-1 justify-center md:justify-start mb-6 md:mb-0">
          <div className="w-full max-w-[216px] md:max-w-none">
            <img
              alt="about"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              src="/src/assets/home/AboutHome.webp"
              style={{ color: "transparent", maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
