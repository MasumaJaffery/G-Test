"use client";

import { useState } from "react";
import { FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Bar (Desktop Only) */}
      <div className="bg-white text-sm border-b hidden md:block">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 flex justify-between items-center">
          <div className="text-gray-600">
            📞 <a href="tel:+302120003006" className="text-cyan-600">+30 212 000 3006</a>. Available hours in France: 07:00 to 22:00
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">🇺🇸 English</span>
            <span className="flex items-center gap-1">€ Euro</span>
            <FaSearch className="cursor-pointer" />
            <span className="flex items-center gap-1"><FaUserCircle /> Login - Manage bookings</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#00B9E0] text-white w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 relative">
          {/* Mobile Layout */}
          <div className="flex justify-between items-center md:hidden">
            {/* Left: Logo */}
            <div className="text-2xl font-bold flex items-center">
              <span className="text-white">ferry</span>
              <span className="text-white">engine</span>
              <div className="ml-1 w-3 h-4 bg-yellow-400 clip-triangle" />
            </div>

            {/* Right: User Icon + Toggle */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <FaUserCircle className="text-2xl" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white" />
              </div>
              <button className="text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <IoMdClose /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold flex items-center">
              <span className="text-white">ferry</span>
              <span className="text-white">engine</span>
              <div className="ml-1 w-3 h-4 bg-yellow-400 clip-triangle" />
            </div>

            {/* Desktop Links */}
            <div className="flex gap-6 font-medium">
              <a href="#" className="hover:underline">Destinations</a>
              <a href="#" className="hover:underline">Companies</a>
              <a href="#" className="hover:underline">Routes</a>
              <a href="#" className="hover:underline">Reviews</a>
              <a href="#" className="hover:underline">About us</a>
              <a href="#" className="hover:underline">Support</a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4 bg-white text-black space-y-2 font-medium z-50">
            <a href="#" className="block">Destinations</a>
            <a href="#" className="block">Companies</a>
            <a href="#" className="block">Routes</a>
            <a href="#" className="block">Reviews</a>
            <a href="#" className="block">About us</a>
            <a href="#" className="block">Support</a>
            <div className="flex gap-3 mt-3 text-sm text-black">
              <span className="flex items-center gap-1">🇺🇸 English</span>
              <span className="flex items-center gap-1">€ Euro</span>
              <FaSearch className="cursor-pointer" />
              <span className="flex items-center gap-1"><FaUserCircle /> Login</span>
            </div>
          </div>
        )}
      </div>

      {/* Triangle CSS */}
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
        }
      `}</style>
    </div>
  );
}
