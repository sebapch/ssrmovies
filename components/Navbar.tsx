'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Movie Recommendations
        </Link>
        <div>
          {pathname !== '/' && (
            <Link href="/" className="text-white mr-4 hover:text-gray-300">
              Home
            </Link>
          )}
          <button
            onClick={() => window.history.back()}
            className="text-white hover:text-gray-300"
          >
            Back
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;