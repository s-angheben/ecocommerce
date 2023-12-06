'use client'

import { useState } from 'react';
import Link from 'next/link'

const Navbar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/images/eco4.png"
            alt="Logo"
            className="h-10"
          />
          <span className="text-2xl font-bold text-white ml-2">Eco-Commerce</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">Home    </Link>
          <Link href="/store" className="text-white hover:text-gray-300">Store   </Link>
          <Link href="/join" className="text-white hover:text-gray-300">Join </Link>
          <Link href="/info" className="text-white hover:text-gray-300">Info </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <Link href="#" className="text-white hover:text-gray-300 py-2">Home    </Link>
            <Link href="#" className="text-white hover:text-gray-300 py-2">About   </Link>
            <Link href="#" className="text-white hover:text-gray-300 py-2">Services</Link>
            <Link href="#" className="text-white hover:text-gray-300 py-2">Contact </Link>
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navbar2;
