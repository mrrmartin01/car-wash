"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  IconClock,
  IconCloud,
  IconCrown,
  IconLockOpen,
  IconMoneybagHeart,
  IconSpade,
  IconThumbUpFilled,
  IconWaveSine,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SpadeCarWashLogo from "@/components/spadelogo";
import AboutCard from "./aboutCard";

export default function Home() {
  return (
    <div className="">
      <Hero />

      <section className="mt-20 mx-auto max-w-6xl w-full  text-center">
        <h1 className="text-3xl font-bold font-mono text-slate-300">
          Keep Your Car Shiny, All The Time!
        </h1>
        <h2 className="mt-2 text-lg font-sans text-gray-500">
          Wash As Many Times As You Like At Any of Our Spade Car Wash Locations,
          Nationwide.
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: IconLockOpen,
              title: "Unlimited Washes",
              description: "Wash as often as you want at any Spade location",
            },
            {
              icon: IconCrown,
              title: "VIP Access",
              description:
                "Experience exclusive care with dedicated lanes to skip the line.",
            },
            {
              icon: IconCloud,
              title: "Weather-Proof Shine",
              description:
                "Wash after rain or dust for a bright finish and choose the Spade Big! wash for fewer clinging bugs.",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="flex items-start gap-6 rounded-2xl shadow-sm transition hover:shadow-lg"
            >
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-full shrink-0",
                  index % 2 !== 0 ? "bg-yellow-500" : "bg-cyan-500"
                )}
              >
                <Icon className="h-7 w-7" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-semibold text-gray-400">{title}</h3>
                <p className="mt-1 text-sm text-gray-500">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: IconMoneybagHeart,
              title: "Save More",
              description: "Wash a second time per month and save money.",
            },
            {
              icon: IconClock,
              title: "Car Longevity",
              description: "Washing frequently prolongs the life of your car.",
            },
            {
              icon: IconThumbUpFilled,
              title: "Safety Assurance",
              description: "Keep features and cameras clear and clean.",
            },
            {
              icon: IconWaveSine,
              title: "Flexibility",
              description: "No long-term commitment.",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="flex items-start gap-6 rounded-2xl shadow-sm transition hover:shadow-lg"
            >
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-full shrink-0",
                  index % 2 === 0 ? "bg-yellow-500" : "bg-cyan-500"
                )}
              >
                <Icon className="h-7 w-7" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-semibold text-gray-400">{title}</h3>
                <p className="mt-1 text-sm text-gray-500">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Link
            href={"/purchase-membership"}
            className="px-4 py-2 text-lg bg-yellow-500 hover:bg-yellow-700 transform-color duration-500 rounded-2xl"
          >
            Puchase a membership
          </Link>
        </div>
      </section>

      <section className="relative mt-24 w-full h-32 md:h-[80vh] overflow-hidden bg-cyan-200">
        <Image
          src="https://images.unsplash.com/photo-1506719040632-7d586470c936?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzdCUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Map illustration"
          fill
          className="object-cover hue-rotate-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black/60 to-neutral-950" />
      </section>

      <section className="mt-24 w-[95%] max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="text-left space-y-2">
            <motion.h1
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "tween", stiffness: 200 }}
              className="text-xl md:text-3xl font-sans font-bold uppercase"
            >
              About Spade Car Wash
            </motion.h1>
            <motion.h2
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, type: "tween", stiffness: 300 }}
              className="text-lg md:text-xl text-yellow-500 font-mono uppercase"
            >
              YOUR LOCAL CAR WASH EXPERTS!
            </motion.h2>
            <motion.p
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "tween", stiffness: 400 }}
              className="mt-5 text-gray-400 font-mono"
            >
              Welcome to Spade Car Wash—where we're crazy about cleanliness and
              serious about shine! Conveniently scattered throughout your area,
              finding a Spade Car Wash is as easy as spotting rainbows after a
              storm. We're your number one stop for a ride that gleams and
              beams. Whether you need a quick splash or the complete armor
              protection treatment, our modern facilities and top quality ensure
              your vehicle dazzles on departure—every single time.
            </motion.p>
          </div>
          <div className="flex flex-col items-start justify-center text-left max-w-sm p-5  mx-auto space-y-4 bg-gradient-to-b rounded-t-3xl from-cyan-950 to-transparent">
            <h2 className="text-lg md:text-xl underline-offset-2 decoration-wavy underline">
              Find a Location
            </h2>
            <span className="leading-tight text-sm text-gray-300">
              We&apos;re always in the hood, with many convenient new locations.
              Find your nearest Spade Car Wash here!
            </span>
            <div className="mt-2">
              <a
                href="/location"
                className="bg-yellow-500 font-semibold px-4 py-2 rounded-md shadow-md shadow-gray-500 text-gray-50 hover:text-yellow-500 hover:bg-gray-50 transition-colors duration-700"
              >
                View all locations
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[5%]">
        <SpadeCarWashLogo />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl m-auto ">
          <h1 className="text-xl md:text-7xl tracking-tighter ">
            Why Choose <br />
            <span className="text-yellow-500 font-sans">Spade Car Wash?</span>
          </h1>
          <div className="relative ">
            <Image
              src="/about.png"
              alt="Car wash hero image"
              fill
              loading="lazy"
              className="object-cover rounded-l-full"
            />
            <div className="absolute inset-0 backdrop-hue-rotate-90" />
          </div>
        </div>
      </section>

      <section className="mt-[10%]">
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl m-auto">
          {[
            {
              imgSrc:
                "https://images.unsplash.com/photo-1753183700294-a2dbeb81e168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3NlfGVufDB8fDB8fHww",
              title: "Conveniently Close",
              desc: "We're just around the corner, making clean cars a breeze.",
            },
            {
              imgSrc:
                "https://plus.unsplash.com/premium_photo-1720767867216-6e91cce51244?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D",
              title: "Expert Care",
              desc: "Each car gets the royal treatment because we're obsessed with details.",
            },
            {
              imgSrc:
                "https://images.unsplash.com/photo-1753295640202-bd76e1b82afa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D",
              title: "Eco-Friendly",
              desc: "Our nifty Water Reclaim System recycles water, slashing our eco-footprint and saving the planet, one car wash at a time!",
            },
            {
              imgSrc:
                "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tbXVuaXR5fGVufDB8fDB8fHww",
              title: "Community Cheers",
              desc: "We're part of your local scene, actively enriching our shared home.",
            },
          ].map(({ imgSrc, title, desc }, index) => (
            <div
              key={index}
              className="flex items-start gap-6 rounded-2xl shadow-sm transition hover:shadow-lg"
            >
              <AboutCard imgSrc={imgSrc} title={title} desc={desc} />
            </div>
          ))}
        </div>
      </section>

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
              <Link
                href={"/purchase-membership"}
                className="px-6 py-3 text-lg bg-yellow-500 hover:bg-yellow-700 transform-color duration-500 rounded-2xl"
              >
                Puchase a membership
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="relative h-screen">
            <Image
              src="https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Car wash hero image"
              priority
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-transparent" />
          </div>
          <div className="flex flex-col justify-center overflow-hidden">
            <motion.h2
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, type: "tween", stiffness: 300 }}
              className="text-xl md:text-6xl tracking-tighter text-yellow-500 uppercase"
            >
              Spade Car Wash
            </motion.h2>
            <motion.h1
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "tween", stiffness: 200 }}
              className="w-full max-w-sm text-xl md:text-3xl font-mono font-bold uppercase"
            >
              is home to your car wash professionals
            </motion.h1>

            <motion.p
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "tween", stiffness: 400 }}
              className="w-full max-w-lg mt-5 text-lg md:text-xl text-gray-500"
            >
              Spade Car Wash delivers superior washes performed by a caring team
              of people who appreciate the value of your time. We adhere to the
              highest standards of our industry, using only environmentally
              friendly products. To offer this level of consistent service, each
              of our car wash professionals is committed to ongoing training.
              Our commitment to continual learning ensures that Spade Car Wash
              customers in each of our markets enjoy best-of-industry standards
              and practices. If this sounds like the level of care and service
              that you&apos;d like to experience at your car wash, then visit
              today and join the Spade Car Wash family!
            </motion.p>
          </div>
        </div>
      </section>

      <section className="my-[5%]">
        <div className="flex flex-col items-center justify-center text-center py-10 ">
          <h1 className="text-lg md:text-4xl tracking-tighter font-mono text-yellow-500 uppercase">
            Find A Spade Location
          </h1>
          <h2 className="max-w-xl md:text-xl font-sans py-4">
            We&apos;re always around the hood, with many convenient new
            locations. Find your nearest Spade Car Wash here!
          </h2>
          <div className="w-full max-w-2xl">
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
    </div>
  );
}

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] md:h-screen md:col-span-2">
        <Image
          src="/hero.webp"
          alt="Car wash hero image"
          priority
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 md:px-6 lg:px-10 py-12 md:py-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white"
        >
          Fast, Fun, Flawless
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400"
        >
          Spade Car Wash
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-md"
        >
          At Spade Car Wash, we protect one of your most treasured possessions:{" "}
          your vehicle. After each wash, experience the pride of ownership like
          the day you drove it off the lot.
        </motion.p>
      </div>
    </section>
  );
};
