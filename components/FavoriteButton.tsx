'use client'

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../lib/store';
import { addFavoriteMovie, removeFavoriteMovie } from '../lib/favoriteMoviesSlice';
import { Movie } from '../types/movie';

interface FavoriteButtonProps {
  movie: Movie;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movie }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state: RootState) => state.favoriteMovies.movies);
  const isFavorite = favoriteMovies.some(m => m.id === movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavoriteMovie(movie.id));
    } else {
      dispatch(addFavoriteMovie(movie));
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={`px-4 py-2 rounded-full text-sm font-semibold ${
        isFavorite ? 'bg-red-500 text-white' : 'bg-gray-700 text-white'
      }`}
    >
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;