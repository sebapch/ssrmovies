
import { Suspense } from 'react';
import { searchMovies } from '../../lib/tmdb';
import MovieList from '../../components/MovieList';
import SearchBar from '../../components/SearchBar';

export default async function SearchResults({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const query = searchParams.q;
  const movies = await searchMovies(query);

  return (
    <main className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Search Results for "{query}"</h1>
      <SearchBar initialQuery={query} />
      <Suspense fallback={<p>Loading search results...</p>}>
        <MovieList movies={movies} />
      </Suspense>
    </main>
  );
}