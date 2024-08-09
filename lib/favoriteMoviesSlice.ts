import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/movie';

interface FavoriteMoviesState {
  movies: Movie[];
}

const initialState: FavoriteMoviesState = {
  movies: [],
};

const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    addFavoriteMovie: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
    },
    removeFavoriteMovie: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie } = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;