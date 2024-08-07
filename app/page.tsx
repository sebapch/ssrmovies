import { Suspense } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import { getPopularMovies } from '../lib/tmdb';

export default async function Home() {
  const movies = await getPopularMovies();

  return (
    <>
      <SearchBar />
      <Suspense fallback={<p>Loading movies...</p>}>
        <MovieList movies={movies} />
      </Suspense>
    </>
  );
}