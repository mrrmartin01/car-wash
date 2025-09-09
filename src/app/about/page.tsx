import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <section className="mt-16 relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover saturate-150 sepia-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/seaside.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black/60 to-neutral-950" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-sm ">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-700 to-white text-4xl md:text-6xl lg:text-7xl font-bold mix-blend-difference text-center">
              Wash Services
            </h1>
            <p className="mt-6 text-md md:text-lg text-gray-300 leading-tight">
              Spade Car Wash makes your car wash experience better for your
              vehicle and the environment by championing the newest technology
              and services in the industry.
            </p>
            <div className="mt-6">
              <a
                href={"#about"}
                className="px-6 py-3 text-lg bg-yellow-500 hover:bg-yellow-700 transform-color duration-500 rounded-2xl"
              >
                View more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Text Content */}
        <div className="text-gray-400">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-500 mb-6">
            Who We Are
          </h2>
          <p className="leading-relaxed mb-4">
            At Spade Car Wash, we believe every car deserves to shine like new.
            With years of experience in professional detailing, we combine the
            latest technology with eco-friendly products to give your vehicle
            the care it deserves.
          </p>
          <p className="leading-relaxed">
            Whether you&apos;re here for a quick exterior wash, full detailing,
            or protective ceramic coating, our team ensures top-quality service
            with a personal touch. We&apos;re passionate about making your car
            look its absolute best.
          </p>
        </div>

        {/* Image Content */}
        <div className="relative w-full h-72 md:h-[40rem] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1647604466973-7ff5f4b82dec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwUG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
            alt="Professional car wash team"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-6 rounded-xl shadow-sm shadow-gray-700 border-t border-gray-700  hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              To deliver the best car wash experience with quality, convenience,
              and care at the heart of everything we do.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-sm shadow-gray-700 border-t border-gray-700 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">
              Eco-Friendly
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We use water-saving techniques and biodegradable products to
              protect your car and the environment.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-sm shadow-gray-700 border-t border-gray-700 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">
              Customer First
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your satisfaction is our priority. We aim to make every visit
              simple, fast, and enjoyable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
