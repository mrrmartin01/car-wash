import React from "react";
import Services from "./services";

const ServicesPage = () => {
  return (
    <main className="mt-32">
      <section className="grid grid-col-1 md:grid-cols-3 gap-5 w-full max-w-7xl mx-auto items-center">
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full h-[3px] bg-yellow-500" />
          <div className="w-full h-px bg-gray-500" />
          <div className="w-full h-[3px] bg-yellow-500" />
        </div>
        <h1 className="bg-clip-text font-sans text-transparent bg-gradient-to-t from-yellow-500 to-white text-3xl md:text-[30px] lg:text-[40px] text-center">
          Spade Wash Services
        </h1>
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full h-[3px] bg-yellow-500" />
          <div className="w-full h-px bg-gray-500" />
          <div className="w-full h-[3px] bg-yellow-500" />
        </div>
      </section>

      <div className="mt-5 h-16 w-full flex items-center justify-center border-y border-yellow-600 from-yellow-600/50 via-yellow-950/50 to-yellow-900/50 bg-conic-330 ">
        <h2 className="text-center text-amber-500 text-lg md:text-xl  tracking-wide mono uppercase">
          Come Ace your Car with Spade Car Wash
        </h2>
      </div>

      <section>
        <Services />
      </section>

      <section className="m-[5%]">
        <div className="flex flex-col items-center justify-center text-center py-10 ">
          <h1 className="text-lg md:text-4xl tracking-tighter font-mono text-yellow-500 uppercase">
            Find A Spade Location
          </h1>
          <h2 className="max-w-xl md:text-xl font-sans py-4">
            FInd as down the block to keep your car squicky clean. They say
            we&apos;re popular than Uber in the hood
          </h2>
          <a
            href="/location"
            className="border border-yellow-500 bg-amber-800/30 text-yellow-500 hover:bg-amber-900/80 hover:text-yellow-300 h-auto font-semibold py-2 px-6 rounded-full transition-all duration-300"
          >
            Search Locations
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
