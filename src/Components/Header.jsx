import React from "react";
import SearchBar from "./SearchBar";
import { FaCartShopping, FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <header className="w-full bg-white shadow-md px-4 sm:px-8 md:px-12 py-2 md:py-3 flex items-center justify-between">
      {/* ---------- Left Section ---------- */}
      <div className="flex items-center gap-6 md:gap-10">
        {/* ✅ Logo */}
        <Link to="/">
          <img
            src="/public/Logo/Logo.svg"
            alt="Auto Essential SpareParts"
            className="w-[65px] h-[65px] object-contain rounded-full"
          />
        </Link>

        {/* ✅ Navigation Links */}
        <nav className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8">
          <Link
            to="/"
            className="text-[#0a1826] font-semibold hover:text-blue-900 text-sm md:text-base"
          >
            Home
          </Link>
          <Link
            to="/Shop"
            className="text-[#0a1826] font-semibold hover:text-blue-900 text-sm md:text-base"
          >
            Shop
          </Link>
          <Link
            to="/Brand"
            className="text-[#0a1826] font-semibold hover:text-blue-900 text-sm md:text-base"
          >
            Brand
          </Link>
          <Link
            to="/AboutUs"
            className="text-[#0a1826] font-semibold hover:text-blue-900 text-sm md:text-base"
          >
            About Us
          </Link>
          <Link
            to="/ContactUs"
            className="text-[#0a1826] font-semibold hover:text-blue-900 text-sm md:text-base"
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* ---------- Right Section ---------- */}
      <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 whitespace-nowrap">

        {/* ✅ SearchBar — better width and centering */}
        <div className="hidden sm:block w-[200px] md:w-[260px] lg:w-[300px]">
          <SearchBar />
        </div>

        {/* ✅ Icons aligned & consistent size */}
        <FaCartShopping className="text-[1.8rem] md:text-[2rem] text-[#0a1826] hover:text-blue-900 cursor-pointer" />
        <Link to={currentUser ? "/login" : "/SignUp"}>
          <FaUserLarge className="text-[1.8rem] md:text-[2rem] text-[#0a1826] hover:text-blue-900 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
