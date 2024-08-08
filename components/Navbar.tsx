'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold transform hover:scale-105 transition duration-300 ease-in-out">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Movie Recommendations
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          {pathname !== '/' && (
            <Link 
              href="/" 
              className="text-white px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
            >
              Home
            </Link>
          )}
          <button
            onClick={() => window.history.back()}
            className="text-white px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;