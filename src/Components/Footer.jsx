import React, { useState } from "react";
import { FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Email:", email);
  };

  return (
    <footer className="w-full bg-[#0e1826] text-white mt-auto">
      {/* ---------- Top Section ---------- */}
      <div className="w-full flex flex-col md:flex-row flex-wrap items-start justify-between gap-10 md:gap-6 lg:gap-10 px-6 sm:px-10 md:px-16 lg:px-20 py-10 border-b border-gray-700">

        {/* ---------- About ---------- */}
        <div className="w-full sm:w-[45%] md:w-[23%]">
          <img
            src="/public/Logo/Logo.svg"
            alt="Auto Essential SpareParts"
            className="w-[70px] h-[70px] object-contain mb-4 rounded-full"
          />
          <h1 className="text-base sm:text-lg font-light leading-relaxed">
            Your trusted source for premium auto parts and accessories.
          </h1>
        </div>

        {/* ---------- Quick Links ---------- */}
        <div className="w-full sm:w-[45%] md:w-[23%]">
          <h1 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h1>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-base font-light hover:text-yellow-400 transition">Home</a>
            <a href="#" className="text-base font-light hover:text-yellow-400 transition">Shop</a>
            <a href="#" className="text-base font-light hover:text-yellow-400 transition">Brands</a>
            <a href="#" className="text-base font-light hover:text-yellow-400 transition">About</a>
            <a href="#" className="text-base font-light hover:text-yellow-400 transition">Contact Us</a>
          </div>
        </div>

        {/* ---------- Customer Services ---------- */}
        <div className="w-full sm:w-[45%] md:w-[23%]">
          <h1 className="text-lg sm:text-xl font-bold mb-4">Customer Services</h1>
          <div className="flex flex-col gap-2">
            <p className="text-base font-light hover:text-yellow-400 transition cursor-pointer">Shipping Policy</p>
            <p className="text-base font-light hover:text-yellow-400 transition cursor-pointer">Returns & Warranty</p>
            <p className="text-base font-light hover:text-yellow-400 transition cursor-pointer">Track Order</p>
            <p className="text-base font-light hover:text-yellow-400 transition cursor-pointer">Privacy Policy</p>
          </div>
        </div>

        {/* ---------- Newsletter ---------- */}
        <div className="w-full sm:w-[45%] md:w-[23%] flex flex-col gap-4">
          <h1 className="text-lg sm:text-xl font-bold">Newsletter</h1>
          <p className="font-light text-base">
            Subscribe to receive updates and special offers.
          </p>
          <form onSubmit={handleSubmit} className="flex w-full">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 p-2 rounded-l-md border border-gray-600 text-black focus:outline-none text-sm sm:text-base"
              required
            />
            <button
              type="submit"
              className="bg-yellow-600 text-gray-900 font-semibold px-3 sm:px-4 py-2 rounded-r-md hover:bg-yellow-500 transition text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
          <div className="flex items-center gap-5 text-xl mt-2">
            <FaTwitter className="hover:text-yellow-400 transition cursor-pointer" />
            <FaFacebookF className="hover:text-yellow-400 transition cursor-pointer" />
            <FaInstagram className="hover:text-yellow-400 transition cursor-pointer" />
            <FaGoogle className="hover:text-yellow-400 transition cursor-pointer" />
            <FaYoutube className="hover:text-yellow-400 transition cursor-pointer" />
          </div>
        </div>
      </div>

      {/* ---------- Bottom Section ---------- */}
      <div className="flex items-center justify-center py-6 px-4 text-center">
        <h1 className="text-sm sm:text-base text-gray-300">
          © 2024 AutoParts Pro. All rights reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
