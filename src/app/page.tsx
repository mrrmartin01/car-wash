"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  IconClock,
  IconCloud,
  IconCrown,
  IconLockOpen,
  IconMoneybagHeart,
  IconThumbUpFilled,
  IconWaveSine,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
                  index % 2 !== 0 ? "bg-purple-500" : "bg-cyan-500"
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
                  index % 2 === 0 ? "bg-purple-500" : "bg-cyan-500"
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

      <section className="relative mt-24 w-full h-32 md:h-52 overflow-hidden bg-cyan-200">
        <Image
          src="/map.png"
          alt="Map illustration"
          fill
          className="object-cover"
          priority
        />
      </section>
    </div>
  );
}

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
      <div className="relative h-screen col-span-2">
        <Image
          src="https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Car wash hero image"
          priority
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center" />
      </div>
      <div className="flex flex-col justify-center col-span-1 overflow-hidden">
        <motion.h1
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween", stiffness: 200 }}
          className="text-xl md:text-3xl font-mono font-bold uppercase"
        >
          Fast,Fun,Flawless:
        </motion.h1>
        <motion.h2
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "tween", stiffness: 300 }}
          className="text-2xl text-yellow-500 uppercase"
        >
          Spade Car Wash!
        </motion.h2>

        <motion.p
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "tween", stiffness: 400 }}
          className="mt-5 text-gray-500"
        >
          At Spade Car Wash, we protect one of your most treasured possessions:
          your vehicle. After each Spade Wash, experience the pride of ownership
          as you did the day you took your vehicle off the lot!
        </motion.p>
      </div>
    </div>
  );
};
