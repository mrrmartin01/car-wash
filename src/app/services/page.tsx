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

      <section className="mt-20 m-[5%]">
        <div className="flex md:flex-row flex-col items-center justify-center text-center py-10 ">
          <h2 className="max-w-sm md:text-lg font-sans py-4 text-left text-gray-400">
            FInd as down the block to keep your car squicky clean. They say
            we&apos;re popular than Uber in the hood
          </h2>
          <div className="w-full max-w-4xl flex-1">
            <form className="relative flex items-center">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
                className="w-full h-12 rounded-full pl-5 pr-28 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm"
              />
              <button
                type="submit"
                className="font-semibold absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 rounded-full bg-gradient-to-r from-yellow-500 to-neutral-300 text-gray-900 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
