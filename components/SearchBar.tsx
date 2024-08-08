'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  initialQuery?: string;
}

export default function SearchBar({ initialQuery = '' }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-center max-w-4xl mx-auto mb-8">
      <button
        onClick={handleBack}
        className="mr-4 px-4 py-2 text-white bg-gray-700 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </button>
      <form onSubmit={handleSearch} className="flex-grow max-w-xl">
        <div className="relative flex items-stretch">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies..."
            className="w-full px-4 py-2 text-gray-800 bg-white border-2 border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          />
          <button
            type="submit"
            className="px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-r-full hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}