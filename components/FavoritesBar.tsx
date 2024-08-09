'use client'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../lib/store';
import { removeFavoriteMovie } from '../lib/favoriteMoviesSlice';
import Image from 'next/image';
import Link from 'next/link';

const FavoritesBar: React.FC = () => {
  const favoriteMovies = useSelector((state: RootState) => state.favoriteMovies.movies);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsVisible(favoriteMovies.length > 0);
  }, [favoriteMovies]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg text-black transition-all duration-300 ease-in-out ${isExpanded ? 'h-48' : 'h-16'}`}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-6 w-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">Watch Later ({favoriteMovies.length})</h3>
        <div className={`flex ${isExpanded ? 'overflow-x-auto' : 'overflow-hidden'} space-x-4 ${isExpanded ? 'h-40' : 'h-8'} transition-all duration-300`}>
          {favoriteMovies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 relative">
              <Link href={`/movie/${movie.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  alt={movie.title}
                  width={isExpanded ? 92 : 32}
                  height={isExpanded ? 138 : 48}
                  className="rounded-lg transition-all duration-300 cursor-pointer"
                />
              </Link>
              {isExpanded && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dispatch(removeFavoriteMovie(movie.id));
                  }}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesBar;