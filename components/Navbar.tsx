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
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-white text-2xl font-bold transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Movie Recommendations
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          {session?.user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-700 rounded-full p-2 pr-4">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {session.user.name?.charAt(0) || session.user.email?.charAt(0)}
                    </span>
                  </div>
                )}
                <span className="text-white text-sm">{session.user.name || session.user.email}</span>
              </div>
              <button 
                className="px-4 py-2 text-sm text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
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