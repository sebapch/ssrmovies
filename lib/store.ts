import { configureStore } from '@reduxjs/toolkit';
import favoriteMoviesReducer from './favoriteMoviesSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      favoriteMovies: favoriteMoviesReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];