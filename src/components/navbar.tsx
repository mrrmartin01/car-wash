"use client";
import { IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const NavLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-4 w-full flex justify-center mt-8 z-50">
      <nav className="bg-black/80 backdrop-blur-md shadow-lg rounded-full px-4 py-2 flex justify-between items-center gap-8 max-w-xl w-[90%] border border-neutral-500">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-sm md:text-lg text-gray-300 font-bold tracking-tight transition-colors">
            Spade
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="flex gap-2 ml-auto">
            {NavLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="px-4 py-1 text-sm rounded-full text-gray-400 font-medium hover:bg-gradient-to-b hover:from-yellow-500 hover:to-neutral-700 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden block text-gray-200"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <IconX /> : <IconMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[4.5rem] w-[90%] max-w-sm rounded-2xl bg-black/50 backdrop-blur-lg border border-neutral-600 md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 p-4">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block px-4 py-2 text-sm rounded-full text-gray-300 font-medium hover:bg-gradient-to-b hover:from-yellow-500 hover:to-neutral-800 hover:text-white transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
