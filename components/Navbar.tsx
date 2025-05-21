'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-16 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold text-blue-700 hover:text-blue-900 transition-colors duration-300">
          FlowCare
        </Link>
        <div className="hidden md:flex items-center space-x-6 text-lg font-medium">
          <Link
            href="/products"
            className={`${
              pathname === '/products'
                ? 'text-blue-700 border-b-2 border-blue-700'
                : 'text-gray-700 hover:text-blue-700'
            } pb-1 transition-colors duration-300`}
          >
            Products
          </Link>
          <Link
            href="/cart"
            className={`${
              pathname === '/cart'
                ? 'text-blue-700 border-b-2 border-blue-700'
                : 'text-gray-700 hover:text-blue-700'
            } pb-1 transition-colors duration-300`}
          >
            Cart
          </Link>
          {/* Add more navigation links here */}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
            {isOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white py-2 px-4">
          <Link
            href="/products"
            className={`${
              pathname === '/products'
                ? 'block py-2 text-blue-700 font-medium border-b border-gray-200'
                : 'block py-2 text-gray-700 hover:text-blue-700 font-medium'
            } transition-colors duration-300`}
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            href="/cart"
            className={`${
              pathname === '/cart'
                ? 'block py-2 text-blue-700 font-medium border-b border-gray-200'
                : 'block py-2 text-gray-700 hover:text-blue-700 font-medium'
            } transition-colors duration-300`}
            onClick={toggleMenu}
          >
            Cart
          </Link>
          {/* Add more mobile navigation links here */}
        </div>
      )}
    </div>
  );
}