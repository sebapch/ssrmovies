import { Suspense } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import { getPopularMovies } from '../lib/tmdb';

export default async function Home() {
  const movies = await getPopularMovies();

  return (
    <main className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Movie Recommendations</h1>
      <SearchBar />
      <Suspense fallback={<p>Loading movies...</p>}>
        <MovieList movies={movies} />
      </Suspense>
    </main>
  );
}