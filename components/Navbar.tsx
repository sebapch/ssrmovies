"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-2 sm:p-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link
          href="/"
          className="text-white text-xl sm:text-2xl font-bold transform hover:scale-105 transition duration-300 ease-in-out mb-2 sm:mb-0"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Movie Recs
          </span>
        </Link>
        <div className="flex items-center space-x-2 sm:space-x-4">
          {session?.user ? (
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-2 bg-gray-700 rounded-full p-1 sm:p-2 pr-2 sm:pr-4">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    width={24}
                    height={24}
                    className="rounded-full w-6 h-6 sm:w-8 sm:h-8"
                  />
                ) : (
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-bold">
                      {session.user.name?.charAt(0) || session.user.email?.charAt(0)}
                    </span>
                  </div>
                )}
                <span className="text-white text-xs sm:text-sm truncate max-w-[100px] sm:max-w-[150px]">
                  {session.user.name || session.user.email}
                </span>
              </div>
              <button 
                className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              href="/api/auth/signin"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;