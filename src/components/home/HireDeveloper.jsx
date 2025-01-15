import React from "react";
import { useNavigate } from "react-router-dom";

const HireDeveloper = () => {
  const navigate = useNavigate();
  const goToContactPage = () => {
    navigate("/contact");
  };

  return (
    <section className="md:mb-32 md:mt-16 mt-7">
      <div className="h-auto md:h-[300px]">
        <div className="flex flex-col gap-20 md:flex-row">
          {/* Text Section */}
          <div className="mb-8 md:mb-0 leading-10">
            <h2 className="text-2xl font-inter text-black md:text-2xl font-semibold mb-4 leading-10 text-center md:text-left">
              "Looking for top developers and designers? Let's build something <br/> great together. Get in touch today!"
            </h2>
            <div className="text-center md:text-left">
              <a href="/contact">
                <button onClick={goToContactPage} className="bg-blue-700 text-white font-semibold p-2 rounded-[5px] w-[220px] mt-5 mx-auto md:mx-0">
                  Hire Top Developers
                </button>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="mb-4">
            <img
              alt="Team working together"
              loading="lazy"
              width="300"
              height="400"
              decoding="async"
              className="w-full hide-at-936 rounded-lg shadow-lg h-[280px] md:h-[330px] md:w-[700px]"
              
              src="/src/assets/home/hireDeveloper.webp"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireDeveloper;
