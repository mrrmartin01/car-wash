import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-900 mt-[2%] max-w-2xl rounded-md mx-auto py-5">
      <nav className="flex justify-between items-center-safe gap-5">
        <Link href={"/"}>Spade</Link>
        <ul className="flex">
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
