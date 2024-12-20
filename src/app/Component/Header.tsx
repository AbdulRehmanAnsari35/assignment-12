"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#043873] text-white px-8 py-3 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/Group.png" 
          alt="Whitespace Logo"
          width={100}
          height={40}
          className="h-8 w-auto"
        />
        <span className="ml-2 font-semibold text-lg">whitepace</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link href="#" className="hover:text-green-600 transition duration-200">
          Products
        </Link>
        <Link href="#" className="hover:text-green-600 transition duration-200">
          Solutions
        </Link>
        <Link href="#" className="hover:text-green-600 transition duration-200">
          Resources
        </Link>
        <Link href="#" className="hover:text-green-600 transition duration-200">
          Pricing
        </Link>
      </div>

      {/* Login Button */}
      <div className="hidden md:block">
        <button className="bg-yellow-300 text-blue-800 px-6 py-2 rounded-md font-semibold shadow-md hover:bg-yellow-500 transition duration-300">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#043873] text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link href="#" className="hover:text-green-600 transition duration-200">
            Products
          </Link>
          <Link href="#" className="hover:text-green-600 transition duration-200">
            Solutions
          </Link>
          <Link href="#" className="hover:text-green-600 transition duration-200">
            Resources
          </Link>
          <Link href="#" className="hover:text-green-600 transition duration-200">
            Pricing
          </Link>
          <button className="bg-yellow-300 text-blue-800 px-6 py-2 rounded-md font-semibold shadow-md hover:bg-yellow-500 transition duration-300">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
