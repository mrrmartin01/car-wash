import React from "react";

const footerLinks = {
  company: [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Membership", href: "/purchase-membership" },
  ],
  expertise: [
    { label: "Exterior Wash", href: "/services/#exterior-wash" },
    { label: "Interior Cleaning", href: "/services/#interior-cleaning" },
    { label: "Wax & Polish", href: "/services/#wax-polish" },
    { label: "Engine Detailing", href: "/services/#engine-detailing" },
  ],
};

const contactInfo = [
  {
    label: "Email",
    value: "theophilusmartin@zohomail.com",
    href: "mailto:theophilusmartin@zohomail.com",
  },
  {
    label: "Phone",
    value: "+233 24 879 2459",
    href: "tel:+233248792459",
  },
  {
    label: "X",
    value: "@mrrmartin01",
    href: "https://x.com/mrrmartin01",
  },
  {
    label: "Location",
    value: "Teshie-Accra, Ghana",
  },
];

const FooterSection = ({
  title,
  items,
}: {
  title: string;
  items: { label: string; href?: string; value?: string }[];
}) => (
  <div>
    <h4 className="text-pink-400 font-medium mb-3">{title}</h4>
    <ul className="space-y-2">
      {items.map(({ label, href, value }) => (
        <li key={label}>
          {href ? (
            <a href={href} className="hover:underline">
              {value ?? label}
            </a>
          ) : (
            <span>{value ?? label}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 bg-gradient-to-t from-gray-950 hue-rotate-90 to-black text-sm text-gray-200 px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-pink-400">Spade</h3>
          <p className="mt-2 leading-relaxed">
            Premium car care for a spotless shine. Fast, friendly, and
            professional service every time.
          </p>
        </div>

        {/* Navigation sections */}
        <FooterSection title="Company" items={footerLinks.company} />
        <FooterSection title="Expertise" items={footerLinks.expertise} />
        <FooterSection title="Dev Info" items={contactInfo} />
      </div>

      <div className="mt-12 border-t border-gray-900 pt-6 text-center text-xs text-white/70">
        <p>© {new Date().getFullYear()} Spade Car Wash. All rights reserved.</p>
        <div className="flex items-center justify-center gap-2">
          <h3>Inspiration from:</h3>
          <a
            href="https://gocarwash.com/"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="underline"
          >
            Go Car Wash
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
