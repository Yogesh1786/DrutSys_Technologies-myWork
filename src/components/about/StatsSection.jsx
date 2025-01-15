import React, { useEffect, useState } from "react";

const StatsSection = () => {
  const [stats, setStats] = useState({ clients: 0, countries: 0, products: 0 });

  useEffect(() => {
    const targets = { clients: 90, countries: 70, products: 35 };
    const duration = 2000; // Animation duration in milliseconds
    const steps = 60; // Number of animation steps
    const increment = {
      clients: targets.clients / steps,
      countries: targets.countries / steps,
      products: targets.products / steps,
    };

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setStats((prevStats) => ({
        clients: Math.min(
          prevStats.clients + increment.clients,
          targets.clients
        ),
        countries: Math.min(
          prevStats.countries + increment.countries,
          targets.countries
        ),
        products: Math.min(
          prevStats.products + increment.products,
          targets.products
        ),
      }));

      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full bg-blue-600 py-8 overflow-hidden">
      <div className="w-full px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
          <div className="text-center text-white">
            <div className="text-[50px] font-medium leading-[40px] font-inter mb-2">
              <span>{Math.round(stats.clients)}+</span>
            </div>
            <div className="text-[30px] font-medium leading-[40px] font-inter">
              Clients
            </div>
          </div>
          <div className="text-center text-white">
            <div className="text-[50px] font-medium leading-[40px] font-inter mb-2">
              <span>{Math.round(stats.countries)}+</span>
            </div>
            <div className="text-[30px] font-medium leading-[40px] font-inter">
              Countries
            </div>
          </div>
          <div className="text-center text-white">
            <div className="text-[50px] font-medium leading-[40px] font-inter mb-2">
              <span>{Math.round(stats.products)}+</span>
            </div>
            <div className="text-[30px] font-medium leading-[40px] font-inter">
              Products
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
