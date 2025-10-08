"use client";
import { cn } from "@/lib/utils";
import { IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Membership", href: "/purchase-membership" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 z-[9999] transition-all duration-300",
        isScrolled
          ? "left-1/2 -translate-x-1/2 top-4 max-w-xl w-[90%] border border-yellow-500 rounded-full bg-black/70 backdrop-blur-md shadow-md"
          : "left-0 w-full bg-zinc-900 border border-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-gray-100 hover:text-yellow-400 transition-colors">
            Spade
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-1">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="px-3 py-1 text-sm font-medium text-gray-300 rounded-full hover:text-white hover:bg-gradient-to-r hover:from-yellow-500/80 hover:to-yellow-700/80 transition-all duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <IconX size={26} /> : <IconMenu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute left-1/2 top-[4.5rem] w-[90%] max-w-sm -translate-x-1/2 rounded-2xl bg-black border border-neutral-700 shadow-lg transform transition-all duration-300",
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <ul className="flex flex-col gap-3 p-4">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-gray-200 rounded-full hover:bg-gradient-to-r hover:from-yellow-500/80 hover:to-yellow-700/80 hover:text-white transition-all duration-200"
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
