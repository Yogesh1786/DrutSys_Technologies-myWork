import React from "react";

const Business = () => {
  return (
    <div className="max-w-full xl:px-16 px-2">
      <section className="py-8 md:py-16 md:px-10 xl:px-0 mt-5 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex flex-col sm:flex-row items-center w-full justify-center gap-4">
            <div className="mb-4 md:mb-0">
              <img
                alt="image1"
                loading="lazy"
                width="324"
                height="333"
                decoding="async"
                className="w-[290px] h-[310px] md:w-[280px] md:h-[300px] xl:w-[340px] rounded-md object-cover"
                src="/src/assets/home/BusinessLeft.webp"
              />
            </div>
            <div>
              <div className="mb-4 md:mb-1">
                <img
                  alt="image2"
                  loading="lazy"
                  width="325"
                  height="292"
                  decoding="async"
                  className="w-[310px] h-[180px] md:w-[280px] md:h-[280px] xl:w-[340px] rounded-md object-cover"
                  src="/src/assets/home/BusinessRightTop.webp"
                />
              </div>
              <div>
                <img
                  alt="image3"
                  loading="lazy"
                  width="325"
                  height="132"
                  decoding="async"
                  className="w-[280px] h-[180px] md:w-[280px] md:h-[100px] xl:w-[350px] rounded-md object-cover"
                  src="/src/assets/home/BusinessRightBottom.webp"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start w-full relative">
            <div className="text-center md:text-left">
              <h2 className="text-blue-600 font-bold text-3xl md:text-[35px] leading-tight md:leading-[45px] mb-4">
                We Bring Maximum value to your business
              </h2>
              <p className="font-medium text-black text-2xl p-2 xl:p-0 md:text-lg leading-7 md:leading-[36px]">
                DrutSys Technologies is a forward-thinking technology company
                dedicated to empowering businesses by providing innovative
                solutions. Our focus is on helping you grow, optimize, and
                succeed in today's digital landscape. We create impactful
                solutions that enable you to reach potential customers, engage
                them with advanced technology, and see your business achieve its
                true potential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
