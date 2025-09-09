import Image from "next/image";
import React from "react";

const Services = () => {
  const rows = [
    [
      {
        title: "Exterior Wash",
        description: "Thorough hand wash to keep your car sparkling clean.",
        imgSrc:
          "https://images.unsplash.com/photo-1594611373247-32d49b8ec68c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RXh0ZXJpb3IlMjBjYXIlMjBXYXNofGVufDB8fDB8fHww",
      },
      {
        title: "Interior Detailing",
        description: "Vacuuming, dusting, and full interior deep cleaning.",
        imgSrc:
          "https://plus.unsplash.com/premium_photo-1663013309657-8b3a2a00849e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV0YWlsaW5nfGVufDB8fDB8fHww",
      },
    ],
    [
      {
        title: "Wax & Polish",
        description: "Protect your paint and restore a showroom shine.",
        imgSrc:
          "https://images.unsplash.com/photo-1660853432237-99a453adcf40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNhciUyMHBvbGlzaGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Tire & Rim Cleaning",
        description: "Deep clean and shine for wheels and rims.",
        imgSrc:
          "https://images.unsplash.com/photo-1708805282683-50a060eba80f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwcG9saXNoaW5nfGVufDB8fDB8fHww",
      },
      {
        title: "Engine Bay Cleaning",
        description: "Safe, professional engine compartment cleaning.",
        imgSrc:
          "https://images.unsplash.com/photo-1676743603171-46338ba7cafc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5naW5lJTIwYmF5fGVufDB8fDB8fHww",
      },
    ],
    [
      {
        title: "Ceramic Coating",
        description: "Long-lasting protection against dirt, scratches, and UV.",
        imgSrc:
          "https://images.unsplash.com/photo-1714434087918-4b9abedef3c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2VyYW1pYyUyMENvYXRpbmd8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Odor Removal",
        description: "Eliminate unwanted smells with ozone treatment.",
        imgSrc:
          "https://images.unsplash.com/photo-1603894963988-9eb3a4577080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fE9kb3IlMjBSZW1vdmFsfGVufDB8fDB8fHww",
      },
      {
        title: "Premium Packages",
        description: "Bundle deals for complete car care at a discount.",
        imgSrc:
          "https://plus.unsplash.com/premium_photo-1681487929886-4c16ad2f2387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fFByZW1pdW0lMjBQYWNrYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Mobile Service",
        description: "We come to you — home or office car wash service.",
        imgSrc:
          "https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9iaWxlJTIwU2VydmljZXxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-10">
          {rows.map((cards, rowIdx) => (
            <div
              key={rowIdx}
              className={`grid grid-cols-1 gap-6 md:grid-cols-${cards.length}`}
            >
              {cards.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({
  title,
  description,
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc: string;
}) => {
  return (
    <div className="group rounded-2xl shadow-white/10 shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl from-pink-500 via-blue-950 to-transparent bg-conic-270 hue-rotate-90">
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={imgSrc}
          alt={title}
          loading="lazy"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-blue-600 mb-2">{title}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
