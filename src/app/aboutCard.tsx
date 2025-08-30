import Image from "next/image";
import React from "react";

type AboutCardTypes = {
  imgSrc: string;
  title: string;
  desc: string;
};

const AboutCard = ({ imgSrc, title, desc }: AboutCardTypes) => {
  return (
    <div
      className="flex flex-col items-center text-center pt-14 
      h-[400px] w-3xs space-y-3 bg-gradient-to-b from-pink-500 
    via-blue-950 to-transparent hover:bg-conic-330 hue-rotate-90 rounded-2xl
    transition-color duration-700"
    >
      <div className="relative h-32 w-32 rounded-full bg-cyan-500">
        <Image
          src={imgSrc}
          alt="Car wash hero image"
          fill
          loading="lazy"
          className="object-cover rounded-full"
        />
      </div>

      <h1 className="text-xl text-yellow-500 font-mono">{title}</h1>
      <p className="text-sm w-10/12 ">{desc}</p>
    </div>
  );
};

export default AboutCard;
