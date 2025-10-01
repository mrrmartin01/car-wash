"use client";

import Image from "next/image";
import React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Exterior Wash",
      description: "Thorough hand wash to keep your car sparkling clean.",
      imgSrc:
        "https://images.unsplash.com/photo-1594611373247-32d49b8ec68c?w=600&auto=format&fit=crop&q=80",
      height: "h-72",
    },
    {
      title: "Interior Detailing",
      description: "Vacuuming, dusting, and full interior deep cleaning.",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1663013309657-8b3a2a00849e?w=600&auto=format&fit=crop&q=80",
      height: "h-96",
    },
    {
      title: "Wax & Polish",
      description: "Protect your paint and restore a showroom shine.",
      imgSrc:
        "https://images.unsplash.com/photo-1660853432237-99a453adcf40?w=600&auto=format&fit=crop&q=80",
      height: "h-80",
    },
    {
      title: "Tire & Rim Cleaning",
      description: "Deep clean and shine for wheels and rims.",
      imgSrc:
        "https://images.unsplash.com/photo-1708805282683-50a060eba80f?w=600&auto=format&fit=crop&q=80",
      height: "h-64",
    },
    {
      title: "Engine Bay Cleaning",
      description: "Safe, professional engine compartment cleaning.",
      imgSrc:
        "https://images.unsplash.com/photo-1676743603171-46338ba7cafc?w=600&auto=format&fit=crop&q=80",
      height: "h-80",
    },
    {
      title: "Ceramic Coating",
      description: "Long-lasting protection against dirt, scratches, and UV.",
      imgSrc:
        "https://images.unsplash.com/photo-1714434087918-4b9abedef3c6?w=600&auto=format&fit=crop&q=80",
      height: "h-96",
    },
    {
      title: "Odor Removal",
      description: "Eliminate unwanted smells with ozone treatment.",
      imgSrc:
        "https://images.unsplash.com/photo-1603894963988-9eb3a4577080?w=600&auto=format&fit=crop&q=80",
      height: "h-72",
    },
    {
      title: "Premium Packages",
      description: "Bundle deals for complete car care at a discount.",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1681487929886-4c16ad2f2387?w=600&auto=format&fit=crop&q=80",
      height: "h-80",
    },
    {
      title: "Mobile Service",
      description: "We come to you — home or office car wash service.",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?w=600&auto=format&fit=crop&q=80",
      height: "h-72",
    },
  ];

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-8"
          columnClassName="flex flex-col gap-8"
        >
          {services.map((service, idx) => (
            <ServiceCard key={idx} index={idx} {...service} />
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({
  title,
  description,
  imgSrc,
  height,
  index,
}: {
  title: string;
  description: string;
  imgSrc: string;
  height: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 bg-white"
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-500/50 transition-colors duration-500" />

      <div className={`relative w-full ${height} overflow-hidden`}>
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
        />
        {/* Premium glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-700" />

        {/* Floating content */}
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-3 tracking-wide relative inline-block">
            {title}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-500" />
          </h3>
          <p className="text-sm opacity-90 leading-relaxed max-w-sm">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
